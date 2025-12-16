let primeiroClique;

function numeroAleatorio(){
   return Math.floor(Math.random() * 10) + 1;
} 

function iniciarJogo(){
    const telaInicial = document.getElementsByClassName('divCobra')[0];
    telaInicial.classList.add("telaInvisivel");    
    const telaJogo = document.getElementById('divJogo');
    telaJogo.classList.remove("blur-fundo"); 
    cobra.vida=3;
    placar.nomeJogo="Snake Game",
    placar.pontuacao = 0;
    cobra.cor="orange";
    cobra.velocidade= 1;
    trilha.tocar("jogandoJogo")
    jogar();
    primeiroClique=true;
   
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    alimento.desenhar();

    if (alimento.teveColisao(cobra)){
        placar.pontuacao+=numeroAleatorio();
        cobra.crescer();
        cobra.velocidade++;
        trilha.tocar("cobraComeu")
        alimento = new Alimento(numeroAleatorio());
    }

    if(placar.pontuacao > 50){
        trilha.jogandoJogo.pause();
        trilha.jogandoJogo.currentTime=0;
        trilha.tocar("fimJogo");
        placar.nomeJogo = "Fim de Jogo";
        placar.desenhar();
        const telaInicial = document.getElementsByClassName('divCobra')[0];
        telaInicial.classList.remove("telaInvisivel");  
        telaJogo.classList.add("blur-fundo");
    }

    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.jogandoJogo.pause();
        trilha.jogandoJogo.currentTime=0;
        trilha.tocar("fimJogo");
        placar.pontuacao = 0;
        const telaInicial = document.getElementsByClassName('divCobra')[0];
        telaInicial.classList.remove("telaInvisivel");  
        const telaJogo = document.getElementById('divJogo');
        telaJogo.classList.add("blur-fundo"); 
    }
}

let trilha = new TrilhaSonora();
let alimento = new Alimento(numeroAleatorio());
placar.desenhar();
tela.desenhar();

document.addEventListener("keydown",(evento) =>{  
    if ((evento.key== "8") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="cima";      
    if ((evento.key== "6") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="direita";
    if ((evento.key== "2") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="baixo";
    if ((evento.key== "4") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="esquerda";
})

document.addEventListener("click",(evento) =>{  
    if ((cobra.direcao=="direita"  || cobra.direcao=="esquerda") && (!primeiroClique)) {
        if (evento.clientY < cobra.y[0])  
           cobra.direcao="cima";
        else 
           cobra.direcao="baixo";
    }
    else{
        if (evento.clientX < cobra.x[0])  
            cobra.direcao="esquerda";
        else 
            cobra.direcao="direita";
    }
    primeiroClique=false;
})

