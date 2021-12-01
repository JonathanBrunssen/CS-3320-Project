const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
var modal = document.getElementById("myModal");


function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();

}

function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        score += 2; //everytime this if statement is true add 1 to score variable
    } else {
        unflipCards();
    }
    winCondition();
    return;
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; //destructing assignment
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
})();

function winCondition() {
    if(score === cards.length) {
        setTimeout(() => {
            modal.style.display = "block";
            window.onclick = function (event) {
                if(event.target == modal) {
                    modal.style.display = "none"
                }
            }
        }, 1000);
    }
    return;
}


cards.forEach(card => card.addEventListener('click', flipCard));
