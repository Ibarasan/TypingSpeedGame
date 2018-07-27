let pressedWord = ''; // Przechowywane aktualne słowo
const words = ['jeden', 'dwa', 'trzy', 'cztery', 'piec', 'szesc', 'siedem', 'osiem', 'dziewiec']; // Tablica ze słowami
let points = 0;


window.addEventListener('keyup', (e) => {
    if (e.key == ' ') { // Sprawdzam czy naciśnięto spacje, jeżeli tak to słowo jest zatwierdzone i sprawdzamy je dalej
        console.log("SŁOWO: " + pressedWord);
        const search = document.querySelector(`.${pressedWord}`);
        if (search != null) { // Słowo wystąpiło jeżeli search jest różny od null 
            search.remove();// Usuwam słowo 
            points++;
            losing--;
        }
        pressedWord = ''; // Zerowanie słowa
    } else { // To występuje, jeżeli nie wciśneliśmy spacji. Słowo nadal jest wpisywane.
        pressedWord = pressedWord + e.key; 
    }
});


//=======================================================

const startBtn = document.querySelector("#start");

const createElement = () => { // Funkcja tworząca elementy
    const el = document.createElement("div");
    const randomIndex = Math.floor(Math.random() * words.length);
    el.innerText = words[randomIndex];
    el.classList.add(`${words[randomIndex]}`);
    el.style.top = Math.floor(Math.random() * 450);
    el.style.left = Math.floor(Math.random() * 450);
    const div = document.querySelector(".container");
    div.appendChild(el);
    losing++;
}



let losing = 0; // Numer startowy, gdy osiągnie wartość end to gra zatrzyma się
let end = 20; // Liczba przy której się przegrywa, jeżeli losing ją osiągnie. 


const game = () => {
    let timer = setInterval(() => {
        console.log(losing);
        if (losing > end) {
            clearInterval(timer);
            const div = document.querySelector(".container");
            div.style.background = 'red';

        }
        createElement();
    }, 1000);
}

startBtn.addEventListener("click", () => { // Rozpoczęcie gry po wciśnięciu przycisku
    game();
});


