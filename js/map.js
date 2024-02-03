var lugarNome = document.getElementById("map-local-name")
var lugarDesc = document.getElementById("map-local-description")
var lugarImage = document.getElementById("map-local-image")
var doge = 0

function map_interacion(local){

    document.getElementById('sidebar').classList.remove('active');

    setTimeout(function () {
        document.getElementById('sidebar').classList.add('active');
    }, 800);

    setTimeout(function() {
        
        switch (local) {

            // Vila

            case "v_fonte":
                lugarNome.innerHTML = "Fonte da Praça"
                lugarDesc.innerHTML = "O primeiro local construido na vila, é considerada a 'Fonte da Prefeitura'."
                lugarImage.src = "img/local-images/v_fonte.png"
            break;

            case "v_farm":
                lugarNome.innerHTML = "Fazenda da Vila"
                lugarDesc.innerHTML = "Fazendinha construida por <a href = 'participantes.html'>ninadoll</a>, feita com madeira (em sua maioria), perfeita para os animais!"
                lugarImage.src = "img/local-images/v_farm.png"
            break;

            case "v_estufa":
                lugarNome.innerHTML = "Estufa da Vila"
                lugarDesc.innerHTML = "estufa."
                lugarImage.src = "img/local-images/v_estufa.png"
            break;

            case "v_biblioteca":
                lugarNome.innerHTML = "Biblioteca da Vila"
                lugarDesc.innerHTML = "A biblioteca da vila, faça silêncio quando entrar lá!"
                lugarImage.src = "img/local-images/v_biblioteca.png"
            break;

            case "v_prefeitura":
                lugarNome.innerHTML = "Prefeitura da Vila"
                lugarDesc.innerHTML = "Aqui é onde o prefeito(a) fica e faz reuniões sobre o futuro da vila."
                lugarImage.src = "img/local-images/v_prefeitura.png"
            break;

            case "v_cemiterio":
                lugarNome.innerHTML = "Cemitério da Vila"
                lugarDesc.innerHTML = "Porque as pessoas boas sempre vão primeiro? Este lugar é onde as pessoas descansam em paz."
                lugarImage.src = "img/local-images/v_cemiterio.png"
            break;

            case "v_ritual":
                lugarNome.innerHTML = "Ritual da Prefeitura"
                lugarDesc.innerHTML = "O ritual da prefeitura é feito para atrair coisas boas para a vila."
                lugarImage.src = "img/local-images/v_ritual.png"
            break;

            case "v_beach":
                lugarNome.innerHTML = "Copacabana 2 Beach"
                lugarDesc.innerHTML = "A praia de Cobacabana 2 é um lugar muito relaxante! <br><br> 'Eu vou fazer um arrastão aqui' - <a href = 'participantes.html'>oTatinho</a>"
                lugarImage.src = "img/local-images/v_beach.png"
            break;

            case "v_porto":
                lugarNome.innerHTML = "Porto da Vila"
                lugarDesc.innerHTML = "O porto onde saem e entram barcos para a vila"
                lugarImage.src = "img/local-images/v_porto.png"
            break;



            // Casa

            case "c_tatinho":
                lugarNome.innerHTML = "Casa de oTatinho"
                lugarDesc.innerHTML = "Esta é a casa do participante <a href = 'participantes.html'>oTatinho</a>, foi uma das únicas coisas que ele conseguiu construir."
                lugarImage.src = "img/local-images/c_tatinho.png"
                break;

            case "c_biaNina":
                lugarNome.innerHTML = "Casa de biaTrufa e ninadoll"
                lugarDesc.innerHTML = "'sei la oq eu falo na descricap de uma casa' - <a href = 'participantes.html'>ninadoll</a> <br> <br> 'a mansão favorita de todos os participantes do LSMP' - <a href = 'participantes.html'>biaTrufa</a> "
                lugarImage.src = "img/local-images/c_biaNina.png"
            break;

            case "c_sofia":
                lugarNome.innerHTML = "Casa de Sofiagamer2202"
                lugarDesc.innerHTML = "Casinha temporária de <a href = 'participantes.html'>Sofiagamer2202</a> e seus bichos"
                lugarImage.src = "img/local-images/c_sofia.png"
            break;

            case "c_mika":
                lugarNome.innerHTML = "Ex-Bueiro de mikanalha"
                lugarDesc.innerHTML = "A base temporária que <a href = 'participantes.html'>mikanalha</a> construiu no início do LSMP para ter um local próprio para ficar."
                lugarImage.src = "img/local-images/c_mika.png"
            break;

            case "c_mika2":
                lugarNome.innerHTML = "Manicômio de mikanalha"
                lugarDesc.innerHTML = "A base temporária que <a href = 'participantes.html'>mikanalha</a> construiu no início do LSMP para ter um local próprio para ficar."
                lugarImage.src = "img/local-images/c_mika2.png"
            break;

            case "doge":
                lugarNome.innerHTML = "Doge Dante"
                lugarDesc.innerHTML = "Um lugar misterioso grudando o segredo dos 7 mares da internet, quem sabe one piece 2?"
                lugarImage.src = "img/participantes/eh.png"
                if (event.key)

            break;

            case "c_mari":
                lugarNome.innerHTML = "Casa de marianamachado"
                lugarDesc.innerHTML = "Casa da participante <a href = 'participantes.html'>marianamachado</a>."
                lugarImage.src = "img/local-images/c_mari.png"
            break;

            case "c_andre":
                lugarNome.innerHTML = "Casa de andre_detona"
                lugarDesc.innerHTML = "Casa do participante <a href = 'participantes.html'>andre_detona</a>."
                lugarImage.src = "img/local-images/c_andre.png"
            break;

            case "c_pietra":
                lugarNome.innerHTML = "Casa de ipietra"
                lugarDesc.innerHTML = "Casa da participante <a href = 'participantes.html'>ipietra</a>."
                lugarImage.src = "img/local-images/c_pietra.png"
            break;

            case "c_mina":
                lugarNome.innerHTML = "Casa de minxxsz"
                lugarDesc.innerHTML = "Casa da participante <a href = 'participantes.html'>minxxsz</a> que ainda está em construção."
                lugarImage.src = "img/local-images/c_mina.png"
            break;
            default:
            break;
        }
    }, 500);

}

function fechar_mapa(){

    document.getElementById('sidebar').classList.remove('active');
}

function doge(){
    lugarImage.src = "img/local-images/garchomp.gif"


}