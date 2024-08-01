document.addEventListener('DOMContentLoaded', (event) => {
    function initializeDial(dialId, dialValueId, min, max, width, initialValue, linkedDialId = null, linkedDialValueId = null) {
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
            if (linkedDialId && linkedDialValueId) {
                document.getElementById(linkedDialId).value = dial.value;
                document.getElementById(linkedDialValueId).value = dial.value;
            }
        });

        dialValue.addEventListener('input', function() {
            if (dialValue.value < parseInt(dial.min)) {
                dialValue.value = dial.min;
            } else if (dialValue.value > parseInt(dial.max)) {
                dialValue.value = dial.max;
            }
            dial.value = dialValue.value;
            if (linkedDialId && linkedDialValueId) {
                document.getElementById(linkedDialId).value = dialValue.value;
                document.getElementById(linkedDialValueId).value = dialValue.value;
            }
        });
    }

    initializeDial('DMS_driverAsleepMessageBackoffRange', 'DMS_driverAsleepMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverAsleepFeedbackBackoffRange', 'DMS_driverAsleepFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverAsleepSpeedThresholdRange', 'DMS_driverAsleepSpeedThresholdNumber', 0, 60, '150px', 10, 'DMS_drowsinessSpeedThresholdRange', 'DMS_drowsinessSpeedThresholdNumber');

    initializeDial('DMS_drowsinessMessageBackoffRange', 'DMS_drowsinessMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_drowsinessFeedbackBackoffRange', 'DMS_drowsinessFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_drowsinessSpeedThresholdRange', 'DMS_drowsinessSpeedThresholdNumber', 0, 60, '150px', 10, 'DMS_driverAsleepSpeedThresholdRange', 'DMS_driverAsleepSpeedThresholdNumber');

    initializeDial('DMS_driverDistractedMessageBackoffRange', 'DMS_driverDistractedMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverDistractedFeedbackBackoffRange', 'DMS_driverDistractedFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverDistractedSpeedThresholdRange', 'DMS_driverDistractedSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_phoneUseMessageBackoffRange', 'DMS_phoneUseMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_phoneUseFeedbackBackoffRange', 'DMS_phoneUseFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_phoneUseSpeedThresholdRange', 'DMS_phoneUseSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_seatbeltMessageBackoffRange', 'DMS_seatbeltMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_seatbeltFeedbackBackoffRange', 'DMS_seatbeltFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_seatbeltSpeedThresholdRange', 'DMS_seatbeltSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_smokingMessageBackoffRange', 'DMS_smokingMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_smokingFeedbackBackoffRange', 'DMS_smokingFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_smokingSpeedThresholdRange', 'DMS_smokingSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_LDW_MessageBackoffRange', 'ADAS_LDW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_HMW_MessageBackoffRange', 'ADAS_HMW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_UFCW_MessageBackoffRange', 'ADAS_UFCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_FCW_MessageBackoffRange', 'ADAS_FCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_PCW_MessageBackoffRange', 'ADAS_PCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('TES_movementStartedSpeedThresholdRange', 'TES_movementStartedSpeedThresholdNumber', 0, 60, '150px', 10, 'TES_movementStoppedSpeedThresholdRange', 'TES_movementStoppedSpeedThresholdNumber');
    
    initializeDial('TES_movementStoppedSpeedThresholdRange', 'TES_movementStoppedSpeedThresholdNumber', 0, 60, '150px', 10, 'TES_movementStartedSpeedThresholdRange', 'TES_movementStartedSpeedThresholdNumber');
});

/*document.addEventListener('DOMContentLoaded', (event) => {
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
    initializeDial('DMS_driverAsleepMessageBackoffRange', 'DMS_driverAsleepMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverAsleepFeedbackBackoffRange', 'DMS_driverAsleepFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverAsleepSpeedThresholdRange', 'DMS_driverAsleepSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_drowsinessMessageBackoffRange', 'DMS_drowsinessMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_drowsinessFeedbackBackoffRange', 'DMS_drowsinessFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_drowsinessSpeedThresholdRange', 'DMS_drowsinessSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_driverDistractedMessageBackoffRange', 'DMS_driverDistractedMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverDistractedFeedbackBackoffRange', 'DMS_driverDistractedFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_driverDistractedSpeedThresholdRange', 'DMS_driverDistractedSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_phoneUseMessageBackoffRange', 'DMS_phoneUseMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_phoneUseFeedbackBackoffRange', 'DMS_phoneUseFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_phoneUseSpeedThresholdRange', 'DMS_phoneUseSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_seatbeltMessageBackoffRange', 'DMS_seatbeltMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_seatbeltFeedbackBackoffRange', 'DMS_seatbeltFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_seatbeltSpeedThresholdRange', 'DMS_seatbeltSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('DMS_smokingMessageBackoffRange', 'DMS_smokingMessageBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_smokingFeedbackBackoffRange', 'DMS_smokingFeedbackBackoffNumber', 0, 60, '150px', 10);
    initializeDial('DMS_smokingSpeedThresholdRange', 'DMS_smokingSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_LDW_MessageBackoffRange', 'ADAS_LDW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_HMW_MessageBackoffRange', 'ADAS_HMW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_UFCW_MessageBackoffRange', 'ADAS_UFCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_FCW_MessageBackoffRange', 'ADAS_FCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('ADAS_PCW_MessageBackoffRange', 'ADAS_PCW_MessageBackoffNumber', 0, 60, '150px', 10);

    initializeDial('TES_movementStartedSpeedThresholdRange', 'TES_movementStartedSpeedThresholdNumber', 0, 60, '150px', 10);

    initializeDial('TES_movementStoppedSpeedThresholdRange', 'TES_movementStoppedSpeedThresholdNumber', 0, 60, '150px', 10);
});*/