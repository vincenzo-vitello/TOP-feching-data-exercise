const userInput = "cats"
const img = document.querySelector('.content');
const reloadBtn = document.getElementById('reload')

const API_KEY = "CITDCZJGLyScw6rPoqbny218Sl8r16WW"
const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${userInput}`;

async function getData() {
    fetch(API_URL, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        });
}


window.addEventListener('load', () => {
    getData()
})

reloadBtn.addEventListener('click', () => getData())