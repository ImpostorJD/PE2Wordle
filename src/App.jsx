/* eslint-disable */
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import PuzzleStore from './components/PuzzleStore'
import { useEffect, useState } from 'react';

function App() {
  
  const [level, setLevel] = useState(0);
  const [startGame, setGame] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(0);

  useEffect(() => {
    let levelCurrent = JSON.parse(localStorage.getItem('level'))

    if(levelCurrent){
      setLevel(levelCurrent);
    }else{
      localStorage.setItem('level', 0);
    }
  }, [])


  return (
    <div className="flex flex-col gap-5 w-[100vw] bg-slate-900 p-2">
        <div className='text-uppercase w-full flex bg-clip-text justify-center p-2 text-transparent bg-gradient-to-br from-blue-400  to-green-200 text-[2rem] font-bold border-b-white border-b-[2px] h-fit'>
          GUESS THE WORD
        </div>
        <div className='flex flex-col gap-3 flex-auto'>
         {
           !startGame ? 
            <div className='flex flex-col gap-2 justify-center items-center h-full w-full p-2'>
              <div className='flex items-end w-full h-full justify-center'>
                <button className='bg-gradient-to-b from-blue-400 to-green-500 rounded-sm text-slate-800 px-4 py-2 text-[1.66rem]' onClick={()=>setGame(true)}>
                      Start Game
                </button>
              </div>
            </div>
            :
            <div className='flex flex-col gap-2'>
              <div className='flex justify-center text-white'>
                <span className='font-bold me-2'>Stage Level: </span> { level + 1 }/5  
              </div>
              <PuzzleStore itemNo={level} setGuessed={setGuessed} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
              {
                guessed && level < 5 &&
                <div className='flex items-end w-full h-full justify-center'>

                  <button className='bg-gradient-to-b from-blue-400 to-green-500 rounded-sm text-slate-800 px-4 py-2 text-[1.66rem]' onClick={() => {
                      let levelCurrent = JSON.parse(localStorage.getItem('level'))

                      if(levelCurrent < 5){
                        levelCurrent++;
                        setLevel(levelCurrent);
                        localStorage.setItem('level', levelCurrent);
                        setCurrentGuess(0);
                        setGuessed(false);
                      }

                  }}>
                        Next Level
                  </button>
                </div>
              }
            </div>
         }
        </div>
       
    </div>
  )
}

export default App
