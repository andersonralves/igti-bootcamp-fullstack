import express from 'express';
const router = express.Router();
import { promises } from 'fs';
const { readFile, writeFile} = promises;

import { inserirLancamento } from "../controllers/lancamentosController.js";

router.post("/receita", async (req, res) => {
    try {
        let lancamento = req.body;

        lancamento = await inserirLancamento(lancamento);

        res.send(lancamento);
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
});

router.post("/despesa", async (req, res) => {
    try {
        let lancamento = req.body;
    
        lancamento = await inserirLancamento(lancamento, "D");

        res.send(lancamento);
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message })
    }
});

export default router;