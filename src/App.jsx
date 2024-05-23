/* eslint-disable */
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import PuzzleStore from './components/PuzzleStore'

function App() {
  
  return (
    <div className="flex flex-col gap-5 w-[100vw] h-[100vh] bg-slate-900">
        <div className='text-uppercase w-full flex bg-clip-text justify-center p-2 text-transparent bg-gradient-to-br from-blue-400  to-green-200 text-[2rem] font-bold border-b-white border-b-[2px] h-fit'>
          GUESS THE WORD
        </div>
        <div className='flex flex-col gap-3'>
          <PuzzleStore itemNo={0}/>
          
        </div>
       
    </div>
  )
}

export default App
