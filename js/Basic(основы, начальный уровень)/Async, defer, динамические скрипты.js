"use strict";

const p = document.querySelectorAll('p');
console.log(p);

/*---------Defer
Для работы необходимо в html файл в строке который запускает скрипт добавить к примеру 
<script defer src="js/script-beta.js"></script>
defer будет означать подготовку скрипта (загружает его в фоном режиме)
это требуется что бы больщой скрипт загрузился полностью и дальше страница не побежала.
К примеру если на этапе логина и пароля произошло зависание что бы программа не начинала показывать приветствие.*/

/*----------Async
обратная структора defer она независима от других сриптов и обязана запускаться сразу
К примеру метрика. Если требуется зафиксировать сколько пользователей зашло на сайт и не важно что они делали*/
for (let i=0; i < 1000;i++) {
    console.log('gst');
}

function loadscript(src) {
    const script = document.createElement('script-beta');
    script.scr = "js/test-beta.js";
    script.async = false;
    document.body.append(script);
}
