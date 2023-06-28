import NextAuth from "next-auth";
import SequelizeAdapter from "@auth/sequelize-adapter";
import { Sequelize } from "sequelize";
import databaseConfig from "../../../backend/config/database.config";
import  Database  from "../../../backend/models/index"



const env = "local" || "development";
const config = {
  ...databaseConfig[env],
};
// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  config
);

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/configuration/auth-config
export default NextAuth({
  // https://authjs.dev/reference/providers/
  providers: [
  
  ],
  adapter: SequelizeAdapter(sequelize, Database()),
});
