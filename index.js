const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/usuario", (request, response) => {
    const usuario = {nombre: "Patricia", apellido: "Rivas"};
    response.json(usuario);
} );

app.post("/agregarUsuario", (request, response) =>{
    const usuario = request.body;
    usuario.nombre = '${usuario.nombre} modificando';
    usuario.telefon = "656-318-33-07";
    express.response.json(usuario);
})
const puerto = 8080;
console.log('Hay conexion en el puerto ${8080}');
app.listen(puerto);
