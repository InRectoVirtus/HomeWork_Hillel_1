let radius = prompt('Введите радиус цилиндра');
    height = prompt('Введите высоту цилиндра');
    volume = Math.PI * Math.pow(radius, 2) * height;

document.write(`************** <br>
Обьем цилиндра с радиусом ${radius} и высотой ${height} равен: <br>
-------------------- <br>
V = ${volume} <br>
------------------- <br>
end.`)
