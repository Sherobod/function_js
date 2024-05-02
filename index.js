function fibonacci(num) {
    const fibArray = [0, 1];

    for (let i = 2; i < num; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray.slice(0, num);
}

const numInput = prompt("Введите число");

if (numInput !== null && !isNaN(numInput)) {
    const num = parseInt(numInput, 10);
    const fibonacciResult = fibonacci(num);


    console.log(fibonacciResult);
} 




function bubbleSort(array) {
    const length = array.length;
    let sorted = false;

    while (!sorted) {
        sorted = true; 

        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {

                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false; 
            }
        }
    }

    return array;
}


const unsortedArray = [5, 3, 8, 1, 4];
const sortedArray = bubbleSort(unsortedArray);
console.log("Сортировка:", sortedArray);