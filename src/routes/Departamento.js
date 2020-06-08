const controller = require('../controllers/DepartamentoController');
const express = require('express');
class Departamento {
    constructor() {
        this.departamento = express.Router();
        this.config();
    }
    config() {
        this.departamento.get('/', controller.departamentoController.list)
    }
}
module.exports = new Departamento().departamento;