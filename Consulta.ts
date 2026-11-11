import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
    constructor(
        private animal: Animal,
        private veterinario: Veterinario,
        private data: Date
    ) {}

    public getAnimal(): Animal {
        return this.animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public getData(): Date {
        return this.data;
    }

    public detalharConsulta(): string {
        return `Consulta em ${this.data.toLocaleDateString()} - Paciente: ${this.animal.getNome()} | Veterinário: Dr(a). ${this.veterinario.getNome()}`;
    }
}