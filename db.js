// import Sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import pg from 'pg';

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'postgres',
  {
    host: 'database-2.cmoyznpl1emx.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    port: '5432',
    dialectModule: pg
  }
);
