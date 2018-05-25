let datamuseAPI = "https://api.datamuse.com/words?sp="
let giphyAPI = "http://api.giphy.com/v1/gifs/search?api_key=IkdUQgS12sijtuaSDi8PYKKQHnsxju5b&limit=5&q="
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let rndLtr1 = alphabet[Math.floor(Math.random() * alphabet.length)];
let rndLtr2 = alphabet[Math.floor(Math.random() * alphabet.length)];
datamuseAPI = datamuseAPI + rndLtr1 + "??" + rndLtr2;

let el1 = document.getElementById("element1");
let el2 = document.getElementById("element2")

fetch(datamuseAPI)
  .then(response => response.json())
  .then(json => {
    el1.innerHTML = json[0].word
    return fetch(giphyAPI + json[0].word)
  })
  .then(response => response.json())
  .then(json => el2.src = json.data[0].images['fixed_height'].url)
  .catch(err => console.log(err));
