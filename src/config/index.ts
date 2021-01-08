import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

export default {
  postgres: {
    host: process.env.PG_HOST,
    port: 5432,
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    productTable: process.env.PG_PRODUCTS_TABLE,
    dialect: 'postgres' as Dialect,
    defaultSchema: 'public',
  },
  timezone: 'America/Santiago',
  port: 3001,
};
