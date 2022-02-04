// #1
let radius = prompt('Введите радиус цилиндра'),
    height = prompt('Введите высоту цилиндра'),
    volume = Math.PI * Math.pow(radius, 2) * height;

document.write(`************** <br>
Обьем цилиндра с радиусом ${radius} и высотой ${height} равен: <br>
-------------------- <br>
V = ${volume} <br>
------------------- <br>
end.<br>`);

// #2
let firstNumber = +prompt('Введите первое число'),

    secondNumber = +prompt('Введите второе число'),
    thirdNumber = +prompt('Введите третье число');

document.write(`Сумма всех чисел будет равна: ${firstNumber + secondNumber + thirdNumber}<br>`);

if(firstNumber % 2 === 0) {
    document.write(`${firstNumber} - чётное число <br>`);
} 

if (secondNumber % 2 === 0) {
    document.write(`${secondNumber} - чётное число <br>`);
} 

if (thirdNumber % 2 === 0) {
    document.write(`${thirdNumber} - чётное число <br>`);
} 
