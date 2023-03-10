const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 20

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNR()}x${getRandomNR()}`
}

function getRandomNR() {
    return Math.floor(Math.random() * 10) + 300
}