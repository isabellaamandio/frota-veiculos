import { Router } from "express";
import { veiculoService } from "../service/veiculos.services.js";

export const veiculoRouter = Router()

veiculoRouter.get ("/", async (req,res) =>{
    const veiculos = await veiculoService.getAll();
    return res.json (veiculos);
});

veiculoRouter.post("/", async (req,res) =>{

    const veiculo = await veiculoService.create(req.body);
    return res.status (201).json(veiculo);
});