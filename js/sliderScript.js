document.addEventListener('DOMContentLoaded', (event) => {
    function initializeDial(dialId, dialValueId, min, max, width, initialValue) {
        const dial = document.getElementById(dialId);
        const dialValue = document.getElementById(dialValueId);

        dial.min = min;
        dial.max = max;
        dial.value = initialValue;
        dial.style.width = width;

        dialValue.min = min;
        dialValue.max = max;
        dialValue.value = initialValue;

        dial.addEventListener('input', function() {
            dialValue.value = dial.value;
        });

        dialValue.addEventListener('input', function() {
            if (dialValue.value < parseInt(dial.min)) {
                dialValue.value = dial.min;
            } else if (dialValue.value > parseInt(dial.max)) {
                dialValue.value = dial.max;
            }
            dial.value = dialValue.value;
        });
    }

    // Prueba para inicializar (Probablemente esto vaya en el onLoad)
    initializeDial('dial1', 'dialValue1', 0, 60, '200px', 15);
    initializeDial('dial2', 'dialValue2', 10, 60, '100px', 12);
});