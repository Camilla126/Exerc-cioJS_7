const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosPares = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
        numerosPares.push(index)

    }
}
console.log(numerosPares)