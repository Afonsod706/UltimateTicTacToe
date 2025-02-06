import React, { useEffect, useState } from "react";
import MiniGame from "./mini-board/MiniGame";
import GamePanel from "./GamePanel";
import { Nome } from "./Nome";
import Ganhou from "./constants/samus-victory-theme.mp3";
import "./CSS/GameFull.css";
import click from "./constants/p-hub-intro.mp3";
const GameFull = ({ menu, stateMenu }) => {
  const menuClick = new Audio(click);
  //banda sonora de campeão
  const won = new Audio(Ganhou);
  // serve para mudar o compomente nome para o compomente do jogo em si
  const [jogo, setJogo] = useState(false);
  //serve para guardar o tempo do jogo incical
  const [initialTime, setInitialTime] = useState("");
  // Estado para controlar qual jogador está ativo
  const [activePlayer, setActivePlayer] = useState(" ");
  const [activeGame, setActiveGame] = useState("pause");
  //exibe vencedor no painel
  const [winner, setWinner] = useState("");
  //tempo de cada jogado
  const [player1Time, setPlayer1Time] = useState(); // 3 minutos em segundos
  const [player2Time, setPlayer2Time] = useState(); // 3 minutos em segundos
  //nome dos jogadores
  const [playerName, setPlayerName] = useState({
    jogador1: " ",
    jogador2: " ",
  });

  //serve para decrementar o tempo
  useEffect(() => {
    if (activeGame === "pause" || activeGame === "gameover") {
      return;
    } else {
      const time = setInterval(() => {
        if (activePlayer === "X" && player1Time > 0) {
          setPlayer1Time((decrementa) => decrementa - 1);
        } else if (activePlayer === "O" && player2Time > 0) {
          setPlayer2Time((decrementa) => decrementa - 1);
        }
      }, 1000);
      return () => {
        clearInterval(time);
      };
    }
  }, [activePlayer, player1Time, player2Time]);

  useEffect(() => {
    if (player1Time === 0 || player2Time === 0) {
      setActiveGame("gameover");
      setActivePlayer(null);
      if (player1Time === 0) {
        setWinner(player2Time > 0 ? "O" : "empate");
        console.log("estado do winner no useeffect: " + winner);
        //reproduzir som
        won.play();
      } else if (player2Time === 0) {
        setWinner(player1Time > 0 ? "X" : "empate");
        console.log("estado do winner no useeffect: " + winner);
        //reproduzir som
        won.play();
        won.currentTime = 0;
      }
    }
    console.log("vencedor em casado de empate:" + winner);
  }, [player1Time, player2Time]);
  // Função para selecionar aleatoriamente o jogador inicial
  function randomPlayer() {
    const players = ["X", "O"];
    const indexRandom = Math.floor(Math.random() * players.length);
    return players[indexRandom];
  }
  //função serve para posição de jogadores aleatorios
  function InputNameRandom(name1, name2, time) {
    let players = playerName;
    setPlayer1Time(time * 60);
    setPlayer2Time(time * 60);
    setInitialTime(time * 60);
    setJogo(true);
    const indexRandom = Math.floor(Math.random() * Object.keys(players).length);

    players = {
      jogador1: indexRandom === 0 ? name2 : name1,
      jogador2: indexRandom === 0 ? name1 : name2,
    };
    //atualiza nome dos jogadores
    setPlayerName(players);
    console.log(
      "depois jogador1:" +
        players.jogador1 +
        " depois jogador2:" +
        players.jogador2
    );
  }

  function startGame() {
    if (activeGame === "pause" || activeGame === "gameover") {
      if (playerName.jogador1 !== " " && playerName.jogador2 !== " ") {
        //definir o jogador inicial ao montar o componente
        const inicialPlayer = randomPlayer();
        setActivePlayer(inicialPlayer);
        setWinner(null);
        setPlayer1Time(initialTime);
        setPlayer2Time(initialTime);
        setActiveGame("play");
        won.pause(won);
      }
    }
  }
  function stopGame() {
    setActiveGame("gameover");
  }
  //função para voltar a menun principal
  function menuPrincipal(opcao) {
    if (opcao === true) {
      menuClick.play();
      stateMenu("wait");
      stopGame();
    }
  }

  function nextPlay() {
    if (activeGame === "gameover") {
      console.log("ja não há proximo jogador");
      setActivePlayer(null);
      return;
    } else if (activeGame === "play") {
      // Altera o jogador ativo para o próximo jogador
      setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }
  }

  // Função para formatar o tempo no formato mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  //função que exibi vencedor do jogo
  function gameOver(Winner, empate, SquareMiniGame) {
    if (Winner === "X") {
      setWinner("X");
      console.log("vencedor é o jogador 1");
      setActiveGame("gameover");
    } else if (Winner === "O") {
      setWinner("O");
      console.log("vencedor é o jogador 2");
      setActiveGame("gameover");
    } else if (empate) {
      let contX = 0;
      let contO = 0;
      for (let index = 0; index < SquareMiniGame.length; index++) {
        if (SquareMiniGame[index] === "X") {
          contX = contX + 1;
        } else if (SquareMiniGame[index] === "O") {
          contO = contO + 1;
        }
      }
      if (contX > contO) {
        setWinner("X");
      } else if (contO > contX) {
        setWinner("O");
      } else {
        setWinner("empate");
      }

      setActiveGame("gameover");
      console.log("jogo ficou empatado e quem venceu o jogo foi:" + winner);
    }
  }

  return (
    <div className="gameFull">
      {/* <Header /> */}
      {!jogo && <Nome InputNameRandom={InputNameRandom} menu={menu} />}

      {jogo && (
        <GamePanel
          playerName={playerName}
          activePlayer={activePlayer}
          nextPlay={activePlayer}
          player1Time={formatTime(player1Time)}
          player2Time={formatTime(player2Time)}
          startGame={startGame}
          winnerFull={winner}
          activeGame={activeGame}
          stopGame={stopGame}
          menuPrincipal={menuPrincipal}
        />
      )}

      {jogo && (
        <MiniGame
          playerName={playerName}
          activePlayer={activePlayer}
          nextPlay={nextPlay}
          WinnerFull={winner}
          activeGame={activeGame}
          gameOver={gameOver}
          menu={menu}
        />
      )}
    </div>
  );
};

export default GameFull;
