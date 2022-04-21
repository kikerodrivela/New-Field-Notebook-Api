import Sequelize from "sequelize";

const database = "field-notebook";
const password = "tycgis";

const user = "postgres";
const host = "localhost";

const port = "5432";

export const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgres",
  port,
  logging: false,
});
