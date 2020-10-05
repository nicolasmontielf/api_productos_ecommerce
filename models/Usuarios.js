const connection = require('../db.js');
const formatResponse = require('../util.js');

const get_datos_usuarios =  (identificador, dato) => {

    let query = `SELECT id, email, first_name, last_name, created, ci, celular FROM fb_login_users WHERE ${identificador} = ? LIMIT 1`;

    return new Promise( (resolve, reject) => {
        connection.query(query, [dato], async (err, result) => {
            if (err) {
                return reject(formatResponse(500, "Ha ocurrido un error al conectar con la base de datos."));
            }

            if (result.length) {
                return resolve(formatResponse(200, result));
            } else {
                return resolve(formatResponse(204, "No se encuentra el usuario especificado."));
            }
        });
    });
}

module.exports =  {get_datos_usuarios};
