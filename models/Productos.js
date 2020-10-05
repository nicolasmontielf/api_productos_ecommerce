const connection = require('../db.js');
const formatResponse = require('../util.js');

const get_datos_producto =  (codigo) => {
    let query = 'SELECT rubro, familia, linea, marca, producto, cod_articulo, visible, destacado, top, empresa, genero, precio_usd, precio, descuento, sale FROM productos WHERE id = ? LIMIT 1';

    return new Promise( (resolve, reject) => {
        connection.query(query, [codigo], async (err, result) => {
            if (err) {
                return reject(formatResponse(500, "Ha ocurrido un error al conectar con la base de datos."));
            }

            if (result.length) {
                return resolve(formatResponse(200, result));
            } else {
                return resolve(formatResponse(204, "No se encuentra el producto especificado."));
            }

        });
    });
}

module.exports =  {get_datos_producto};