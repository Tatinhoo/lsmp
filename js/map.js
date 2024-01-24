

var lugarNome = document.getElementById("map-local-name")
var lugarDesc = document.getElementById("map-local-description")

function map_interacion(local){

    


    document.getElementById('sidebar').classList.remove('active');

    setTimeout(function () {
        document.getElementById('sidebar').classList.add('active');
    }, 800);

    setTimeout(function() {

    if(local === "v_fonte"){
        lugarNome.innerHTML = "Fonte da Praça"
        lugarDesc.innerHTML = "O primeiro local construido na vila, é considerada a 'Fonte da Prefeitura'." 
    }
    if(local === "v_farm"){
        lugarNome.innerHTML = "Fazenda da Vila"
        lugarDesc.innerHTML = "Fazendinha construida por <a href = 'participantes.html'>ninadoll</a>, feita com madeira (em sua maioria), perfeita para os animais!"
    }
    if(local === "v_estufa"){
        lugarNome.innerHTML = "Estufa da Vila"
        lugarDesc.innerHTML = "estufa."
    }
    if(local === "v_tom"){
        lugarNome.innerHTML = "Homenagem a Tom"
        lugarDesc.innerHTML = "Uma homenagem feita ao cachorro de <a href = 'participantes.html'>Sofiagamer2202</a> que morreu lutando bravamente contra um zumbi."
    }
    if(local === "c_tatinho"){
        lugarNome.innerHTML = "Casa de oTatinho"
        lugarDesc.innerHTML = "Esta é a casa do participante <a href = 'participantes.html'>oTatinho</a>, foi uma das únicas coisas que ele conseguiu construir."
    }
    if(local === "c_biaNina"){
        lugarNome.innerHTML = "Casa de biaTrufa e ninadoll"
        lugarDesc.innerHTML = "'sei la oq eu falo na descricap de uma casa' - <a href = 'participantes.html'>ninadoll</a> <br> <br> 'a mansão favorita de todos os participantes do LSMP' - <a href = 'participantes.html'>biaTrufa</a> "
    }
    if(local === "c_bradulim"){
        lugarNome.innerHTML = "Casa de Bradulimkk"
        lugarDesc.innerHTML = "Casa do participante <a href = 'participantes.html'>Bradulimkk</a>."
    }
    if(local === "c_sofia"){
        lugarNome.innerHTML = "Casa de Sofiagamer2202"
        lugarDesc.innerHTML = "Casinha temporária de <a href = 'participantes.html'>Sofiagamer2202</a> e seus bichos"
    }
    if(local === "c_mika"){
        lugarNome.innerHTML = "Bueiro de mikanalha"
        lugarDesc.innerHTML = "Uma base temporária que <a href = 'participantes.html'>mikanalha</a> construiu para ter um local próprio para ficar."
    }
        // Código a ser executado após o tempo de espera
    }, 500);

}

function fechar_mapa(){

    document.getElementById('sidebar').classList.remove('active');
}