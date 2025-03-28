const animals = ["Cane", "Gatto", "Delfino", "Balena", "Foca", "Pesce", "Coccodrillo", "Mucca", "Pecora", "Colomba", "Civetta"];
let assignedAnimals = {};
let assignedOnce = [];

function assignAnimal() {
    let availableAnimals = animals.filter(animal => (assignedAnimals[animal] || 0) < 2);

    // Se sono passati tutti gli animali, dobbiamo fare un controllo speciale
    if (availableAnimals.length === 0) {
        let unassignedOnce = animals.filter(animal => (assignedAnimals[animal] || 0) === 1);

        // Gestione degli animali che sono usciti 0 volte
        if (unassignedOnce.length >= 5) {
            // Prendi 5 animali che sono stati assegnati una sola volta
            let randomAnimals = getRandomItems(unassignedOnce, 5);
            randomAnimals.forEach(animal => {
                assignedAnimals[animal] = 2;
            });
            document.getElementById("result").innerText = "Gli animali assegnati sono stati aggiornati.";
            return;
        }

        // Gestione degli animali da "Mucca" in poi
        if (animals.indexOf("Mucca") >= 0) {
            let animalsAfterMucca = animals.slice(animals.indexOf("Mucca"));
            let unassignedTwice = animalsAfterMucca.filter(animal => (assignedAnimals[animal] || 0) === 0);
            if (unassignedTwice.length >= 2) {
                let randomAnimal = getRandomItems(unassignedTwice, 1)[0];
                assignedAnimals[randomAnimal] = 1;
                document.getElementById("result").innerText = "Assegnato: " + randomAnimal;
                return;
            }
        }

        document.getElementById("result").innerText = "Tutti gli animali sono stati assegnati!";
        return;
    }

    let randomAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
    assignedAnimals[randomAnimal] = (assignedAnimals[randomAnimal] || 0) + 1;
    
    // Se l'animale è stato assegnato solo una volta, lo aggiungiamo a assignedOnce
    if (assignedAnimals[randomAnimal] === 1) {
        assignedOnce.push(randomAnimal);
    }

    document.getElementById("result").innerText = "Il tuo animale è: " + randomAnimal;
}

// Funzione per ottenere un numero casuale di elementi da un array
function getRandomItems(arr, num) {
    let shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

