document.addEventListener('DOMContentLoaded', () => {
    function cardShow(item, text) {
        document.querySelector("#overlay-card .spec-card").remove();
        document.getElementById("overlay-card")
            .appendChild(item.currentTarget.cloneNode(true));
        document.querySelector("#overlay-card .description").innerHTML = text;
        document.querySelector(".overlay").style.display = "flex";
    }

    document.getElementById("physics").onclick = (item) => cardShow(item,
        "<b>Вы узнаете основные законы:</b>" +
        "<ul><li>Механики</li>" +
        "<li>Электродинамики</li>" +
        "<li>Термодинамики</li>" +
        "<li>Оптики</li>" +
        "<li>Теории поля</li>" +
        "<li>Атомной физики</li></ul>" +
        "В конце вы порузитесь в мир <b>полупроводников</b>, и узнаете все их секреты");
    document.getElementById("asm").onclick = (item) => cardShow(item,
        "<b>Вы научитесь:</b>" +
        "<ul><li>Писать программы на языке <b>assembler</b> для 16bit процессоров и не только</li>" +
        "<li>Разбираться в <b>дизассемблированом</b> коде</li>" +
        "<li>Работать с памятью и процессором на самом <b>низком уровне</b></li></ul>" +
        "Знание ассемблера позволит писать более высокопроизводительный код на более высокоуровневых языках, работать с дизассемблером");
    document.getElementById("informatics").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li>Строить <b>логические схемы</b></li>" +
        "<li><b>Составлять формулы</b> по которым работают логические схемы</li>" +
        "<li>Разбираться в логических схемах разных видов <b>памяти</b></li>" +
        "<li>Строить схему <b>арифметико-логического устройства процессора</b></li></ul>");
    document.getElementById("hardware-hist").onclick = (item) => cardShow(item,
    "<b>Вы узнаете</b>" +
        "<ul><li>Как появились первые <b>ЭВМ</b></li>" +
        "<li><b>Историю</b> развития ЭВМ</li>" +
        "<li>Современные <b>тренды</b> развития ЭВМ</li>" +
        "<li>Какие ЭВМ существуют <b>сегодня</b> и для каких задач предназначены</li></ul>");
    document.getElementById("web-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li>Создавать отзывчивые, быстрые, современные <b>сайты</b></li>" +
        "<li>Создавать <b>дизайны</b> сайтов согласно всем правилам хорошего UI/UX</li>" +
        "<li>Использовать самые современные <b>web-технологии</b></li>" +
        "<li><b>Интегрировать</b> различные <b>сервисы</b> со своим сайтом</li>" +
        "<li>Разворачивать ваши сайты как на вашем собственном сервере, так и на обычных платформах</li></ul>");
    document.getElementById("mc-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li><b>Разрабатывать ПО</b> для микроконтроллеров</li>" +
        "<li>Работать с <b>периферией</b> по интерфейсам I2C, SPI, UART</li>" +
        "<li>Заниматься трассировкой <b>печатных плат</b></li>" +
        "</ul>Так же вы получите знания об основах цифровой и аналоговой схемотехники");
    document.getElementById("sys-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li>Отлично знать <b>алгоритмы</b></li>" +
        "<li>Разбираться в любых <b>структурах данных</b></li>" +
        "<li><b>Понимать</b> даже legacy-<b>код</b> любых проектов</li>" +
        "<li><b>Оптимизировать</b> (производительность, память) в уже существующих программах</li>" +
        "<li>Иметь опыт программирования на таких языках как <b>Rust, C++</b></li></ul>");
    document.getElementById("db-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li><b>Проектировать</b> базы данных</li>" +
        "<li>Писать <b>SQL-запросы</b> любой сложности</li>" +
        "<li>Заниматься <b>резервным копированием</b> БД</li>" +
        "<li>Создавать системы хранения данных для <b>High-load</b> проектов</li></ul>");
    document.getElementById("mobile-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li>Разбираться в устройстве <b>ОС Android/iOS</b></li>" +
        "<li>Разрабатывать <b>мобильные приложения</b></li>" +
        "<li>Создавать отзывчивый и понятный <b>дизайн</b> своих приложений</li>" +
        "<li>Писать <b>тесты</b> своих приложений</li></ul>");
    document.getElementById("ai-spec").onclick = (item) => cardShow(item,
    "<b>Вы научитесь</b>" +
        "<ul><li><b>Генерировать данные</b> для обучения нейросетей</li>" +
        "<li><b>Создавать</b> собственные <b>нейросети</b>, выбирая архитектуру и тип нейросети в зависимости от задачи</li>" +
        "<li><b>Анализировать и визуализировать</b> данные для ИИ</li>" +
        "<li>Определить технические средства для внедрения ИИ</li></ul>");

    document.querySelector("#overlay-card .close").onclick = () => {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector("#overlay-card .spec-card").id = "";
    };
});