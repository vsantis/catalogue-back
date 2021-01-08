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

  // public async findByBrand(brand: string): Promise<Product[]> {
  //   try {
  //     const result = await ProductsModel.findAll({ where: { brand: { [Op.substring]: brand } } });
  //     return result;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  // public async findByDescription(description: string): Promise<Product[]> {
  //   try {
  //     const result = await ProductsModel.findAll({
  //       where: { description: { [Op.substring]: description } },
  //     });
  //     return result;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  public async findAll(): Promise<Product[]> {
    try {
      const result = await ProductsModel.findAll();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
