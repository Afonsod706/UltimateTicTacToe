import React, { useEffect, useState } from "react";
import "../CSS/mini-game.css";
import Board from "./Board";
import { calcularWinner } from "../calcularWinner";
import Ganhou from "../constants/som_de_queima_de_fogos_mp3_www.mp3";
import vitoria from "../constants/cr_suuu.mp3";
const MiniGame = ({ activePlayer, nextPlay, activeGame, gameOver,winnerFull,menu, playerName}) => {
  // Estado para controlar se cada tabela está ativa ou desativada
  const [active, setActive] = useState(Array(9).fill('close'));
  //variavel de som para vencedor do jogo
  const won = new Audio(Ganhou);
  //variavel de som para vencedor de um tabuleiro
  const miniWon = new Audio(vitoria);
  // Estado para armazenar o valor de cada quadrado nas tabelas grandes
  const [bigSquare, setBigSquare] = useState(Array(9).fill(null));

  const CPU=playerName.jogador2==='CPU'?'O':playerName.jogador1==='CPU'?'X':null;
  // Função chamada quando um quadrado é clicado
  console.log('valor do CPU:'+ CPU)
  useEffect(() => {
    const aux = active;
    const bigAux=bigSquare
    if (activeGame === "play") {
      console.log('play')
      for (let index = 0; index < aux.length; index++) {
        if (aux[index] !== true) {
          aux[index] = true;
          setActive(aux);
        }
      }

    } else if (activeGame === "gameover") {

      for (let index = 0; index < aux.length; index++) {
        aux[index] = 'close';
        bigAux[index] = null;
      }
    }
    if(CPU===activePlayer && active.every((valor) => valor === true)){
      console.log('é o primeiro jogado CPU:'+ CPU)
      const indexTabela=Math.floor(Math.random()* active.length)
      const nextActive=active.map((valor,index) => index===indexTabela?true:false )
      setActive(nextActive);

    }

  }, [activeGame]);


  function value(index, winner, boardWinner, boardSquare) {
    // Console.log para saber se a tabela está fechada/preenchida
    //console.log("Tabuleiro fechado:" + closeBoard);
 
    // Copia o estado das tabelas grandes e dos quadrados ativos
    const proxSquare = bigSquare.slice();
    const nextActive = active.slice();

   
///função para verificar empate
    const tabelaPreenchida = (square) => {
      const devolve = square.every((valor) => valor !== null);
      // console.log('devolve : ' + devolve);
      return devolve;
    };


    if (winner) {
      // Define o vencedor da minitabela 
      proxSquare[boardWinner] = winner;
      nextActive[boardWinner] = "close"; // fecha a tabela para nao ficar acessivel

      miniWon.play();
    } else if (tabelaPreenchida(boardSquare)) {
      // Verifica se a tabela está completamente preenchida e a fechada
      nextActive[boardWinner] = "close";
      proxSquare[boardWinner] = "E"; // significa EMPATE
   
    }

    // Função para selecionar aleatoriamente o próximo tabuleiro ativo
    function randomBoard(posicaoClose) {
  
      for (let i = 0; i < nextActive.length; i++) {
        let index = i;
        let cont = 0;
 
        while (index === posicaoClose || nextActive[index] === "close") {
          index = Math.floor(Math.random() * nextActive.length);
          if (cont > 9) {
            return null;
          }
          cont += 1;
          //        console.log("Valor de contador: " + cont);
        }

        return index;
      }
      return;
    }

    // Verifica e calcula o vencedor da tabela grande
    const winnerBigSquare = calcularWinner(proxSquare);
    const empate = tabelaPreenchida(proxSquare);

    if (winnerBigSquare) {
      won.play();

     return gameOver(winnerBigSquare, empate, proxSquare);
    } else if (empate) {

     return gameOver(winnerBigSquare, empate, proxSquare);
    }
    
    nextPlay();
    
    let cont = 0; // variavel que serve para salvaguardar caso sobre apenas um falso
    if(activeGame==='gameover' || activePlayer===null){
      return
    }
    for (let i = 0; i < nextActive.length; i++) {
      //verifica se cada elemento não é igual a "close"
      //   console.log("Valor de nextActive antes: " + nextActive[i]);
      if (nextActive[i] !== "close") {
        nextActive[i] = false;
        cont = i; // guarda o ultimo valor false
      } 
      // console.log(
      //   "Valor de nextActive depois: " +
      //     nextActive[i] +
      //     " Valor de index: " +
      //     cont
      // );
    }

    if(activeGame!=='gameover'){
      if (nextActive[index] !== "close") {
        //verifica se o proximo tabuleiro é diferente de  'close'
  
        if (proxSquare[index] === null) {
          //ProxSquare é o array da tabela principal
          // Verifica se o tabuleiro esta preenchido(winner || empate) , se não tiver, o torna ativo
          nextActive[index] = true;
        } else {
          // Desativa o tabuleiro se já estiver preenchido
          nextActive[index] = "close";

        }
      } else if (nextActive[index] === "close") {
        if (nextActive.every((valor) => valor === "close")) {
          // Verifica se tudo está preenchido com "close"

        } else {
          // Mantém os outros quadrados no estado atual
          const posicao = randomBoard(index); //devolve de forma aleatoria o index do proximo tabuleiro se por acaso o proximo tabuleiro escolhido pelo usuario ja tiver 'close'
          const pos = posicao !== null ? posicao : cont; //verifica se posição aleatoria falhou entao returna null e a const pos fica com valor de cont que seria a false
          nextActive[pos] = true;

        }
      }

    }

    // Atualiza os estados das tabelas grandes e dos quadrados(minitabuleiro) ativos
    setActive(nextActive);
    setBigSquare(proxSquare);


  }
  return (
    <div className="miniGame">
      {[0, 1, 2].map((row) => {
        return (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Board
                  key={index}
                  value={value}
                  winner={index}
                  nextPlay={activePlayer}
                  active={activeGame==='gameover'?'close':active[index]}
                  winnerFull={winnerFull}
                  menu={menu}
                  activeGame={activeGame}
                  CPU={ playerName.jogador2==='CPU'?'O':playerName.jogador1==='CPU'?'X':null}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MiniGame;
