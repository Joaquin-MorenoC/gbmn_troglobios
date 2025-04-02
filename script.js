function checkAnswers() {
    // Respuestas correctas
    const answers = {
        input1: "OJOS",
        input2: "PIEL",
        input3: "BLANCOS",
        input4: "ALAS",
        input5: "CUERPO",
        input6: "DIGESTIVO",
        input7: "TACTO",
        input8: "AUMENTO",
        input9: "DISMINUCIÓN",
        input10: "DISMINUCIÓN"
    };

    let allCorrect = true;

    // Comprobamos si todas las respuestas son correctas
    for (let inputId in answers) {
        let userInput = document.getElementById(inputId).value.toUpperCase();
        if (userInput === answers[inputId]) {
            // Si la respuesta es correcta, bloqueamos el campo
            document.getElementById(inputId).disabled = true;
        } else {
            // Si la respuesta es incorrecta, limpiamos el campo
            document.getElementById(inputId).value = "";
            document.getElementById(inputId).disabled = false;
            allCorrect = false;
        }
    }

    // Si todas las respuestas son correctas, mostramos el popup de éxito
    if (allCorrect) {
        document.getElementById("popup").style.display = "block";
    } else {
        // Si hay respuestas incorrectas, mostramos el popup de error
        document.getElementById("error-popup").style.display = "block";
    }
}

// Función para cerrar los popups
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("error-popup").style.display = "none";
}
