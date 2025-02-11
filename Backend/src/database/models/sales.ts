import * as database from "./index";
import { DataTypes, Model } from "sequelize";

class Sales extends Model {
  public sales_id!: number;
  public customers_id!: number;
  public products_id!: number;
  public quantity!: number;
  public total_price!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Sales.init({
  sales_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  customers_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Customers',
      key: 'customers_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  products_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'products_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
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
  modelName: 'sales',
  timestamps: true,
  indexes: [
    {
      fields: ['customers_id']
    },
    {
      fields: ['products_id']
    },
    {
      fields: ['customers_id', 'products_id']
    }
  ]
});

export default Sales;