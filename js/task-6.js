let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (input !== null) {
    input = Number(input);
    Number.isNaN(input)
      ? alert('Было введено не число, попробуйте еще раз')
      : numbers.push(input);
  }
}
const sumOfNumbers = function(numbers) {
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }
  }
};

sumOfNumbers(numbers);
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
