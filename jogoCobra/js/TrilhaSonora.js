class TrilhaSonora {

    constructor(){
        this.jogandoJogo = new Audio();
        this.jogandoJogo.src= "mp3\\trilha.mp3",
        this.cobraComeu = new Audio();
        this.cobraComeu.src= "mp3\\comida.wav";
        this.fimJogo = new Audio();
        this.fimJogo.src= "mp3\\gameover.mp3";
    }
    tocar(trilha){
        if (trilha == "jogandoJogo") this.jogandoJogo.play();
        if (trilha == "cobraComeu")  this.cobraComeu.play();
        if (trilha == "fimJogo")  this.fimJogo.play();
    }
}