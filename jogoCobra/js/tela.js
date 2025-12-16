const tela = {
    largura: 1200,
    altura: 600,
    cor: "#341d08",
    
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,30, canvas.width, canvas.height);
    }
}

