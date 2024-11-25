let imgNumber = 1

function changeImage() {
    var image = document.getElementById('myImage');
    image.setAttribute('src', `./assets/img/img${(imgNumber++%2) + 1}.jpg`);
    image.setAttribute('alt', 'Shoe');
}

function removeImage() {
    var image = document.getElementById('myImage');
    image.removeAttribute('src');
    image.removeAttribute('alt');
}
