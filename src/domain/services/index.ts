import findProducts from './findProducts';
import ProductPg from '../../infrastructure/ProductPg';

const productRepository = new ProductPg();

export default findProducts(productRepository);
