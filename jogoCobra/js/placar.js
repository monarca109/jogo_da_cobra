const placar = {
    altura:30,
    corFundo:"#341d08",
    corTexto:"white",
    pontuacao: 0,
    
    desenhar(){
        ctx.fillStyle = this.corFundo;
        ctx.fillRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = this.corTexto;
        ctx.textAlign="left";
        ctx.font="14px Fantasy"
        ctx.fillText(this.pontuacao + " ponto(s)",100,3*this.altura/4);

        ctx.textAlign = "center"
        ctx.fillText(this.nomeJogo, 800,3*this.altura/4);
        
        ctx.textAlign="right";
        ctx.fillText(cobra.vida + " vida(s)",canvas.width-100,3*this.altura/4);

        ctx.moveTo(0, 30);
        ctx.lineTo(canvas.width, 30);
		ctx.lineTo(canvas.height, 30);
        ctx.strokeStyle = 'white';
		ctx.stroke();
    }
}
