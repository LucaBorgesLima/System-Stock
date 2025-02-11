import * as database from "./index";
import { DataTypes, Model } from "sequelize";

class Customers extends Model {
  public customers_id!: number;
  public name!: string;
  public email!: string;
  public contact!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Customers.init({
  customers_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize: database.sequelize,
  modelName: 'customers',
  timestamps: true,
  indexes: [
    {
      fields: ['name']
    },
    {
      fields: ['email']
    }
  ]
});

export default Customers;