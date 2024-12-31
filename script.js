// Step 1: Ad Click
document.getElementById('startAd').addEventListener('click', function() {
  window.open('https://filestream-a294f52d94d4.herokuapp.com//stream/33601?code=db579e5eb86661477f623c5c', '_blank');
  document.getElementById('startAdSection').style.display = 'none';
  document.getElementById('videoSection').style.display = 'block';
});

// Step 2: Return After Ad
document.getElementById('returnBack').addEventListener('click', function() {
  document.getElementById('videoSection').style.display = 'none';
  document.getElementById('verifySection').style.display = 'block';
});

// Step 3: Robot Verification
document.getElementById('robotVerify').addEventListener('click', function() {
  document.getElementById('verifySection').style.display = 'none';
  document.getElementById('playVideo').style.display = 'block';

  let countdown = 10;
  const timerElement = document.getElementById('timer');
  const videoPlayer = document.getElementById('videoPlayer');
  const timer = setInterval(() => {
    countdown--;
    timerElement.innerText = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      videoPlayer.play(); // Auto play the video after timer
    }
  }, 1000);
});
