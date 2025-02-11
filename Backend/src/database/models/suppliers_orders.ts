import * as database from "./index";
import { DataTypes, Model } from "sequelize";

class SupplierOrders extends Model {
  public supplier_orders_id!: number;
  public suppliers_id!: number;
  public products_id!: number;
  public quantity!: number;
  public unit_price!: number;
  public status!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SupplierOrders.init({
  supplier_orders_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  suppliers_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Suppliers',
      key: 'suppliers_id'
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
  unit_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  status: {
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
  modelName: 'suppliers_ordens',
  timestamps: true,
  indexes: [
    {
      fields: ['suppliers_id']
    },
    {
      fields: ['products_id']
    },
    {
      fields: ['suppliers_id', 'products_id'] 
    }
  ]
});

export default SupplierOrders;