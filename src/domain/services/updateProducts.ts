import Product from '../objects/Product';
import ProductRepository from '../repositories/productRepository';

const updateProducts = (productRepository: ProductRepository) => async (
  id: number,
  productData: Product
) => {
  try {
    const result = await productRepository.updateProduct(id, productData);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProducts;
