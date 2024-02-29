import mysql from "mysql";

export const db = mysql.createConnection(
  {
    host: "localhost",
    user: "",
    password: "",
    database: "db_trans",
  }
);

db.connect();

export default db;

