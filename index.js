let resultado = saldoVitorias(75, 6);
let categoria = nivel(resultado);

console.log(
  `O Herói tem o saldo de: ${resultado} vitórias e está no nivel ${categoria}`
);

function saldoVitorias(win, loss) {
  let vitorias = win - loss;
  return vitorias;
}

function nivel(saldoVitorias) {
  if (saldoVitorias <= 10) {
    return "Ferro";
  } else if (saldoVitorias > 11 && saldoVitorias < 20) {
    return "Bronze";
  } else if (saldoVitorias > 21 && saldoVitorias < 50) {
    return "Bronze";
  } else if (saldoVitorias > 51 && saldoVitorias < 80) {
    return "Ouro";
  } else if (saldoVitorias > 81 && saldoVitorias < 90) {
    return "Diamante";
  } else if (saldoVitorias > 91 && saldoVitorias < 100) {
    return "Lendário";
  } else if (saldoVitorias > 91 && saldoVitorias < 100) {
    return "Lendário";
  } else saldoVitorias >= 101;
  return "Imortal";
}
