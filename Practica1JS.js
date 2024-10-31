function combinacionesLoteria() {
    for (let i = 0; i < 50; i++) {
        let combination = new Set();
        while (combination.size < 6) {
            let number = Math.floor(Math.random() * 49) + 1;
            combination.add(number);
        }
        console.log("Combinaciones de la primitiva: " + Array.from(combination));
    }
}
combinacionesLoteria();
