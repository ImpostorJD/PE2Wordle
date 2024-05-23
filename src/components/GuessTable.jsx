/* eslint-disable */
export default function GuessTable({word, guess, isGuessed}){
    return (
        <div className="w-full flex justify-center gap-2">
            {
                new Array(word.length).fill(0).map((_, i) =>{
                    const bgColor = !isGuessed ? 'bg-black' :
                    guess[i] === word[i] ? 'bg-green-600':
                    word.includes(guess[i]) ? 'bg-amber-500':
                    'bg-black'
                    return (
                        <div key={i} className={"flex justify-center text-white border-white font-bold p-2 items-center uppercase border-[1px] rounded-md h-16 w-16" + " " + bgColor}>
                            {guess[i]}
                        </div>
                    );
                })
            }
        </div>
    );
}