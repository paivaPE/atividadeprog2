import { ClinicaVeterinaria } from "./ClinicaVeterinaria";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";

const clinica = new ClinicaVeterinaria("Pet Care Dona Marta");

const dog = new Cachorro("Rex", 3, "Carlos");
const cat = new Gato("Mimi", 2, "Ana");
const bird = new Ave("Louro", 1, "João");

clinica.cadastrarAnimal(dog);
clinica.cadastrarAnimal(cat);
clinica.cadastrarAnimal(bird);

const vet = new Veterinario("Dra. Silvia", "VET-123", 4500, 50);
const recep = new Recepcionista("Lucas", "REC-456", 2000, 15);

clinica.cadastrarFuncionario(vet);
clinica.cadastrarFuncionario(recep);

clinica.agendarConsulta(vet, dog, new Date(), recep);
clinica.agendarConsulta(vet, cat, new Date(), recep);

console.log(`Salário Base Vet: R$ ${vet.getSalario()} | Total com Bônus (${vet.getConsultasRealizadas()} consultas): R$ ${vet.getSalarioTotal()}`);
console.log(`Salário Base Recep: R$ ${recep.getSalario()} | Total com Bônus (${recep.getAgendamentosConfirmados()} agendamentos): R$ ${recep.getSalarioTotal()}`);

console.log(`${dog.getNome()} diz: ${dog.emitirSom()} - Cuidados: ${dog.descreverCuidados()}`);
console.log(`${cat.getNome()} diz: ${cat.emitirSom()} - Cuidados: ${cat.descreverCuidados()}`);
console.log(`${bird.getNome()} diz: ${bird.emitirSom()} - Cuidados: ${bird.descreverCuidados()}`);