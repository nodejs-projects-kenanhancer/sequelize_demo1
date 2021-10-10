import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/sequelizeConnection';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public firstName!: string
  public lastName!: string
  public email!: string

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  // paranoid: true
});
