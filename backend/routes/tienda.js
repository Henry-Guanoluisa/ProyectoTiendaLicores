'use strict'
var express=require('express');
var TiendaController=require('../controllers/tienda');
var router=express.Router();
var multipart=require('connect-multiparty');
var multiPartMiddleware=multipart({uploadDir:'./uploads'});

//pagina de inicio
router.get('/home',TiendaController.home);
//guardar informacion de producto
router.post('/guardar-producto',TiendaController.saveProducto);
//ver informacion producto
router.get('/productos',TiendaController.getProductos);
//obtener datos de un producto
router.get('/producto/:id',TiendaController.getProducto);
//eliminar producto
router.delete('/producto/:id',TiendaController.deleteProducto);
//actualizar producto
router.put('/producto/:id',TiendaController.updateProducto);
//agregar imagenes
router.post('/subir-imagen/:id',multiPartMiddleware,TiendaController.uploadImagen);
//recuperar imagenes
router.get('/get-imagen/:imagen',TiendaController.getImagen);
module.exports=router;