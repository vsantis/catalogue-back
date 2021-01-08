import { Model, BuildOptions, Sequelize, DataTypes } from 'sequelize';
import ProductsAttributes from '../domain/objects/Product';
import config from '../config';

interface ProductsModel extends Model<ProductsAttributes>, ProductsAttributes {}

type ProductsStatic = typeof Model &
  (new (values?: object, options?: BuildOptions) => ProductsModel);

export const productsFactory = (sequelize: Sequelize): ProductsStatic =>
  sequelize.define(
    config.postgres.productTable,
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      brand: DataTypes.TEXT,
      image: DataTypes.TEXT,
      name: DataTypes.TEXT,
      description: DataTypes.TEXT,
      price: DataTypes.NUMBER,
    },
    { freezeTableName: true, timestamps: false }
  ) as ProductsStatic;
