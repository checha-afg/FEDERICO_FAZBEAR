const db = require('../config/db.config.js');
const Usuario = db.Usuario;
//const moment = require('moment');

exports.create = async (req, res) => {
    let usuario = {};
    //const moment = require('moment');
    console.log('Received request body:', req.body); // Agrega esta línea
    try {
        // Building Empleado object from uploading request's body
        //const empleado = {
            usuario.id_usuario = req.body.id_usuario;
            usuario.id_cliente = req.body.id_cliente;
            usuario.id_empleado = req.body.id_empleado,
            usuario.correo = req.body.correo,
            usuario.contrasenia = req.body.contrasenia,
            usuario.id_tipo_usuario = req.body.id_tipo_usuario
        //};
    
        // Save to Oracle database
        const result = await Usuario.create(usuario);
    
        // Send success message to client
        res.status(200).json({
            message: "Usuario creado exitosamente con el ID_USUARIO = " + result.id,
            usuario: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Fallo al crear el Usuario!",
            error: error.message
        });
    }
}


exports.retrieveAllUsuarios = async (req, res) => {
    try {
        const usuarioInfos = await Usuario.findAll();
        res.status(200).json({
            message: "Successfully retrieved all Usuarios' Infos!",
            usuarios: usuarioInfos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving Usuarios!",
            error: error.message
        });
    }
}

/*exports.getEmpleadoById = async (req, res) => {
    try {
        const empleadoId = req.params.id;
        const empleado = await Empleado.findByPk(empleadoId);
        
        if (!empleado) {
            return res.status(404).json({
                message: "Empleado with id = " + empleadoId + " not found!",
                error: "404"
            });
        }

        res.status(200).json({
            message: "Successfully retrieved Empleado with id = " + empleadoId,
            empleado: empleado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving Empleado with id = " + req.params.id,
            error: error.message
        });
    }
}*/

exports.updateById = async (req, res) => {
    try {
        const usuarioId = req.params.id_usuario;

        // Encontrar el usuario por id
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            return res.status(404).json({
                message: "Usuario con id = " + usuarioId + " no encontrado para actualizar!",
                error: "404"
            });
        }

        // Crear el objeto con los nuevos valores
        const updatedObject = {
            id_usuario: req.body.id_usuario,
            id_cliente: req.body.id_cliente,
            id_empleado: req.body.id_empleado,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            id_tipo_usuario: req.body.id_tipo_usuario
        };

        // Actualizar usuario
        const [updatedRows] = await Usuario.update(updatedObject, {
            where: { id_usuario: usuarioId }
        });

        if (!updatedRows) {
            return res.status(500).json({
                message: "Falló la actualización del usuario con id = " + usuarioId,
                error: "Update failed"
            });
        }

        // Recuperar el usuario actualizado
        const updatedUsuario = await Usuario.findByPk(usuarioId);

        res.status(200).json({
            message: "Usuario actualizado exitosamente con id = " + usuarioId,
            usuario: updatedUsuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error actualizando usuario con id = " + req.params.id_usuario,
            error: error.message
        });
    }
}


exports.deleteById = async (req, res) => {
    try {
        const usuarioId = req.params.id_usuario;
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            return res.status(404).json({
                message: "Usuario with id = " + usuarioId + " does not exist!",
                error: "404"
            });
        }

        await usuario.destroy();
        res.status(200).json({
            message: "Usuario deleted successfully with id = " + usuarioId,
            usuario: usuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Usuario with id = " + req.params.id_usuario,
            error: error.message
        });
    }
}