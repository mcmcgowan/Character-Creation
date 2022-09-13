
function rollXDrop1(numDice, sides){
    const roll4 = {};

    let currMin = Infinity;
    let currMinInd;
    let sum = 0;

    function randomDice(sides){
        const roll = Math.floor(Math.random()*(sides)+1);
        return roll;
    }

    for (let i = 0; i < numDice; i ++){
        roll4[i] = {
            value: randomDice(sides),
            color: 'green'
        }
        if (roll4[i].value < currMin) {
            currMin = roll4[i].value;
            currMinInd = i
        }
    }

    roll4[currMinInd].color = "red";

    for (let key in roll4) {
        if (roll4[key].color === "green") sum += roll4[key].value
    } 

    roll4.sum = sum;
    
    return roll4;
}



console.log(rollXDrop1(4,6))
