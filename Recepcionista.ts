import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number = 0;
    private valorBonusPorAgendamento: number;

    constructor(nome: string, matricula: string, salarioInicial: number, valorBonusPorAgendamento: number = 10) {
        super(nome, matricula, salarioInicial);
        this.valorBonusPorAgendamento = valorBonusPorAgendamento;
    }

    public agendarAtendimento(): void {
        this.agendamentosConfirmados++;
    }

    public calcularBonus(): number {
        return this.agendamentosConfirmados * this.valorBonusPorAgendamento;
    }

    public getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }
}