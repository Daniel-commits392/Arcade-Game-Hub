 // GUESS THE NUMBER

const randomNumber = Math.floor(Math.random() * 100 + 1);

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
console.log(guessNumber(62))
const year = 1513;


// DICE ROLLER

function diceRoller(){
    const dice1 = Math.floor(Math.random() * 6 + 1); // produces the number 1,2,3,4,5,6
    const dice2 = Math.floor(Math.random() * 6 + 1) ;

    const total = dice1 + dice2
    if(total <= 6){
        return ` 🎲 dice 1: ${dice1} , 🎲 dice 2:${dice2} , Total: ${total}; Low Roll`
    }
    else if(total === 7){
        return ` 🎲 dice 1: ${dice1} , 🎲 dice 2:${dice2} , Total: ${total}; Lucky Seven!`
    }
    else if(dice1 == dice2){
        return `🎲 dice 1:${dice1}, 🎲 dice 2:${dice2}, Total: ${total}; 🎉 DOUBLE!`
    }
    else{
        return `🎲 dice 1: ${dice1} 🎲 dice 2:${dice2}  Total: ${total} ;High Roll`;
    }

}
console.log(diceRoller())