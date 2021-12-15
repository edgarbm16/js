// Helpers
function esPar(num){
    return (num % 2 === 0);
}

function calcularmedia(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitadUno = lista[mitad -1];
        const personaMitadDos = lista[mitad];

        const mediana = calcularmedia([personaMitadUno, personaMitadDos]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana General 
const salariosMex = mexico.map(
    function (persona){
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del top 10%
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
  spliceStart,
  spliceCount,  
);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(
    medianaGeneralMex,
    medianaTop10Mex,
);