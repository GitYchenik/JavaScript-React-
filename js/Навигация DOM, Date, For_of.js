//еще одна сложная тема Узлы или Node

//console.log(document.body);           //для получения элементов body (узлов)
//console.log(document.documentElement); //для получения внутреностей элемента (значения)
//console.log(document.body.childNodes);  // показывает количество DOM елементов (узлы)
//console.log(document.body.firstChild);    //получение первого элемента узла
//console.log(document.body.lastChild);     //получение второго элемента узла
//console.log(document.body.firstElementChild);     //получение первого элемента --- его значение
//console.log(document.body.lastElementChild);      //получение последнего элемента --- его значение

/***********Работа с DOM элементами (поиск родителя и прародителя ниже)*****************/

console.log(document.querySelector('#current').parentNode);  //в консоле (документ.запроспоСелектору(#current).указать родителя элемента узла)---результат Node
console.log(document.querySelector('#current').parentElement);      //в консоле (документ.запроспоСелектору(#current).указать родителя элемента узла)
console.log(document.querySelector('#current').parentNode.parentNode);      //в консоле (документ.запроспоСелектору(#current).указать родителя элемента узла.указать родителя родителя элемента узла) ---результат Node

/**********Date - атрибуты****************/
console.log(document.querySelector('[data-current="3"]').nextSibling);      //вывести в консоль (документ.запросСелектора([data-current="3"]).следующее значение)
console.log(document.querySelector('[data-current="3"]').previousSibling);  //вывести в консоль (документ.запросСелектора([data-current="3"]).предыдущее значение)
console.log(document.querySelector('[data-current="3"]').nextElementSibling);   //вывести в консоль (документ.запросСелектора([data-current="3"]).следующее у Элемента значение)

/*************Перебор с помощью For of************************/
for (let node of document.body.childNodes) {            //для (переменная node из числа Документ.телодокумента.Дочерние узлы)
    if (node.nodeName == '#text'){                      //если если умя узла равно #text выполни ниже
        continue;                                       //продолжить цикл
    }

   console.log(node);                                   //в другом случае выведи в консоль (узел)
}

