import {getInput} from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("1", "_part1"));
    solutionPart2(getInput("1", "_part2"));
}

function solutionPart1(input: string[]) {
    let totalValues = 0;

    for(let i = 0; i < input.length; i++) {
        // We search left to right and right to left for a int in the string
        let LEFT_TO_RIGHT = 0;
        let RIGHT_TO_LEFT = input[i].length - 1;

        let leftInt = -1;
        let rightInt = -1;

        while (leftInt === -1 || rightInt === -1) {
            if(leftInt === -1) {
                if(input[i][LEFT_TO_RIGHT] >= '0' && input[i][LEFT_TO_RIGHT] <= '9') {
                    leftInt = parseInt(input[i][LEFT_TO_RIGHT]);
                }
            }

            if(rightInt === -1) {
                if(input[i][RIGHT_TO_LEFT] >= '0' && input[i][RIGHT_TO_LEFT] <= '9') {
                    rightInt = parseInt(input[i][RIGHT_TO_LEFT]);
                }
            }

            LEFT_TO_RIGHT++;
            RIGHT_TO_LEFT--;
        }

        let colapseValue = parseInt("" + leftInt + rightInt);
        totalValues += colapseValue;
    }

    console.log(totalValues);
}

function solutionPart2(input: string[]) {
    let totalValues = 0;

    let mapToReplaceInInput = new Map();

    mapToReplaceInInput.set('nine', '9');
    mapToReplaceInInput.set('eight', '8');
    mapToReplaceInInput.set('seven', '7');
    mapToReplaceInInput.set('six', '6');
    mapToReplaceInInput.set('five', '5');
    mapToReplaceInInput.set('four', '4');
    mapToReplaceInInput.set('three', '3');
    mapToReplaceInInput.set('two', '2');
    mapToReplaceInInput.set('one', '1');

    const startLetters = ['n', 'e', 's', 'w', 'f', 't', 'o'];

    for(let i = 0; i < input.length; i++) {
        const line = input[i];
        // We search left to right and right to left for a int in the string
        let LEFT_TO_RIGHT = 0;
        let RIGHT_TO_LEFT = input[i].length - 1;

        let leftInt = -1;
        let rightInt = -1;

        while (leftInt === -1 || rightInt === -1) {
            if(leftInt === -1) {
                if(line[LEFT_TO_RIGHT] >= '0' && line[LEFT_TO_RIGHT] <= '9') {
                    leftInt = parseInt(line[LEFT_TO_RIGHT]);
                }
                else if (startLetters.includes(line[LEFT_TO_RIGHT])) {
                    const word = line.substring(LEFT_TO_RIGHT, line.length);
                    mapToReplaceInInput.forEach((value, key) => {
                        if (word.startsWith(key)) {
                            leftInt = parseInt(value);
                        }
                    });
                }

            }

            if(rightInt === -1) {
                if(line[RIGHT_TO_LEFT] >= '0' && line[RIGHT_TO_LEFT] <= '9') {
                    rightInt = parseInt(line[RIGHT_TO_LEFT]);
                }
                else if (startLetters.includes(line[RIGHT_TO_LEFT])) {
                    const word = line.substring(RIGHT_TO_LEFT, line.length);
                    mapToReplaceInInput.forEach((value, key) => {
                        if (word.startsWith(key)) {
                            rightInt = parseInt(value);
                        }
                    });
                }
            }

            LEFT_TO_RIGHT++;
            RIGHT_TO_LEFT--;
        }

        const colapseValue = parseInt("" + leftInt + rightInt);

        totalValues += colapseValue;
    }

    console.log(totalValues);
}