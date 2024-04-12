
/*
Задание 3 (тайминг 30 минут)
1. Создать файл index.html
2. Подключить data.js
3. Добавить блок <div class="content"></div>
4. Создать переменную data и добавить в нее JSON parse данные из
файла data.js
5. Вывести в консоль объект data
6. С помощью foreach обойти массив data
7. Вывести все изображения из данных
*/

const divConEl = document.querySelector('div.content');

const parseResult = JSON.parse(dataInfo);
parseResult.forEach(el => {
    const divNew = document.createElement('div');
    divNew.classList.add(el.class);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', el.url);
    //imgEl.setAttribute('width'. el.width);
    //imgEl.setAttribute('height', el.height);
    const textEl = document.createElement('p');
    textEl.innerHTML = el.text;

    divNew.appendChild(imgEl);
    divNew.appendChild(textEl);
    divConEl.appendChild(divNew);
});

/*
Задание 1 (тайминг 25 минут)
1. Поиск в интернете (бесплатные api примеры)
2. Найти любые данные, на произвольную тему
3. Установить расширение в браузер “JSON viewer”
4. Пример найденного json объекта
*/ 

const divConEl1 = document.querySelector('div.content');


fetch("https://api.nbrb.by/exrates/rates?ondate=2023-01-10&periodicity=0")
.then((response) => response.json())
.then((parseResult) => {
    parseResult.forEach(el => {
    const divNew = document.createElement('div');
    divNew.classList.add('img_container');
    
    const textDate = document.createElement('p');
    textDate.innerHTML = el.Date;
    divNew.appendChild(textDate);

    const textCurAbb = document.createElement('p');
    textCurAbb.innerHTML = el.Cur_Abbreviation;
    divNew.appendChild(textCurAbb);

    const textScale = document.createElement('p');
    textScale.innerHTML = el.Cur_Scale;
    divNew.appendChild(textScale);
    
    const textCurName = document.createElement('p');
    textCurName.innerHTML = el.Cur_Name;
    divNew.appendChild(textCurName);

    const textOff = document.createElement('p');
    textOff.innerHTML = el.Cur_OfficialRate;    
    divNew.appendChild(textOff);

    divConEl1.appendChild(divNew);
    });
});