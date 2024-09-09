module.exports = (sequelize, Sequelize) => {
	const Usuario = sequelize.define('usuario', {	
	  id_usuario: {
	    type: Sequelize.INTEGER,  // Cambiado de Sequelize.NUMBER a Sequelize.INTEGER
	    //autoIncrement: true,
            primaryKey: true,
            field: 'ID_USUARIO'
        },
	  id_cliente: {
	    type: Sequelize.INTEGER,  // Cambiado de Sequelize.NUMBER a Sequelize.BIGINT
            field: 'ID_CLIENTE'
	       },
	  id_empleado: {
	    type: Sequelize.INTEGER,
            field: 'ID_EMPLEADO'
  	        },
	  correo: {
	    type: Sequelize.STRING,
            field: 'CORREO'
	           },
	  contrasenia: {
	    type: Sequelize.STRING,
            field: 'CONTRASENIA'
              },
      id_tipo_usuario: {
            type: Sequelize.INTEGER,
            field: 'ID_TIPO_USUARIO'
               }
	}, {
        tableName: 'USUARIO',  // Mueve esto fuera de la definición de campos
        timestamps: false       // Desactiva los timestamps si tu tabla no los usa
    });
	
	return Usuario;
}