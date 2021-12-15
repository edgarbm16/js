function calcularmedia(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function ordenarLista(lista){
    const sortLista = lista.sort((a, b) => a- b);
    return sortLista;
}


function calcularMediana(lista){

    lista = ordenarLista(lista);
    
    const mistadLista = parseInt(lista.length / 2);
    
    function esPar(num){
        if(num % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(lista.length)){
    
        const elemento1 = lista[mistadLista];
        const elemento2 = lista[mistadLista  - 1];
    
        const promedioElementos = calcularmedia([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElementos;
    }else{
        mediana = lista[mistadLista];
    }

    return mediana;

}

function calcularMedianaFront(){
    const inputMediana = document.getElementById("inputMediana");
    const valueMediana = inputMediana.value;

    const valueArray = Array.from(valueMediana.split(','), Number);

    const resultadoMediana = calcularMediana(valueArray);

    const resultado = document.getElementById("resultMediana");
    resultado.innerHTML = "La mediana es " + resultadoMediana;

}