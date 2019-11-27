import {Sequelize, INTEGER, STRING} from 'sequelize';
import {db} from '../db';

export class Tenant extends Sequelize.Model {
}

Tenant.init(
  {
    // attributes
    id: {
      type: INTEGER,
      primaryKey: true
    },
    name: {
      type: STRING,
      //  allowNull defaults to true
      allowNull: false
    }
  }, {
    // options
    sequelize: db,
    tableName: 'tenant',
    modelName: 'tenant'
  }
);
