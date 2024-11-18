const mongoose=require('mongoose');
const conexionDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/authdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          Console.log('MongoDB conectado');

    }catch(error){
        console.log('Error al conectar a la base de datos');
        console.log(error);
    }

};

module.exports = conexionDB;