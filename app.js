const imageData = [
    {
        imageName: "bigbang",
        imageSrc: "./images/BigBang.png",
        imageAlt: "Illustration of the Big Bang explosion"

    },
    {
        imageName: "saturn",
        imageSrc: "./images/Saturn.png",
        imageAlt: "Illustration of the planet Saturn with rings"  
    },
    {
        imageName: "ursa",
        imageSrc: "./images/Ursa.png",
        imageAlt: "Constellation Ursa Minor and Ursa Major"  
    }
];


const thumbnailContainer = document.getElementById("thumbnail-container");

function createThumbnails() {
for (let i = 0; i < imageData.length; i++)  {
    const imageSky = document.createElement("img");
    imageSky.src = imageData[i].imageSrc;
    imageSky.alt = imageData[i].imageAlt;
    imageSky.className= "thumbnails";

    imageSky.addEventListener( "click", function() {
        createFullScreenImages(imageData[i]);
    });

    thumbnailContainer.appendChild(imageSky);
};
};

function createFullScreenImages(imageObj)    {
    const fullscreenContainer = document.querySelector("#fullscreen-container");
    fullscreenContainer.innerHTML = "";
    const fullImage = document.createElement("img");
    fullImage.src = imageObj.imageSrc;
    fullImage.alt = imageObj.imageAlt;
    fullImage.className = "fullscreen-image";
    fullscreenContainer.appendChild(fullImage);
};

createThumbnails();


