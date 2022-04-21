import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

/**
 *  MODEL : Personas
 *  Fields: id, nombre, dni, email, telefono, fitosanitario, tipo, nif, ropo, carnet
 */

export const Personas = sequelize.define("personas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fitosanitario: {
    type: DataTypes.BOOLEAN,
    defaultVale: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nif: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ropo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carnet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/**
 *  MODEL : Maquinaria
 *  Fields: id, nombre, tipo, matricula, propiedad, mantenimiento
 */

export const Maquinaria = sequelize.define("maquinaria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  matricula: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  propiedad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mantenimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/**
 *  MODEL : Productos
 *  Fields: id, nombre, tipo, concentracion, cantidad, almacen
 */

export const Productos = sequelize.define("productos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concentracion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  almacen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/**
 *  MODEL : Almacen
 *  Fields: id, nombre, direccion
 */

export const Almacen = sequelize.define("almacen", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/**
 *  MODEL : Parcelas
 *  Fields: id, nombre, superficie, cultivos, grupos, recintos
 */

export const Parcelas = sequelize.define("parcelas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  superficie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cultivos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grupos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recintos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/**
 * MODEL : Datos
 * Fields: id, nombre, apellido1, apellido2, razonsocial, dni, direccion, poblacion, telefono, correo, localizacion, codigoexplotacion, carnet
 *
 **/

export const Datos = sequelize.define("datos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  razonsocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poblacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localizacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoexplotacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carnet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
