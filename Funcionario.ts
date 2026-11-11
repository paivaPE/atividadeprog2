export abstract class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;

    constructor(nome: string, matricula: string, salarioInicial: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.setSalario(salarioInicial);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public setMatricula(matricula: string): void {
        this.matricula = matricula;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(novoSalario: number): void {
        if (novoSalario <= 0) {
            throw new Error("O salário deve ser um valor maior que zero.");
        }
        this.salario = novoSalario;
    }

    abstract calcularBonus(): number;

    public getSalarioTotal(): number {
        return this.getSalario() + this.calcularBonus();
    }
}