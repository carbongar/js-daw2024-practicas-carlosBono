function validacion() {
    let validar = Array(10).fill(0);

    for (let i = 0; i < 10000; i++) {
        let numero = Math.floor(Math.random() * 10) + 1;
        validar[numero - 1]++;
    }

    console.log("Frecuencias del : ");
    validar.forEach((count, index)=>{
        console.log("Número " + (index + 1) + ": " + count);
    });
}
validacion();
