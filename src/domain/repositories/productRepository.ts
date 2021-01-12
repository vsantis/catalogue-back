import Product from '../objects/Product';

export default interface ProductRepository {
  findById(id: number): Promise<Product[]>;
  findByString(str: string): Promise<Product[]>;
  findAll(): Promise<Product[]>;
  createProduct(productData: Product): Promise<Product>;
  updateProduct(id: number, productData: Product): Promise<any>;
  deleteProduct(id: number): Promise<boolean>;
}
