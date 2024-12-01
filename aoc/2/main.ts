import {getInput} from "../../functions.ts";

export function solution() {
    console.log("Day 2");
    const inputPart1 = getInput("2", "_part1");
    const inputPart2 = getInput("2", "_part2");
    console.log(`Part 1: ${solutionPart1(inputPart1)}`);
    console.log(`Part 2: ${solutionPart2(inputPart2)}`);
}

function solutionPart1(input: string[]): number {
    const colorsMaxValues = {
        "red": 12,
        "green": 13,
        "blue": 14
    }
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        const cubeSets = input[i].split(":")[1].split(";");
        let cubeAlreadyAdded = false;
        for (let j = 0; j < cubeSets.length && !cubeAlreadyAdded; j++) {
            const cubeSet = cubeSets[j].split(",");
            for(let k = 0; k < cubeSet.length && !cubeAlreadyAdded; k++) {
                const split = cubeSet[k].trim().split(" ");
                const number = parseInt(split[0]);
                const color = split[1];

                // @ts-ignore
                if (number > colorsMaxValues[color]) {
                    cubeAlreadyAdded = true;
                }
            }
        }
        if(!cubeAlreadyAdded) {
            total += i + 1;
        }
    }

    return total;
}

function solutionPart2(input: string[]): number {
    let total = 0;

    // Each input lines
    for (let i = 0; i < input.length; i++) {
        const cubeSets = input[i].split(":")[1].split(";");

        let maxRed = 0;
        let maxGreen = 0;
        let maxBlue = 0;
        // Each cube sets of the party
        for (let j = 0; j < cubeSets.length; j++) {
            const cubeSet = cubeSets[j].split(",");

            // Each color of the cube set
            for(let k = 0; k < cubeSet.length; k++) {
                const split = cubeSet[k].trim().split(" ");
                const number = parseInt(split[0]);
                const color = split[1];

                if (color === "red" && number > maxRed) {
                    maxRed = number;
                } else if (color === "green" && number > maxGreen) {
                    maxGreen = number;
                } else if (color === "blue" && number > maxBlue) {
                    maxBlue = number;
                }
            }
        }

        total += (maxRed * maxGreen * maxBlue);
    }

    return total;
}