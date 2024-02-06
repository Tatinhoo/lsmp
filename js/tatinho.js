var musicaAtualNUM;
var musicaAtual = document.getElementById("audioSource")
var audio = document.getElementById("musicakkkkk")




function musica(){
    musicaAtualNUM = parseInt(Math.random() * 3 + 1)
    switch (musicaAtualNUM) {
        case 1:
            musicaAtual.setAttribute('src', "audio/tatinho/nostalgia.mp3");
            audio.load()
        break;
        case 2:
            musicaAtual.setAttribute('src', "audio/tatinho/kazuha.mp3");
            audio.load()
        break;
    
        case 3:
            musicaAtual.setAttribute('src', "audio/tatinho/call.mp3");
            audio.load()
        break;
    
        case 4:
            musicaAtual.setAttribute('src', "audio/tatinho/nostalgia.mp3");
            audio.load()
        break;
    
    
        default:
            break;
    }
}