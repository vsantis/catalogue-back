import { Op } from 'sequelize';
import Product from '../domain/objects/Product';
import ProductRepository from '../domain/repositories/productRepository';
import { Products as ProductsModel } from '../models';

export default class ProductPg implements ProductRepository {
  public async findById(id: number): Promise<Product[]> {
    try {
      const result = await ProductsModel.findOne({ where: { id } });
      return result ? [result] : [];
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findByString(str: string): Promise<Product[]> {
    try {
      const result = await ProductsModel.findAll({
        where: {
          [Op.or]: [
            { brand: { [Op.substring]: str } },
            { name: { [Op.substring]: str } },
            { description: { [Op.substring]: str } },
          ],
        },
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findAll(): Promise<Product[]> {
    try {
      const result = await ProductsModel.findAll();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async createProduct(productData: Product): Promise<any> {
    try {
      const result = await ProductsModel.create(productData);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateProduct(id: number, productData: Product): Promise<any> {
    try {
      const result = await ProductsModel.update(productData, { where: { id } });
      return result[0] === 1;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteProduct(id: number): Promise<boolean> {
    try {
      const result = await ProductsModel.destroy({ where: { id } });
      return result === 1;
    } catch (error) {
      throw new Error(error);
    }
  }
}
