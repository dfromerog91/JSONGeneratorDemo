document.addEventListener('DOMContentLoaded', (event) => {
    function initializeDial(dialId, dialValueId, min, max, width, initialValue, step = 1, linkedDialId = null, linkedDialValueId = null) {
        const dial = document.getElementById(dialId);
        const dialValue = document.getElementById(dialValueId);

        dial.min = min;
        dial.max = max;
        dial.value = initialValue;
        dial.step = step;
        dial.style.width = width;

        dialValue.min = min;
        dialValue.max = max;
        dialValue.value = initialValue;
        dialValue.step = step;

        dial.addEventListener('input', function() {
            dialValue.value = dial.value;
            if (linkedDialId && linkedDialValueId) {
                document.getElementById(linkedDialId).value = dial.value;
                document.getElementById(linkedDialValueId).value = dial.value;
            }
        });

        dialValue.addEventListener('input', function() {
            if (dialValue.value < parseFloat(dial.min)) {
                dialValue.value = dial.min;
            } else if (dialValue.value > parseFloat(dial.max)) {
                dialValue.value = dial.max;
            }
            dial.value = dialValue.value;
            if (linkedDialId && linkedDialValueId) {
                document.getElementById(linkedDialId).value = dialValue.value;
                document.getElementById(linkedDialValueId).value = dialValue.value;
            }
        });
    }

    initializeDial('DMS_driverAsleepMessageBackoffRange', 'DMS_driverAsleepMessageBackoffNumber', 0, 1, '136px', 0);
    initializeDial('DMS_driverAsleepFeedbackBackoffRange', 'DMS_driverAsleepFeedbackBackoffNumber', 1, 60, '136px', 1);
    initializeDial('DMS_driverAsleepSpeedThresholdRange', 'DMS_driverAsleepSpeedThresholdNumber', 0, 50, '136px', 0, 1, 'DMS_drowsinessSpeedThresholdRange', 'DMS_drowsinessSpeedThresholdNumber');
    initializeDial('DMS_driverAsleepSleepDurationRange', 'DMS_driverAsleepSleepDurationNumber', 1, 5, '192px', 4, 0.1);

    initializeDial('DMS_drowsinessMessageBackoffRange', 'DMS_drowsinessMessageBackoffNumber', 0, 30, '136px', 15);
    initializeDial('DMS_drowsinessFeedbackBackoffRange', 'DMS_drowsinessFeedbackBackoffNumber', 1, 60, '136px', 10);
    initializeDial('DMS_drowsinessSpeedThresholdRange', 'DMS_drowsinessSpeedThresholdNumber', 0, 50, '136px', 0, 1, 'DMS_driverAsleepSpeedThresholdRange', 'DMS_driverAsleepSpeedThresholdNumber');

    initializeDial('DMS_driverDistractedMessageBackoffRange', 'DMS_driverDistractedMessageBackoffNumber', 0, 30, '136px', 1);
    initializeDial('DMS_driverDistractedFeedbackBackoffRange', 'DMS_driverDistractedFeedbackBackoffNumber', 1, 60, '136px', 10);
    initializeDial('DMS_driverDistractedSpeedThresholdRange', 'DMS_driverDistractedSpeedThresholdNumber', 0, 50, '136px', 0);
    initializeDial('DMS_driverDistractedTurnGraceTimerRange', 'DMS_driverDistractedTurnGraceTimerNumber', 0, 5, '192px', 2, 0.1);

    initializeDial('DMS_phoneUseMessageBackoffRange', 'DMS_phoneUseMessageBackoffNumber', 0, 30, '136px', 5);
    initializeDial('DMS_phoneUseFeedbackBackoffRange', 'DMS_phoneUseFeedbackBackoffNumber', 1, 60, '136px', 30);
    initializeDial('DMS_phoneUseSpeedThresholdRange', 'DMS_phoneUseSpeedThresholdNumber', 0, 50, '136px', 0);

    initializeDial('DMS_seatbeltMessageBackoffRange', 'DMS_seatbeltMessageBackoffNumber', 0, 30, '136px', 10);
    initializeDial('DMS_seatbeltFeedbackBackoffRange', 'DMS_seatbeltFeedbackBackoffNumber', 1, 60, '136px', 30);
    initializeDial('DMS_seatbeltSpeedThresholdRange', 'DMS_seatbeltSpeedThresholdNumber', 0, 50, '136px', 0);
    initializeDial('DMS_seatbeltAlertTimeRange', 'DMS_seatbeltAlertTimeNumber', 5, 60, '192px', 15);

    initializeDial('DMS_smokingMessageBackoffRange', 'DMS_smokingMessageBackoffNumber', 0, 30, '136px', 5);
    initializeDial('DMS_smokingFeedbackBackoffRange', 'DMS_smokingFeedbackBackoffNumber', 1, 60, '136px', 30);
    initializeDial('DMS_smokingSpeedThresholdRange', 'DMS_smokingSpeedThresholdNumber', 0, 50, '136px', 0);

    initializeDial('DMS_driverDisappearedTimeThresholdRange', 'DMS_driverDisappearedTimeThresholdNumber', 5, 60, '192px', 30);
    initializeDial('DMS_driverDisappearedTrackingGraceTimerRange', 'DMS_driverDisappearedTrackingGraceTimerNumber', 1, 60, '192px', 5);

    initializeDial('DMS_driverChangedMinimumRange', 'DMS_driverChangedMinimumNumber', 0, 15, '192px', 5, 0.1);

    initializeDial('ADAS_LDW_MessageBackoffRange', 'ADAS_LDW_MessageBackoffNumber', 0, 30, '136px', 5);

    initializeDial('ADAS_HMW_MessageBackoffRange', 'ADAS_HMW_MessageBackoffNumber', 0, 30, '136px', 5);

    initializeDial('ADAS_UFCW_MessageBackoffRange', 'ADAS_UFCW_MessageBackoffNumber', 0, 30, '136px', 5);

    initializeDial('ADAS_FCW_MessageBackoffRange', 'ADAS_FCW_MessageBackoffNumber', 0, 30, '136px', 0);

    initializeDial('ADAS_PCW_MessageBackoffRange', 'ADAS_PCW_MessageBackoffNumber', 0, 30, '136px', 0);

    initializeDial('TES_movementStartedSpeedThresholdRange', 'TES_movementStartedSpeedThresholdNumber', 10, 30, '136px', 10, 1, 'TES_movementStoppedSpeedThresholdRange', 'TES_movementStoppedSpeedThresholdNumber');
    
    initializeDial('TES_movementStoppedSpeedThresholdRange', 'TES_movementStoppedSpeedThresholdNumber', 10, 30, '136px', 10, 1, 'TES_movementStartedSpeedThresholdRange', 'TES_movementStartedSpeedThresholdNumber');

    initializeDial('TES_heartbeatIgnitionOffIntervalRange', 'TES_heartbeatIgnitionOffIntervalNumber', 1, 24, '136px', 1);
    initializeDial('TES_heartbeatIgnitionOnIntervalRange', 'TES_heartbeatIgnitionOnIntervalNumber', 5, 600, '136px', 60);
    initializeDial('TES_heartbeatTimeToWaitGPSFixRange', 'TES_heartbeatTimeToWaitGPSFixNumber', 0, 300, '136px', 120);
    initializeDial('TES_heartbeatGPS_FixLossOrRecoveryRange', 'TES_heartbeatGPS_FixLossOrRecoveryNumber', 0, 500, '136px', 15);
    initializeDial('TES_heartbeatIgnitionOnFilterRange', 'TES_heartbeatIgnitionOnFilterNumber', 0, 255, '136px', 3);
    initializeDial('TES_heartbeatIgnitionOffFilterRange', 'TES_heartbeatIgnitionOffFilterNumber', 0, 255, '136px', 15);

    initializeDial('TES_tripPathDistanceRange', 'TES_tripPathDistanceNumber', 100, 1000, '136px', 200);
    initializeDial('TES_tripPathTimeRange', 'TES_tripPathTimeNumber', 30, 300, '136px', 60);
    initializeDial('TES_tripPathHeadingRange', 'TES_tripPathHeadingNumber', 20, 90, '136px', 30);

    initializeDial('SI_cameraError_FeedbackBackoffRange', 'SI_cameraError_FeedbackBackoffNumber', 1, 60, '136px', 2);

    initializeDial('SI_communicationsWatchdogKeepAliveRange', 'SI_communicationsWatchdogKeepAliveNumber', 0, 300, '136px', 0);
    initializeDial('SI_communicationsWatchdogModemResetRange', 'SI_communicationsWatchdogModemResetNumber', 0, 30, '136px', 0);
    initializeDial('SI_communicationsWatchdogModemResetSignalRange', 'SI_communicationsWatchdogModemResetSignalNumber', 0, 30, '136px', 0);
    initializeDial('SI_communicationsWatchdogSelfPowerRecycleRange', 'SI_communicationsWatchdogSelfPowerRecycleNumber', 0, 30, '136px', 0);
    initializeDial('SI_communicationsWatchdogSocketRestTimeRange', 'SI_communicationsWatchdogSocketRestTimeNumber', 0, 30, '136px', 0);

    initializeDial('SI_SettingsAndHybridWi_Fi_TimeOutRange', 'SI_SettingsAndHybridWi_Fi_TimeOutNumber', 5, 300, '136px', 0);
});
