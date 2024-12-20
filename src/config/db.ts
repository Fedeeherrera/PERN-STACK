import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida en el archivo .env.");
}

const db = new Sequelize(process.env.DATABASE_URL, {
  models: [__dirname + '/../models/**/*.ts'],
});

export default db;
