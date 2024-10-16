let resultado = saldoVitorias(150, 6);
let categoria = nivel(resultado);

console.log(
  `O Herói tem o saldo de: ${resultado} vitórias e está no nivel ${categoria}`
);

function saldoVitorias(win, loss) {
  let vitorias = win - loss;
  return vitorias;
}

function nivel(saldoVitorias) {
  switch (true) {
    case saldoVitorias <= 10:
      return "Ferro";
    case saldoVitorias > 11 && saldoVitorias < 20:
      return "Bronze";
    case saldoVitorias > 21 && saldoVitorias < 50:
      return "Prata";
    case saldoVitorias > 51 && saldoVitorias < 80:
      return "Ouro";
    case saldoVitorias > 81 && saldoVitorias < 90:
      return "Diamante";
    case saldoVitorias > 91 && saldoVitorias < 100:
      return "Lendário";
    case saldoVitorias >= 101:
      return "Imortal";
  }
}
