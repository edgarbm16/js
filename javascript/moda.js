function calcularModa(lista){

    const listaCount = {};

    lista.map(
        function(elemento){

            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    ); 

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;

}

function calcularModaFront(){
    const inputModa = document.getElementById("inputModa");
    const valueModa = inputModa.value;

    const valueArray = Array.from(valueModa.split(','), Number);

    const resultadoModa = calcularModa(valueArray);

    const resultado = document.getElementById("resultModa");
    resultado.innerHTML = "La moda es " + resultadoModa;

}