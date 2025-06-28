function flipCoin() {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");
    const sound = document.getElementById("coin-sound");
  
    const player1Name = document.getElementById("player1").value.trim();
    const player2Name = document.getElementById("player2").value.trim();
    const player1Choice = document.querySelector("input[name='player1-choice']:checked");
    const player2Choice = document.querySelector("input[name='player2-choice']:checked");
  
    if (!player1Name || !player2Name) {
      result.textContent = "Please enter both player names.";
      return;
    }
  
    if (!player1Choice || !player2Choice) {
      result.textContent = "Both players must select Heads or Tails.";
      return;
    }
  
    if (player1Choice.value === player2Choice.value) {
      result.textContent = "Both players can't choose the same side!";
      return;
    }
  
    const isHeads = Math.random() < 0.5;
    const outcome = isHeads ? "heads" : "tails";
  
    // Reset and play sound
    coin.style.transition = "none";
    coin.style.transform = "rotateY(0deg)";
    sound.currentTime = 0;
    sound.play();
  
    // Start flip after short delay
    setTimeout(() => {
      coin.style.transition = "transform 2s";
      coin.style.transform = `rotateY(${1800 + (isHeads ? 0 : 180)}deg)`;
    }, 50);
  
    setTimeout(() => {
      let winner = (player1Choice.value === outcome) ? player1Name : player2Name;
      result.textContent = `🪙 It's ${outcome.toUpperCase()}! ${winner} wins! 🎉`;
    }, 2100);
  }
  
    /*function flipCoin() {
        const coin = document.getElementById("coin"); // should be the 'coin-inner' div
        const result = document.getElementById("result");
        const sound = document.getElementById("coin-sound");
      
        const isHeads = Math.random() < 0.5;
        const outcome = isHeads ? "heads" : "tails";
      
        // Reset and play sound
        coin.style.transition = "none";
        coin.style.transform = "rotateY(0deg)";
        sound.currentTime = 0;
        sound.play();
      
        // Animate coin flip
        setTimeout(() => {
          coin.style.transition = "transform 2s cubic-bezier(0.25, 1, 0.5, 1)";
          coin.style.transform = `rotateY(${1800 + (isHeads ? 0 : 180)}deg)`;
        }, 50);
      
        setTimeout(() => {
          result.textContent = `🪙 You got ${outcome.charAt(0).toUpperCase() + outcome.slice(1)}!`;
        }, 2100);
      }*/
      