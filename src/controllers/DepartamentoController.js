const pool = require('../database');
class DepartamentoController {
    async list(req, res) {
        const resp = await pool.query(`SELECT departamento, count(distinct(distrito)) as distritos, count(*)  as unidades FROM colegios.unidades_educativas group by departamento`);
        res.json(resp);
    }
    getOne(req, res) {
        pool.query(`SELECT distinct(departamento) FROM colegios.unidades_educativas`)
    }
    create() {

    }
    update() {

    }
    delete() {

    }
}
exports.departamentoController = new DepartamentoController();