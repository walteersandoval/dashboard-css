document.addEventListener("DOMContentLoaded", function() {
    // Referencia al checkbox
    const toggleCheck = document.getElementById('toggleCheck');

    // Evento al cambiar el estado del checkbox
    toggleCheck.addEventListener('change', function() {
        if (this.checked) {
            // Activa modo oscuro
            activateDarkMode();
        } else {
            // Desactiva modo oscuro
            deactivateDarkMode();
        }
    });

    function activateDarkMode() {
        document.body.classList.add('dark-mode');
    }

    function deactivateDarkMode() {
        document.body.classList.remove('dark-mode');
    }
});
