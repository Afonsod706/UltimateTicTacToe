import React, { useState } from "react";
import "./CSS/menu.css";
import click from "./constants/switch-sound.mp3";
import dobleclick from "./constants/ding-sound-effect_1_0gpHFnw.mp3";
export const Menu = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const onClick=new Audio(click);
  const Click=new Audio(dobleclick);
  
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    onClick.play();
 
  }
  
  function handleDoubleClick() {
    props.teste(selectedOption);
    Click.play();
  }
  return (
    <div className="container" onDoubleClick={handleDoubleClick}>
      <input
        className="input-btn"
        type="radio"
        id="valueIs-1"
        name="valueIs-radio"
        value="single_play"
        checked={selectedOption === "single_play"}
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-1">
        <span className="span"></span>
        <span className="txt">JOGADOR VS CPU</span>
      </label>

      <input
        className="input-btn"
        type="radio"
        id="valueIs-2"
        name="valueIs-radio"
        value="multi_play"
        checked={selectedOption === "multi_play"}
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-2">
        <span className="span"></span>
        <span className="txt">MULTIJOGADOR</span>
      </label>

      <input
        className="input-btn"
        type="radio"
        id="valueIs-3"
        name="valueIs-radio"
        value="about"
        checked={selectedOption === "about"}
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-3">
        <span className="span"></span>
        <span className="txt">SOBRE</span>
      </label>

      <input
        className="input-btn"
        type="radio"
        id="valueIs-4"
        name="valueIs-radio"
        value="exit"
        checked={selectedOption === "exit"}
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-4">
        <span className="span"></span>
        <span className="txt">SAIR</span>
      </label>
    </div>
  );
};
