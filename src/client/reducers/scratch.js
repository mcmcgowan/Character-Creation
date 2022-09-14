
function rollXDrop1(numDice, sides){
    const roll = [];

    let currMin = Infinity;
    let currMinInd;
    let sum = 0;

    function randomDice(sides){
        const roll = Math.floor(Math.random()*(sides)+1);
        return roll;
    }

    for (let i = 0; i < numDice; i ++){
        const value = randomDice(sides);
        
        roll.push( {
            value,
            color: 'green'
        });
        if (value < currMin) {
            currMin = value;
            currMinInd = i
        }
    }
    roll[currMinInd].color = "red";

    roll.map(ele => {
        if (ele.color === "green") sum += ele.value
    });

    const rollAndSumObj = {
        dice: roll,
        sum
    }
    
    return rollAndSumObj;
}

export default rollXDrop1;