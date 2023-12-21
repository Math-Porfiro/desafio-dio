// Desafio DIO (Java Script)

// Função para calcular o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal"
    } else {
        nivel = "Nível não identificado"
    }

    // Retorna o resultado
    return {
        saldoVitorias,
        nivel
    }
}

// Numere seu placar de vitórias e derrotas
let vitorias = 95
let derrotas = 17

const resultado = calcularNivel(vitorias, derrotas)

// Mensagem exibida ao final
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`)
