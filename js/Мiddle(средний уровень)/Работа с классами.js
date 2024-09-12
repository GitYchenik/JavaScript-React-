/********************Работа с классами********************************************/

class MenuCard {                                                    //создание нового класса
    constructor(scr, alt, title, descr, price, parentSelector) {    //создаем все свойства
        this.src = scr;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }
    //создадим параметр которые будет конвертировать цену в гривны
    changeToUAH() {
        this.price = this.price * this.transfer;
    }
    //элементы которые будут отображаться
    render() {
        const element = document.createElement('div');          //создать в странице блок div и вставить в него аргументы ниже
        element.innerHTML = `                                   
        <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
        `;
        this.parent.append(element);
    }
}
//new MenuCard().render();          //сокращеная форма создания
const div = new MenuCard(           //создаем переменую и помещаем новый объект с параметрами
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню 'Фитнес'",
    "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    9,
    '.menu .container'
);
div.render();               //передаем все параметры в render
