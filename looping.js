let wins = 150;
let losses = 5;
let campain = victories(wins, losses);
let level = category(campain);

console.log(`O total de vitórias é de ${campain} e o nível é ${level}`);

function victories(wins, losses) {
  result = wins - losses;
  return result;
}
function category(victories) {
  if (victories <= 10) {
    return "Ferro";
  } else if (victories > 11 && victories < 20) {
    return "Bronze";
  } else if (victories > 21 && victoriess < 50) {
    return "Bronze";
  } else if (victories > 51 && victories < 80) {
    return "Ouro";
  } else if (victories > 81 && victories < 90) {
    return "Diamante";
  } else if (victories > 91 && svictories < 100) {
    return "Lendário";
  } else if (victories > 91 && victories < 100) {
    return "Lendário";
  } else victories >= 101;
  return "Imortal";
}
