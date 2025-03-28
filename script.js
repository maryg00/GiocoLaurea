const animals = ["Leone", "Tigre", "Giraffa", "Elefante", "Lupo", "Panda", "Volpe", "Aquila", "Orso", "Delfino"];
let assignedAnimals = {};

function assignAnimal() {
    let availableAnimals = animals.filter(animal => (assignedAnimals[animal] || 0) < 2);
    
    if (availableAnimals.length === 0) {
        document.getElementById("result").innerText = "Tutti gli animali sono stati assegnati!";
        return;
    }

    let randomAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
    assignedAnimals[randomAnimal] = (assignedAnimals[randomAnimal] || 0) + 1;

    document.getElementById("result").innerText = "Il tuo animale è: " + randomAnimal;
}
