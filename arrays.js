let wins = 150;
let losses = 5;
let campain = victories(wins, losses);
let nivel = category(campain);

console.log(`O total de vitórias é de ${campain} e o nível é ${nivel}`);

function victories(wins, losses) {
  return wins - losses; // Calcula diretamente
}

function category(victories) {
  // Definimos as faixas de vitórias e os níveis em um vetor de objetos
  const niveis = [
    { max: 10, nome: "Ferro" },
    { min: 11, max: 20, nome: "Bronze" },
    { min: 21, max: 50, nome: "Prata" },
    { min: 51, max: 80, nome: "Ouro" },
    { min: 81, max: 90, nome: "Diamante" },
    { min: 91, max: 100, nome: "Lendário" },
    { min: 101, nome: "Imortal" },
  ];

  // Percorre o vetor de níveis para encontrar a faixa correta
  for (let i = 0; i < niveis.length; i++) {
    let nivel = niveis[i];

    // Verifica se a vitória está na faixa correta
    if (!nivel.min && victories <= nivel.max) {
      return nivel.nome; // Se apenas o valor máximo é definido
    } else if (nivel.min && victories >= nivel.min && victories <= nivel.max) {
      return nivel.nome; // Se há valor mínimo e máximo
    } else if (nivel.min && !nivel.max && victories >= nivel.min) {
      return nivel.nome; // Para faixas apenas com valor mínimo
    }
  }
}
