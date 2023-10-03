
const volumeTotal = document.querySelector('#volumeTotal').value;
var TotalInfundido = 0;
var volumeRestante = volumeTotal;
var tempoTotal = 0;

function atualizaDados(volumeInfundido,TotalInfundido,tempoTotal,volumeRestante  ){
    console.log(`Volume infudido: ${volumeInfundido}mL` )
    console.log(`Total infudido: ${TotalInfundido}mL`)
    console.log("Duração: " + tempoTotal + "min")
    console.log(`Volume restante: ${volumeRestante}mL`)
    console.log(`------------------------------------`)
}


function VazaoComTempo(vazao, tempo){

    const volumeInfundido = (vazao * tempo ) / 60; // volume em minuto
    TotalInfundido = TotalInfundido + volumeInfundido;
    tempoTotal = tempoTotal + tempo;
    volumeRestante = volumeTotal - TotalInfundido;
    atualizaDados(volumeInfundido,TotalInfundido,tempoTotal, volumeRestante )
}

function VazaoRestante(vazao,volumeRestante){
    const tempoRestante = (volumeRestante * 60 ) / vazao; // volume em minuto
    tempoTotal = tempoTotal + tempoRestante;
    const tempoTotalHoras = tempoTotal / 60;
    const hora = parseInt(tempoTotalHoras) 
    let fracaoMinutos = tempoTotalHoras;

    while(fracaoMinutos > 1){
        fracaoMinutos -= 1;
    }

    const minutos = parseInt(fracaoMinutos * 60);

    console.log(`Duração total: ${hora}h${minutos}min`)
}


VazaoComTempo(5,15)
VazaoComTempo(10,15)
VazaoComTempo(20,15)
VazaoComTempo(40,15)
VazaoRestante(80,volumeRestante)