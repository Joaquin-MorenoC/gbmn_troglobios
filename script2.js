// Respuestas correctas para la prueba 2
const correctAnswers = {
    input1: "11 Y 14",       // Respuesta 1
    input2: "59,40%",        // Respuesta 2
    input3: "5, 7, 9 Y 11"   // Respuesta 3
};

// Obtener los inputs y el botón
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const nextTestButton = document.getElementById("next-test-button");
const errorPopup = document.getElementById("error-popup");
const successPopup = document.getElementById("popup");

// Función para verificar las respuestas
function checkAnswers() {
    const answer1 = input1.value.trim().toUpperCase();
    const answer2 = input2.value.trim().toUpperCase();
    const answer3 = input3.value.trim().toUpperCase();

    // Comprobar si todas las respuestas son correctas
    const isAnswer1Correct = answer1 === correctAnswers.input1;
    const isAnswer2Correct = answer2 === correctAnswers.input2;
    const isAnswer3Correct = answer3 === correctAnswers.input3;

    if (isAnswer1Correct && isAnswer2Correct && isAnswer3Correct) {
        // Si todas las respuestas son correctas, muestra el popup de éxito
        successPopup.style.display = "block";
        errorPopup.style.display = "none"; // Aseguramos que el popup de error esté oculto
        nextTestButton.disabled = false;  // Habilitar el botón "Pasar a la prueba 3"

        // Bloquear las respuestas correctas para que no puedan ser editadas
        input1.disabled = true;
        input2.disabled = true;
        input3.disabled = true;
    } else {
        // Si alguna respuesta es incorrecta, muestra el popup de error
        errorPopup.style.display = "block";
        successPopup.style.display = "none"; // Aseguramos que el popup de éxito esté oculto
    }
}

// Función para cerrar el popup de error
function closePopup() {
    errorPopup.style.display = "none";
}
