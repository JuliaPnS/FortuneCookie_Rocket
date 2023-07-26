//Variáveis 
const lucky = document.querySelector(".lucky") 
const openedLucky = document.querySelector(".openedlucky")
const imgClosedCookie = document.querySelector("#imgClosedCookie")
const imgOpenedCookie = document.querySelector("#imgOpenedCookie")
const btnOther = document.querySelector("#btnOther")

//Eventos
imgClosedCookie.addEventListener('click', imgToggle)
btnOther.addEventListener('click', imgToggle)
document.addEventListener('keydown', imgKeyDown)

let phrases = [
    'Tem queda que faz a gente voar.',
    'É melhor ter distâncias honestas do que aproximações hipócritas.',
    'Trabalhe duro e em silêncio. Deixe que seu sucesso faça barulho.',
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'Uma bela flor é incompleta sem as suas folhas.'
]

//Funções
function imgKeyDown(event) {
    if(event.key == 'Enter') {
     imgToggle()
    
     phrasesRandom()
    } 
}


function imgToggle() {
    lucky.classList.toggle("hide")
    openedLucky.classList.toggle("hide")
}

function phrasesRandom() {
    let randomNumber = Math.floor(Math.random() * phrases.length)
    openedLucky.querySelector("p").innerText = phrases[randomNumber]
    
}



