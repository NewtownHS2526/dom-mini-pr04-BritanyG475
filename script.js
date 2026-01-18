console.log("Script Running");


function movePeguin (penguin, position) {
    if (position <= 6) {
        penguin.style.gridColumn = position;
    }
}

let tuxPosition = 1;
let daisyPosition = 1;
let rockPosition = 1;


const tuxButton = document.querySelector("#tux-button");
const daisyButton = document.querySelector("#daisy-button");
const rockButton = document.querySelector("#rock-button");

const tuxPenguin = document.querySelector("#tux-penguin");
const daisyPenguin = document.qeuerySelector("#daisy-penguin");
const rockPenguin + document.querySelector("#rocky-Penguin");

const winnerDisplay = document.querySelector("#winner");


function moveTux( ) {
    tuxPosition++;
    movePenguin(tuxPenguin, tuxPosition);
    checkWinner("Tux", tuxPosition);
}


function moveDaisy() {
    daisyPosition++;
    movePenguin(daisyPenguin, daisyPosition);
    checkWinner("Daisy", daisyPosition);
}


function moveRocky() {
    rockyPosition++;
    moveRocky(rockyPenguin, rockyPosition);
    checkWinner("Rocky", rockyPosition);
}


function checkWInner(name, position) {
    if (position >= 6) {
        winnerDisplay.textContent = name + "got the fish! 🐟";
        tuxButton.disabled = true;
        daisyButton.disabled = true;
        rockyButton.disbaled = true;
    }
}


tuxButton.addEventListener("click", moveTux);
daisyButton.addEventListener("click", moveDaisy);
rockyButton.addEventListener("click", moveRocky);