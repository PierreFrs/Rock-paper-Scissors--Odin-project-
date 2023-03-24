const choices = ['rock', 'paper', 'scissors'];
const winners = [];
    
    // Runs five rounds
    function game() {
      for (let i = 1; i <= 5; i++) {
        playRound(i);
      }
      // Activate the New Game Button
      document.querySelector('button').textContent = 'Play new game';
      logWins();
    }

    // push the winner of the round to the winners array and logs the stats of the round
    function playRound(round) {
      const playerSelection = playerChoice();
      const computerSelection = computerChoice();
      const winner = checkWinner(playerSelection, computerSelection);
      winners.push(winner);
      logRound(playerSelection, computerSelection, winner, round);
    }

    // Permits the player to write its choice and checks the validity of the input
    function playerChoice() {
      let input = prompt('Type rock, paper or scissors');
      while (input == null) {
        input = prompt('Type rock, paper or scissors');
      }
      input = input.toLowerCase();
      let check = validateInput(input);
      while (check == false) {
        input = prompt('Type rock, paper or scissors');
      while (input == null) {
        input = prompt('Type rock, paper or scissors');
      }
        input = input.toLowerCase();
        check = validateInput(input);
      }
      return input;
    }

    // Randomly choose the computer move
    function computerChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    // Validates the player input
    function validateInput(choice) {
      return choices.includes(choice);
    }

    // Check the round winner
    function checkWinner(choiceP, choiceC) {
      if (choiceP === choiceC) {
        return 'Tie';
      } else if ((choiceP === 'rock' && choiceC === 'scissors') || 
                  (choiceP === 'paper' && choiceC === 'rock') || 
                  (choiceP === 'scissors' && choiceC === 'paper')) {
        return 'Player wins!';
      } else {
        return 'Computer wins...';
      }
    }

    // Logs the game stats
    function logWins() {
      let playerWins = winners.filter((item) => item === 'Player wins!').length;
      let computerWins = winners.filter((item) => item === 'Computer wins...').length;
      let ties = winners.filter((item) => item === 'Tie').length;
      console.log('Results:');
      console.log('Player wins:', playerWins);
      console.log('Computer wins:', computerWins);
      console.log('Ties:', ties);
    }


    // Logs the round number and winner
    function logRound(playerChoice, computerChoice, winner, round) {
      console.log('Round:', round)
      console.log('Player chose:', playerChoice);
      console.log('Computer chose:', computerChoice);
      console.log(winner, 'won the round');
      console.log('-------------------------');
    }