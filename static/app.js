function analisar(){

let altura = document.getElementById("altura").value
let pescoco = document.getElementById("pescoco").value
let cintura = document.getElementById("cintura").value

let gordura = 86.010*Math.log10(cintura-pescoco)-70.041*Math.log10(altura)+36.76

gordura = gordura.toFixed(1)

let score = 100 - gordura

document.querySelector(".progressBox").style.display="block"

let bar=document.querySelector(".bar")

let progresso=0

let loading=[
"Escaneando medidas...",
"Calculando composição corporal...",
"Comparando com banco de dados...",
"Gerando Shape Score..."
]

let texto=document.querySelector(".loadingText")

let etapa=0

let interval=setInterval(function(){

progresso+=2

bar.style.width=progresso+"%"

if(progresso%25==0 && etapa<loading.length){
texto.innerText=loading[etapa]
etapa++
}

if(progresso>=100){

clearInterval(interval)

mostrarResultado(score)

}

},40)

}

function mostrarResultado(score){

document.querySelector(".resultBox").style.display="block"

document.getElementById("score").innerText=Math.round(score)

let rank=""

if(score>85) rank="Elite physique (Top 5%)"
else if(score>75) rank="Acima da média (Top 20%)"
else if(score>65) rank="Bom potencial físico"
else if(score>55) rank="Potencial moderado"
else rank="Abaixo da média"

document.getElementById("rank").innerText=rank

document.querySelector(".paywall").style.display="block"

}

function comprar(){

let altura = document.getElementById("altura").value
let pescoco = document.getElementById("pescoco").value
let cintura = document.getElementById("cintura").value

localStorage.setItem("altura", altura)
localStorage.setItem("pescoco", pescoco)
localStorage.setItem("cintura", cintura)

window.location.href="https://pay.kiwify.com.br/ofelnxq"

}

