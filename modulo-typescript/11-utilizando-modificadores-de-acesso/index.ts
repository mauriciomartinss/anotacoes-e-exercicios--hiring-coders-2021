class Carro {
    private velocidadeAtual: number = 0;
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {  }

    private alterarVelocidade(delta: number) {
        const aceleracao = 5;
        if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
            this.velocidadeAtual += aceleracao;
        }
    }

    acelerar() {
      this.alterarVelocidade(5);
    }

    frear() {
        const frenagem = 5;
        this.velocidadeAtual -= frenagem;
    }
}

const carro = new Carro('chevrolet', 'prisma', 250);