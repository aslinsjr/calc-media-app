const formContainer = document.querySelector(".form-container");
const nomeInput = document.querySelector("#nome");
const nota1Input = document.querySelector("#nota1");
const nota2Input = document.querySelector("#nota2");
const frequencia = document.querySelector("#frequencia")
const submitBtn = document.querySelector("#submit-btn");

const resultContainer = document.querySelector(".result-container");
const printMedia = document.querySelector("#print-media");
const printName = document.querySelector("#print-name");
const congrats = document.querySelector("#congrats")
const printResult = document.querySelector("#print-result")


submitBtn.addEventListener("click", () => {

    function calcMedia (nota1, nota2) {
        return media = (nota1 + nota2)/2
    }

    function verifAprov (media, frequencia) {
        if(media >= 6 && frequencia >= 75){
            return "Aprovado"
        }else {
            return "Reprovado"
        }
    }

    calcMedia(parseInt(nota1Input.value), parseInt(nota2Input.value))

    formContainer.classList.add("hidden")
    resultContainer.classList.remove("hidden")

    printName.innerHTML = nomeInput.value
    printMedia.innerHTML = media
    printResult.innerHTML = verifAprov (media, frequencia.value)

})