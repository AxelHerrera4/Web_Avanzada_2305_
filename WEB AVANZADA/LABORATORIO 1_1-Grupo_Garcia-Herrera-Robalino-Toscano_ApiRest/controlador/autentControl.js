const Usuario=require('../modelo/usuario');
const jwt=require('jsonwebtoken');
//Registrar un nuevo usuario
exports.registrarUsuario=async(req,res)=>{
    const{nombreusuario,email,contrasenia}=req.body;
    try{
        // Verificar si el usuario o el correo electrónico ya existen
        const usuarioExistente=await Usuario.findOne({email});

        if(usuarioExistente){
            return res.status(400).json({message:'El usuario ya existe'});
        }
        //Crear y guardar el nuevo usuario
        const usuario =new Usuario({
            nombreusuario,
            email,
            contrasenia
        });
        await usuario.save();
        res.status(201).json({message: 'Usario registrado exitosamente'});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error en el servidor'});
    }
};
//Iniciar sesión 
exports.loginUsuario=async(req,res)=>{
    const {email,contrasenia}=req.body;
    try{
        // Buscar al usuario por correo electrónico
        const usuario=await Usuario.findOne({email});
        if(!usuario){
            return res.status(401).json({message:'Credenciales no validas'});
        }
        // Comparar la contraseña
        const esIgual = await usuario.matchPassword(contrasenia);
        if (!esIgual) {
        return res.status(401).json({ message: 'Credenciales no válidas' });
        }
         // Crear y firmar el JWT
    const token = jwt.sign(
        { userId: usuario._id, username: usuario.username },
        'claveSecreta', 
        { expiresIn: '1h' }
      );
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token,
      });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
