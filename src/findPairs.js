const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function FindPairs(arr, target) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(`Pair found at ${i} and ${j} (${arr[i]} + ${arr[j]})`);
                found = true;
            }
        }
    }
    if (!found) {
        console.log('No pairs found');
    }
}

rl.question('Enter the array of integers (comma separated): ', (input) => {
    let arr = input.split(',').map(Number);
    
    rl.question('Enter the target sum: ', (targetInput) => {
        let target = parseInt(targetInput, 10);
        
        FindPairs(arr, target);
        
        rl.close();
    });
});
