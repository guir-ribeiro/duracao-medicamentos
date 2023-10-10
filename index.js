
var TotalInfundido = 0;
var volumeRestante = null;
var tempoTotal = 0;

// var vazaoVez = null;
// var tempoVez = null;


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

        pVazao.appendChild(vazao);
        pTempo.appendChild(tempo);
        pIgual.appendChild(igual);
        pVolume.appendChild(volume);

        divElement.appendChild(pVazao)
        divElement.appendChild(pTempo)
        divElement.appendChild(pIgual)
        divElement.appendChild(pVolume)

        listElement.appendChild(divElement)


    })

}
renderlista()


function VazaoComTempo(vazao, tempo){

    const volumeInfundido = (vazao * tempo ) / 60; // volume em minuto
    TotalInfundido = TotalInfundido + volumeInfundido;
    tempoTotal = Number(tempoTotal) + Number(tempo);
    registrar(vazao,tempo, volumeInfundido)
    
    document.querySelector('#vazaoVT').value = null;


    // const modalSucess = document.querySelector('#addSucess');
     

    // let paragrafoVazao = document.createElement('p');
    // let paragrafoTempo = document.createElement('p');
    // let textvazao = document.createTextNode('Vazão: ' + vazao + " ml/h")
    // let textTempo = document.createTextNode('Tempo: ' + tempo + " min")
    // paragrafoVazao.appendChild(textvazao);
    // paragrafoTempo.appendChild(textTempo);

    // modalSucess.appendChild(paragrafoVazao);
    // modalSucess.appendChild(paragrafoTempo);
    

}

// function trashTextSucess(){
//     const modalSucess = document.querySelector('#addSucess');
//     console.log(modalSucess)   
// }


        
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