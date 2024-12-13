function playGame() {


    const stats = {
        wins: 0,
        ties: 0,
        losses: 0,
    
        userCount: {
          rock: 0,
          paper: 0,
          scissors: 0,
        },

        computerCount: {
            rock: 0,
            paper: 0,
            scissors: 0,
          },
    
    };

    const options = ['R', 'P', 'S'];

    let keepPlaying = true;

    while (keepPlaying) {

        let userChoice = window.prompt('Enter R, P, or S:');

        userChoice = userChoice.toUpperCase();

        if (!options.includes(userChoice)) {
            window.alert('Please enter a valid choice.');
        }else {

        if (userChoice === 'R') {
            stats.userCount.rock++;
        } else if (userChoice === 'P') {
            stats.userCount.paper++;
        } else {
            stats.userCount.scissors++;
        }

        // Get random index from array of options
        const index = Math.floor(Math.random() * options.length);
        const computerChoice = options[index];

        window.alert(`The computer chose ${computerChoice}`);

        if (computerChoice === 'R') {
            stats.computerCount.rock++;
        } else if (computerChoice === 'P') {
            stats.computerCount.paper++;
        } else {
            stats.computerCount.scissors++;
        }

        // If choices are the same, it's a tie
        if (userChoice === computerChoice) {
            stats.ties++;
            window.alert("It's a tie!");

            // Check every win condition for the player
        } else if (
            (userChoice === 'R' && computerChoice === 'S') ||
            (userChoice === 'P' && computerChoice === 'R') ||
            (userChoice === 'S' && computerChoice === 'P')
        ) {
            stats.wins++;
            window.alert('You win!');

            // If above conditions failed, assume player lost
        } else {
            stats.losses++;
            window.alert('You lost!');
        }

        // Ask user to play again
        keepPlaying = window.confirm('Play again?');
        }
    }
}

playGame();