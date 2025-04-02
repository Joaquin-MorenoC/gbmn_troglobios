function checkAnswers() {
    const answers = {
        q1: "11 Y 14",
        q2: "59,40%",
        q3: "5, 7, 9 Y 11"
    };

    let allCorrect = true;

    // Verificamos las respuestas
    for (let question in answers) {
        let userInput = document.getElementById(question).value.toUpperCase();
        if (userInput !== answers[question].toUpperCase()) {
            allCorrect = false;
        }
    }

    // Si todas las respuestas son correctas, mostramos el popup de éxito
    if (allCorrect) {
        document.getElementById("popup").style.display = "block";
    } else {
        alert("No todas las respuestas son correctas. Vuelve a intentarlo.");
    }
}
