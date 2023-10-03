
var TotalInfundido = 0;
var volumeRestante = null;
var tempoTotal = 0;


let items = [];

let listElement = document.getElementById('lista')

function renderlista(){
    listElement.innerHTML = '';

    items.map((item)=>{
        let divElement = document.createElement('div');
        divElement.setAttribute('class','vazao-tempo');
        let pVazao =document.createElement('p');
        let pTempo =document.createElement('p');
        let pIgual =document.createElement('p');
        let pVolume = document.createElement('p');
        let pExit = document.createElement('p');
        pExit.setAttribute('class','btn-excluir');
        let vazao = document.createTextNode(item[0] + 'ml/h')
        let tempo = document.createTextNode(item[1] + 'min')
        let igual = document.createTextNode(' = ')
        let volume = document.createTextNode(item[2] + 'ml')
        // let exit = document.createTextNode('x')

        pVazao.appendChild(vazao);
        pTempo.appendChild(tempo);
        pIgual.appendChild(igual);
        pVolume.appendChild(volume);
        // pExit.appendChild(exit);

        divElement.appendChild(pVazao)
        divElement.appendChild(pTempo)
        divElement.appendChild(pIgual)
        divElement.appendChild(pVolume)
        // divElement.appendChild(pExit)

        listElement.appendChild(divElement)

        let posicao = items.indexOf(item);

        pExit.setAttribute('onclick',`deletarTarefa(${posicao})`)
        
    })

}
renderlista()

// function deletarTarefa(posicao){
//     items.splice(posicao,1);
//     renderlista()
//     salvarDados()
// }



function VazaoComTempo(vazao, tempo){

    const volumeInfundido = (vazao * tempo ) / 60; // volume em minuto
    TotalInfundido = TotalInfundido + volumeInfundido;
    tempoTotal = Number(tempoTotal) + Number(tempo);
    registrar(vazao,tempo, volumeInfundido)

}


        
function registrar(vazao,tempo, volumeInfundido){

    if(vazao ==='' ||tempo ===''){
        alert("Digite a vazão e o tempo")
        return false;
    } else{

        items.push([vazao,tempo, volumeInfundido])
    
        renderlista();

        console.log("Total infundido: "+ TotalInfundido);
        console.log("TEmpo total: "+ tempoTotal);
   
    }

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


    const divResultadoModal = document.getElementById('divResultadoModal');
    divResultadoModal.innerText = `Duração total: ${hora}h${minutos}min`
   
    console.log(`Duração total: ${hora}h${minutos}min`)
}




btncalcular.onclick = function(){

    const volumeTotal = document.querySelector('#volumeTotal').value;

    volumeRestante = Number(volumeTotal) - Number(TotalInfundido);
    console.log("Volume restante : "+ volumeRestante);


    VazaoRestante(vazaoRestante, volumeRestante)

}