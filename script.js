document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    // Iteramos sobre cada botón y agregamos un listener de evento
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;
            // Agregamos el valor del botón a la pantalla
            appendToDisplay(value);
        });
    });

    // Función para agregar caracteres a la pantalla
    function appendToDisplay(value) {
        // Si la pantalla está en "Error", limpiamos la pantalla antes de agregar un nuevo número
        if (display.value === 'Error') {
            display.value = '';
        }
        display.value += value;
    }

    // Agregamos un listener de evento al botón de "Limpiar"
    document.getElementById('btnClear').addEventListener('click', function () {
        clearDisplay();
    });

    // Función para limpiar la pantalla
    function clearDisplay() {
        display.value = '';
    }

    // Agregamos un listener de evento al botón "=" para calcular el resultado
    document.getElementById('btnEqual').addEventListener('click', function () {
        calculate();
    });

    // Función para calcular el resultado
    function calculate() {
        try {
            // Limpiamos la expresión de cualquier carácter no permitido
            const expression = display.value.replace(/[^-()\d/*+.]/g, '');
            // Usamos la función eval() para evaluar la expresión en la pantalla
            const result = eval(expression);
            display.value = result;
        } catch (e) {
            // En caso de error, mostramos "Error" en la pantalla
            display.value = 'Error';
        }
    }
});