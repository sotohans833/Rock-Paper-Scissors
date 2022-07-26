function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function choose(chosen){
    let result = "";
    if(chosen == 1){
        result = "Rock";
    }else if(chosen == 2){
        result = "Paper";
    }else if(chosen == 3){
        result = "Scissors";
    }else{
        result = "Sorry, choice not available";
    }
    return result;
}
let player = 0;
let pc = 0;
let victories = 0;
let lost = 0;

while(victories < 3 && lost<3){
    pc = random(1, 3);
    player = prompt("If you want to play with rock choose 1, paper 2, scissors 3");
    alert(`You chose ${choose(player)}`);
    //printing the pc choice
    alert(`PC chose ${choose(pc)}`);

    //printing the result
    if(player ==  pc){
        alert("you tied");
    }else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
        alert("you won");
        victories = victories + 1;
    }else{
        alert("sorry, you lost");
        lost = lost + 1;
    }
}

alert(`You won ${victories} times but lost ${lost} times`);