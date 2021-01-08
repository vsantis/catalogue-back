import Product from '../objects/Product';
import ProductRepository from '../repositories/productRepository';

const checkPalindrome = (text: string): boolean => {
  const reversedText = text.split('').reverse().join('');

  return text === reversedText;
};

const addDiscount = (discount: number, products: Product[]) =>
  products.map((product) => ({
    ...product,
    price: (product.price - product.price * (discount / 100)).toString(),
  }));

const findProduct = (productRepository: ProductRepository) => async (text?: string) => {
  try {
    if (!text) {
      const allProducts = await productRepository.findAll();
      return allProducts;
    }

    if (!isNaN(Number(text))) {
      const oneProduct = productRepository.findById(Number(text));
      return oneProduct;
    }

    const isPalindrome = checkPalindrome(text);

    const products = await productRepository.findByString(text);

    return isPalindrome ? addDiscount(20, products) : products;
  } catch (error) {
    throw new Error(error);
  }
};

export default findProduct;
