const ventilador = document.getElementById("ventilador");

const botao = document.getElementById("botao");

const statusVentilador = document.getElementById("status");

const velocidade1 = document.getElementById("velocidade1");

const velocidade2 = document.getElementById("velocidade2");

const velocidade3 = document.getElementById("velocidade3");


// Ligar e desligar o ventilador

botao.addEventListener("click", function() {

    ventilador.classList.toggle("ligado");


    if (ventilador.classList.contains("ligado")) {

        botao.textContent = "Desligar";

        statusVentilador.textContent = "Status: Ligado";

    } else {

        botao.textContent = "Ligar";

        statusVentilador.textContent = "Status: Desligado";

    }

});


// Velocidade 1

velocidade1.addEventListener("click", function() {

    ventilador.style.animationDuration = "2s";

    ventilador.querySelector(".helices").style.animationDuration = "2s";

});


// Velocidade 2

velocidade2.addEventListener("click", function() {

    ventilador.querySelector(".helices").style.animationDuration = "1s";

});


// Velocidade 3

velocidade3.addEventListener("click", function() {

    ventilador.querySelector(".helices").style.animationDuration = "0.3s";

});