 let score = JSON.parse(localStorage.getItem("score")) || {
       win: 0,
       loose: 0,
       tie: 0,
     };


     function playGame(playerMove) {
       const moves = ["rock", "paper", "scissors"];
       const computerMove = moves[Math.floor(Math.random() * moves.length)];
       let result = "";


       if (playerMove === computerMove) {
         result = "It's a tie!";
         score.tie++;
       } else if (
         (playerMove === "rock" && computerMove === "scissors") ||
         (playerMove === "paper" && computerMove === "rock") ||
         (playerMove === "scissors" && computerMove === "paper")
       ) {
         result = "You win!";
         score.win++;
       } else {
         result = "You lose!";
         score.loose++;
       }


       localStorage.setItem("score", JSON.stringify(score));


       document.querySelector(".js-result").innerHTML = result;
       document.querySelector(".js-moves").innerHTML = `You: ${getEmoji(
         playerMove
       )} Computer: ${getEmoji(computerMove)}`;
       updateScore();
     }


     function getEmoji(move) {
       if (move === "rock") return "✊";
       if (move === "paper") return "✋";
       if (move === "scissors") return "✌️";
     }


     function updateScore() {
       document.querySelector(
         ".score"
       ).innerHTML = `Wins: ${score.win}, Losses: ${score.loose}, Ties: ${score.tie}`;
     }


     function resetScore() {
       score = { win: 0, loose: 0, tie: 0 };
       localStorage.removeItem("score");
       updateScore();
       document.querySelector(".js-result").innerHTML = "";
       document.querySelector(".js-moves").innerHTML = "";
     }


     updateScore();