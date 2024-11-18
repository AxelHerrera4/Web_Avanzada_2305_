const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
//Definir el esquema de usuario
const EsquemaUsuario =new mongoose.Schema({
    nombreusuario:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contrasenia:{
        type:String,
        required:true,
    },
});
//Cifrar la contraseña antes de guardar
EsquemaUsuario.pre('save',async function(next){
    if(!this.isModified('contrasenia'))return next();
    this.contrasenia=await bcrypt.hash(this.contrasenia,10);
    next();
});

//Comparar la contraseña ingresada con la almacenada
EsquemaUsuario.methods.matchPassword=async function(ContraseniaCompleta){
    return await bcrypt.compare(ContraseniaCompleta,this.contrasenia);
};

module.exports=mongoose.model('User',EsquemaUsuario);