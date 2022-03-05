'use strict'

var Producto = require("../models/producto");

var controller={
  
    home:function(req,res){
        return res.status(201).send(
           "<h1>Hola Henry Prueba de conexión</h1>"
        );
    },
    saveProducto:function(req,res){
        var producto=new Producto();
        var params=req.body;

        producto.imagen=params.imagen;
        producto.titulo=params.titulo;
        producto.precio=params.precio;

        /*producto.color=params.color;
        producto.matricula=params.matricula;
        producto.anio=params.anio;
        producto.precio=params.precio;*/
        
        
        producto.save((err,productoStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});
            if(!productoStored) return res.status(404).send({message:'No se ha guardado el producto'});
            return res.status(200).send({producto:productoStored});
        });
    },
    getProductos:function(req,res){
        Producto.find({}).sort().exec((err,productos)=>{
            if(err) return res.status(500).send({message:'Error al recuperar los datos'});
            if(!productos) return res.status(404).send({message:'No hay productos para mostrar'});
            return res.status(200).send({productos});
        })
    },
    getProducto:function(req,res){
        var productoId=req.params.id;
        if(productoId==null) return res.status(404).send({message:'El producto no existe'});
        Producto.findById(productoId,(err,producto)=>{
            if(err) return res.status(500).send({message:'Error al recuperar los datos'});
            if(!producto) return res.status(404).send({message:'El producto no existe'});
            return res.status(200).send({producto});
        })
    },
    deleteProducto:function(req,res){
        var productoId=req.params.id;
        Producto.findByIdAndRemove(productoId,(err,productoRemoved)=>{
            if(err) return res.status(500).send({message:'Error al eliminar los datos'});
            if(!productoRemoved) return res.status(404).send({message:'No se puede eliminar el producto'});
            return res.status(200).send({producto:productoRemoved});
        })
    },
    updateProducto:function(req,res){
        var ProductoId=req.params.id;
        var update=req.body;
        Producto.findByIdAndUpdate(ProductoId,update,{new:true},(err,productoUpdate)=>{
            if(err) return res.status(500).send({message:'Error al actualizar los datos'});
            if(!productoUpdate) return res.status(404).send({message:'El producto no existe para actualizar'});
            return res.status(200).send({producto:productoUpdate});
        })
    },
    uploadImagen:function(req,res){
        var productoId=req.params.id;
        var fileName="Image no subida";
        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){
                Producto.findByIdAndUpdate(productoId,{imagen:fileName},{new:true},(err,productoUpdated)=>{
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!productoUpdated) return res.status(404).send({message:'El producto no existe y no se subio la imagen'});
                    return res.status(200).send({producto:productoUpdated});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension del archivo no es valida'});
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImagen:function(req,res){
        var file=req.params.imagen;
        var path_file='./uploads/'+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({message:'No existe la imagen'});
            }
        });
    }
}
module.exports=controller;