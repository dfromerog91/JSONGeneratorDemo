document.addEventListener('DOMContentLoaded', (event) => {
    function initializeDial(baseId, min, max, width, initialValue, step = 1, linkedBaseId = null) {
        const dialId = baseId + 'Range';
        const dialValueId = baseId + 'Number';
        const summaryCellId = baseId + 'Summary';
        const summaryValueId = baseId + 'SummaryValue';

        const dial = document.getElementById(dialId);
        const dialValue = document.getElementById(dialValueId);
        const summaryCell = summaryCellId ? document.getElementById(summaryCellId) : null;
        const summaryValue = summaryValueId ? document.getElementById(summaryValueId) : null;

        dial.min = min;
        dial.max = max;
        dial.value = initialValue;
        dial.step = step;
        dial.style.width = width;

        dialValue.min = min;
        dialValue.max = max;
        dialValue.value = initialValue;
        dialValue.step = step;

        const group = baseId.endsWith("MessageBackoff") ? "messageSettings-"
            : baseId.endsWith("FeedbackBackoff")  ? "messageSettings-"
            : baseId.endsWith("SpeedThreshold") ? "messageSettings-"
            : '';

        if (summaryCell) {
            summaryCell.classList.remove('disabled-summary-cell');
            if (parseFloat(dialValue.value) > 0) {                
                summaryCell.classList.add(`active-${group}summary-cell`);
            } else {
                summaryCell.classList.add(`inactive-${group}summary-cell`);
            }
        }

        function updateSummaryValue() {
            if (summaryValue) {
                summaryValue.textContent = dialValue.value;
            }
        }

        function updateCellColor(cell) {
            if (cell) {
                if (parseFloat(dialValue.value) > 0) {
                    cell.classList.remove(`inactive-${group}summary-cell`);
                    cell.classList.add(`active-${group}summary-cell`);
                } else {
                    cell.classList.remove(`active-${group}summary-cell`);
                    cell.classList.add(`inactive-${group}summary-cell`);
                }
            }
        }

        function updateLinkedCells() {
            // Update the color of the current control's summary
            if (summaryCell) {
                updateCellColor(summaryCell);
            }
            
            // Update the value of the current control's summary
            updateSummaryValue();
            
            // Update the linked control's summary if it exists
            if (linkedBaseId) {
                const linkedSummaryValueId = linkedBaseId + 'SummaryValue';
                const linkedSummaryValue = document.getElementById(linkedSummaryValueId);
                if (linkedSummaryValue) {
                    linkedSummaryValue.textContent = dialValue.value;
                }
                const linkedSummaryCellId = linkedBaseId + 'Summary';
                const linkedSummaryCell = document.getElementById(linkedSummaryCellId);
                if (linkedSummaryCell) {
                    updateCellColor(linkedSummaryCell);
                }
            }
        }

        dial.addEventListener('input', function() {
            dialValue.value = dial.value;
            if (linkedBaseId) {
                const linkedDialId = linkedBaseId + 'Range';
                const linkedDialValueId = linkedBaseId + 'Number';
                document.getElementById(linkedDialId).value = dial.value;
                document.getElementById(linkedDialValueId).value = dial.value;
            }
            updateLinkedCells(); // Update linked cells
        });

        dialValue.addEventListener('input', function() {
            if (dialValue.value < parseFloat(dial.min)) {
                dialValue.value = dial.min;
            } else if (dialValue.value > parseFloat(dial.max)) {
                dialValue.value = dial.max;
            }
            dial.value = dialValue.value;
            if (linkedBaseId) {
                const linkedDialId = linkedBaseId + 'Range';
                const linkedDialValueId = linkedBaseId + 'Number';
                document.getElementById(linkedDialId).value = dialValue.value;
                document.getElementById(linkedDialValueId).value = dialValue.value;
            }
            updateLinkedCells(); // Update linked cells
        });

        updateSummaryValue(); // Initialize summary value
    }

    // Initialization of controls
    initializeDial('DMS_driverAsleepMessageBackoff', 0, 1, '136px', 0);
    initializeDial('DMS_driverAsleepFeedbackBackoff', 1, 60, '136px', 1);
    initializeDial('DMS_driverAsleepSpeedThreshold', 0, 50, '136px', 0, 1, 'DMS_drowsinessSpeedThreshold');
    initializeDial('DMS_driverAsleepSleepDuration', 1, 5, '192px', 4, 0.1);

    initializeDial('DMS_drowsinessMessageBackoff', 0, 30, '136px', 15);
    initializeDial('DMS_drowsinessFeedbackBackoff', 1, 60, '136px', 10);
    initializeDial('DMS_drowsinessSpeedThreshold', 0, 50, '136px', 0, 1, 'DMS_driverAsleepSpeedThreshold');

    initializeDial('DMS_driverDistractedMessageBackoff', 0, 30, '136px', 1);
    initializeDial('DMS_driverDistractedFeedbackBackoff', 1, 60, '136px', 10);
    initializeDial('DMS_driverDistractedSpeedThreshold', 0, 50, '136px', 0);
    initializeDial('DMS_driverDistractedTurnGraceTimer', 0, 5, '192px', 2, 0.1);
    initializeDial('MaxHeadingAngleForEvents', 0, 90, '192px', 15);

    initializeDial('DMS_phoneUseMessageBackoff', 0, 30, '136px', 5);
    initializeDial('DMS_phoneUseFeedbackBackoff', 1, 60, '136px', 30);
    initializeDial('DMS_phoneUseSpeedThreshold', 0, 50, '136px', 0);

    initializeDial('DMS_seatbeltMessageBackoff', 0, 30, '136px', 10);
    initializeDial('DMS_seatbeltFeedbackBackoff', 1, 60, '136px', 30);
    initializeDial('DMS_seatbeltSpeedThreshold', 0, 50, '136px', 0);
    initializeDial('DMS_seatbeltAlertTime', 5, 60, '136px', 15);

    initializeDial('DMS_smokingMessageBackoff', 0, 30, '136px', 5);
    initializeDial('DMS_smokingFeedbackBackoff', 1, 60, '136px', 30);
    initializeDial('DMS_smokingSpeedThreshold', 0, 50, '136px', 0);

    initializeDial('DMS_driverDisappearedTimeThreshold', 5, 60, '192px', 30);
    initializeDial('DMS_driverDisappearedTrackingGraceTimer', 1, 60, '192px', 5);

    initializeDial('DMS_driverChangedMinimum', 0, 15, '192px', 5, 0.1);

    initializeDial('ADAS_LDW_MessageBackoff', 0, 30, '136px', 5);

    initializeDial('ADAS_HMW_MessageBackoff', 0, 30, '136px', 5);

    initializeDial('ADAS_UFCW_MessageBackoff', 0, 30, '136px', 5);

    initializeDial('ADAS_FCW_MessageBackoff', 0, 30, '136px', 0);

    initializeDial('ADAS_PCW_MessageBackoff', 0, 30, '136px', 0);

    initializeDial('TES_movementStartedSpeedThreshold', 10, 30, '136px', 10, 1, 'TES_movementStoppedSpeedThreshold');
    initializeDial('TES_movementStoppedSpeedThreshold', 10, 30, '136px', 10, 1, 'TES_movementStartedSpeedThreshold');

    initializeDial('TES_heartbeatIgnitionOffInterval', 1, 24, '136px', 1);
    initializeDial('TES_heartbeatIgnitionOnInterval', 5, 600, '136px', 60);
    initializeDial('TES_heartbeatTimeToWaitGPSFix', 0, 300, '136px', 120);
    initializeDial('TES_heartbeatGPS_FixLossOrRecovery', 0, 500, '136px', 15);
    initializeDial('TES_heartbeatIgnitionOnFilter', 0, 255, '136px', 3);
    initializeDial('TES_heartbeatIgnitionOffFilter', 0, 255, '136px', 15);

    initializeDial('TES_tripPathDistance', 100, 1000, '136px', 200);
    initializeDial('TES_tripPathTime', 30, 300, '136px', 60);
    initializeDial('TES_tripPathHeading', 20, 90, '136px', 30);

    initializeDial('SI_cameraErrorFeedbackBackoff', 1, 60, '136px', 2);

    initializeDial('SI_communicationsWatchdogKeepAlive', 0, 300, '136px', 0);
    initializeDial('SI_communicationsWatchdogModemReset', 0, 30, '136px', 0, 5);
    initializeDial('SI_communicationsWatchdogModemResetSignal', 0, 30, '136px', 0, 5);
    initializeDial('SI_communicationsWatchdogSelfPowerRecycle', 0, 30, '136px', 0, 5);
    initializeDial('SI_communicationsWatchdogSocketResetTime', 0, 30, '136px', 0, 5);
    initializeDial('timeToWaitGPSFixIGNOff', 0, 180, '192px', 45);

    initializeDial('SI_SettingsAndHybridWi_Fi_TimeOut', 5, 300, '136px', 5);

    initializeDial('SI_eventsToStorage', 1, 5000, '192px', 1000);
    initializeDial('SI_videoToStorage', 1, 1000, '192px', 250);
    initializeDial('SI_recordBeforeEvent', 0, 60, '136px', 5);
    initializeDial('SI_recordAfterEvent', 0, 60, '136px', 5);

    initializeDial('SI_driveTimeFilter', 3, 30, '192px', 5);
    initializeDial('SI_stopTimeFilter', 1, 30, '192px', 5);
    initializeDial('SI_volumeForAsleep', 50, 100, '136px', 100);
    initializeDial('SI_volumeForOtherAlerts', 10, 100, '136px', 100);
    initializeDial('SI_calibrationTimeout', 10, 60, '192px', 10);
    initializeDial('SI_sleepModeTimeout', 0, 255, '192px', 5);
    initializeDial('SI_GSensorWakeThreshold', 2, 63, '192px', 30);
    initializeDial('GPS_lossSpeedPersistenceTime', 0, 300, '256px', 10);
});

