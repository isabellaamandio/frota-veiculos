import { pool } from "../config/db.js";

class VeiculoService{
    async getAll (){
        const res = await pool.query ("SELECT * FROM veiculos");
        return res.rows;
    }
    async create(dados){
        const res = await pool.query ("INSERT INTO veiculos (modelo, marca, ano, placa) values ($1, $2, $3, $4) RETURNING*", [dados.modelo,dados.marca, dados.ano, dados.placa]);
        return res.rows[0]
    }
}

export const veiculoService = new VeiculoService()