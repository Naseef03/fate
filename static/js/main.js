document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const tossButton = document.getElementById("tossButton");
    const resultText = document.getElementById("resultText");
    const headsCount = document.getElementById("headsCount");
    const tailsCount = document.getElementById("tailsCount");

    let currentSide = "heads";
    let heads = 0;
    let tails = 0;

    tossButton.addEventListener('click', async () => {
      tossButton.disabled = true;
      
      // Animate coin flip
      coin.style.transform = 'rotateX(1800deg)';
      coin.style.transition = 'transform 1s';

      // Get result from server
      const response = await fetch("/toss");
      const data = await response.json();
      const result = data.result;
    
      // Update counts
      if (result === "heads") {
        heads++;
        headsCount.textContent = heads;
      } else {
        tails++;
        tailsCount.textContent = tails;
      }

      // Show result
      resultText.textContent = `Result: ${result.charAt(0).toUpperCase() + result.slice(1)}`;

      // Reset coin position
      setTimeout(() => {
        coin.style.transform = '';
        coin.style.transition = '';
        tossButton.disabled = false;
      }, 1000);
    })
});
