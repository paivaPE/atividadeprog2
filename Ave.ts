import { Animal } from "./Animal";

export class Ave extends Animal {
    emitirSom(): string {
        return "Piu Piu!";
    }

    descreverCuidados(): string {
        return "Necessita de gaiola limpa e adequada.";
    }
}