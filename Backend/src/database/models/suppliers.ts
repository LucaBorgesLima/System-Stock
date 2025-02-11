import * as database from "./index";
import { DataTypes, Model } from "sequelize";

class Suppliers extends Model {
  public suppliers_id!: number;
  public name!: string;
  public cnpj!: string;
  public contact!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Suppliers.init({
  suppliers_id: {
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
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      is: /^\d{14}$/ // Validação para CNPJ com 14 dígitos
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
  modelName: 'suppliers',
  timestamps: true,
  indexes: [
    {
      fields: ['name']
    },
    {
      fields: ['cnpj']
    }
  ]
});

export default Suppliers;