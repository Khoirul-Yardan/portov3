function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var popup = document.getElementById("popup");
var popupImg = document.getElementById("popup-img");
var captionText = document.getElementById("caption");
var descriptionText = document.getElementById("description");
var galleryItems = document.getElementsByClassName("gallery-item");

for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = function () {
        popup.style.display = "block";
        popupImg.src = this.src;
        captionText.innerHTML = this.alt;
        descriptionText.innerHTML = this.getAttribute("data-description");
    };
}

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    popup.style.display = "none";
}

popup.onclick = function (event) {
    if (event.target !== popupImg) {
        popup.style.display = "none";
    }
}
