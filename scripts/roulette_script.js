const images = [
    "./img/spin/spin-02.png",
    "./img/spin/spin-03.png",
    "./img/spin/spin-04.png"
    // Add more image URLs here
  ];
  
  const spinButton = document.getElementById("spin-button");
  const rouletteImage = document.getElementById("roulette-image");
  
  function spinRoulette() {
    // Add the loading class to show the animation
    rouletteImage.classList.add("loading");
  
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      rouletteImage.setAttribute("src", selectedImage);
  
      // Remove the loading class to stop the animation
      rouletteImage.classList.remove("loading");
    }, 1000); // Adjust the duration of the loading animation here (1000ms = 1 second)
  }
  
  // Spin roulette on button click
  spinButton.addEventListener("click", spinRoulette);