
class Alimento extends ObjetoJogo {

    arqImagem=[
        "\img\\apple.png",
        "\img\\banana.png",
        "\img\\orange.png",
        "\img\\grape.png"
    ];
    imagem;
    constructor(valor,...args){
        super(args);
        this.valor=valor;
        this.imagem = new Image();
        this.imagem.src = this.arqImagem[Math.floor(Math.random() * this.arqImagem.length)]; // chamada para imagem randon aqui
    };
    desenhar(){
        ctx.drawImage(this.imagem, this.x, this.y
                      , this.tamanho, this.tamanho);
    }
}
