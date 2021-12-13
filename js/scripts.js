window.onload = chooseRandomImage;

const images = new Array(
                "images/Mark-1.png",
                "images/Mark-2.png",
                "images/Mark-3.png",
                "images/Mark-4.png",
                "images/Mark-5.png",
                "images/Mark-6.png",
                "images/Mark-7.png",
                "images/Mark-8.png"
                );


const logo = document.querySelector(".logomark")

function chooseRandomImage() { 
     var randomNumber = Math.floor(Math.random() * images.length);
     logo.src = images[randomNumber];
}