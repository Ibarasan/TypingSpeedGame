let pressedWord = ''; 
const words = ['jeden', 'dwa', 'trzy', 'cztery', 'piec', 'szesc', 'siedem', 'osiem', 'dziewiec'];
const score = document.querySelector("#score");
let points = 0;
let losing = 0; 
let end = 5; 



window.addEventListener('keyup', (e) => {
    if (e.key == ' ') { 
        console.log("SŁOWO: " + pressedWord);
        const search = document.querySelector(`.${pressedWord}`);
        if (search != null) {
            search.remove();
            points++;
            losing--;
            score.textContent = `Punkty: ${points}`;
        }
        pressedWord = ''; 
    } else {
        pressedWord = pressedWord + e.key; 
    }
});


//=======================================================

const startBtn = document.querySelector("#start");

const createElement = () => {
    const el = document.createElement("div");
    const randomIndex = Math.floor(Math.random() * words.length);
    el.innerText = words[randomIndex];
    el.classList.add(`${words[randomIndex]}`);
    el.classList.add("word");
    el.style.top = Math.floor(Math.random() * 450);
    el.style.left = Math.floor(Math.random() * 450);
    const div = document.querySelector(".container");
    div.appendChild(el);
    losing++;
}

const endGame = () => {
    const div = document.querySelector(".container");
    const gameOver = document.createElement("div");
    gameOver.innerText = "GAME OVER";
    gameOver.classList.add("gameOver");
    
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    
    div.appendChild(gameOver);
    div.style.backgroundColor = "red";
}


const game = () => {
    let timer = setInterval(() => {
        console.log(losing);
        if (losing >= end) {
            clearInterval(timer);
            endGame();
        } else {
        createElement();
        }
    }, 1000);
}

startBtn.addEventListener("click", () => {
    game();
    console.log("odpalana jest funkcja game");
}, {once: true});


