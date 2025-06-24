const colors = [
  '#FF3C78', // rosa fucsia
  '#FFD700', // amarillo dorado
  '#FF5722', // naranja vibrante
  '#00BCD4', // turquesa
  '#8BC34A', // verde lima
  '#2196F3', // azul eléctrico
  '#9C27B0', // morado brillante
];

function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.classList.add('confetti');
    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confeti.style.width = confeti.style.height = (Math.random() * 8 + 8) + 'px';
    confeti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confeti.style.animationDelay = (Math.random() * 2) + 's';

  // Cuando termine la animación, elimina el confeti
    confeti.addEventListener('animationend', () => {
    confeti.remove();
    });

    document.body.appendChild(confeti);
}

document.getElementById('btnConfetti').addEventListener('click', () => {
    for (let i = 0; i < 200; i++) {
    setTimeout(crearConfeti, i * 10);
    }

    const mensaje = document.getElementById('mensajeExtra');
    mensaje.style.display = 'block';

    setTimeout(() => {
    mensaje.style.display = 'none';
    }, 4000);
});
