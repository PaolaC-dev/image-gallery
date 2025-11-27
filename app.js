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

for (let i = 0; i < imageData.length; i++)  {
    const imageSky = document.createElement("img");
    imageSky.src = imageData[i].imageSrc;
    imageData.alt = imageData[i].imageAlt;
    thumbnailContainer.appendChild(imageSky);
}
