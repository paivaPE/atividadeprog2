import { Animal } from "./Animal";

export class Cachorro extends Animal {
    emitirSom(): string {
        return "Au Au!";
    }

    descreverCuidados(): string {
        return "Necessita de passeio diário.";
    }
}