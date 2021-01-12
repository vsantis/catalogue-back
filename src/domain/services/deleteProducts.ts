import Product from '../objects/Product';
import ProductRepository from '../repositories/productRepository';

const updateProducts = (productRepository: ProductRepository) => async (id: number) => {
  try {
    const result = await productRepository.deleteProduct(id);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProducts;
