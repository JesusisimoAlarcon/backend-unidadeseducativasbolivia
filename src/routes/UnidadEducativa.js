const controller = require('../controllers/UnidadEducativaController');
const express = require('express');
class UnidadEducativa {
    constructor() {
        this.unidadeducativa = express.Router();
        this.config();
    }
    config() {
        this.unidadeducativa.get('/', controller.unidadeducativacontroller.list)
        this.unidadeducativa.get('/distrito/:distrito', controller.unidadeducativacontroller.listByDistrito)
        this.unidadeducativa.get('/departamento/:departamento', controller.unidadeducativacontroller.listByDepartamento)
        this.unidadeducativa.get('/todas', (req, res) => {
            res.send('respondiendo')
        })
        this.unidadeducativa.get('/imprimir', (req, res) => {
            res.json({ mensaje: 'hola jesus' })
        })
        this.unidadeducativa.get('/status', (req, res) => {
            res.status(404);
        })
    }
}
module.exports = new UnidadEducativa().unidadeducativa;