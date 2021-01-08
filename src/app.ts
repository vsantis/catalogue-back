import * as express from 'express';
import { json } from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import config from './config';
import productApplication from './application/product';
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

app.get('/products', productApplication);

app.get('/products/:text', productApplication);

app.listen(config.port, () => {
  // tslint:disable-next-line: no-console
  console.info(`Server listening on port ${config.port}`);
});
