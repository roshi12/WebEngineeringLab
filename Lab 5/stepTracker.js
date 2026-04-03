//**** TASK 1 M.Abdullah Roshaan ******//
// Step Tracker Application


let steps = [4500, 6200, 5800, 7100, 4900, 8300, 6700];


function addSteps(dayIndex, newSteps) {
    steps[dayIndex] = newSteps;
}


function getHighestSteps() {
    return Math.max(...steps);
}


function getLowestSteps() {
    return Math.min(...steps);
}


function getAverageSteps() {
    let sum = steps.reduce((a, b) => a + b, 0);
    return sum / steps.length;
}


function getAboveAverageDays() {
    let avg = getAverageSteps();
    return steps.filter(s => s > avg);
}


addSteps(0, 5000); 

console.log("\x1b[36mSteps:\x1b[0m", steps);
console.log("\x1b[32mHighest:\x1b[0m", getHighestSteps());
console.log("\x1b[31mLowest:\x1b[0m", getLowestSteps());
console.log("\x1b[33mAverage:\x1b[0m", getAverageSteps());
console.log("\x1b[35mAbove Average:\x1b[0m", getAboveAverageDays());