const colorChoices = ['#3498DB', '#D5DBDB', '#2ECC71', '#9B59B6', '#F1C40F', '#FF5733', '#31A2AC', '#9B59B6'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colorChoices.length);
    return colorChoices[randomIndex];
}

function changeFormBackgroundColor() {
    const form = document.getElementById('myForm'); 
    const randomColor = getRandomColor();
    form.style.backgroundColor = randomColor;
}

setInterval(changeFormBackgroundColor, 2000);