import colors from 'colors'
import express from "express";
import router from "./router";
import db from './config/db'

//conectar a base de datos

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.bgGreen.white.bold('Conexion exitosa a la Base de Datos'));

    
  } catch (error) {
    console.log(error);
    console.log(colors.red.bold('Hubo un error al intenar conectar la Base de Datos'));
    
  }
}

connectDB()

//Instancia de Express
const server = express()

//Leer datos
server.use(express.json())

server.use('/api/products', router)

export default server