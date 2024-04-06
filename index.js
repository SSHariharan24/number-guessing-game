const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.prompt("please  a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("the number is too low!");
        }
        else if(guess > answer){
            window.alert("the number is too high!");
        }
        else{
            window.alert(`its correct! the answer was ${answer} , it took you ${attempts} attempts `);
            running = false;
        }
    }
    
    
}


