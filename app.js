let countdownInterval; // To store the interval ID

function countDown() {
  const hour = document.querySelector("#hours").value;
  let minut = parseInt(document.querySelector("#minutes").value);
  let second = parseInt(document.querySelector("#seconds").value);

  // Calculate the total time in seconds
  let totalTime = hour * 3600 + minut * 60 + second;

  // Clear any previous interval if it's running
  if (countdownInterval) clearInterval(countdownInterval);

  // Start the countdown
  countdownInterval = setInterval(function () {
    if (totalTime <= 0) {
      clearInterval(countdownInterval); // Stop the countdown
      document.querySelector("#display").textContent = "Time's up!";
    } else {
      // Calculate hours, minutes, and seconds remaining
      const hours = Math.floor(totalTime / 3600);
      const minutes = Math.floor((totalTime % 3600) / 60);
      const seconds = totalTime % 60;

      // Display the countdown
      document.querySelector("#display").textContent = `${String(
        hours
      )}:${String(minutes)}:${String(seconds)}`;

      totalTime--; // Decrease time by 1 second
    }
  }, 1000);
}
