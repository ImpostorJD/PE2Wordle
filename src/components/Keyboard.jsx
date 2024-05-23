/* eslint-disable */
export default function Keyboard({exactGuesses, inexactGuesses, allGuesses, keyboardEvent}) {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

  return (
    <div className="flex gap-2 flex-col">
      {qwerty.map((row) => (
        <div className="flex justify-center gap-1" key={row}>
          {row.split('').map((char) => {
            const bgColor = exactGuesses().includes(char.toUpperCase())
              ? 'bg-green-400'
              : inexactGuesses().includes(char.toUpperCase())
              ? 'bg-yellow-400'
              : allGuesses().includes(char.toUpperCase())
              ? 'bg-slate-500'
              : 'bg-slate-200';

            return (
              <div
                key={char}
                className={`rounded-md m-px flex h-10 w-10 items-center justify-center uppercase cursor-pointer ${bgColor}`}
                onClick={()=>keyboardEvent(char)}
              >
                {char}
              </div>
            )
          })}
        </div>
      ))}
      <div className="flex flex-row gap-2 justify-center">
            <div
                className='rounded-md bg-slate-200 p-2 cursor-pointer text-[1.22rem] flex items-center justify-center'
                onClick={()=>keyboardEvent("Enter")}
            >
                <i className="bi bi-send"></i>
            </div>
            <div
                className='rounded-md bg-slate-200 p-2 cursor-pointer text-[1.22rem] flex items-center justify-center'
                onClick={()=>keyboardEvent("Backspace")}
            >
                <i className="bi bi-backspace"></i>
            </div>
      </div>
    </div>
  )
}