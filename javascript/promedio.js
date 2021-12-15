
function calcularmedia(lista){

    // let sumarLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumarLista += lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function calcularMedia(){
    const inputPromedio = document.getElementById("inputPromedio");
    const valuePromedio = inputPromedio.value;

    const valueArray = Array.from(valuePromedio.split(','), Number);

    const resultadoMedia = calcularmedia(valueArray);

    const resultado = document.getElementById("resultPromedio");
    resultado.innerHTML = "El promedio es " + resultadoMedia;


}