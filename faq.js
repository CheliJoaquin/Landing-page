document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Cierra todas las respuestas antes de abrir la seleccionada
        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.display = "none";
            }
        });

        // Alterna la visibilidad de la respuesta seleccionada
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});
