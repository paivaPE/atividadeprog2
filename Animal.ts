export abstract class Animal {
    private nome: string;
    private idade: number;
    private tutor: string;

    constructor(nome: string, idade: number, tutor: string) {
        this.nome = nome;
        this.idade = 0;
        this.setIdade(idade);
        this.tutor = tutor;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        if (idade < 0) {
            throw new Error("A idade do animal não pode ser negativa.");
        }
        this.idade = idade;
    }

    public getTutor(): string {
        return this.tutor;
    }

    public setTutor(tutor: string): void {
        this.tutor = tutor;
    }

    abstract emitirSom(): string;
    abstract descreverCuidados(): string;
}