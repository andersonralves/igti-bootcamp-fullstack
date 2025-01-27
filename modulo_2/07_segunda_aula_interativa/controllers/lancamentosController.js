import { promises } from 'fs';
const { readFile, writeFile} = promises;

async function inserirLancamento(lancamento, tipo) {
    const data = await readFile(global.fileName);
    const json = JSON.parse(data);
    
    lancamento = {id: json.nextId++, ...lancamento};
    if (tipo === "D") {
        lancamento.valor = lancamento.valor * -1;
    }

    json.lancamentos.push(lancamento);

    await writeFile(global.fileName, JSON.stringify(json));

    return lancamento;
}

async function inserirLancamento2(lancamento, tipo) {
    const data = await readFile(global.fileName);
    const json = JSON.parse(data);
    
    lancamento = {id: json.nextId++, ...lancamento};
    if (tipo === "D") {
        lancamento.valor = lancamento.valor * -1;
    }

    json.lancamentos.push(lancamento);

    await writeFile(global.fileName, JSON.stringify(json));

    return lancamento;
}


export { inserirLancamento };