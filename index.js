// Exportamos lo que necesitamos
require('dotenv').config();
const express = require('express');
const app = express();
const rutasProductos = require('./routes/productos.js');
const rutasUsuarios = require('./routes/users.js');

// Configuramos nuestro server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuramos las rutas
app.use('/api/', rutasProductos);
app.use('/api/', rutasUsuarios);

// Iniciamos nuestro server
app.listen(process.env.SV_PORT, () => {
    console.log('El servidor está corriendo');
});