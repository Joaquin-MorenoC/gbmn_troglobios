function checkAnswers() {
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

    for (let inputId in answers) {
        let userInput = document.getElementById(inputId).value.toUpperCase();
        if (userInput === answers[inputId]) {
            document.getElementById(inputId).disabled = true;
        } else {
            document.getElementById(inputId).value = "";
            document.getElementById(inputId).disabled = false;
            allCorrect = false;
        }
    }

    if (allCorrect) {
        document.getElementById("popup").style.display = "block";
        monitorDownload();
    } else {
        document.getElementById("error-popup").style.display = "block";
    }
}

// Monitorear si el archivo ha sido descargado o abierto
function monitorDownload() {
    const downloadLink = document.getElementById("download-link");
    const nextTestButton = document.getElementById("next-test-button");

    downloadLink.addEventListener('click', function() {
        // Habilitar el botón "Pasar a la prueba 2" una vez que el enlace haya sido clickeado
        nextTestButton.disabled = false;
    });
}

// Función para cerrar los popups
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("error-popup").style.display = "none";
}
