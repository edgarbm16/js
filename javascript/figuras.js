//Código del cuadrado
console.group("Cuadrado");

    function perimetroCuadrado(lado){
        return lado * 4;
    }

    function areaCuadrado(lado){
        return lado * lado;
    }

//Código del triangulo
console.groupEnd();

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }

    function alturaTrianguloIsosceles(lado1, lado2, base){
        if(lado1 != lado2){
            alert("Los lados no son iguales, recuerda que los lados tienen que ser iguales");
        }else{
            return (Math.sqrt((lado1**2)-((base**2)/4)));
        }
    }

console.groupEnd();


//Cóigo del círculo
console.group("Círculos");

    const PI = Math.PI;

    function diametroCirculo(radio){
        return radio * 2;
    }

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    function areaCirculo(radio){
        return (radio * radio) * PI;
    }

console.groupEnd();

// Calcular cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    // alert(perimetro);
    const resultCuadrado = document.getElementById("resultCuadrado");
    resultCuadrado.innerHTML = "El périmetro del cuadrado es " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    // alert(area);
    const resultCuadrado = document.getElementById("resultCuadrado");
    resultCuadrado.innerHTML = "El área del cuadrado es " + area;
}


// Calcular triangulo

function calcularPerimetroTriangulo(){
    const inputLadoUno = document.getElementById("inputTrianguloladoUno");
    const valueLadoUno = Number(inputLadoUno.value);

    const inputladoDos = document.getElementById("inputTrianguloladoDos");
    const valueladoDos = Number(inputladoDos.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLadoUno, valueladoDos, valueBase);
    // alert(perimetro);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerHTML = "El périmetro del triangulo es " + perimetro;
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const area = areaTriangulo(valueBase, valueAltura);
    // alert(area);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerHTML = "El área del triangulo es " + area;
}

function calcularAlturaTrianguloIsosceles(){
    const inputLadoUno = document.getElementById("inputTrianguloladoUno");
    const valueLadoUno = Number(inputLadoUno.value);

    const inputladoDos = document.getElementById("inputTrianguloladoDos");
    const valueladoDos = Number(inputladoDos.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const altura = alturaTrianguloIsosceles(valueLadoUno, valueladoDos, valueBase);
    // alert(altura);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerHTML = "La altura del triangulo es " + altura;
}

// Calcular circulo

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    // alert(perimetro);
    const resultCirculo = document.getElementById("resultCirculo");
    resultCirculo.innerHTML = "El périmetro del círculo es " + perimetro;
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    // alert(area); 
    const resultCirculo = document.getElementById("resultCirculo");
    resultCirculo.innerHTML = "El área del círculo es " + area;
}