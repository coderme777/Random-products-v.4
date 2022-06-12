/*script random products v.4
*хаотичное изменение позиций товаров на странице для увеличения уникальности контента, требуется для поисковых систем
*Ограничение: товары должны выводиться блоками друг за другом с названием искомого класса,например:
  <div class="views-row views-row-31">
  <div class="views-row views-row-15">
  здесь можно взять класс views-row
*Обоснование применения скрипта от seo-специалиста: если на страницах с товарами однообразные изображения выводятся друг за другом, то их уникальность низкая.
 На сайте сейчас есть некоторое количество страниц с высоким % похожести. это называется неявные дубликаты. 
 Чем больше % похожести и таких страниц на сайте, тем это хуже для сайта. В глазах поиска некоторые страницы получаются почти идентичными, различия в них только в заголовках. 
 Исходя из этого, зачем поисковикам держать много одинаковых страниц в индексе? Дубликаты равно вылету из индекса.
 Сейчас мы рандомом уменьшаем % похожести.
*Преимущества скрипта: не нужно работать с базой данных конкретного сайта, нет необходимости вносить изменения в код бэкэнда. Вообще можно не разбираться в конкретном сайте:
 достаточно лишь подключить код в нужном варианте. 
*/

//случай 1: требуется применить рандом один раз за любой период времени, но есть необходимость выводить стиль "clear" после каждых двух товаров, чтобы не было проблем с версткой
//просто меняем класс b-catalog-item на свой.
document.addEventListener('DOMContentLoaded', function(){ //скрипт отрабатывает после загрузки страницы
    let sort_prod = document.getElementsByClassName("b-catalog-item"), i = 0, ram;
    ram = 0.47409137364870957; //генерация была один раз Math.random(), замените на свое число;
    if(sort_prod.length > 3) { //количество товаров на странице больше трех
        while (i < sort_prod.length) {
            let random = Math.floor(ram * (sort_prod.length - i + 1) + i);
            if (sort_prod.length > random) {
                sort_prod[i].parentNode.insertBefore(sort_prod[i], sort_prod[random]); 
                sort_prod[i].parentNode.insertBefore(sort_prod[random], sort_prod[i]);
                i++;
            } else { continue; }
        }// следующий блок кода необходим для вывода <div class="clear"></div> после каждой пары товаров
        for(let k = 1; k < sort_prod.length; k++){// <= не ставить из-за лишнего элемента при нечетных узлах 
            if( k % 2 == 0) continue; //если узел четный, то пропускаем его
                let add_class = document.getElementsByClassName('b-catalog-item');//выбираем массив узлов с классом b-catalog-item из DOM
                add_class[k].insertAdjacentHTML('afterend', '<div class="clear"></div>');//проходим по массиву и после нечетного узла выводим блок clear
        }
    }
});

//случай 2: выводить дополнительные блоки html после какого-то числа товаров не нужно
//просто меняем класс views-row на свой.
document.addEventListener('DOMContentLoaded', function(){ //скрипт отрабатывает после загрузки страницы
    let sort_prod = document.getElementsByClassName("views-row"), i = 0, ram;
    ram = 0.47409137364870957; //генерация была один раз Math.random(), замените на свое число;
    if(sort_prod.length > 3) { //количество товаров на странице больше трех
        while (i < sort_prod.length) {
            let random = Math.floor(ram * (sort_prod.length - i + 1) + i);
            if (sort_prod.length > random) {
                sort_prod[i].parentNode.insertBefore(sort_prod[i], sort_prod[random]); 
                sort_prod[i].parentNode.insertBefore(sort_prod[random], sort_prod[i]);
                i++;
            } else { continue; }
        }
    }
});

//случай 3: необходима постоянная рандомизация товаров на странице при ее посещении и выводить дополнительные блоки html после какого-то числа товаров не нужно
//просто меняем класс b-catalog-item на свой.
document.addEventListener('DOMContentLoaded', function(){ //скрипт отрабатывает после загрузки страницы
    let sort_prod = document.getElementsByClassName("b-catalog-item"), i = 0;
    if(sort_prod.length > 3) { //количество товаров на странице больше трех
        while (i < sort_prod.length) {
            let random = Math.floor(Math.random() * (sort_prod.length - i + 1) + i);
            if (sort_prod.length > random) {
                sort_prod[i].parentNode.insertBefore(sort_prod[i], sort_prod[random]); 
                sort_prod[i].parentNode.insertBefore(sort_prod[random], sort_prod[i]);
                i++;
            } else { continue; }
        }
    }
});

//случай 4: необходима постоянная рандомизация товаров на странице при ее посещении и вывод своего блока с контентом под каждым товаром
//просто меняем класс catalog-item на свой.
document.addEventListener('DOMContentLoaded', function(){ //скрипт отрабатывает после загрузки страницы
    let sort_prod = document.getElementsByClassName("catalog-item"), i = 0;
    if(sort_prod.length > 3) { //количество товаров на странице больше трех
        while (i < sort_prod.length) {
            let random = Math.floor(Math.random() * (sort_prod.length - i + 1) + i);
            if (sort_prod.length > random) {
                sort_prod[i].parentNode.insertBefore(sort_prod[i], sort_prod[random]); 
                sort_prod[i].parentNode.insertBefore(sort_prod[random], sort_prod[i]);
                i++;
            } else { continue; }
        }// следующий блок кода необходим для вывода своего <div></div> после каждого товара
        for(let k = 0; k < sort_prod.length; k++){
            let add_class = document.getElementsByClassName('catalog-item');//выбираем массив узлов с классом catalog-item из DOM
            add_class[k].insertAdjacentHTML('afterend', '<div><p>Ваш блок под товаром</p></div>');//проходим по массиву и после нечетного узла выводим свой блок
        }    
    }
});