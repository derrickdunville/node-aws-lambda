import { Sequelize } from 'sequelize';
import pg from 'pg';

export const db = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    port: process.env.DATABASE_PORT,
    dialectModule: pg,
    define: {
      timestamps: false
    }
  }
);
