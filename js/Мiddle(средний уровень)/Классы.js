//работа с классами
'use strict';
//создание  класса 
class Rectangle {
    constructor(height, width){     //передача параметров
        this.height = height;       //создание свойств
        this.width = width;         //создание свойств
    }

    calcArea(){             //вызов метода
        return this.height * this.width;            //операция метода
    }
}
//создание класса с наследование параметров класса выше
class ColoredRestangleWithText extends Rectangle {           //создание новго класса - extended означает унаследовать у Rectangle
    constructor(height, width, text, bgColor) {             //создание 
        super(height, width);                //всегда на первом месте - унаследовать параметр height width
        this.text = text;               //новое свойство
        this.bgColor = bgColor;                 //новое свойство
    }
    showMyProps() {
        console.log(`Текст : ${this.text}, цвет : ${this.bgColor}`);
    }
}

const div = new ColoredRestangleWithText(25, 10, 'Hello World', 'red');     //записываем параметры с которыми будем работать
div.showMyProps();          //выводим параметр нового класса
console.log(div.calcArea());            //применяем свойство первомго класса на второй класс


//создание переменной с использованием класса (поступит heigt -10 width - 10)
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
//вывести результат
console.log(long.calcArea());
console.log(square.calcArea());