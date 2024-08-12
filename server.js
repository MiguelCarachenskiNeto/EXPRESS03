const express = require ("express");
const mysql = require ("mysql2");

const app = express ();

app.listen (3000, ()=>{
    console.log("servidor em execução")
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "user_bd_tasks",
    password: "QLOP4TDcQGB2R97Djet7vXYHggatTSZE4",
    database:"nodejs_tasks",
})

connection.connect(error =>{
    if(error){
        console.log("erro n conexão ao MySQL:" +error.message)
        return
    }
    console.log("conexão realizada com sucesso");
})