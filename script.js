const choices = ['rock', 'paper', 'scissors'];
    
    function game() {
      playRound();
    }

    function playRound() {
      const playSelection = playerChoice();
      const computerSelection = computerChoice();
    }

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
    }

    function computerChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    function validateInput(choice) {
      return choices.includes(choice);
    }

    game();