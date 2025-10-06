const hollow = document.querySelector('.person');
const cacto = document.querySelector('.cacto');
const gameOverContainer = document.querySelector('.game-over-container');
const gameOverText = document.querySelector('.fimDeJogo');
const pontuacaoFinal = document.querySelector('.pontuacaoFinal');
const contador = document.querySelector('.contador');

let score = 0;
let intervalo = null;
contador.innerHTML = 0;

const jump = () => {
  hollow.classList.add('jump');
  setTimeout(() => {
    hollow.classList.remove('jump');
  }, 500);
};

const iniciarContador = () => {
  intervalo = setInterval(() => {
    score += 1;
    contador.innerText = score;
  }, 1000);
};

const pararJogo = () => {
  clearInterval(loop);
  clearInterval(intervalo);
  intervalo = null;
};

const loop = setInterval(() => {
  const cactoPosition = cacto.offsetLeft;
  const hollowPosition = +window.getComputedStyle(hollow).bottom.replace('px', '');

  if (cactoPosition <= 85 && cactoPosition > 0 && hollowPosition >= 68) {

    cacto.style.animation = 'none';
    cacto.style.left = `${cactoPosition}px`;

    hollow.style.animation = 'none';
    hollow.style.left = `${hollowPosition}px`;

    hollow.src = "./image/hollow.gif";

    gameOverContainer.classList.remove('desaparecer');
    pontuacaoFinal.innerText = `Sua Pontuação: ${score}`;

    pararJogo();
  }
}, 10);


iniciarContador();


document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.key === 'ArrowUp') {
    jump();
  }

  if (
    event.code === 'Space' &&
    !gameOverContainer.classList.contains('desaparecer')
  ) {
    window.location.reload();
  }
});
