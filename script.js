const vaquita = document.querySelector('.vaquita');
const sapito = document.querySelector('.sapito');
const cobrita = document.querySelector('.cobrita')
const audioFrog = document.querySelector('#frogsound')
const audioCow = document.querySelector('#cowsound')
const audioSnake = document.querySelector('#snakesound')

sapito.onclick = function (){
    audioFrog.play()
};

vaquita.onclick =  function (){
    audioCow.play()
};

cobrita.onclick = function (){
    audioSnake.play()
};