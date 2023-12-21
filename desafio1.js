// Desafio DIO (Java Script)

// Defina o nome e a quantidade de experiência (XP) do herói
const nomeDoHeroi = "Math-Porfirio"
let xpDoHeroi = 2600 // Altere esse valor para testar diferentes níveis
let nivelDoHeroi;

if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro"
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze"
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata"
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro"
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina"
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal"
} else if (xpDoHeroi >= 10001) {
    nivelDoHeroi = "Radiante"
}else {
    nivelDoHeroi = "Nível não identificado"
}

// Mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)
