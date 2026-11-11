import { Funcionario } from "./Funcionario";
import { Animal } from "./Animal";
import { Consulta } from "./Consulta";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number = 0;
    private valorBonusPorConsulta: number;

    constructor(nome: string, matricula: string, salarioInicial: number, valorBonusPorConsulta: number = 50) {
        super(nome, matricula, salarioInicial);
        this.valorBonusPorConsulta = valorBonusPorConsulta;
    }

    public realizarConsulta(animal: Animal, data: Date): Consulta {
        this.consultasRealizadas++;
        return new Consulta(animal, this, data);
    }

    public calcularBonus(): number {
        return this.consultasRealizadas * this.valorBonusPorConsulta;
    }

    public getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }
}