document.addEventListener('DOMContentLoaded', () => {
    function cardShow(item, text) {
        document.querySelector("#overlay-card .spec-card").remove();
        document.getElementById("overlay-card")
            .appendChild(item.currentTarget.cloneNode(true));
        document.querySelector("#overlay-card .description").innerHTML = text;
        document.querySelector(".overlay").style.display = "flex";
    }

    document.getElementById("physics").onclick = (item) => cardShow(item,
        "<b>Вы узнаете:</b>" +
        "<ul><li>Основные законы:</li>" +
        "<ul><li>Механики</li>" +
        "<li>Электродинамики</li>" +
        "<li>Термодинамики</li>" +
        "<li>Оптики</li>" +
        "<li>Теории поля</li>" +
        "<li>Атомной физики</li></ul>" +
        "<li>Как действует сила</li>" +
        "<li>Порузитесь в мир полупроводников, и узнаете все их секреты</li></ul>");
    document.getElementById("asm").onclick = (item) => cardShow(item,
        "<b>Вы узнаете:</b>" +
        "<ul><li>Это</li>" +
        "<li>И это</li></ul>");
    document.querySelector("#overlay-card .close").onclick = () => {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector("#overlay-card .spec-card").id = "";
    };
});