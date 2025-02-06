import React from 'react'
import './CSS/About.css'
import dobleclick from "./constants/p-hub-intro.mp3";
const click=new Audio(dobleclick);
const About = (props) => {
  function handleDoubleClick() {
    click.play()
    props.voltar("wait");
  }
  return (
    <div className='about'>
        <h1>Regras do jogo Ultimate Tic Tac Toe</h1>

<div class="component">
  <div class="component-title">
  <p>O Ultimate Tic-Tac-Toe é uma variante completa jogo do galo, <br />jogado em um tabuleiro composto por 9 mini-tabuleiros do jogo do galo,<br /> dispostos em uma grelha 3x3. <br /> O objetivo do jogo é fazer 3 em linha (horizontal, vertical ou diagonal) no tabuleiro geral, <br />ganhando os mini-tabuleiros individuais para alcançar essa vitória.</p>
        <p>O jogo é jogado alternadamente entre dois jogadores até que um deles vença ou ocorra um empate.</p>
        <p>Cada mini-tabuleiro é vencido quando um jogador consegue fazer 3 em linha nele. <br /> </p>
        <p>O jogador que conseguir fazer 3 em linha no tabuleiro geral é declarado o vencedor do jogo. <br /> Em caso de empate no tabuleiro geral, a vitória é concedida ao jogador com mais mini-tabuleiros vencidos. <br />E caso o tempo de um dos jogadores acabar a vitoria pertence ao jogador que tiver tempo restante</p>
        <p>Quando um jogador faz sua jogada em um mini-tabuleiro, o próximo jogador deve fazer sua jogada no mini-tabuleiro <br />correspondente à célula em que o adversário jogou.  Se esse mini-tabuleiro já estiver vencido ou empatado, <br /> a escolha do proximo tabuleiro é aleatorio</p>
       
  </div>
</div>

<div class="component">
  <div class="component-title">
  <p>Sendo assim, o jogo  oferece as seguintes funcionalidades:</p>
        <ul>
          <li>Solicitar o nome dos jogadores</li>
          <li>Decidir de forma aleatória o primeiro jogador e o símbolo associado</li>
          <li>Apresentar o tabuleiro geral de jogo</li>
          <li>Identificar o jogador que deve efetuar a jogada</li>
          <li>Permitir a seleção da posição no mini-tabuleiro usando o mouse</li>
          <li>Escolha do mini-tabuleiro em que se joga,determinada pela jogada anterior do adversário</li>
          <li>Identificação clara do vencedor de um mini-tabuleiro</li>
          <li>Bloquear mini-tabuleiros já finalizados</li>
          <li>Dois níveis de jogo: 1 contra 1 jogador e 1 contra computador</li>
          <li>Tempo de jogo limitado, sendo o vencedor quem tiver mais vitórias dos mini-tabuleiros</li>
          <li>Identificação do fim do jogo quando todos os mini-tabuleiros estiverem concluídos</li>
          <li>Permitir jogar novamente</li>
        </ul>
  </div>
  <button className='buttonV' onClick={handleDoubleClick}> Voltar
</button>
</div>




    </div>
  )
}

export default About