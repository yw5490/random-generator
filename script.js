function generate() {
    var name = document.getElementById('nameInput').value;
    var placeArray = ["Italy", "Japan", "New Zealand", "Spain", "China", "Korea", "France", "England"];

    var randomIndex = Math.floor(Math.random() * placeArray.length);
    var randomContent = placeArray[randomIndex];

    document.getElementById('output').textContent = `${name}, you should visit ${randomContent}!`;
    restyle();
}

function restyle() {
    var outputElement = document.getElementById('output');
    
    var randomFontSize = Math.floor(Math.random() * 10 + 30) + 'px';
    var randomTopMargin = Math.floor(Math.random() * 30 + 20) + 'px';

    // Generate a random text color. 
    var colorArray = ["#8696a7", "#a6808c", "#2f394d", "#709176", "##8A897C", "#656565", "#DB7C26", "#508AA8", "#FFBA49"];
    var randomIndex = Math.floor(Math.random() * colorArray.length);
    var randomColor = colorArray[randomIndex];

    outputElement.style.fontSize = randomFontSize;
    outputElement.style.color = randomColor;
    outputElement.style.marginTop = randomTopMargin;
}

