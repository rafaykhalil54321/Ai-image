// script.js
function showDescription(desc) {
document.getElementById('imageDescription').innerText = desc;
}

function generateImage() {
const prompt = document.getElementById('imagePrompt').value;
const imageResult = document.getElementById('imageResult');

if (!prompt) {
alert('Please enter a prompt!');
return;
}

imageResult.innerHTML = '<p>Generating image...</p>';

setTimeout(() => {
const randomImage = https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)};
imageResult.innerHTML = <img src="${randomImage}" onerror="this.onerror=null;this.src='fallback.jpg';" alt="Generated Image" />;
}, 2000);
}

