function funcFilter(arr) {
    let frequency = {};

    arr.forEach(item => {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    });

    let result = arr.filter(item => frequency[item] === 1);

    return result;
}

let numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7];
let resultNumbers = funcFilter(numbers);
console.log(resultNumbers);
