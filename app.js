document.addEventListener("DOMContentLoaded", function () {

    const avaliacaoButtons = document.querySelectorAll(".avaliacao span");

    avaliacaoButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            avaliacaoButtons.forEach(function (btn) {

                btn.classList.remove("selected");

            });

            button.classList.add("selected");

        });

    });

});

let avaliacao = 0;

document.querySelector(".avaliacao span:nth-child(1)").addEventListener("click", function (){
    avaliacao = 1;
    console.log(avaliacao);
})

document.querySelector(".avaliacao span:nth-child(2)").addEventListener("click", function (){
    avaliacao = 2;
})

document.querySelector(".avaliacao span:nth-child(3)").addEventListener("click", function (){
    avaliacao = 3;
})

document.querySelector(".avaliacao span:nth-child(4)").addEventListener("click", function (){
    avaliacao = 4;
})

document.querySelector(".avaliacao span:nth-child(5)").addEventListener("click", function (){
    avaliacao = 5;
})

document.querySelector(".enviar_avaliacao").addEventListener("click", function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".finishPage").style.display = "flex";
    document.querySelector(".avaliacaoEscolhida p").textContent = `Você selecionou ${avaliacao} de 5!`;
})





