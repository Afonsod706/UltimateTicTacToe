import React from 'react'
import '../CSS/square.css'
const Square = ({value,onteste,activeSquare,winner,player,CPU}) => {

//console.log('valor do activo no quadrado: '+ activeSquare)
function handleWinnerColor(winner) {
  if(winner==='X')
  return 'closeX'
 else if(winner==='O')
  return 'closeO'
}

function handleActiveChange(activeSquare) {
  if(activeSquare===true && CPU!==player){
    return false
  }else{
    return true
  }
}

function handleSlideChange(winner,player) {
  if(winner!==null && activeSquare!==true)
  return null
  else if(player==='X' && CPU!==player)
  return 'closeX'
  else if(player==='O' && CPU!==player)
  return 'closeO'

}

  return (
    <div>
           <button className='quadrado ' onClick={onteste} disabled={handleActiveChange(activeSquare)} >
          <span className={`quadrado_lg ${activeSquare===true ?'ative':activeSquare==='close'?handleWinnerColor(winner): 'disabled'} `}>
            
            <span className={`quadrado_sl  ${activeSquare===true ?handleSlideChange(winner,player):' '}`}></span>
            <span className="quadrado_text " >{value}</span>
          </span>
        </button>
    </div>
  )
}

export default Square