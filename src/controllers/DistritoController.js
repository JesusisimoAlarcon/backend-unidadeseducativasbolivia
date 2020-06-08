const pool = require('../database');
class DistritoController {
    async list(req, res) {
        const resp = await pool.query(`SELECT distrito, departamento, count(*) as unidadeseducativas FROM unidades_educativas group by distrito`);
        res.json(resp);
    }

    async listByDepartamento(req, res) {
        const resp = await pool.query(`SELECT distrito, departamento, count(*) as unidadeseducativas FROM colegios.unidades_educativas where departamento = ? group by distrito `, [req.params.departamento]);
        res.json(resp);
    }
}
exports.distritoController = new DistritoController();