'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    //console.log(this);
    this.style.background = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
    say();
    }
};

obj.sayNumber();
