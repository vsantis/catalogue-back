import Product from '../objects/Product';

export default interface ProductRepository {
  findById(id: number): Promise<Product[]>;
  findByString(str: string): Promise<Product[]>;
  // findByBrand(brand: string): Promise<Product[]>;
  // findByDescription(description: string): Promise<Product[]>;
  findAll(): Promise<Product[]>;
}
