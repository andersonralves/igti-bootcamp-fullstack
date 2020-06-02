const fs = require("fs").promises;
const globalDataFile = '../2008.json';
let globalRodadasCampeonato = null;

let partidas = [];
let times = [];

init();

async function init() {
    try {   
        
        await lerArquivo();
        await organizarTimes();
        await informarCampeao();
        
    } catch (error) {
        console.log('error: ' + error)
    }
}

async function lerArquivo() {
    const resp = await fs.readFile(globalDataFile);    
    globalRodadasCampeonato = JSON.parse(resp);
}

async function organizarTimes() {    
        
    globalRodadasCampeonato.forEach(rodada => {
        partidas = rodada.partidas;       
        
        partidas.forEach(partida => {

            if (times.findIndex(item => item.time === partida.mandante) === -1) {
                times.push({time: partida.mandante, pontuacao: 0});
            }
          
            if (times.findIndex(item =>  item.time === partida.visitante) === -1) {
                times.push({time: partida.visitante, pontuacao: 0});
            } 

            const indexVisitante = times.findIndex(item => item.time === partida.visitante);
            const indexMandante = times.findIndex(item => item.time === partida.mandante);

            const timeVisitante = times[indexVisitante];
            const timeMandante = times[indexMandante];

            if (partida.placar_visitante >  partida.placar_mandante) {                      
                timeVisitante.pontuacao += 3;                
            } else if (partida.placar_visitante <  partida.placar_mandante) {
                timeMandante.pontuacao += 3;
            }  else {
                timeVisitante.pontuacao += 1;
                timeMandante.pontuacao += 1;
            }

            times[indexVisitante] = timeVisitante;
            times[indexMandante] = timeMandante;
                      
        });
        
    });    

    times = times.sort((a, b) => {
        return b.pontuacao - a.pontuacao;
    });

    await fs.writeFile("./times.json", JSON.stringify(times));

}

async function informarCampeao() {
    
    const times = await fs.readFile('./times.json');
    const data = await JSON.parse(times);
    const time = data[0].time;
    
    console.log('CAMPEÃO BRASILEIRO: ' + time.toUpperCase());
}