// Image Slide Function
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 3 seconds
  }



// News Letter Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  // AJAX Request

  function loadContent(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById("content").innerHTML = xhr.responseText;
        } else {
          console.log("Error loading content.");
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  // Audio Player
function changeSong(songSrc) {
  var player = document.getElementById("player");
  player.src = songSrc;
  
  player.load();
  player.play();
}


// Pop-up box:

function popup() {
  var popup = document.getElementById("popup-box");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup-box");
  popup.style.display = "none";
}

// Gallery

function openModal(imageElement) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImage.src = imageElement.src;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}