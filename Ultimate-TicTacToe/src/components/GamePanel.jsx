import React from "react";
import "./CSS/GamePanel.css";
import player1 from "./constants/cristianoPlay.png";
import player2 from "./constants/messiPlay.png";
// import campeao from './constants/campeao.gif'
import empate from "./constants/amigos.png";
const GamePanel = ({
  playerName,
  nextPlay,
  player1Time,
  player2Time,
  startGame,
  winnerFull,
  activeGame,
  stopGame,
  menuPrincipal
}) => {
  return (
    <div>
      <div className="panel-container">
        <div className="panel_game">
          <div className="panel">
            <div className="header_player">
              <h1 id="player-name" className="vermelho">
                {playerName.jogador1}{" "}
              </h1>
              <img
                src={player1}
                style={{ width: 90, height: 90 }}
                alt="Campeão"
              />
              <img
                src={player2}
                style={{ width: 80, height: 80 }}
                alt="Campeão"
              />
              <h1 id="player-name" className="azul">
                {playerName.jogador2}
              </h1>
            </div>
            <div className="timer">
              <h3 id="player-time">
                time: <span>{player1Time}</span>
              </h3>
              <h3 id="player-time">
                time: <span>{player2Time}</span>
              </h3>
            </div>
            <div className="nextplay_div">
              <button className="bt">
                <div
                  className={`button-holder borderX ${
                    winnerFull === "X" ? "winnerX" : " "
                  }`}
                >
                  <span
                    className={`nextplay ${
                      winnerFull === "X"
                        ? "vermelho"
                        : nextPlay === "X"
                        ? "vermelho"
                        : " "
                    }`}
                  >
                    X
                  </span>
                </div>
              </button>
              <h1 id="next-player" className="cor">
                {winnerFull ?winnerFull==='empate'? <img
                    src={empate}
                    style={{ width: 120, height: 120 }}
                    alt="Campeão"
                  /> : "Campeão:" : "Próximo jogador"}{" "}
                {winnerFull === "X" ? (
                  <img
                    src={player1}
                    style={{ width: 90, height: 90 }}
                    alt="Campeão"
                  />
                ) : winnerFull === "O" ? (
                  <img
                    src={player2}
                    style={{ width: 80, height: 80 }}
                    alt="Campeão"
                  />
                ) : (
                  ""
                )}
              </h1>

              <button className="bt">
                <div
                  className={`button-holder borderO ${
                    winnerFull === "O" ? "winnerO" : " "
                  }`}
                >
                  <span
                    className={`nextplay ${
                      winnerFull === "O"
                        ? "azul"
                        : nextPlay === "O"
                        ? "azul"
                        : " "
                    }`}
                  >
                    O
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="button-painel">

<button
  className="button-menuPrincipal " id="start-button"
  onClick={activeGame === "play" ? stopGame : startGame}
>
  {activeGame === "play" ? "Termanar Jogo" : "novo Jogo"}
</button>

<button className="button-menuPrincipal" onClick={()=>menuPrincipal(true)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    ></path>
  </svg>
  <span>Menu Principal</span>
</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
