const startingSearch = "hello";
const img = document.querySelector('.content');
const reloadBtn = document.getElementById('reload');
const form = document.querySelector('form');
const userInput = form.querySelector('input');
let userInputValue = ""; 
const API_KEY = "CITDCZJGLyScw6rPoqbny218Sl8r16WW";
const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}`;

// function getData(search) {
//     fetch(`${API_URL}&s=${search}`, { mode: 'cors' })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Error ${response.status}: Can't load gifs.`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             if(data.data != []){
//                 img.src = data.data.images.original.url;
//                 img.alt = search;
//             } else {
//                 alert('wait what? There is nothing like that')
//             }
//         })
//         .catch((error) => {
//             console.error(error.message);
//             img.alt = "Ops, there was an error.";
//         });
// }
async function getData(search) {
    try {
        const response = await fetch(`${API_URL}&s=${search}`, { mode: "cors" });
        if(!response.ok){
            throw new Error(`Error ${response.status}: Can't load gifs.`)
        }
        const data = await response.json()
        if(data.data && data.data.images){
            img.src = data.data.images.original.url;
            img.alt = search
        } else {
            alert('Sorry, there is nothing like that...')
        }
            
    }
    catch (error) {
        console.log('Something went wrong', error.message)
        img.alt = "Oops, there was an error.";
    }
}
window.addEventListener('load', () => {
    getData(startingSearch);
});

reloadBtn.addEventListener('click', () => {
    const search = userInputValue || startingSearch;
    getData(search);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    userInputValue = userInput.value.trim();
    if (userInputValue) {
        getData(userInputValue);
        form.reset(); 
    }
});