const router = require('express').Router();
const Usuario = require('../models/Usuarios');

router.get('/get_user/:identificador/:dato', async (req, res) => {
    const identificadores = ['email', 'ci', 'id'];

    if (!identificadores.includes(req.params.identificador)) {
        res.status(500)
            .send({
                "status": 500,
                "data": "Esta ruta no existe."
            });
        return;
    }

    try {
        let datosUser = await Usuario.get_datos_usuarios(req.params.identificador, req.params.dato);
        res.status(200).send(datosUser);
    } catch (e) {
        console.log(e);
        res.status(500)
            .send({
                "status": 500,
                "data": "Ha ocurrido un error inesperado."
            });
    }
    
});

module.exports = router;