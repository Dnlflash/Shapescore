
let altura = localStorage.getItem("altura")
let pescoco = localStorage.getItem("pescoco")
let cintura = localStorage.getItem("cintura")

let gordura = 86.010*Math.log10(cintura-pescoco)-70.041*Math.log10(altura)+36.76
gordura = gordura.toFixed(1)

let score = 100 - gordura

document.getElementById("bf").innerText = gordura + "%"
document.getElementById("score").innerText = Math.round(score)

let tipo=""
let target=""
let tempo=""

if(gordura < 12){
tipo="Elite / Atlético"
target="Manutenção (10-12%)"
tempo="Você já está próximo do ideal"
}
else if(gordura < 18){
tipo="Atlético"
target="10-12%"
tempo="2 a 4 meses"
}
else if(gordura < 25){
tipo="Intermediário"
target="12-15%"
tempo="3 a 6 meses"
}
else{
tipo="Acima do ideal"
target="12-15%"
tempo="6+ meses"
}

document.getElementById("type").innerText = tipo
document.getElementById("target").innerText = target
document.getElementById("time").innerText = tempo
