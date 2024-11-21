import { log } from "console";
import "dotenv/config";
import fs from "fs";
import pkg from "pg";
const { Client } = pkg;

export const role = {
  student: "student",
  teacher: "teacher",
  admin: "admin",
};

const database = process.env.DB_DATABASE || "postgres";

const defClient = new Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "95689568",
  database: "postgres",
});

export const client = new Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "95689568",
  database,
});

function querySQL(list = fs.readdirSync("sql")) {
  const name = list.shift();
  
  log("Настройка базы данных:", name);

  const sql = fs.readFileSync("sql/" + name).toString();

  client.query(sql, (err, result) => {
    if (err) throw err;
    if (list.length) {
      querySQL(list);
    }
  });
}

defClient.connect((err) => {
  if (err) throw err;
  console.log("Соединение установленно:", defClient.database);

  defClient.query(`SELECT datname FROM pg_database;`, (err, result) => {
    if (err) console.log(err);
    if (!result.rows.map((el) => el.datname).includes(database)) {
      defClient.query("CREATE DATABASE " + database, (err) => {
        if (err) throw err;
        console.log("База данных создана");
        defClient.end((e) => {
          if (e) throw e;
          console.log("Соединение закрыто", defClient.database);
          client.connect((e) => {
            if (e) throw e;
            console.log("Соединение установленно:", client.database);
            querySQL()
          });
        });
      });
    } else {
      defClient.end(() => {
        console.log("Соединение закрыто", defClient.database);
        client.connect((e) => {
          if (e) throw e;
          console.log("Соединение установленно:", client.database);
            querySQL()
        });
      });
    }
  });
});
