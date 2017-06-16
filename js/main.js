(function() {
    
// Zdarzenie click myszą na ciasteczka
var buttonCookie1 = document.querySelector('#cookie1');
buttonCookie1.addEventListener('click', showText, false);

var buttonCookie2 = document.querySelector('#cookie2');
buttonCookie2.addEventListener('click', showText, false);

var buttonCookie3 = document.querySelector('#cookie3');
buttonCookie3.addEventListener('click', showText, false);

// Tablica z życzeniami z ciasteczka
var wish = ['Co tanio wychodzi, drogo wraca.', 
            'Wiara to myśl, która śpi.', 
            'Bez odwagi nie zostaniesz dowódcą.', 
            'Miłości i kataru nie da się ukryć.', 
            'Śmiech oddala strach jak wiatr mgłę.', 
            'Każdy jest architektem swojego losu.', 
            'Co się odwlecze to nie będzie szybciej.', 
            'Możesz chwilowo odetchnąć od kłopotów.',
            'Ciesz się każdym dniem.',
            'Masz błyskotliwy umysł.'];

// Losowe wybranie z tablicy życzenia
var rand = Math.floor(Math.random() * 9);


function showText(e) {
// wyrzuca wylosowane życzenie do ramki
document.querySelector('p').innerHTML = (wish[rand]);

// Resetuje ramkę z życzeniami i odświeża stronę
document.getElementById("reset").onclick = function () {
document.getElementById("box").innerHTML = "";
location.reload();
    }
}

})();
  