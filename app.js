let key = "AIzaSyC-za0SDZNbOWpzV3jwt9voZsprrGmYiWI";
let url = "https://tenor.googleapis.com/v2/featured?key=AIzaSyC-za0SDZNbOWpzV3jwt9voZsprrGmYiWI"
const container = document.getElementById("container");
const input = document.getElementById("input");

window.addEventListener("DOMContentLoaded", apiTenor);
input.addEventListener("keyup", search);

function apiTenor() {
    fetch(url)
    .then(response => response.json())
    .then(data => create(data))
}

function create(data) {
    data["results"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = results.media_formats.gif.url;
        img.classList.add("img");
        
        div.appendChild(img);
        container.appendChild(div);
    })
}

function search(event) {
    
    container.innerHTML="";
    let newApi = `https://tenor.googleapis.com/v2/search?q=${event.target.value}&key=${key}`;
    fetch(newApi)
    .then(response => response.json())
    .then(data => create(data))
}