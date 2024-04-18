function calcular() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var imc = (peso / altura**2).toFixed(2) 

    var magreza = document.getElementById("magreza")
    var normal = document.getElementById("normal")
    var sobrepeso = document.getElementById("sobrepeso")
    var obesidade = document.getElementById("obesidade")
    var obesidadeGrave = document.getElementById("obesidadeGrave")
    
    var resImc = document.getElementById("res-imc")

    if(altura == '' || peso == ''){
        window.alert("Erro! Preencha os campos.")
        resImc.innerHTML = ''
    }
    else if ( imc < 18.5) {
        magreza.style.backgroundColor = "#bbd8ff77"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
        resImc.innerHTML = imc
    }
    else if (imc < 24.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "#bbd8ff77"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
        resImc.innerHTML = imc
    }
    else if (imc < 29.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "#bbd8ff77"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
        resImc.innerHTML = imc
    }
    else if (imc < 39.9) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "#bbd8ff77"
        obesidadeGrave.style.backgroundColor = "white"
        resImc.innerHTML = imc
    }
    else if (imc > 40.0) {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "#bbd8ff77"
        resImc.innerHTML = imc
    }
}

function limpar() {

    altura.value = ''
    peso.value = ''

    if(altura.value == '' && peso.value == '') {
        magreza.style.backgroundColor = "white"
        normal.style.backgroundColor = "white"
        sobrepeso.style.backgroundColor = "white"
        obesidade.style.backgroundColor = "white"
        obesidadeGrave.style.backgroundColor = "white"
    }
    
    resImc.innerHTML = ''
}