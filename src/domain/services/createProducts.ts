import Product from '../objects/Product';
import ProductRepository from '../repositories/productRepository';

const createProducts = (productRepository: ProductRepository) => async (productData: Product) => {
  try {
    const result = await productRepository.createProduct(productData);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default createProducts;
