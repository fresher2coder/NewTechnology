const colorCode = document.getElementById("color-code")

const changeColorSection = document.getElementById("change-color");
const chooseColorSection = document.getElementById("choose-color");

const colorInput = document.getElementById('color')

const changeButton = document.getElementById('change-btn');
const chooseButton = document.getElementById('choose-btn');

changeButton.addEventListener('click', changeSectionBackgroundColor);
chooseButton.addEventListener('click', chooseSectionBackgroundColor);

function changeSectionBackgroundColor() {
    changeColorSection.style.backgroundColor = hexCode();
    colorCode.textContent = hexCode();
}

function chooseSectionBackgroundColor(event) {
    event.preventDefault()
    console.log(colorInput.value)
    chooseColorSection.style.backgroundColor = colorInput.value;
}

function hexCode(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    
    for(let i=1;i<=6;i++){
        hexColor += hex[Math.floor(Math.random()*16)]
    }  
    
    return hexColor
}
