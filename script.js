document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario

            // Aquí podrías agregar lógica para enviar los datos del formulario
            alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
            form.reset(); // Limpiar el formulario después del envío
        });
    }
});
