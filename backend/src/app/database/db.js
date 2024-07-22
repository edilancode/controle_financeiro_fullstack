import mysql from "mysql";

export const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "edifry236",
    database: "db_trans",
  }
);

db.connect();

export default db;

