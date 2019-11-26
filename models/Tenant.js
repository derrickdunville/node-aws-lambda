import { INTEGER, STRING } from 'sequelize';
const Sequelize = require('sequelize');
import { sequelize } from '../db';

export class Tenant extends Sequelize.Model {}
Tenant.init(
    {
        // attributes
        id: {
            type: INTEGER,
            primaryKey: true
        },
        name: {
            type: STRING
            // allowNull defaults to true
        }
    }, {
        //options
        sequelize,
        tableName: 'tenant',
        modelName: 'tenant',
        timestamps: false
    }
);
