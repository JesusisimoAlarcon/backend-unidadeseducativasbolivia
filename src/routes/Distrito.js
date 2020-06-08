const controller = require('../controllers/DistritoController');
const express = require('express');
class Distrito {
    constructor() {
        this.distrito = express.Router();
        this.config();
    }
    config() {
        this.distrito.get('/', controller.distritoController.list)
        this.distrito.get('/:departamento', controller.distritoController.listByDepartamento)
    }
}
module.exports = new Distrito().distrito;