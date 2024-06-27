var bowlingScore = function (rolls = []) {
    let scores = 0;
    let frame = 1;
    let sum = 0;
    let roll = 0;

    const newFrame = () => {
        frame++;
        sum = 0;
        roll = 0;
    };

    rolls.forEach((val, i) => {
        scores += val;
        sum += val;
        roll++;

        if (frame < 10) {
            if (roll == 2) {
                if (sum == 10)
                    scores += rolls[i + 1];

                newFrame();
            }
            else if (roll == 1 && sum == 10) {
                scores += rolls[i + 1] + rolls[i + 2];

                newFrame();
            }
        }
    });

    return scores;
}

console.log(bowlingScore([9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9]));