import React, { useState } from "react";
import "./CSS/nome.css";
// import som from '../constants/switch-sound.mp3'

export const Nome = ({ InputNameRandom, menu }) => {
  const [timer, setTimer] = useState();
  const [jogador, setJogador] = useState({ jogador1: "", jogador2: "CPU" });
  // const audio= new Audio(som)
  function teste() {
    if (menu === 2) {
      if (jogador.jogador1 !== "" && jogador.jogador2 !== "" && timer > 0) {
        InputNameRandom(jogador.jogador1, jogador.jogador2, timer);
      } else {
        alert("digite os nomes do jogadores e o tempo de jogo");
      }
    } else if (menu === 1) {
      if (jogador.jogador1 !== "" && jogador.jogador2 !== "" && timer > 0) {
        InputNameRandom(jogador.jogador1, jogador.jogador2, timer);
      } else {
        alert("digite o nome do jogador e o tempo de jogo");
      }
    }

    //  audio.play()
  }
  return (
    <div className="nome">
      <div className="header-nome">
        <h2>Jogadores</h2>
      </div>

      <div className="input">
        <div className="inputContainer">
          <input
            required="required"
            id="inputField"
            placeholder="Player 1"
            type="text"
            onChange={(e) => {
              setJogador({ ...jogador, jogador1: e.target.value });
            }}
          />
          <label className="usernameLabel" htmlFor="inputField">
            {jogador.jogador1}
          </label>
          <svg viewBox="0 0 448 512" className="userIcon">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
          </svg>
        </div>
        {menu === 2 && (
          <div className="inputContainer">
            <input
              required="required"
              id="inputField"
              placeholder="Player2"
              type="text"
              onChange={(e) => {
                setJogador({ ...jogador, jogador2: e.target.value });
              }}
            />
            <label className="usernameLabel" htmlFor="inputField">
              {jogador.jogador2}
            </label>
            <svg viewBox="0 0 448 512" className="userIcon">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
            </svg>
          </div>
        )}
        <div className="inputContainer">
          <input
            required="required"
            id="inputField"
            placeholder="Time Game"
            type="number"
            
            min={1}
            onChange={(e) => {
              setTimer(e.target.value);
            }}
          />
          <label className="usernameLabel" htmlFor="inputField">
            {timer} Minuto
          </label>

          <svg
            className="iconTime"
            viewBox="-0.72 -0.72 25.44 25.44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#005fb8"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#09b3ec"
              strokeWidth="0.624"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 8V12L15 15"
                stroke="rgb(155, 78, 255)"
                strokeWidth="2.4"
                strokeLinecap="round"
              ></path>{" "}
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="rgb(155, 78, 255)"
                strokeWidth="2.4"
              ></circle>{" "}
            </g>
          </svg>
        </div>
      </div>
      <button className="button-iniciar" onClick={teste}>
        <span>Iniciar</span>
      </button>
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 50.000000 50.000000"
        height="50.000000pt"
        width="50.000000pt"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className="GameIcon"
      >
        <g
          stroke="none"
          // fill="#ff5858"
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        >
          <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
        </g>
      </svg>
    </div>
  );
};
