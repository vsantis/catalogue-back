import findProductsService from './findProducts';
import createProductsService from './createProducts';
import updateProductsService from './updateProducts';
import deleteProductsService from './deleteProducts';
import ProductPg from '../../infrastructure/ProductPg';

const productRepository = new ProductPg();

export const findProducts = findProductsService(productRepository);
export const createProducts = createProductsService(productRepository);
export const updateProducts = updateProductsService(productRepository);
export const deleteProducts = deleteProductsService(productRepository);
