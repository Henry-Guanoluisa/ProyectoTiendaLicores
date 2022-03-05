'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


 var ProductoSchema=Schema({
     /*fabricante:String,
     modelo:String,
     color:String,
     matricula:String,
     anio:Number,
     precio:Number,
     imagen:String*/

     imagen:String,
     titulo:String,
     precio:String
 });
 module.exports=mongoose.model('producto',ProductoSchema);
 //moongoose toma el 1er parametro lo pone en minuscular y en plural
 //auto se guarde en la bdd