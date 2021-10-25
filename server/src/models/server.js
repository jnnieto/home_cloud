const express = require('express');
const expressFileUpload = require('express-fileupload');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; 

        this.middlewares();

        this.routes();

    }

    middlewares() {

        this.app.use(express.static('src/public'));

        // Lectura y parseo del body
        this.app.use(express.json());

    }

    routes() {

    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT);
        });
    }

}

module.exports = Server;