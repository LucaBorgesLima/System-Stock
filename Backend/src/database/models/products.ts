import * as database from "./index";
import { DataTypes, Model } from "sequelize";


class Products extends Model {
  public products_id!: number;
  public name!: string;
  public price!: number;
  public quantity_in_stock!: number;
  public category!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Products.init({
  products_id: {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0
    }
  },
  quantity_in_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0
    }
  },
  category: {
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
  modelName: 'products',
  timestamps: true,
  indexes: [
    {
      fields: ['name']
    },
    {
      fields: ['category']
    }
  ]
});

export default Products;