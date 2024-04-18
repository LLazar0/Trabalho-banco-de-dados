import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha-d0-banco",
    database: "nome-da-tabela"
})