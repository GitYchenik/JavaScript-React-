//Изучаем ClassList
const btns = document.querySelectorAll('button'),       //в переменую btns = документ.ЗапросВыбратьВсе('button')
const wraper = document.querySelectorAll('.btn-block');

console.log(btns[0].classList.length);              //показать длину показателей--итог 2 (button class="blue some" соответвенно blue и some)
console.log(btns[0].classList.item(0));             //показать элемент --итог (button class="blue some" соответвенно blue)
console.log(btns[0].classList.add('red'));          //добавить в (button class="blue some" значение red получим (button class="blue some red")
console.log(btns[0].classList.add('red', 'classss'));          //добавить значение red и classsss
console.log(btns[0].classList.remove('blue'));      //удалить елемент blue -- (button class="blue some red" получим button class="blue some"
console.log(btns[0].classList.toggle('blue'));      //если есть blue то удалить его, если нет blue то добавит его

if (btns[0].classList.contains('red')) {            //если в списке классов.содержит('red') выполни ниже 
    console.log('red');                             //вывести на экран red
}

btns[0].addEventListener('click', ()=>{
    if (!btns[1].classList.contains('red')) {            //если в списке классов.содержит('red') выполни ниже 
        btns[1].classList.add('red');                             //вывести на экран red
    } else {                                                    //иначе выполни
        btns[1].classList.remove('red');                    //удили red
    }
})
//Второй способ решения с таким результатом
/*btns[0].addEventListener('click', ()=>{
    btns[1].classList.toggle('red');
})*/

console.log(btns[0].className);                 //старый способ получим - blue some как и выше, но ответ одной стракой что неудобно 

wrapper.addEventListener('clik', (event) => {
    if (event.target && event.target.classList.contains('blue')){
        console.log('Hello');
    }
})