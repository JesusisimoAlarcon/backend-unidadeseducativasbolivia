const pool = require('../database');
class UnidadEducativaController {
    async list(req, res) {
        const resp = await pool.query(`SELECT * FROM colegios.unidades_educativas`);
        res.json(resp);
    }

    async listByDistrito(req, res) {
        const resp = await pool.query(`SELECT * FROM colegios.unidades_educativas WHERE distrito = ?`, [req.params.distrito]);
        res.json(resp);
    }

    async listByDepartamento(req, res) {
        const resp = await pool.query(`SELECT * FROM colegios.unidades_educativas WHERE departamento = ?`, [req.params.departamento]);
        res.json(resp);
    }
}
exports.unidadeducativacontroller = new UnidadEducativaController();