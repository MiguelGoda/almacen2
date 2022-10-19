import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'localhost',
  port: '8080',
  user: 'root',
  password: 'M@gmolina',
  database: 'almacen'
})

