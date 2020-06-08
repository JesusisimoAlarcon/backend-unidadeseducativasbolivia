const express = require('express');
const cors = require('cors');
class Servidor {

    constructor() {
        this.app = express();
        this.middlewares();
        this.rutas();
        this.iniciarServidor();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    rutas() {
        this.app.use('/departamento', require('./routes/Departamento'))
        this.app.use('/distrito', require('./routes/Distrito'))
        this.app.use('/unidadeducativa', require('./routes/UnidadEducativa'))
    }

    iniciarServidor() {
        this.app.listen(4560, () => {
            console.log('servidor ejecutandose en el puerto 4560');
        })
    }
}
new Servidor();