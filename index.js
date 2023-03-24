const joke = document.getElementById("joke")
const genJokeBtn = document.getElementById("btn")

const url = "https://v2.jokeapi.dev/joke/Any?type=single"

let getJoke = () => {
    joke.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`
        joke.classList.add("fade")
    })
}

genJokeBtn.addEventListener("click", getJoke)
getJoke()