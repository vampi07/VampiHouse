// Obtener el elemento del texto
const text = document.getElementById('movingText');

// Variable para controlar la posición y dirección del movimiento
let position = 0;
let movingRight = true;  // Indica si el texto se mueve hacia la derecha

// Calcula el centro de la pantalla (punto medio)
const screenCenter = window.innerWidth / 2 - text.offsetWidth / 2;

// Función para mover el texto de izquierda a derecha hasta el centro y viceversa
function moveText() {
    if (movingRight) {
        if (position < screenCenter) {
            position += 5;  // Velocidad de movimiento (ajustable)
            text.style.left = position + 'px';  // Actualiza la posición
        } else {
            movingRight = false;  // Cambia la dirección al llegar al centro
        }
    } else {
        if (position > 0) {
            position -= 5;  // Velocidad de movimiento hacia la izquierda
            text.style.left = position + 'px';  // Actualiza la posición
        } else {
            movingRight = true;  // Cambia la dirección al llegar al principio
        }
    }
    requestAnimationFrame(moveText);  // Llama a la función nuevamente para continuar la animación
}

// Iniciar la animación cuando la página se carga
moveText();

// index.js
document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("welcomeMessage");

    // El mensaje aparecerá con animación al cargar la página
    message.style.opacity = 1; // Hacemos visible el mensaje

    // Desaparecer el mensaje después de 5 segundos
    setTimeout(() => {
        message.style.opacity = 0; // Lo desvanecemos
    }, 5000); // 5000 milisegundos = 5 segundos
});

document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a VAMPI HOUSE!");
});
window.addEventListener('load', function() {
    // Obtén todos los emojis
    const emojis = document.querySelectorAll(".emoji");
})

    // Reinicia la animación de todos los emojis cuando la página se carga
    emojis.forEach(emoji => {
        emoji.style.animation = 'none'; // Detenemos cualquier animación previa
        emoji.offsetHeight; // Forzamos el reflow para reiniciar la animación
        emoji.style.animation = 'fly 4s infinite'; // Iniciamos la animación de vuelo
    });