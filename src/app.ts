import * as express from 'express';
import { json } from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import config from './config';
import {
  findProductsApplication,
  createProductsApplication,
  updateProductsApplications,
  deleteProductsApplications,
} from './application/product';
import requestLogger from './middleware/requestLogger';

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(requestLogger());

app.get('/status', (req, res) => {
  res.status(200).end();
});

app.head('/status', (req, res) => {
  res.status(200).end();
});

const pathName = 'products';

app.get(`/${pathName}`, findProductsApplication);

app.get(`/${pathName}/:text`, findProductsApplication);

app.post(`/${pathName}`, createProductsApplication);

app.put(`/${pathName}/:id`, updateProductsApplications);

app.delete(`/${pathName}/:id`, deleteProductsApplications);

app.listen(config.port, () => {
  // tslint:disable-next-line: no-console
  console.info(`Server listening on port ${config.port}`);
});
