const router = require('express').Router();
const Producto = require('../models/Productos');

router.get('/get_producto/:codigo', async (req, res) => {
    try {
        let datosProducto = await Producto.get_datos_producto(req.params.codigo);
        res.status(200).send(datosProducto);
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