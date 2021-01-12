import { Sequelize } from 'sequelize';
import config from '../config';
import { productsFactory } from './Products';

const { postgres: postgresConfig } = config;

export const sequelize = new Sequelize(
  postgresConfig.database,
  postgresConfig.username,
  postgresConfig.password,
  {
    host: postgresConfig.host,
    port: postgresConfig.port,
    dialect: postgresConfig.dialect,
    // tslint:disable-next-line: no-console
    logging: (sql) => console.debug(sql),
    query: { raw: true },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    timezone: config.timezone,
    define: { schema: postgresConfig.defaultSchema },
    ssl: true,
  }
);

export const Products = productsFactory(sequelize);
