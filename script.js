const contentBox = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const config = {
    headers : {
        Accept : 'application/json',
    },
}

jokeBtn.addEventListener("click", ()=>{
    fetch("https://icanhazdadjoke.com/", config)
    .then(response => response.json())
    .then(data => contentBox.innerText = data.joke)
})



