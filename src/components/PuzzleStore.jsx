/* eslint-disable */
import words from '../assets/words.json';

import { useEffect, useState } from "react";
import GuessTable from "./GuessTable";
import Keyboard from './Keyboard';


export default function PuzzleStore({itemNo, setGuessed, currentGuess, setCurrentGuess}) {
    
    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState(['','','','','','']);

    const guessLimit = 6;
    
    useEffect(() => {
        setWord(words[itemNo]);
        setGuesses(['','','','','','']);
        setCurrentGuess(0);   
    }, [itemNo]);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
    
        return() => {
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, [word, guesses, currentGuess]);


    function submitGuess() {
        if (guesses[currentGuess].length === word.length) {
            if(guesses[currentGuess] === word)
                setGuessed(true);
            setCurrentGuess(currentGuess + 1);
        }
       
    }

    function won() {
        if(guesses[currentGuess - 1] === word)
            setGuessed(true);
        return guesses[currentGuess - 1] === word
    }

    function lost () {
        return currentGuess >= guessLimit
    }

    function handleKeyUp (e) {
        if(currentGuess === guessLimit) return;
        let current = [...guesses];

        if(won() || lost()){
            return
        }
        
        if(e.key === "Enter"){
            return submitGuess()
        }
        
        if(e.key === "Backspace"){
            
            current[currentGuess] = current[currentGuess]
                .slice(0, current[currentGuess].length - 1);

            setGuesses(current)
            return;
        }
        
        if(current[currentGuess].length < word.length && e.key.match(/[a-z]/)){
            current[currentGuess] = current[currentGuess] + e.key.toUpperCase()
            setGuesses(current)
        }
    }

    function allGuesses() {
        return guesses.slice(0, currentGuess).join('').split('')
    }

    function exactGuesses() {
        return (
            word
            .split('')
            // if any guesses include this letter in this position/index
            .filter((letter, i) => {
                return guesses
                .slice(0, currentGuess)
                .map((word) => word[i])
                .includes(letter)
            })
        )
    }

    function inexactGuesses() {
        return word
            .split('')
            .filter((letter) => allGuesses().includes(letter))
    
    };

    function clickEvent(e){
        if(currentGuess === guessLimit) return;
        let current = [...guesses];

        if(won() || lost()){
            return
        }

        if(e === "Enter"){
            return submitGuess()
        }
        
        if(e === "Backspace"){
            
            current[currentGuess] = current[currentGuess]
                .slice(0, current[currentGuess].length - 1);

            setGuesses(current)
            return;
        }
        
        if(current[currentGuess].length < word.length && e.match(/[a-z]/)){
            current[currentGuess] = current[currentGuess] + e.toUpperCase()
            setGuesses(current)
        }
    }

    return(
        <div className='flex flex-col gap-2 w-full h-full'>
            <div className='flex flex-col gap-3'>
                {guesses.map((_, i) => {
                    return (
                    <GuessTable key={i} word={word} guess={guesses[i]} isGuessed={ i < currentGuess }/>
                    );
                })}
              
                <Keyboard exactGuesses={exactGuesses} inexactGuesses={inexactGuesses} allGuesses={allGuesses} keyboardEvent={clickEvent}/> 
            </div>

        </div>
    );
}