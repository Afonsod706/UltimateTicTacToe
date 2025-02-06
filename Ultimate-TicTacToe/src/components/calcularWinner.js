 
 
 // Função para calcular o vencedor do jogo
export function calcularWinner(square) {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }
  
    return null;
  }