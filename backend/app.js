'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var cors = require('cors')

var app=express();
var tienda_routes=require('./routes/tienda');
//todo que lo que llega y se envia se convuerta en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
//configuracion de cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With,Content-Type,Accept, Access-Control-Allow,Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});
//rutas
/*
app.get('/',(req,res)=>{
    res.status(201).send(
        "<h1>Hola mundo</h1>"
    );
})*/
app.use('/',tienda_routes);

module.exports=app;