document.addEventListener('DOMContentLoaded', (event) => {
    function sliderWithVariableStep(baseId, min, mid, max, width, initialValue, step1, step2) {
        const sliderId = baseId + 'Range';
        const sliderValueId = baseId + 'Number';

        const slider = document.getElementById(sliderId);
        const sliderValue = document.getElementById(sliderValueId);

        slider.min = min;
        slider.max = max;
        slider.step = getMinStep();
        slider.value = initialValue;
        slider.style.width = width;

        sliderValue.min = min;
        sliderValue.max = max;
        sliderValue.value = initialValue;

        function getStep(value) {
            if (value == mid) {
                return step1 < step2 ? step1 : step2;
            }
            return value < mid ? step1 : step2;
        }

        function getMinStep() {
            if (step1 <= step2) {
                return step1;
            } else {
                return step2;
            }
        }

        function updateValues() {
            let value = parseFloat(slider.value);
            const step = getStep(value);
            value = Math.round((value - min) / step) * step + min;
            slider.value = value;
            sliderValue.value = value;
        }

        slider.addEventListener('input', function() {
            updateValues();
        });

        sliderValue.addEventListener('input', function() {
            let value = parseFloat(sliderValue.value);
            if (value < parseFloat(slider.min)) {
                value = parseFloat(slider.min);
            } else if (value > parseFloat(slider.max)) {
                value = parseFloat(slider.max);
            } else {
                const step = getStep(value);
                const minStep = getMinStep();
                if (step > minStep) {
                    if (value < slider.value) {
                        sliderValue.value = parseInt(slider.value) - step;
                    } else {
                        sliderValue.value = parseInt(slider.value) + step;
                    }
                }
            }
            slider.value = sliderValue.value;
        });

        // Initialize the value
        sliderValue.value = initialValue;
        slider.value = initialValue;
    }

    // Initialization of controls
    sliderWithVariableStep('RoadCenterPitchPos', 15, 35, 45, '184px', 15, 1, 5);
    sliderWithVariableStep('RoadCenterPitchNeg', -45, -35, -15, '184px', -15, 5, 1);
    sliderWithVariableStep('RoadCenterYawPos', 15, 35, 90, '184px', 20, 1, 5);
    sliderWithVariableStep('RoadCenterYawNeg', -90, -35, -15, '184px', -20, 5, 1);
});
