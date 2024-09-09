let express = require('express');
let router = express.Router();
 
const usuario = require('../controllers/controller.usuario.js');

router.post('/usuario/create', usuario.create);
router.get('/usuario/all', usuario.retrieveAllUsuarios);
//router.get('/usuario/onebyid/:id', usuario.getUsuarioById);
router.put('/usuario/update/:id_usuario', usuario.updateById);
router.delete('/usuario/delete/:id_usuario', usuario.deleteById);

router.get('/test', (req, res) => {
    res.send('Ruta de prueba funcionando');
});


module.exports = router;