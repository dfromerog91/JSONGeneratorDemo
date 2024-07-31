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
    initializeDial('DMS_DriverAsleep_MessageBackoff_dial_test', 'DMS_DriverAsleep_MessageBackoff_value_test', 0, 60, '150px', 10);
    initializeDial('DMS_DriverAsleep_FeedbackBackoff_dial_test', 'DMS_DriverAsleep_FeedbackBackoff_value_test', 0, 60, '150px', 10);
    initializeDial('DMS_DriverAsleep_SpeedThreshold_dial_test', 'DMS_DriverAsleep_SpeedThreshold_value_test', 0, 60, '150px', 10);

    initializeDial('DMS_DriverDrowsiness_MessageBackoff_dial_test', 'DMS_DriverDrowsiness_MessageBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_DriverDrowsiness_FeedbackBackoff_dial_test', 'DMS_DriverDrowsiness_FeedbackBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_DriverDrowsiness_SpeedThreshold_dial_test', 'DMS_DriverDrowsiness_SpeedThreshold_value_test', 0, 60, '150px', 15);

    initializeDial('DMS_DriverDistracted_MessageBackoff_dial_test', 'DMS_DriverDistracted_MessageBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_DriverDistracted_FeedbackBackoff_dial_test', 'DMS_DriverDistracted_FeedbackBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_DriverDistracted_SpeedThreshold_dial_test', 'DMS_DriverDistracted_SpeedThreshold_value_test', 0, 60, '150px', 15);

    initializeDial('DMS_PhoneUse_MessageBackoff_dial_test', 'DMS_PhoneUse_MessageBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_PhoneUse_FeedbackBackoff_dial_test', 'DMS_PhoneUse_FeedbackBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_PhoneUse_SpeedThreshold_dial_test', 'DMS_PhoneUse_SpeedThreshold_value_test', 0, 60, '150px', 15);

    initializeDial('DMS_Seatbelt_MessageBackoff_dial_test', 'DMS_Seatbelt_MessageBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_Seatbelt_FeedbackBackoff_dial_test', 'DMS_Seatbelt_FeedbackBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_Seatbelt_SpeedThreshold_dial_test', 'DMS_Seatbelt_SpeedThreshold_value_test', 0, 60, '150px', 15);

    initializeDial('DMS_Smoking_MessageBackoff_dial_test', 'DMS_Smoking_MessageBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_Smoking_FeedbackBackoff_dial_test', 'DMS_Smoking_FeedbackBackoff_value_test', 0, 60, '150px', 15);
    initializeDial('DMS_Smoking_SpeedThreshold_dial_test', 'DMS_Smoking_SpeedThreshold_value_test', 0, 60, '150px', 15);

    initializeDial('ADAS_LaneDeparture_MessageBackoff_dial_test', 'ADAS_LaneDeparture_MessageBackoff_value_test', 0, 60, '150px', 15);

    initializeDial('ADAS_Tailgating_MessageBackoff_dial_test', 'ADAS_Tailgating_MessageBackoff_value_test', 0, 60, '150px', 15);

    initializeDial('ADAS_UFCW_MessageBackoff_dial_test', 'ADAS_UFCW_MessageBackoff_value_test', 0, 60, '150px', 15);
});