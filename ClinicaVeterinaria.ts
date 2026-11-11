import { Funcionario } from "./Funcionario";
import { Animal } from "./Animal";
import { Consulta } from "./Consulta";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";

export class ClinicaVeterinaria {
    private nome: string;
    private funcionarios: Funcionario[] = [];
    private animaisCadastrados: Animal[] = [];
    private consultas: Consulta[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public cadastrarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    public cadastrarAnimal(animal: Animal): void {
        this.animaisCadastrados.push(animal);
    }

    public agendarConsulta(vet: Veterinario, animal: Animal, data: Date, rec?: Recepcionista): Consulta {
        if (rec) {
            rec.agendarAtendimento();
        }
        const consulta = vet.realizarConsulta(animal, data);
        this.consultas.push(consulta);
        return consulta;
    }

    public listarAtendimentos(): void {
        console.log(`--- Relatório da Clínica: ${this.nome} ---`);
        console.log(`Animais Cadastrados: ${this.animaisCadastrados.length}`);
        console.log(`Funcionários Ativos: ${this.funcionarios.length}`);
        console.log(`Total de Consultas Realizadas: ${this.consultas.length}`);
    }
}