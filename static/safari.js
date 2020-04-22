document.addEventListener('DOMContentLoaded', () => {
    let isSafari =  /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if (isSafari) {
        alert("К сожалению в нашей команде тестировщиков нет человека с маком, поэтому установите firefox/chrome или мы не отвечаем за то, что вы сейчас увидите");
        document.querySelector(".map").style.backgroundImage = 'url("/img/map.jpg")';
    }
});