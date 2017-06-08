(function() {
    
// Zdarzenie click myszą na ciasteczka
var buttonCookie1 = document.querySelector('#cookie1');
buttonCookie1.addEventListener('click', showText, false);

var buttonCookie2 = document.querySelector('#cookie2');
buttonCookie2.addEventListener('click', showText, false);

var buttonCookie3 = document.querySelector('#cookie3');
buttonCookie3.addEventListener('click', showText, false);

// Tablica z życzeniami z ciasteczka
var wish = ['Prawda leży pośrodku – może dlatego wszystkim zawadza.', 'Wiara to myśl, która śpi.', 'Gdzie wszyscy wiedzą, że tego nie da się zrobić przyjdzie ktoś, kto tego nie wie i to zrobi.', 'Jeśli nie chce Ci się robić nic dla siebie, zrób coś dla innych.', 'Śmiech oddala strach jak wiatr mgłę.', 'Każdy jest architektem swojego losu.', 'Niemożliwym jest, aby uszczęśliwić wszystkich. Najpierw uszczęśliw samego siebie.', 'Bądź cierpliwy! Wielkiego Muru nie zbudowano w jeden dzień.'];

// Losowe wybranie z tablicy życzenia
var rand = Math.floor(Math.random() * 7);


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
  