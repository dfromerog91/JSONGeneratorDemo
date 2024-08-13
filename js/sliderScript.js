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

        function updateSummaryValue() {
            if (summaryValue) {
                summaryValue.textContent = dialValue.value;
            }
        }

        function updateCellColor(cell) {
            if (cell) {
                if (parseFloat(dialValue.value) > 0) {
                    cell.classList.remove('inactive-summary-cell');
                    cell.classList.add('active-summary-cell');
                } else {
                    cell.classList.remove('active-summary-cell');
                    cell.classList.add('inactive-summary-cell');
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

    initializeDial('DMS_phoneUseMessageBackoff', 0, 30, '136px', 5);
    initializeDial('DMS_phoneUseFeedbackBackoff', 1, 60, '136px', 30);
    initializeDial('DMS_phoneUseSpeedThreshold', 0, 50, '136px', 0);

    initializeDial('DMS_seatbeltMessageBackoff', 0, 30, '136px', 10);
    initializeDial('DMS_seatbeltFeedbackBackoff', 1, 60, '136px', 30);
    initializeDial('DMS_seatbeltSpeedThreshold', 0, 50, '136px', 0);
    initializeDial('DMS_seatbeltAlertTime', 5, 60, '192px', 15);

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

    initializeDial('TES_heartbeatIgnitionOffInterval', 1, 10, '192px', 1, 0.1);

    initializeDial('TES_heartbeatInterval', 1, 30, '192px', 2, 0.1);

    initializeDial('TES_ignoreMovingTime', 0, 60, '192px', 5, 1);
});
