function calcular() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var imc = peso / altura**2

    var tr = document.getElementById("magreza")
    var tr = document.getElementById("normal")
    var tr = document.getElementById("sobrepeso")
    var tr = document.getElementById("obesidade")
    var tr = document.getElementById("obesidadeGrave")
    
    var resimc = document.getElementById("res-imc")

    if ( imc < 18.5) {
        magreza.style.backgroundColor = "#bbd8ff77"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
    }
    else if (imc < 24.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "#bbd8ff77"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
    }
    else if (imc < 29.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "#bbd8ff77"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
    }
    else if (imc < 39.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "#bbd8ff77"
        obesidadeGrave.style.backgroundColor = "white"
        resimc.innerHTML = "ola"
    }
    else if (imc > 40.0) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "#bbd8ff77"
    }
    resimc.innerHTML = imc
}

function limpar() {
    var altura = document.getElementById("altura")
    var peso = document.getElementById("peso")
    var resimc = document.getElementById("res-imc")

    altura.value = ''
    peso.value = ''

    if(altura.value == '' && peso.value == '') {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
    }
    
    resimc.innerHTML = ''
}