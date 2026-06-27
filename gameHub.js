const randomNumber = Math.floor(Math.random() * 100);

function guessNumber(number){
    const guess = number;

    if (guess == randomNumber){
        return `You guessed: ${guess}. The computer chose: ${randomNumber}. You Win!`
    }else if(guess > randomNumber){
        return `You guessed: ${guess}. The computer chose ${randomNumber}. Too High!`
    }else if(guess < randomNumber){
        return `You guessed: ${guess}. The computer chose ${randomNumber}. Too Low!`
    }
    return randomNumber ;

}
console.log(guessNumber(5))
console.log(guessNumber(29))
console.log(guessNumber(1))
console.log(guessNumber(69))
console.log(guessNumber(91))
console.log(guessNumber(77))