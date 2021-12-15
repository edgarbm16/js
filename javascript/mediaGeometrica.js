function calcularMediaGeometrica(lista) {
    const multiplicacionLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado * nuevoElemento;
    });
  
    const promedioGeometricoLista = (multiplicacionLista)**(1/lista.length);
  
    return promedioGeometricoLista;
}

function calcularMedianaGeometricaFront(){
  const inputMediaG = document.getElementById("inputMediaG");
  const valueMedianaG = inputMediaG.value;

  const valueArray = Array.from(valueMedianaG.split(','), Number);

  const resultadoMediaG = calcularMediana(valueArray);

  const resultado = document.getElementById("resultMediaG");
  resultado.innerHTML = "La  media geométrica es " + resultadoMediaG;

}

