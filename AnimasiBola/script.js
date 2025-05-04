const canvas = document.getElementById('container');
const bolaGelinding = document.getElementById('bola');

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

const besarBola = bolaGelinding.clientWidth;

let x = 0;
let y = (canvasHeight - besarBola)/2;

const kecepatan = 2

let titikMulai = 'kanan';

function animasi(){
    switch (titikMulai) {
        case 'kanan':
            x += kecepatan;
            if (x >= (canvasWidth - besarBola)) {
                x = canvasWidth - besarBola
                titikMulai = 'kebawah'
            }
            break;
        
        case 'kebawah':
            y += kecepatan;
            if (y >= (canvasHeight - besarBola)) {
                y = canvasHeight - besarBola
                titikMulai = 'kekiri'
            }
            break;
        case 'kekiri':
            x -= kecepatan;
            if (x < 0 ){
                x = 0
                bolaGelinding.remove();
            }
            break;
        
    }
    bolaGelinding.style.left = x + 'px'
    bolaGelinding.style.top = y + 'px'

    requestAnimationFrame(animasi)
}
bolaGelinding.style.left = x + 'px'
bolaGelinding.style.top = y + 'px'
requestAnimationFrame(animasi)