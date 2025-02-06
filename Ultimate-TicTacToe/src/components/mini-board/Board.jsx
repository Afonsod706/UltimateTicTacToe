import React, { useEffect, useState } from "react";
import "../CSS/board.css";
import Square from "./Square";
import som from "../constants/faustao-errou.mp3";
import click from "../constants/switch-sound.mp3";
import { calcularWinner } from "../calcularWinner";

const Board = (props) => {
  // Constantes
  const CPU=props.CPU
  const menu=props.menu
  const activeGame = props.activeGame
  const audio = new Audio(som) ;
  const winnerFull=props.winnerFull
  const onClick=new Audio(click);
  const valor = props.value;
  const active = props.active;
  const boardWinner = props.winner; // posição da mini tabela
  const player = props.nextPlay;
  const [square, setSquare] = useState(Array(9).fill(null));
// Constante para definir o símbolo do jogador automático
const jogadorAutomatico = CPU; // ou "X"

// Função para fazer a jogada automática do jogador
function jogadaAutomatica() {
  if (activeGame === "play" && menu===1 && !winnerFull && player === jogadorAutomatico && active===true) {
    console.log('jogador automatico')
    const quadradosDisponiveis = [];
    for (let i = 0; i < square.length; i++) {
      if (!square[i]) {
        quadradosDisponiveis.push(i);
      }
    }
    setTimeout(()=>{
      onClick.play();
      const randomIndex = Math.floor(Math.random() * quadradosDisponiveis.length);
      const randomPosition = quadradosDisponiveis[randomIndex];
  
      const proxSquare = square.slice();
      proxSquare[randomPosition] = jogadorAutomatico;
  
      const winner = calcularWinner(proxSquare);
      valor(randomPosition, winner, boardWinner, proxSquare);
      setSquare(proxSquare);
    },2000)
  }
}

// Chamada da função jogadaAutomatica
useEffect(() => {
  jogadaAutomatica();
}, [player, activeGame, active]);


  useEffect(() => {
    const aux = square;
      console.log(aux);

     if (activeGame === "play") {

      console.log("colocando a null o quadrado ")
      for (let index = 0; index < aux.length; index++) {
        aux[index] = null;
        setSquare(aux)
      }
    }
    console.log('tabela secundaria: '+ aux)
    
    console.log("foi chamado a efeito activeGame o board");
  }, [activeGame]);

  // Função chamada quando um quadrado é clicado
  function teste(i) {

    if(onClick){
      console.log('audio reiniciado')
      onClick.currentTime=0
      onClick.play();
    }else{
      onClick.play();

    }
   // console.log("clicou no quadrado");
    const proxSquare = square.slice();

    // Verifica se já há um vencedor ou se o quadrado já está preenchido
    if (calcularWinner(proxSquare) || proxSquare[i]) {
      console.log('vencedor da tabela: '+ boardWinner);
      return;
    }

    // Função para verificar se a tabela está completamente preenchida
  
// Verifica se é a vez do jogador X ou do jogador O e atualiza o valor do quadrado clicado.
if(!winnerFull){
  if (player === "X") {
    proxSquare[i] = "X";

    console.log("quadrado preenchido com " + player );
  } else if(player==='O') {
    proxSquare[i] = "O";

    console.log("quadrado preenchido com " + player );
  }

}

    const winner = calcularWinner(proxSquare);
    valor(i, winner, boardWinner, proxSquare);
    setSquare(proxSquare);
  }

  // Função chamada quando o mouse está sobre um quadrado desativado
  function teste2() {
    if (!active) {
      console.log("zona desativada");
      audio.play();
    }else if(active==='close'){
      console.log("zona desativada com close");
    }
  }
  
  const winner = calcularWinner(square); /// serve para preencher com a cor adequada o tabuleiro todo com o vencedor

  return (
    <div className="Board-container" onClick={teste2}>
      {[0, 1, 2].map((row) => {
        return (
          <div className="square-row" key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                winner={winner}
                  key={index}
                  value={square[index]}
                  player={player}
                  onteste={() => teste(index)}
                  activeSquare={active}
                  CPU={CPU}
                />
              );
            })}
          </div>
        );
      })}
     
    </div>
  );
};

export default Board;
