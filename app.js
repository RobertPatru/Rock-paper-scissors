document.querySelector('.container').addEventListener("click", function (object) {
    let computerPick = Math.floor(Math.random() * 3 + 1);
    console.log(computerPick);

    let playerPick = object.target.parentElement;
    console.log(playerPick);
    computerPick = 1;

    // Play Chooces Paper
    if (playerPick.classList.contains('btn-paper-player') && computerPick == 1) {
        getMessage('Paper vs Paper! Draw!', 'gray');

        deleteFromUI('.computer-rock-img', '500px');
        deleteFromUI('.computer-scissors-img', '500px');
        moveSelectedElementToCenter('.computer-paper-img', '190px');

        deleteFromUI('.player-rock-img', '500px');
        deleteFromUI('.player-scissors-img', '500px');
        moveSelectedElementToCenter('.player-paper-img', '190px');
    } 
    else if (playerPick.classList.contains('btn-paper-player') && computerPick == 2) {
        getMessage('Paper beats Rock! Player Wins!', 'green');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-scissors-img', '500px');
        moveSelectedElementToCenter('.computer-rock-img', '-30px');

        deleteFromUI('.player-rock-img', '-500px');
        deleteFromUI('.player-scissors-img', '500px');
        moveSelectedElementToCenter('.player-paper-img', '190px');
    }
    else if (playerPick.classList.contains('btn-paper-player') && computerPick == 3) {
        getMessage('Scissors beats Paper! Computer Wins!', 'red');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-rock-img', '-500px');
        moveSelectedElementToCenter('.computer-scissors-img', '-220px');
        
        deleteFromUI('.player-rock-img', '-500px');
        deleteFromUI('.player-scissors-img', '500px');
        moveSelectedElementToCenter('.player-paper-img', '190px');
    }

    // Play Chooces Rock
    else if (playerPick.classList.contains('btn-rock-player') && computerPick == 1) {
        getMessage('Paper beats Rock! Computer Wins!', 'red');

        deleteFromUI('.computer-rock-img', '500px');
        deleteFromUI('.computer-scissors-img', '500px');
        moveSelectedElementToCenter('.computer-paper-img', '220px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-scissors-img', '500px');
    } 
    else if (playerPick.classList.contains('btn-rock-player') && computerPick == 2) {
        getMessage('Rock vs Rock! Draw!', 'gray');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-scissors-img', '500px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-scissors-img', '500px');
    }
    else if (playerPick.classList.contains('btn-rock-player') && computerPick == 3) {
        getMessage('Rock beats Scirssors! Player Wins!', 'green');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-rock-img', '-500px')
        moveSelectedElementToCenter('.computer-scissors-img', '-220px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-scissors-img', '500px');
    }

    // Play Chooces Scirssors
    else if (playerPick.classList.contains('btn-scisors-player') && computerPick == 1) {
        getMessage('Scissors beats Paper! Player Wins!', 'green');

        deleteFromUI('.computer-rock-img', '500px');
        deleteFromUI('.computer-scissors-img', '500px');
        moveSelectedElementToCenter('.computer-paper-img', '190px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-rock-img', '-500px');
        moveSelectedElementToCenter('.player-scissors-img', '-210px');
    } 
    else if (playerPick.classList.contains('btn-scisors-player') && computerPick == 2) {
        getMessage('Rock beats Scissors! Computer Wins!', 'red');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-scissors-img', '500px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-rock-img', '-500px');
        moveSelectedElementToCenter('.player-scissors-img', '-190px');
    }
    else if (playerPick.classList.contains('btn-scisors-player') && computerPick == 3) {
        getMessage('Scissors vs Scissors! Draw!', 'gray');

        deleteFromUI('.computer-paper-img', '-500px');
        deleteFromUI('.computer-rock-img', '-500px');
        moveSelectedElementToCenter('.computer-scissors-img', '-190px');

        deleteFromUI('.player-paper-img', '-500px');
        deleteFromUI('.player-rock-img', '-500px');
        moveSelectedElementToCenter('.player-scissors-img', '-190px');
    }

    if (object.target.parentElement.classList.contains('clickable')){    // only if an option is choosed
        ShowplayAgainBtn();
        disableLinks();
    }
   
    
    object.preventDefault();
});

document.querySelector('.play-again').addEventListener('click', function() {
    window.location.reload();
});

function getMessage (msg, color) {
    const message = document.querySelector('.message');

    message.textContent = msg;
    message.style.color = color;
}

function gameOver() {
    const buttons = document.querySelectorAll('a');
    buttons.style.cursor = "none";

    console.log(buttons);
}

function deleteFromUI (object, direction) {
    document.querySelector(object).style.transform = `translate(${direction})`;
    document.querySelector(object).style.opacity = '0';
}

function moveSelectedElementToCenter (object, direction) {
    document.querySelector(object).style.transform = `translate(${direction})`;
}

function ShowplayAgainBtn () {
    document.querySelector('.play-again').style.display = 'inline-block';
    document.querySelector('.play-again').style.opacity = '0';
    document.querySelector('.play-again').style.opacity = '1';
}

function disableLinks () {
    document.querySelector('.container').style.pointerEvents = 'none';
}