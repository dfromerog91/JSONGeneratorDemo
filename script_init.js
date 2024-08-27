var PitchNeg = [-45, -40, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15];
var PitchPos = [45, 40, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15];
var YawNeg = [-90, -85, -80, -75, -70, -65, -60, -55, -50, -45, -40, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15];
var YawPos = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15];
const initialLoad = true;

// Get the value of selected_JSON_case from localStorage
const selected_JSON_case = parseInt(localStorage.getItem('selected_JSON_case'));

// Check if selected_JSON_case is a valid number (not NaN)
if (!isNaN(selected_JSON_case)) {
    console.log("Selected JSON case:", selected_JSON_case);

  // You can use the value of selected_JSON_case for further processing here in "index.html"
} 
else {
    console.log("Invalid or missing selected_JSON_case value.");
  // Handle the case when selected_JSON_case is not valid
}

// Clear the value from localStorage (optional, if needed)
localStorage.removeItem('selected_JSON_case');

//Initial setting for the interface
function import_FS10_defaultConfig(){
    const jsonInput = document.getElementById("jsonInput");
    let jsonFileUrl = '';
    switch (selected_JSON_case) {
        case 0: 
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-LTE.json"
            break;
        case 1:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-Wifi.json"
            break;
        case 2:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-Wifi.json"
            break;
        case 3:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-Serial-teltonika.json"
            break;
        case 4:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-hybrid-teltonika.json"
            break;
        case 5:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-LTE-Mobileye.json"
            break;
        case 6:
            jsonFileUrl = "source/FS10_default_configs/1.0.1.31-LTE-MobileyeRC.json"
            break;
        case 7:
            jsonFileUrl = "source/FS10_default_configs/1.0.2.32-LTE-DVR.json"
            break;
        default:
            jsonFileUrl = "source/FS10_default_configs/Config_10233.json"
            console.log("default");
            break;
    }
    console.log("Selected case was: ",selected_JSON_case);
    fetch(jsonFileUrl)
        .then((response) => response.json())
        .then((data) => {
        const jsonString = JSON.stringify(data, null, 2);
        jsonInput.value = jsonString;
        updateOnBased_FS10_json_init();
        updateOnBased_FS10_json();
        })
        .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        });
}
function setInitialValues() {
    //Update colors
    //FeedbackSpeech_UnsupportedUpdate();
    //setInitialColors()
    //Update communication colors
    /*updateCommunicationsColor(document.getElementById("CommChannelState"), "CommChannelState");
    updateCommunicationsColor(document.getElementById("Alerts"), "Alerts");
    updateCommunicationsColor(document.getElementById("Debug"), "Debug");
    updateCommunicationsColor(document.getElementById("FOTA"), "FOTA");
    updateCommunicationsColor(document.getElementById("Image_Comm"), "Image_Comm");
    updateCommunicationsColor(document.getElementById("Video_Comm"), "Video_Comm");
    updateLogicalColor(document.getElementById("RepeatCycleUntilCommRecovery"), "RepeatCycleUntilCommRecovery");
    updateLogicalColor(document.getElementById("VolumeControls"), "VolumeControls");
    updateLogicalColor(document.getElementById("videoOverlay"), "videoOverlay");
    updateLogicalColor(document.getElementById("ActiveLevelGPI"), "ActiveLevelGPI");
    updateLogicalColor(document.getElementById("SDcardEncryption"), "SDcardEncryption");
    updateLogicalColor(document.getElementById("beepsActivation"), "beepsActivation");
    updateLogicalColor(document.getElementById("voiceActivation"), "voiceActivation");
    updateLogicalColor(document.getElementById("LEDActivation"), "LEDActivation");
    updateLogicalColor(document.getElementById("SystemLEDActivation"), "SystemLEDActivation");
    updateLogicalColor(document.getElementById("EnableSleepBlockingByDrowsiness"), "EnableSleepBlockingByDrowsiness");
    updateLogicalColor(document.getElementById("InhibitSeatbeltOnStop"), "InhibitSeatbeltOnStop");
    updateLogicalColor(document.getElementById("EnableYawnBasedDrowsiness"), "EnableYawnBasedDrowsiness");
    updateLogicalColor(document.getElementById("EnableImagesIdDB"), "EnableImagesIdDB");
    updateLogicalColor(document.getElementById("TripPathEnable"), "TripPathEnable");
    updateLogicalColor(document.getElementById("TripPathInhibitHeartbeat"), "TripPathInhibitHeartbeat");
    updateLogicalColor(document.getElementById("DeviceTurnOnEnable"), "DeviceTurnOnEnable");
    updateLogicalColor(document.getElementById("SelfEventTriggerEnable"), "SelfEventTriggerEnable");
    updateLogicalColor(document.getElementById("OTAUpdateEnable"), "OTAUpdateEnable");*/
    //updateLogicalColor(document.getElementById("DashedLineCrossing"),"DashedLineCrossing");
    //updateLogicalColor(document.getElementById("SolidLineCrossing"),"SolidLineCrossing");
    //updateFCWRange(document.getElementById("FCWWarningRange"), "FCWWarningRange");
    //updateLogicalColor(document.getElementById("DuplicateMsgOverRS232"), "DuplicateMsgOverRS232");
    //Fill combo boxes
    fillCmbBoxes();
    //updateLogicalColor(document.getElementById("LeftHandDrive"), "LeftHandDrive");
    //updateLogicalColor(document.getElementById("Unit_ID_Overlay"), "Unit_ID_Overlay");
    setTimezone();
    //CommunicationEnableColor("AlertsCheckBox", "Alerts");
    //CommunicationEnableColor("DebugCheckBox", "Debug");
    //CommunicationEnableColor("FOTACheckBox", "FOTA");
    //CommunicationEnableColor("ImageCheckBox", "Image_Comm");
    //CommunicationEnableColor("VideoCheckBox", "Video_Comm");
    //ServerEnableColor('MW_check', 'ServerAddress', 'ServerPassword', 'Port');
    // Menu with 0 as disabled
    //updateMenuWithDisabled(document.getElementById("TripPathTime"), "TripPathTime");
    //updateMenuWithDisabled(document.getElementById("TripPathDistance"), "TripPathDistance");
    //updateMenuWithDisabled(document.getElementById("TripPathHeading"), "TripPathHeading");

	updateDMSImage();
    generateSignal();
    generateSignal_GPIO();
    update_ADAS_Select();
    setInitialMenusToFalse();
}

// Color for true or false
function setInitialColors(){
    //DMS
    //Activation
    changeBackgroundColor('DMS_DriverAsleep_Activation', 'DMS_1x1_select'); 
    changeBackgroundColor('DMS_Drowsiness_Activation', 'DMS_drowsinessActivationId');
    changeBackgroundColor('DMS_DriverDistracted_Activation', 'DMS_driverDistractedActivationId');
    changeBackgroundColor('DMS_PhoneUse_Activation', 'DMS_phoneUseActivationId');
    changeBackgroundColor('DMS_Seatbelt_Activation', 'DMS_seatbeltActivationId');
    changeBackgroundColor('DMS_Smoking_Activation', 'DMS_smokingActivationId');
    //changeBackgroundColor('DMS_LightDrowsiness_Activation', 'DMS_1x7_select');
    changeBackgroundColor('DMS_TamperingDetection_Activation', 'DMS_tamperingDetectionActivationId');
    changeBackgroundColor('DMS_DriverIdentified_Activation', 'DMS_driverIdentifiedActivationId');
    changeBackgroundColor('DMS_UnidentifiedUnauthDriver_Activation', 'DMS_driverUnidentifiedActivationId');
    changeBackgroundColor('DMS_DriverDisappeared_Activation', 'DMS_driverDisappearedActivationId');
    changeBackgroundColor('DMS_DriverChange_Activation', 'DMS_driverChangedActivationId');
    changeBackgroundColor('DMS_DriverIDUpdated_Activation', 'DMS_driverIdUpdatedActivationId');
    //FeedbackAudio
    changeBackgroundColor('DMS_DriverAsleep_FeedbackAudio', 'DMS_2x1_select'); 
    changeBackgroundColor('DMS_Drowsiness_FeedbackAudio', 'DMS_drowsinessFeedbackAudio');
    changeBackgroundColor('DMS_DriverDistracted_FeedbackAudio', 'DMS_2x3_select');
    changeBackgroundColor('DMS_PhoneUse_FeedbackAudio', 'DMS_2x4_select');
    changeBackgroundColor('DMS_Seatbelt_FeedbackAudio', 'DMS_2x5_select');
    changeBackgroundColor('DMS_Smoking_FeedbackAudio', 'DMS_2x6_select');
    //changeBackgroundColor('DMS_LightDrowsiness_FeedbackAudio', 'DMS_2x7_select');
    changeBackgroundColor('DMS_TamperingDetection_FeedbackAudio', 'DMS_2x8_select');
    changeBackgroundColor('DMS_DriverIdentified_FeedbackAudio', 'DMS_2x9_select');
    changeBackgroundColor('DMS_UnidentifiedUnauthDriver_FeedbackAudio', 'DMS_2x10_select');
    changeBackgroundColor('DMS_DriverDisappeared_FeedbackAudio', 'DMS_2x11_select');
    changeBackgroundColor('DMS_DriverChange_FeedbackAudio', 'DMS_2x12_select');
    changeBackgroundColor('DMS_DriverIDUpdated_FeedbackAudio', 'DMS_2x13_select');
    //Feedback Speech
    changeBackgroundColor('DMS_DriverAsleep_FeedbackSpeech', 'DMS_4x1_select'); 
    changeBackgroundColor('DMS_Drowsiness_FeedbackSpeech', 'DMS_drowsinessFeedbackSpeech');
    changeBackgroundColor('DMS_DriverDistracted_FeedbackSpeech', 'DMS_4x3_select');
    changeBackgroundColor('DMS_PhoneUse_FeedbackSpeech', 'DMS_4x4_select');
    changeBackgroundColor('DMS_Seatbelt_FeedbackSpeech', 'DMS_4x5_select');
    changeBackgroundColor('DMS_Smoking_FeedbackSpeech', 'DMS_4x6_select');
    //changeBackgroundColor('DMS_LightDrowsiness_FeedbackSpeech', 'DMS_4x7_select');
    changeBackgroundColor('DMS_TamperingDetection_FeedbackSpeech', 'DMS_4x8_select');
    changeBackgroundColor('DMS_DriverIdentified_FeedbackSpeech', 'DMS_4x9_select');
    changeBackgroundColor('DMS_UnidentifiedUnauthDriver_FeedbackSpeech', 'DMS_4x10_select');
    changeBackgroundColor('DMS_DriverDisappeared_FeedbackSpeech', 'DMS_4x11_select');
    changeBackgroundColor('DMS_DriverChange_FeedbackSpeech', 'DMS_4x12_select');
    changeBackgroundColor('DMS_DriverIDUpdated_FeedbackSpeech', 'DMS_4x13_select');
    //Feedback Visual
    changeBackgroundColor('DMS_DriverAsleep_FeedbackVisual', 'DMS_5x1_select'); 
    changeBackgroundColor('DMS_Drowsiness_FeedbackVisual', 'DMS_drowsinessFeedbackVisual');
    changeBackgroundColor('DMS_DriverDistracted_FeedbackVisual', 'DMS_5x3_select');
    changeBackgroundColor('DMS_PhoneUse_FeedbackVisual', 'DMS_5x4_select');
    changeBackgroundColor('DMS_Seatbelt_FeedbackVisual', 'DMS_5x5_select');
    changeBackgroundColor('DMS_Smoking_FeedbackVisual', 'DMS_5x6_select');
    //changeBackgroundColor('DMS_LightDrowsiness_FeedbackVisual', 'DMS_5x7_select');
    changeBackgroundColor('DMS_TamperingDetection_FeedbackVisual', 'DMS_5x8_select');
    changeBackgroundColor('DMS_DriverIdentified_FeedbackVisual', 'DMS_5x9_select');
    changeBackgroundColor('DMS_UnidentifiedUnauthDriver_FeedbackVisual', 'DMS_5x10_select');
    changeBackgroundColor('DMS_DriverDisappeared_FeedbackVisual', 'DMS_5x11_select');
    changeBackgroundColor('DMS_DriverChange_FeedbackVisual', 'DMS_5x12_select');
    changeBackgroundColor('DMS_DriverIDUpdated_FeedbackVisual', 'DMS_5x13_select');
    //Report Event
    changeBackgroundColor('DMS_DriverAsleep_ReportEvent', 'DMS_6x1_select'); 
    changeBackgroundColor('DMS_Drowsiness_ReportEvent', 'DMS_6x2_select');
    changeBackgroundColor('DMS_DriverDistracted_ReportEvent', 'DMS_6x3_select');
    changeBackgroundColor('DMS_PhoneUse_ReportEvent', 'DMS_6x4_select');
    changeBackgroundColor('DMS_Seatbelt_ReportEvent', 'DMS_6x5_select');
    changeBackgroundColor('DMS_Smoking_ReportEvent', 'DMS_6x6_select');
    //changeBackgroundColor('DMS_LightDrowsiness_ReportEvent', 'DMS_6x7_select');
    changeBackgroundColor('DMS_TamperingDetection_ReportEvent', 'DMS_6x8_select');
    changeBackgroundColor('DMS_DriverIdentified_ReportEvent', 'DMS_6x9_select');
    changeBackgroundColor('DMS_UnidentifiedUnauthDriver_ReportEvent', 'DMS_6x10_select');
    changeBackgroundColor('DMS_DriverDisappeared_ReportEvent', 'DMS_6x11_select');
    changeBackgroundColor('DMS_DriverChange_ReportEvent', 'DMS_6x12_select');
    changeBackgroundColor('DMS_DriverIDUpdated_ReportEvent', 'DMS_6x13_select');
    //ADAS
    //Activation
    changeBackgroundColor('ADAS_LDW_Activation', 'ADAS_LDW_ActivationId');
    //changeBackgroundColor('ADAS_RedLight_Activation', 'ADAS_1x2_select');
    //changeBackgroundColor('ADAS_StopDisobeyed_Activation', 'ADAS_1x3_select');
    changeBackgroundColor('ADAS_HMW_Activation', 'ADAS_HMW_ActivationId');
    changeBackgroundColor('ADAS_UrbanFCW_Activation', 'ADAS_UFCW_ActivationId');
    changeBackgroundColor('ADAS_FCW_Activation', 'ADAS_FCW_ActivationId');
    //changeBackgroundColor('ADAS_Overspeeding_Activation', 'ADAS_1x7_select');
    changeBackgroundColor('ADAS_PCW_Activation', 'ADAS_PCW_ActivationId');
    changeBackgroundColor('ADAS_LDW_FeedbackAudio', 'ADAS_2x1_select');
    //changeBackgroundColor('ADAS_RedLight_FeedbackAudio', 'ADAS_2x2_select');
    //changeBackgroundColor('ADAS_StopDisobeyed_FeedbackAudio', 'ADAS_2x3_select');
    changeBackgroundColor('ADAS_HMW_FeedbackAudio', 'ADAS_2x4_select');
    changeBackgroundColor('ADAS_UrbanFCW_FeedbackAudio', 'ADAS_2x5_select');
    changeBackgroundColor('ADAS_FCW_FeedbackAudio', 'ADAS_2x6_select');
    //changeBackgroundColor('ADAS_Overspeeding_FeedbackAudio', 'ADAS_2x7_select');
    changeBackgroundColor('ADAS_PCW_FeedbackAudio', 'ADAS_2x8_select');
    changeBackgroundColor('ADAS_LDW_FeedbackSpeech', 'ADAS_4x1_select');
    //changeBackgroundColor('ADAS_RedLight_FeedbackSpeech', 'ADAS_4x2_select');
    //changeBackgroundColor('ADAS_StopDisobeyed_FeedbackSpeech', 'ADAS_4x3_select');
    changeBackgroundColor('ADAS_HMW_FeedbackSpeech', 'ADAS_4x4_select');
    changeBackgroundColor('ADAS_UrbanFCW_FeedbackSpeech', 'ADAS_4x5_select');
    changeBackgroundColor('ADAS_FCW_FeedbackSpeech', 'ADAS_4x6_select');
    //changeBackgroundColor('ADAS_Overspeeding_FeedbackSpeech', 'ADAS_4x7_select');
    changeBackgroundColor('ADAS_PCW_FeedbackSpeech', 'ADAS_4x8_select');
    changeBackgroundColor('ADAS_LDW_FeedbackVisual', 'ADAS_5x1_select');
    //changeBackgroundColor('ADAS_RedLight_FeedbackVisual', 'ADAS_5x2_select');
    //changeBackgroundColor('ADAS_StopDisobeyed_FeedbackVisual', 'ADAS_5x3_select');
    changeBackgroundColor('ADAS_HMW_FeedbackVisual', 'ADAS_5x4_select');
    changeBackgroundColor('ADAS_UrbanFCW_FeedbackVisual', 'ADAS_5x5_select');
    changeBackgroundColor('ADAS_FCW_FeedbackVisual', 'ADAS_5x6_select');
    //changeBackgroundColor('ADAS_Overspeeding_FeedbackVisual', 'ADAS_5x7_select');
    changeBackgroundColor('ADAS_PCW_FeedbackVisual', 'ADAS_5x8_select');
    changeBackgroundColor('ADAS_LDW_ReportEvent', 'ADAS_6x1_select');
    //changeBackgroundColor('ADAS_RedLight_ReportEvent', 'ADAS_6x2_select');
    //changeBackgroundColor('ADAS_StopDisobeyed_ReportEvent', 'ADAS_6x3_select');
    changeBackgroundColor('ADAS_HMW_ReportEvent', 'ADAS_6x4_select');
    changeBackgroundColor('ADAS_UrbanFCW_ReportEvent', 'ADAS_6x5_select');
    changeBackgroundColor('ADAS_FCW_ReportEvent', 'ADAS_6x6_select');
    //changeBackgroundColor('ADAS_Overspeeding_ReportEvent', 'ADAS_6x7_select');
    changeBackgroundColor('ADAS_PCW_ReportEvent', 'ADAS_6x8_select');
    //Tracking Events
    //Activation
    changeBackgroundColor('TrackingEvents_IgnitionON_Activation', 'TES_ignitionOnActivationId'); 
    changeBackgroundColor('TrackingEvents_IgnitionOFF_Activation', 'TES_ignitionOffActivationId');
    changeBackgroundColor('TrackingEvents_MovementStarted_Activation', 'TES_movementStartedActivationId');
    changeBackgroundColor('TrackingEvents_MovementStopped_Activation', 'TES_movementStoppedActivationId');
    changeBackgroundColor('TrackingEvents_Heartbeat_Activation', 'TES_heartbeatActivationId');
    changeBackgroundColor('TrackingEvents_GPSstatusUpdate_Activation', 'TES_GPS_updateStatusActivationId');
    changeBackgroundColor('TrackingEvents_TripPath_Activation', 'TES_tripPathActivationId');
    //FeedbackAudio
    changeBackgroundColor('TrackingEvents_IgnitionON_FeedbackAudio', 'TrackingEvents_2x1_select'); 
    changeBackgroundColor('TrackingEvents_IgnitionOFF_FeedbackAudio', 'TrackingEvents_2x2_select');
    changeBackgroundColor('TrackingEvents_MovementStarted_FeedbackAudio', 'TrackingEvents_2x3_select');
    changeBackgroundColor('TrackingEvents_MovementStopped_FeedbackAudio', 'TrackingEvents_2x4_select');
    changeBackgroundColor('TrackingEvents_Heartbeat_FeedbackAudio', 'TrackingEvents_2x5_select');
    changeBackgroundColor('TrackingEvents_GPSstatusUpdate_FeedbackAudio', 'TrackingEvents_2x6_select');
    changeBackgroundColor('TrackingEvents_TripPath_FeedbackAudio', 'TrackingEvents_2x7_select');
    //FeedbackSpeech
    changeBackgroundColor('TrackingEvents_IgnitionON_FeedbackSpeech', 'TrackingEvents_4x1_select'); 
    changeBackgroundColor('TrackingEvents_IgnitionOFF_FeedbackSpeech', 'TrackingEvents_4x2_select');
    changeBackgroundColor('TrackingEvents_MovementStarted_FeedbackSpeech', 'TrackingEvents_4x3_select');
    changeBackgroundColor('TrackingEvents_MovementStopped_FeedbackSpeech', 'TrackingEvents_4x4_select');
    changeBackgroundColor('TrackingEvents_Heartbeat_FeedbackSpeech', 'TrackingEvents_4x5_select');
    changeBackgroundColor('TrackingEvents_GPSstatusUpdate_FeedbackSpeech', 'TrackingEvents_4x6_select');
    changeBackgroundColor('TrackingEvents_TripPath_FeedbackSpeech', 'TrackingEvents_4x7_select');
    //FeedbackVisual
    changeBackgroundColor('TrackingEvents_IgnitionON_FeedbackVisual', 'TrackingEvents_5x1_select'); 
    changeBackgroundColor('TrackingEvents_IgnitionOFF_FeedbackVisual', 'TrackingEvents_5x2_select');
    changeBackgroundColor('TrackingEvents_MovementStarted_FeedbackVisual', 'TrackingEvents_5x3_select');
    changeBackgroundColor('TrackingEvents_MovementStopped_FeedbackVisual', 'TrackingEvents_5x4_select');
    changeBackgroundColor('TrackingEvents_Heartbeat_FeedbackVisual', 'TrackingEvents_5x5_select');
    changeBackgroundColor('TrackingEvents_GPSstatusUpdate_FeedbackVisual', 'TrackingEvents_5x6_select');
    changeBackgroundColor('TrackingEvents_TripPath_FeedbackVisual', 'TrackingEvents_5x7_select');
    //ReportEvent
    changeBackgroundColor('TrackingEvents_IgnitionON_ReportEvent', 'TrackingEvents_6x1_select'); 
    changeBackgroundColor('TrackingEvents_IgnitionOFF_ReportEvent', 'TrackingEvents_6x2_select');
    changeBackgroundColor('TrackingEvents_MovementStarted_ReportEvent', 'TrackingEvents_6x3_select');
    changeBackgroundColor('TrackingEvents_MovementStopped_ReportEvent', 'TrackingEvents_6x4_select');
    changeBackgroundColor('TrackingEvents_Heartbeat_ReportEvent', 'TrackingEvents_6x5_select');
    changeBackgroundColor('TrackingEvents_GPSstatusUpdate_ReportEvent', 'TrackingEvents_6x6_select');
    changeBackgroundColor('TrackingEvents_TripPath_ReportEvent', 'TrackingEvents_6x7_select');
    //System without Events
    //Activation
    changeBackgroundColor('System_wo_Event_CameraCalibrationCompleted_Activation', 'SI_cameraCalibrationOkActivationId'); 
    changeBackgroundColor('System_wo_Event_CameraCalibrationFailed_Activation', 'SI_cameraCalibrationFailedActivationId');
    changeBackgroundColor('System_wo_Event_3DAccelerometerCalibrationCompleted_Activation', 'SI_accelCalibrationOkActivationId');
    changeBackgroundColor('System_wo_Event_EnteredSleepMode_Activation', 'SI_enteringSleepModeActivationId');
    changeBackgroundColor('System_wo_Event_FwUpdateStarted_Activation', 'SI_firmwareUpdateStartedActivationId');
    changeBackgroundColor('System_wo_Event_FwUpdateCompleted_Activation', 'SI_firmwareUpdateOK_ActivationId');
    changeBackgroundColor('System_wo_Event_FwUpdateFailed_Activation', 'System_wo_Event_1x7_select');
    changeBackgroundColor('System_wo_Event_SystemBoot_Activation', 'System_wo_Event_1x8_select');
    changeBackgroundColor('System_wo_Event_SystemBootFailure_Activation', 'System_wo_Event_1x9_select');
    //Feedback Audio
    changeBackgroundColor('System_wo_Event_CameraCalibrationCompleted_FeedbackAudio', 'System_wo_Event_2x1_select'); 
    changeBackgroundColor('System_wo_Event_CameraCalibrationFailed_FeedbackAudio', 'System_wo_Event_2x2_select');
    changeBackgroundColor('System_wo_Event_3DAccelerometerCalibrationCompleted_FeedbackAudio', 'System_wo_Event_2x3_select');
    changeBackgroundColor('System_wo_Event_EnteredSleepMode_FeedbackAudio', 'System_wo_Event_2x4_select');
    changeBackgroundColor('System_wo_Event_FwUpdateStarted_FeedbackAudio', 'System_wo_Event_2x5_select');
    changeBackgroundColor('System_wo_Event_FwUpdateCompleted_FeedbackAudio', 'System_wo_Event_2x6_select');
    changeBackgroundColor('System_wo_Event_FwUpdateFailed_FeedbackAudio', 'System_wo_Event_2x7_select');
    changeBackgroundColor('System_wo_Event_SystemBoot_FeedbackAudio', 'System_wo_Event_2x8_select');
    changeBackgroundColor('System_wo_Event_SystemBootFailure_FeedbackAudio', 'System_wo_Event_2x9_select');
    //Feedback Speech
    changeBackgroundColor('System_wo_Event_CameraCalibrationCompleted_FeedbackSpeech', 'System_wo_Event_4x1_select'); 
    changeBackgroundColor('System_wo_Event_CameraCalibrationFailed_FeedbackSpeech', 'System_wo_Event_4x2_select');
    changeBackgroundColor('System_wo_Event_3DAccelerometerCalibrationCompleted_FeedbackSpeech', 'System_wo_Event_4x3_select');
    changeBackgroundColor('System_wo_Event_EnteredSleepMode_FeedbackSpeech', 'System_wo_Event_4x4_select');
    changeBackgroundColor('System_wo_Event_FwUpdateStarted_FeedbackSpeech', 'System_wo_Event_4x5_select');
    changeBackgroundColor('System_wo_Event_FwUpdateCompleted_FeedbackSpeech', 'System_wo_Event_4x6_select');
    changeBackgroundColor('System_wo_Event_FwUpdateFailed_FeedbackSpeech', 'System_wo_Event_4x7_select');
    changeBackgroundColor('System_wo_Event_SystemBoot_FeedbackSpeech', 'System_wo_Event_4x8_select');
    changeBackgroundColor('System_wo_Event_SystemBootFailure_FeedbackSpeech', 'System_wo_Event_4x9_select');
    //Feedback Visual
    changeBackgroundColor('System_wo_Event_CameraCalibrationCompleted_FeedbackVisual', 'System_wo_Event_5x1_select'); 
    changeBackgroundColor('System_wo_Event_CameraCalibrationFailed_FeedbackVisual', 'System_wo_Event_5x2_select');
    changeBackgroundColor('System_wo_Event_3DAccelerometerCalibrationCompleted_FeedbackVisual', 'System_wo_Event_5x3_select');
    changeBackgroundColor('System_wo_Event_EnteredSleepMode_FeedbackVisual', 'System_wo_Event_5x4_select');
    changeBackgroundColor('System_wo_Event_FwUpdateStarted_FeedbackVisual', 'System_wo_Event_5x5_select');
    changeBackgroundColor('System_wo_Event_FwUpdateCompleted_FeedbackVisual', 'System_wo_Event_5x6_select');
    changeBackgroundColor('System_wo_Event_FwUpdateFailed_FeedbackVisual', 'System_wo_Event_5x7_select');
    changeBackgroundColor('System_wo_Event_SystemBoot_FeedbackVisual', 'System_wo_Event_5x8_select');
    changeBackgroundColor('System_wo_Event_SystemBootFailure_FeedbackVisual', 'System_wo_Event_5x9_select');
    //Report Event
    changeBackgroundColor('System_wo_Event_CameraCalibrationCompleted_ReportEvent', 'System_wo_Event_6x1_select'); 
    changeBackgroundColor('System_wo_Event_CameraCalibrationFailed_ReportEvent', 'System_wo_Event_6x2_select');
    changeBackgroundColor('System_wo_Event_3DAccelerometerCalibrationCompleted_ReportEvent', 'System_wo_Event_6x3_select');
    changeBackgroundColor('System_wo_Event_EnteredSleepMode_ReportEvent', 'System_wo_Event_6x4_select');
    changeBackgroundColor('System_wo_Event_FwUpdateStarted_ReportEvent', 'System_wo_Event_6x5_select');
    changeBackgroundColor('System_wo_Event_FwUpdateCompleted_ReportEvent', 'System_wo_Event_6x6_select');
    changeBackgroundColor('System_wo_Event_FwUpdateFailed_ReportEvent', 'System_wo_Event_6x7_select');
    changeBackgroundColor('System_wo_Event_SystemBoot_ReportEvent', 'System_wo_Event_6x8_select');
    changeBackgroundColor('System_wo_Event_SystemBootFailure_ReportEvent', 'System_wo_Event_6x9_select');
    //System with Events
   //_Activation
    changeBackgroundColor('System_w_Event_ExternalEventTriggering_Activation', 'System_w_Event_1x1_select'); 
    changeBackgroundColor('System_w_Event_ApplicationError_Activation', 'System_w_Event_1x2_select');
    changeBackgroundColor('System_w_Event_CameraError_Activation', 'System_w_Event_1x3_select');
    changeBackgroundColor('System_w_Event_SystemOK_Activation', 'System_w_Event_1x4_select');
    changeBackgroundColor('System_w_Event_SystemReset_Activation', 'System_w_Event_1x5_select');
    changeBackgroundColor('System_w_Event_SystemError_Activation', 'System_w_Event_1x6_select');
    changeBackgroundColor('System_w_Event_MCULOG_Activation', 'System_w_Event_1x7_select');
    //_FeedbackAudio
    changeBackgroundColor('System_w_Event_ExternalEventTriggering_FeedbackAudio', 'System_w_Event_2x1_select'); 
    changeBackgroundColor('System_w_Event_ApplicationError_FeedbackAudio', 'System_w_Event_2x2_select');
    changeBackgroundColor('System_w_Event_CameraError_FeedbackAudio', 'System_w_Event_2x3_select');
    changeBackgroundColor('System_w_Event_SystemOK_FeedbackAudio', 'System_w_Event_2x4_select');
    changeBackgroundColor('System_w_Event_SystemReset_FeedbackAudio', 'System_w_Event_2x5_select');
    changeBackgroundColor('System_w_Event_SystemError_FeedbackAudio', 'System_w_Event_2x6_select');
    changeBackgroundColor('System_w_Event_MCULOG_FeedbackAudio', 'System_w_Event_2x7_select');
    //_FeedbackSpeech
    changeBackgroundColor('System_w_Event_ExternalEventTriggering_FeedbackSpeech', 'System_w_Event_4x1_select'); 
    changeBackgroundColor('System_w_Event_ApplicationError_FeedbackSpeech', 'System_w_Event_4x2_select');
    changeBackgroundColor('System_w_Event_CameraError_FeedbackSpeech', 'System_w_Event_4x3_select');
    changeBackgroundColor('System_w_Event_SystemOK_FeedbackSpeech', 'System_w_Event_4x4_select');
    changeBackgroundColor('System_w_Event_SystemReset_FeedbackSpeech', 'System_w_Event_4x5_select');
    changeBackgroundColor('System_w_Event_SystemError_FeedbackSpeech', 'System_w_Event_4x6_select');
    changeBackgroundColor('System_w_Event_MCULOG_FeedbackSpeech', 'System_w_Event_4x7_select');
    //_FeedbackVisual
    changeBackgroundColor('System_w_Event_ExternalEventTriggering_FeedbackVisual', 'System_w_Event_5x1_select'); 
    changeBackgroundColor('System_w_Event_ApplicationError_FeedbackVisual', 'System_w_Event_5x2_select');
    changeBackgroundColor('System_w_Event_CameraError_FeedbackVisual', 'System_w_Event_5x3_select');
    changeBackgroundColor('System_w_Event_SystemOK_FeedbackVisual', 'System_w_Event_5x4_select');
    changeBackgroundColor('System_w_Event_SystemReset_FeedbackVisual', 'System_w_Event_5x5_select');
    changeBackgroundColor('System_w_Event_SystemError_FeedbackVisual', 'System_w_Event_5x6_select');
    changeBackgroundColor('System_w_Event_MCULOG_FeedbackVisual', 'System_w_Event_5x7_select');
    //_ReportEvent
    changeBackgroundColor('System_w_Event_ExternalEventTriggering_ReportEvent', 'System_w_Event_6x1_select'); 
    changeBackgroundColor('System_w_Event_ApplicationError_ReportEvent', 'System_w_Event_6x2_select');
    changeBackgroundColor('System_w_Event_CameraError_ReportEvent', 'System_w_Event_6x3_select');
    changeBackgroundColor('System_w_Event_SystemOK_ReportEvent', 'System_w_Event_6x4_select');
    changeBackgroundColor('System_w_Event_SystemReset_ReportEvent', 'System_w_Event_6x5_select');
    changeBackgroundColor('System_w_Event_SystemError_ReportEvent', 'System_w_Event_6x6_select');
    changeBackgroundColor('System_w_Event_MCULOG_ReportEvent', 'System_w_Event_6x7_select');
}

//Update menus
function setInitialMenusToFalse(){
    toggleMenuActivation("DMS_driverAsleep");
    toggleMenuActivation("DMS_drowsiness");
    toggleMenuActivation("DMS_driverDistracted");
    toggleMenuActivation("DMS_phoneUse");
    toggleMenuActivation("DMS_seatbelt");
    toggleMenuActivation("DMS_smoking");
    toggleMenuActivation("DMS_tamperingDetection");
    toggleMenuActivation("DMS_driverIdentified");
    toggleMenuActivation("DMS_driverUnidentified");
    toggleMenuActivation("DMS_driverDisappeared");
    toggleMenuActivation("DMS_driverChanged");
    toggleMenuActivation("DMS_driverIdUpdated");
    toggleMenuActivation("ADAS_LDW_");
    toggleMenuActivation("ADAS_HMW_");
    toggleMenuActivation("ADAS_UFCW_");
    toggleMenuActivation("ADAS_FCW_");
    toggleMenuActivation("ADAS_PCW_");
    toggleMenuActivation("TES_ignitionOn");
    toggleMenuActivation("TES_ignitionOff");
    toggleMenuActivation("TES_movementStarted");
    toggleMenuActivation("TES_movementStopped");
    toggleMenuActivation("TES_heartbeat");
    toggleMenuActivation("TES_GPS_updateStatus");
    toggleMenuActivation("TES_tripPath");
    toggleMenuActivation("SI_cameraCalibrationOk");
    toggleMenuActivation("SI_cameraCalibrationFailed");
    toggleMenuActivation("SI_accelCalibrationOk");
    toggleMenuActivation("SI_externalEventTriggering");
    toggleMenuActivation("SI_enteringSleepMode");
    toggleMenuActivation("SI_applicationError");
    toggleMenuActivation("SI_cameraError");
    toggleMenuActivation("SI_MCU_Log");
    toggleMenuActivation("SI_systemBoot");
    toggleMenuActivation("SI_systemBootFailure");
    toggleMenuActivation("SI_systemOK_");
    toggleMenuActivation("SI_systemReset");
    toggleMenuActivation("SI_systemError");
    toggleMenuActivation("SI_firmwareUpdateStarted");
    toggleMenuActivation("SI_firmwareUpdateOK_");
    toggleMenuActivation("SI_firmwareUpdateFailed");
}

function CommunicationEnableColor(checkBoxID, selectID){
    var checkBox = document.getElementById(checkBoxID);
    var selectElement = document.getElementById(selectID);
    if (!checkBox.checked) {
        selectElement.style.backgroundColor = "lightgray";
        selectElement.style.fontStyle = "italic";
    } else {
        selectElement.style.fontStyle = "";
        
    }
}

function ServerEnableColor(checkBoxID, textbox_A, textbox_B, textbox_C,){
    var checkBox = document.getElementById(checkBoxID);
    var txtBoxA_Element = document.getElementById(textbox_A);
    var txtBoxB_Element = document.getElementById(textbox_B);
    var txtBoxC_Element = document.getElementById(textbox_C);
    if (!checkBox.checked) {
        txtBoxA_Element.style.backgroundColor = "lightgray";
        txtBoxA_Element.style.fontStyle = "italic";
        txtBoxB_Element.style.backgroundColor = "lightgray";
        txtBoxB_Element.style.fontStyle = "italic";
        txtBoxC_Element.style.backgroundColor = "lightgray";
        txtBoxC_Element.style.fontStyle = "italic";
    } else {
        txtBoxA_Element.style.fontStyle = "";
        txtBoxA_Element.style.backgroundColor = "#DDEBF7";
        txtBoxB_Element.style.fontStyle = "";
        txtBoxB_Element.style.backgroundColor = "#DDEBF7";
        txtBoxC_Element.style.fontStyle = "";
        txtBoxC_Element.style.backgroundColor = "#DDEBF7";
    }
}

function WifiNetworkEnableColor(checkBoxID, textbox_A, textbox_B){
    var checkBox = document.getElementById(checkBoxID);
    var txtBoxA_Element = document.getElementById(textbox_A);
    var txtBoxB_Element = document.getElementById(textbox_B);
    if (!checkBox.checked) {
        txtBoxA_Element.style.backgroundColor = "lightgray";
        txtBoxA_Element.style.fontStyle = "italic";
        txtBoxB_Element.style.backgroundColor = "lightgray";
        txtBoxB_Element.style.fontStyle = "italic";
    } else {
        txtBoxA_Element.style.fontStyle = "";
        txtBoxA_Element.style.backgroundColor = "#FFF2C6";
        txtBoxB_Element.style.fontStyle = "";
        txtBoxB_Element.style.backgroundColor = "#FFF2C6";
    }
}

function fillCmbBoxes(){
    //updateCmbBox(ID_element, i_from, i_until, step, scaleFactorValue, scaleScreenFactor, decimals, units);
    //updateCmbBox("DriverDisappearTimeThreshold", 5, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("Acc3DDriveTimeFilter", 3, 30, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("Acc3DStopTimeFilter", 1, 30, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("CalibrationReferencePoint_x", 0, 200, 1, 1, 1, 0, "cm(s)");
    //updateCmbBox("CalibrationReferencePoint_y", -100, 100, 1, 1, 1, 0, "cm(s)");
    //updateCmbBox("CalibrationReferencePoint_z", -50, 50, 1, 1, 1, 0, "cm(s)");
    //updateCmbBox("CalibrationTimeout", 10, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("MinSpeedMonitor", 10, 30, 1, 1, 1, 0, "km/h");
    //updateCmbBox("DistractionSpeedThreshold", 0, 50, 1, 1, 1, 0, "km/h");
    //updateCmbBox("DrowsinessSpeedThreshold", 0, 50, 1, 1, 1, 0, "km/h");
    //updateCmbBox("PhoneSpeedThreshold", 0, 50, 1, 1, 1, 0, "km/h");
    //updateCmbBox("SeatbeltSpeedThreshold", 0, 50, 1, 1, 1, 0, "km/h");
    //updateCmbBox("SmokingSpeedThreshold", 0, 50, 1, 1, 1, 0, "km/h");
    //updateCmbBox("InstallationHeight", 50, 500, 1, 1, 1, 0, "cm(s)");
    //updateCmbBox("OffsetFromCenter", -50, 50, 1, 1, 1, 0, "cms(s)");
    //updateCmbBox("ActiveLaneSpeedThreshold", 10, 100, 1, 1, 1, 0, "km/h");
    //updateCmbBox("HMWSpeedThreshold", 10, 100, 1, 1, 1, 0, "km/h");
    //updateCmbBox("TimeToTriggerTailgating", 1, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("TtcWarningRange", 1, 50, 1, 10, 10, 1, "sec(s)");
    //updateCmbBox("TtcEmergencyRange", 1, 20, 1, 10, 10, 1, "sec(s)");
    //updateCmbBox("FCWSpeedThreshold", 10, 100, 1, 1, 1, 0, "km/h");
    //updateCmbBox("AsleepOTABackOff", 0, 1, 1, 1, 1, 0, "min");
    //updateCmbBox("DriverDistractedOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("DrowsinessOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("FCWOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("LDWOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("LightDrowsinessOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("PCWOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("PhoneUseOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("SeatbeltOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("SmokingOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("HMWOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("UFCWOTABackOff", 0, 30, 1, 1, 1, 0, "min(s)");
    //let cameraFPS = 30;
    //updateCmbBox("CameraStatusBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("DistractionBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("DrowsinessBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("PhoneBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("SeatbeltBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("SleepBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("SmokingBackoffTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec");
    //updateCmbBox("KeepAliveInSec", 0, 300, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("ModemResetHWTimeInMin", 0, 30, 5, 1, 1, 0, "min(s)");
    //updateCmbBox("ModemResetSignalTimeInMin", 0, 30, 5, 1, 1, 0, "min(s)");
    //updateCmbBox("SelfPowerRecycleTimeInMin", 0, 30, 5, 1, 1, 0, "min(s)");
    //updateCmbBox("SocketResetTimeInMin", 0, 30, 5, 1, 1, 0, "min(s)");
    //updateCmbBox("IGNOffInterval", 60, 1440, 60, 1, 60, 0, "hour(s)");
    //updateCmbBox("IGNOffInterval", 15, 1440, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("IGNOnInterval", 5, 600, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("TimeToWaitGPSFix", 0, 300, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("IGNOffFilter", 0, 255, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("IGNOnFilter", 0, 255, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("GPSFixLossOrRecovery", 0, 500, 1, 1, 1, 0, "sec(s)");
    updateCmbBox("VoltageThresholdGPI", 0, 240, 1, 10, 10, 1, "VDC");
    updateCmbBox("StateDurationGPI", 10, 500, 1, 1, 0.1, 0, "(ms)");
    updateCmbBox("DutyCycleGPO", 10, 100, 1, 1, 1, 0, "%");
    updateCmbBox("FrequencyGPO", 1, 10, 1, 1, 1, 0, "Hz");
    updateCmbBox("LengthGPO", 1, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("timeBeforeEvent", 0, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("timeAfterEvent", 0, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("VideostoStorage", 1, 1000, 1, 1, 1, 0, "");
    //updateCmbBox("EventstoStorage", 1, 5000, 1, 1, 1, 0, "");
    //updateCmbBox("DistractionTurnGraceDuration", 0, 50, 1, 10, 10, 1, "sec(s)");
    //updateCmbBox("TrackingGraceTimer", 30, 1800, cameraFPS/2, 1, cameraFPS, 1, "sec(s)");
    //updateCmbBox("DriverChangeMinDuration", 0, 150, 1, 10, 10, 1, "sec(s)");
    //updateCmbBox("SeatbeltAlertTime", 5, 60, 1, 1, 1, 0, "sec(s)");
    //updateCmbBox("SleepDuration", 10, 50, 1, 10, 10, 1, "sec(s)");
    //updateCmbBox("MaxHeadingAngleForEvents", 0, 90, 1, 1, 1, 0, " (°/sec)");
    //updateCmbBox("WiFiTO", 5, 300, 1, 1, 1, 0, " min(s)");
    //updateCmbBox("SleepModeTO", 0, 255, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("SleepModeTO", 0, 255, 1, 1, 1, 0, "min(s)");
    //updateCmbBox("GsensorWakeThreshold", 2, 63, 1, 1, 1, 0, "");
    //with 0 as disabled
    //updateCmbBoxWithColors(ID_element, i_from, i_until, step, scaleFactorValue, scaleScreenFactor, decimals, units, BackgroundColor, TextColor);
    //updateCmbBoxWithColors("TripPathDistance", 100, 1000, 1, 1, 1, 0, "m", '#B9E6F0', '#000000');
    //updateCmbBoxWithColors("TripPathTime", 30, 300, 1, 1, 1, 0, "sec(s)", '#B9E6F0', '#000000');
    //updateCmbBoxWithColors("TripPathHeading", 20, 90, 1, 1, 1, 0, "°", '#B9E6F0', '#000000');
    //generateOptionsForAngles("RoadCenterYawPos", YawPos);
    //generateOptionsForAngles("RoadCenterYawNeg", YawNeg);
    //generateOptionsForAngles("RoadCenterPitchPos", PitchPos);
    //generateOptionsForAngles("RoadCenterPitchNeg", PitchNeg);
    //update_from_TripPath();
    updateEventAndInhibit_tripPath();
}

function update_from_TripPath(){
    disableFromEventActivation('TES_heartbeatActivation', 'TES_tripPathInhibitHeartbeat');
    disable_parameter_from_event_activation('TrackingEvents_TripPath_Activation', 'TES_tripPathActivationId', 'TripPathEnable');
    disable_event_activation_from_parameter('TrackingEvents_TripPath_Activation', 'TES_tripPathActivationId', 'TripPathEnable');
    disable_event_activation_from_parameter('TrackingEvents_Heartbeat_Activation', 'TES_heartbeatActivationId', 'TripPathInhibitHeartbeat');
}

function updateEventAndInhibit_tripPath() {
    const tripPathActivation = document.getElementById("TES_tripPathActivationCheckbox");
    const heartbeatActivation = document.getElementById("TES_heartbeatActivationCheckbox");
    const tripPathEnable = document.getElementById("TES_tripPathEnableCheckbox");
    const inhibitHeartbeat = document.getElementById("TES_tripPathInhibitHeartbeatCheckbox");
    tripPathEnable.checked = tripPathActivation.checked;
    inhibitHeartbeat.checked = heartbeatActivation.checked;
}

function setTimezone() {
    const date = new Date()
    let timezoneOffset = date.getTimezoneOffset();
    let timezoneHours = -Math.floor(timezoneOffset/60);
    var selectElement = document.getElementById("timeOffset");
    // Set the value of the select element to the timezone offset
    selectElement.value = timezoneHours;
}

function updateCommunicationsColor(select, id) {
    var selectedValue = select.value;
    var element = document.getElementById(id);
    switch(selectedValue) { 
        case 'LTE':
            element.style.backgroundColor = '#B4C6E7';
            break;
        case 'WiFi':
            element.style.backgroundColor = '#F8CBAD';
            break;
        case 'RS232':
            element.style.backgroundColor = '#E2F5A9';
            break;
        default:
            element.style.backgroundColor = '#FFDF73';
            break;
    }
}

function updateMenuWithDisabled(select, id) {
    var selectedValue = select.value;
    var element = document.getElementById(id);
    if(selectedValue == '0') {
        element.style.backgroundColor = '#FFC7CE';
        element.style.color = '#9C0000';
    }
    else{
        element.style.backgroundColor = '#B9E6F0';
        element.style.color = '#000000';
    }
}

function updateLogicalColor(select, id) {
    var selectedValue = select.value;
    var element = document.getElementById(id);
    switch(selectedValue) {
        case 'true':
            element.style.backgroundColor = '#C6EFCE';
            element.style.color = '#006100'
            break;
        case 'false':
            element.style.backgroundColor = '#FFC7CE';
            element.style.color = '#9C0000'
            break;
    }
}

function updateFCWRange(select, id) {
    var selectedValue = select.value;
    var element = document.getElementById(id);
    switch(selectedValue) {
        case '1':
            element.style.backgroundColor = '#C6EFCE';
            element.style.color = '#548235'
            break;
        case '2':
            element.style.backgroundColor = '#FFE699';
            element.style.color = '#806022'
            break;
        case '3':
            element.style.backgroundColor = '#FFC7CE';
            element.style.color = '#C00053'
            break;
    }
}

function changeBackgroundColor(cell_ID, select_ID) {
	const selectElement = document.getElementById(select_ID);
	const selectedValue = selectElement.value;
	if(selectedValue === "true"){
		selectElement.style.backgroundColor = "rgb(216, 255, 194)";
	}
	else{
		selectElement.style.backgroundColor = "rgb(255, 216, 216)";
	}
}

function findNearestValue(targetValue, array) {
    let nearestValue = array[0];
    let minDifference = Math.abs(targetValue - nearestValue);
    for (let i = 1; i < array.length; i++) {
        const difference = Math.abs(targetValue - array[i]);
        if (difference < minDifference) {
            nearestValue = array[i];
            minDifference = difference;
        }
    }
    return nearestValue;
}

//Fill angles based on arrays
function generateOptionsForAngles(selectId, valuesArray) {
    var selectElement = document.getElementById(selectId);
    for (var i = 0; i < valuesArray.length; i++) {
        var option = document.createElement("option");
        option.value = valuesArray[i];
        option.text = valuesArray[i] + "°";
        selectElement.appendChild(option);
    }
}

function updateDMSImage() {
    var positiveYaw = document.getElementById("RoadCenterYawPosNumber").value;
    var negativeYaw = document.getElementById("RoadCenterYawNegNumber").value;
    var positivePitch = document.getElementById("RoadCenterPitchPosNumber").value;
    var negativePitch = document.getElementById("RoadCenterPitchNegNumber").value;
    //
    var nameYawImageUp = "img/angles/yaw_export/" + positiveYaw + ".png";
    var nameYawImageDown = "img/angles/yaw_export/" + negativeYaw + ".png";
    var namePitchImageUp = "img/angles//pitch_export/" + positivePitch + ".png";
    var namePitchImageDown = "img/angles//pitch_export/" + negativePitch + ".png";
    //
    document.getElementById("DMS_up_A").setAttribute("src", nameYawImageUp);
    document.getElementById("DMS_up_B").setAttribute("src", nameYawImageDown);
    document.getElementById("DMS_side_A").setAttribute("src", namePitchImageUp);
    document.getElementById("DMS_side_B").setAttribute("src", namePitchImageDown);
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        OTAClosureEventFeatures[this.name] = this.checked;
    });
});

function updateCmbBox(ID_element, i_from, i_until, step, scaleFactorValue, scaleScreenFactor, decimals, units){
    var selectElement = document.getElementById(ID_element);	
    for (var i = i_from; i <= i_until; i = i + step) {
        var optionElement = document.createElement("option");
        optionElement.value = i/scaleFactorValue;
        optionElement.textContent = (i/scaleScreenFactor).toFixed(decimals) + " " + units;
        selectElement.appendChild(optionElement);
    }
}

function updateCmbBoxWithColors(ID_element, i_from, i_until, step, scaleFactorValue, scaleScreenFactor, decimals, units, backgroundColor, textColor){
    var selectElement = document.getElementById(ID_element);	
    for (var i = i_from; i <= i_until; i = i + step) {
        var optionElement = document.createElement("option");
        optionElement.value = i/scaleFactorValue;
        optionElement.textContent = (i/scaleScreenFactor).toFixed(decimals) + " " + units;
        optionElement.style.backgroundColor = backgroundColor;
        optionElement.style.color = textColor;
        selectElement.appendChild(optionElement);
    }
}

function check_TL_selection(ReportImage_select, ReportVideo_select){
    var ReportImage_box = document.getElementById(ReportVideo_select);
    var ReportImage_value = document.getElementById(ReportImage_select).value;
    var ReportVideo_value = document.getElementById(ReportVideo_select).value;
    if (ReportImage_value === "TimelapseDMS" || ReportImage_value === "TimelapseADAS" || ReportImage_value === "BothTimelapse"){
        if(ReportVideo_value !== "None"){
            ReportImage_box.style.backgroundColor = "#FFBEBE";
            ReportImage_box.style.textDecoration = "line-through";
            ReportImage_box.style.color = "#A00D14";
        }
        else{
            ReportImage_box.style.backgroundColor = "";
            ReportImage_box.style.textDecoration = "";
            ReportImage_box.style.color = "";
        }
    }
    else{
        ReportImage_box.style.backgroundColor = "";
        ReportImage_box.style.textDecoration = "";
        ReportImage_box.style.color = "";
    }
}

//Changing text-boxes for APN
function changeAPNFormat(element_ID, default_val) {
    var input = document.getElementById(element_ID);
    var value = input.value.trim();
    if (value === '') {
        input.style.backgroundColor = "lightgray";
        input.style.fontStyle = "italic";
        input.style.fontSize = "12px";
    } 
    else {
        input.style.backgroundColor = '#DDEBF7';
        input.style.fontStyle = "normal";
        input.style.fontSize = "13px";
        input.placeholder = default_val;
    }
}

// All menus to false
function update_ADAS_Select() {
    var deviceTypeRadioButtons = document.getElementsByName("deviceType");
    var ADAS_LDW_ActivationCheckbox = document.getElementById("ADAS_LDW_ActivationCheckbox");
    var ADAS_HMW_ActivationCheckbox = document.getElementById("ADAS_HMW_ActivationCheckbox");
    var ADAS_UFCW_ActivationCheckbox = document.getElementById("ADAS_UFCW_ActivationCheckbox");
    var ADAS_FCW_ActivationCheckbox = document.getElementById("ADAS_FCW_ActivationCheckbox");
    var ADAS_PCW_ActivationCheckbox = document.getElementById("ADAS_PCW_ActivationCheckbox");
    ADAS_LDW_ActivationCheckbox.disabled = false;
    ADAS_HMW_ActivationCheckbox.disabled = false;
    ADAS_UFCW_ActivationCheckbox.disabled = false;
    ADAS_FCW_ActivationCheckbox.disabled = false;
    ADAS_PCW_ActivationCheckbox.disabled = false;
    for (var i = 0; i < deviceTypeRadioButtons.length; i++) {
        if (deviceTypeRadioButtons[i].checked) {
            if (deviceTypeRadioButtons[i].value === "Disabled" || deviceTypeRadioButtons[i].value === "DVR") {
                ADAS_LDW_ActivationCheckbox.checked = false;
                ADAS_LDW_ActivationCheckbox.disabled = true;
                ADAS_HMW_ActivationCheckbox.checked = false;
                ADAS_HMW_ActivationCheckbox.disabled = true;
                ADAS_UFCW_ActivationCheckbox.checked = false;
                ADAS_UFCW_ActivationCheckbox.disabled = true;
                ADAS_FCW_ActivationCheckbox.checked = false;
                ADAS_FCW_ActivationCheckbox.disabled = true;
                ADAS_PCW_ActivationCheckbox.checked = false;
                ADAS_PCW_ActivationCheckbox.disabled = true;
                break;
            }
        }        
    }
    toggleMenuActivation("ADAS_LDW_");
    toggleMenuActivation("ADAS_HMW_");
    toggleMenuActivation("ADAS_UFCW_");
    toggleMenuActivation("ADAS_FCW_");
    toggleMenuActivation("ADAS_PCW_");
}
  
// Add an event listener to the radio buttons
var deviceTypeRadioButtons = document.getElementsByName("deviceType");
for (var i = 0; i < deviceTypeRadioButtons.length; i++) {
    deviceTypeRadioButtons[i].addEventListener("change", update_ADAS_Select);
}

function updateGPIOparameters(selectElement) {
    var selectedOption = selectElement.value;

    var Select_GPIO_1 = document.getElementById("Select_GPIO_1");
    var Select_GPIO_2 = document.getElementById("Select_GPIO_2");
    var Select_GPIO_3 = document.getElementById("Select_GPIO_3");
    var Select_GPIO_4 = document.getElementById("Select_GPIO_4");

    var label_1_ID = document.getElementById('GPIO_field_1');
    var label_2_ID = document.getElementById('GPIO_field_2');
    var label_3_ID = document.getElementById('GPIO_field_3');
    var label_4_ID = document.getElementById('GPIO_field_4');

    // Clear existing options
    Select_GPIO_1.innerHTML = "";
    Select_GPIO_2.innerHTML = "";
    Select_GPIO_3.innerHTML = "";
    Select_GPIO_4.innerHTML = "";

    if (selectedOption === "Out") {
        label_1_ID.textContent = "Duty Cycle:";
        updateCmbBox("Select_GPIO_1", 10, 100, 1, 1, 1, 0, "%");

        label_2_ID.textContent = "Frequency:";
        updateCmbBox("Select_GPIO_2", 1, 10, 1, 1, 1, 0, "Hz");

        label_3_ID.textContent = "Length:";
        updateCmbBox("Select_GPIO_3", 1, 60, 1, 1, 1, 0, "sec(s)");

        label_4_ID.textContent = "Source:";

        // Create and append options for Select_GPIO_4
        var option_label_4A = document.createElement("option");
        option_label_4A.text = "Waveform";
        option_label_4A.value = "Waveform";

        var option_label_4B = document.createElement("option");
        option_label_4B.text = "Based on LED";
        option_label_4B.value = "LED";

        var option_label_4C = document.createElement("option");
        option_label_4C.text = "From Server";
        option_label_4C.value = "Server";

        Select_GPIO_4.appendChild(option_label_4A);
        Select_GPIO_4.appendChild(option_label_4B);
        Select_GPIO_4.appendChild(option_label_4C);
    } 
    else {
        label_1_ID.textContent = "Active level:";
        // Create and append options for Select_GPIO_1
        var option_label_1A = document.createElement("option");
        option_label_1A.text = "High";
        option_label_1A.value = "true";
        option_label_1A.style.backgroundColor = "#C6EFCE";
        option_label_1A.style.color = "#006100";
        
        var option_label_1B = document.createElement("option");
        option_label_1B.text = "Low";
        option_label_1B.value = "false";
        option_label_1B.style.backgroundColor = "#FFC7CE";
        option_label_1B.style.color = "#9C0000";

        Select_GPIO_1.appendChild(option_label_1A);
        Select_GPIO_1.appendChild(option_label_1B);
        updateLogicalColor(document.getElementById("Select_GPIO_1"), "Select_GPIO_1");

        label_2_ID.textContent = "Special function:";
        // Create and append options for Select_GPIO_2
        var option_label_2A = document.createElement("option");
        option_label_2A.text = "Other";
        option_label_2A.value = "Other";

        var option_label_2B = document.createElement("option");
        option_label_2B.text = "Reverse";
        option_label_2B.value = "Reverse";

        var option_label_2C = document.createElement("option");
        option_label_2C.text = "Blinkers";
        option_label_2C.value = "Blinkers";

        var option_label_2D = document.createElement("option");
        option_label_2D.text = "Telematics";
        option_label_2D.value = "Telematics";

        Select_GPIO_2.appendChild(option_label_2A);
        Select_GPIO_2.appendChild(option_label_2B);
        Select_GPIO_2.appendChild(option_label_2C);
        Select_GPIO_2.appendChild(option_label_2D);

        label_3_ID.textContent = "State duration:";
        updateCmbBox("Select_GPIO_3", 10, 500, 1, 1, 0.1, 0, "(ms)");

        label_4_ID.textContent = "Voltage Threshold:";
        updateCmbBox("Select_GPIO_4", 0, 240, 1, 10, 10, 1, "VDC");
    }
}

function update_to_false_menus(string_name) {
    // Construct the ID of the select menu to modify
    var select_Id_FeedbackAudio = string_name.replace("1x", "2x");
    var select_Id_FeedbackOutput = string_name.replace("1x", "3x");
    var select_Id_FeedbackSpeech = string_name.replace("1x", "4x");
    var select_Id_FeedbackVisual = string_name.replace("1x", "5x");
    var select_Id_ReportEvent = string_name.replace("1x", "6x");
    var select_Id_ReportImage = string_name.replace("1x", "7x");
    var select_Id_ReportVideo = string_name.replace("1x", "8x");

    // Find the select menu by its ID
    var select_Activation_value = document.getElementById(string_name).value;
    var select_FeedbackAudio = document.getElementById(select_Id_FeedbackAudio);
    var select_FeedbackOutput = document.getElementById(select_Id_FeedbackOutput);
    var select_FeedbackSpeech = document.getElementById(select_Id_FeedbackSpeech);
    var select_FeedbackVisual = document.getElementById(select_Id_FeedbackVisual);
    var select_ReportEvent = document.getElementById(select_Id_ReportEvent);
    var select_ReportImage = document.getElementById(select_Id_ReportImage);
    var select_ReportVideo = document.getElementById(select_Id_ReportVideo);
    
    if(select_Activation_value === "false"){
        // Update Menus
        select_FeedbackAudio.value = "false";
        select_FeedbackOutput.value = "None";
        select_FeedbackSpeech.value = "false";
        select_FeedbackVisual.value = "false";
        select_ReportEvent.value = "false";
        select_ReportImage.value = "None";
        select_ReportVideo.value = "None";
        //Update colors
        setInitialColors()
    }
    else{
        //Update colors
        setInitialColors()
    }
}

//Remove duplicates from Select menus
function removeDuplicateOptionsAndRestoreSelected(selectId) {
  const select = document.getElementById(selectId);
  const uniqueValues = [];
  let selectedOptionValue = null;

  // Save the currently selected option, if any
  const selectedOption = select.options[select.selectedIndex];
  if (selectedOption) {
    selectedOptionValue = selectedOption.value;
  }

  for (let i = select.options.length - 1; i >= 0; i--) {
    const option = select.options[i];
    const optionValue = option.value;

    if (uniqueValues.includes(optionValue)) {
      // Remove the duplicate option
      select.remove(i);
    } else {
      // Add the option value to the uniqueValues array
      uniqueValues.push(optionValue);
    }
  }

  // Restore the selected option, if it was previously selected
  if (selectedOptionValue) {
    for (let i = 0; i < select.options.length; i++) {
      const option = select.options[i];
      if (option.value === selectedOptionValue) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

// Activation Menu goes false when parameter is disabled
function disable_event_activation_from_parameter(id_from_row, event_activation_menu, parameter_from_JSON) {
    var parameterElement = document.getElementById(parameter_from_JSON);
    var eventElement = document.getElementById(event_activation_menu);

    if (parameterElement && eventElement) {
        var parameterValue = parameterElement.value;

        if (parameterValue === 'false') {
            eventElement.value = 'false';
        } else if (parameterValue === 'true') {
            eventElement.value = 'true';
        }
    }
    changeBackgroundColor(id_from_row, event_activation_menu);
    update_to_false_menus(event_activation_menu);
    updateLogicalColor(document.getElementById(event_activation_menu), event_activation_menu);
    updateLogicalColor(document.getElementById(parameter_from_JSON), parameter_from_JSON);
}

// Parameter goes disabled when activation menu goes false
function disable_parameter_from_event_activation(id_from_row, event_activation_menu, parameter_from_JSON) {
    var parameterElement = document.getElementById(parameter_from_JSON);
    var eventElement = document.getElementById(event_activation_menu);

    if (eventElement && parameterElement) {
        var eventValue = eventElement.value;

        if (eventValue === 'false') {
            parameterElement.value = 'false';
        } else if (eventValue === 'true') {
            parameterElement.value = 'true';
        }
    }
    changeBackgroundColor(id_from_row, event_activation_menu);
    update_to_false_menus(event_activation_menu);
    updateLogicalColor(document.getElementById(event_activation_menu), event_activation_menu);
    updateLogicalColor(document.getElementById(parameter_from_JSON), parameter_from_JSON);
}

function disableFromEventActivation(eventId, inhibitEnable) {
    var parameterElement = document.getElementById(inhibitEnable + "Checkbox");
    var eventElement = document.getElementById(eventActivation + "ActivationCheckbox");
    if (eventElement && parameterElement) {
        var eventValue = eventElement.value;
        if (eventValue === 'false') {
            parameterElement.value = 'false';
        } else if (eventValue === 'true') {
            parameterElement.value = 'true';
        }
    }
    update_to_false_menus(eventActivation);
}

// FeedbackSpeech to false to unsupported events
function FeedbackSpeech_UnsupportedUpdate(){
    document.getElementById("DMS_4x8_select").value = false; // Tampering detection
    document.getElementById("DMS_4x13_select").value = false; // Driver ID updated
    document.getElementById("TrackingEvents_4x1_select").value = false; // Ignition ON
    document.getElementById("TrackingEvents_4x2_select").value = false; // Ignition OFF
    document.getElementById("TrackingEvents_4x3_select").value = false; // Movement Started
    document.getElementById("TrackingEvents_4x4_select").value = false; // Movement Stopped
    document.getElementById("TrackingEvents_4x5_select").value = false; // Heartbeat
    document.getElementById("TrackingEvents_4x6_select").value = false; // GPS status update
    document.getElementById("System_wo_Event_4x3_select").value = false; // 3D Accel Calibration Completed
    document.getElementById("System_wo_Event_4x4_select").value = false; // Entering sleep mode
    document.getElementById("System_wo_Event_4x5_select").value = false; // FW Update started
    document.getElementById("System_wo_Event_4x6_select").value = false; // FW update completed
    document.getElementById("System_wo_Event_4x7_select").value = false; // FW updated failed
    document.getElementById("System_wo_Event_4x8_select").value = false; // System boot
    document.getElementById("System_wo_Event_4x9_select").value = false; // System boot failure
    document.getElementById("System_w_Event_4x2_select").value = false; // Application Error
    document.getElementById("System_w_Event_4x3_select").value = false; // Camera Error
    document.getElementById("System_w_Event_4x4_select").value = false; // System OK
    document.getElementById("System_w_Event_4x5_select").value = false; // System Reset
    document.getElementById("System_w_Event_4x6_select").value = false; // System Error
    document.getElementById("System_w_Event_4x7_select").value = false; // MCUlog
}

function handle_DMS_DriverAsleep_Timelapse_change(checkbox, id_img1, imagePath1, checkboxId1, id_img2, imagePath2, checkboxId2,) {
    if (checkbox.checked) {
        const imgElement1 = document.getElementById(id_img1);
        const checkboxElement1 = document.getElementById(checkboxId1);
        const imgElement2 = document.getElementById(id_img2);
        const checkboxElement2 = document.getElementById(checkboxId2);
        imgElement1.src = imagePath1;
        checkboxElement1.checked = false;
        imgElement2.src = imagePath2;
        checkboxElement2.checked = false;
    }
}

function toggleImageVideoCheckbox(id_img1, imgPath1_ON, imgPath1_OFF, checkbox1, id_img2, imgPath2, checkbox2, id_img3, imgPath3, checkbox3) {
    const imgButton = document.getElementById(id_img1);
    const timelapseButton = document.getElementById(id_img2);
    const disableButton = document.getElementById(id_img3);

    const imgCheckbox = document. getElementById(checkbox1);
    const timelapseCheckbox = document. getElementById(checkbox2);
    const disableCheckbox = document. getElementById(checkbox3);

    if (imgCheckbox.checked) {
        imgButton.src = imgPath1_OFF;
        imgCheckbox.checked = false;
    } else {
        imgButton.src = imgPath1_ON;
        timelapseButton.src = imgPath2;
        disableButton.src = imgPath3;
        imgCheckbox.checked = true;
        timelapseCheckbox.checked = false;
        disableCheckbox.checked = false;
    }
    //imgCheckbox.checked = !imgCheckbox.checked;
}

function toggleTimelapseEnableCheckbox(id_img1, imgPath1_ON, imgPath1_OFF, checkbox1, id_img2, imgPath2, checkbox2, id_img3, imgPath3, checkbox3, id_img4, imgPath4, checkbox4) {
    const pushedButton = document.getElementById(id_img1);
    const imageButton = document.getElementById(id_img2);
    const videoButton = document.getElementById(id_img3);
    const tdButton = document.getElementById(id_img4);

    const pushedCheckbox = document.getElementById(checkbox1);
    const imageCheckbox = document.getElementById(checkbox2);
    const videoCheckbox = document.getElementById(checkbox3);
    const tdCheckbox = document.getElementById(checkbox4);

    if (pushedCheckbox.checked) {
        pushedButton.src = imgPath1_OFF;
        pushedCheckbox.checked = false;
    } else {
        pushedButton.src =imgPath1_ON;
        imageButton.src = imgPath2;
        videoButton.src = imgPath3;
        tdButton.src = imgPath4;
        pushedCheckbox.checked = true;
        imageCheckbox.checked = false;
        videoCheckbox.checked = false;
        tdCheckbox.checked = false;
    }
}

function toggleFeedbackOutputSummary (paramId) {
    const selectedValue = document.getElementById(paramId + 'Id');
    const summaryCell = document.getElementById(paramId + 'Summary');
    const summaryCellImg = document.getElementById(paramId + 'SummaryImg');
    if (selectedValue.value === 'None') {
        summaryCell.classList.remove('active-summary-cell');
        summaryCell.classList.add('inactive-summary-cell');
    } else {
        summaryCell.classList.remove('inactive-summary-cell');
        summaryCell.classList.add('active-summary-cell');
    }
    summaryCellImg.src = "source_img/" + selectedValue.value + ".png";
}

function toggleDetectionClosureEvent(id, closureEventAdmitted) {
    const detectionEventCheckbox = document.getElementById(id + 'DetectionEventCheckbox');
    const closureEventCheckbox = document.getElementById(id + 'ClosureEventCheckbox');
    const summaryCellLabel = id + 'DetectionClosureEventSummary';
    if (closureEventAdmitted) {
        if (detectionEventCheckbox.checked) {
            closureEventCheckbox.disabled = false;
            if (closureEventCheckbox.checked) {
                toggleSummaryCell(summaryCellLabel, true, 'source_img/Detection_Closure_Event_ON.png');
            } else {
                toggleSummaryCell(summaryCellLabel, true, 'source_img/Detection_Event_ON.png');
            }
        } else {
            closureEventCheckbox.checked = false;
            closureEventCheckbox.disabled = true;
            toggleSummaryCell(summaryCellLabel, false, 'source_img/Detection_Closure_Event_OFF.png');
        }
    } else {
        closureEventCheckbox.checked = false;
        closureEventCheckbox.disabled = true;
        if (detectionEventCheckbox.checked) {
            toggleSummaryCell(summaryCellLabel, true, 'source_img/Detection_Event_ON.png');
        } else {
            toggleSummaryCell(summaryCellLabel, false, 'source_img/Detection_Closure_Event_OFF.png');
        }
    }
}


function toggleDetectionEventSummary (paramId, paramPathOn, paramPathOff) {
    const checkbox = document.getElementById(paramId + 'Checkbox');
    const summaryCell = document.getElementById(paramId + 'Summary');
    const summaryCellImg = document.getElementById(paramId + 'SummaryImg');

    if (!checkbox.checked) {
        summaryCell.classList.remove('active-summary-cell');
        summaryCell.classList.add('inactive-summary-cell');
        summaryCellImg.src = paramPathOff;
    } else {
        summaryCell.classList.remove('inactive-summary-cell');
        summaryCell.classList.add('active-summary-cell');
        summaryCellImg.src = paramPathOn;
    }
}

function toggleMediaUpload(id, option, camera) {
    let camera1 = "InCabin"
    let camera2 = "RoadFacing"
    if (camera === "RoadFacing") {
        camera1 = "RoadFacing";
        camera2 = "InCabin";
    }
    const enableLabel1 = id + 'Enable' + camera1;
    const enableLabel2 = id + 'Enable' + camera2;
    const enableCheckbox1 = document.getElementById(enableLabel1 + 'Checkbox');
    const enableCheckbox2 = document.getElementById(enableLabel2 + 'Checkbox');
    if (enableCheckbox1.disabled || enableCheckbox2.disabled) {
        return;
    }
    const imageLabel1 = id + 'ReportImage' + camera1;
    const timelapseLabel1 = id + 'ReportTimelapse' + camera1;
    const videoLabel1 = id + 'ReportVideo' + camera1;
    const imageLabel2 = id + 'ReportImage' + camera2;
    const timelapseLabel2 = id + 'ReportTimelapse' + camera2;
    const videoLabel2 = id + 'ReportVideo' + camera2;
    const imageCheckbox1 = document.getElementById(imageLabel1 + 'Checkbox');
    const timelapseCheckbox1 = document.getElementById(timelapseLabel1 + 'Checkbox');
    const videoCheckbox1 = document.getElementById(videoLabel1 + 'Checkbox');
    const imageCheckbox2 = document.getElementById(imageLabel2 + 'Checkbox');
    const timelapseCheckbox2 = document.getElementById(timelapseLabel2 + 'Checkbox');
    const videoCheckbox2 = document.getElementById(videoLabel2 + 'Checkbox');
    switch (option) {
        case "ReportImage":
            if (imageCheckbox1.checked) {
                toggleMediaUploadButton(imageLabel1, false, 'source_img/Image_OFF.png');
            } else {
                toggleMediaUploadButton(imageLabel1, true, 'source_img/Image_ON.png');
                if (timelapseCheckbox1.checked) {
                    toggleMediaUploadButton(timelapseLabel1, false, 'source_img/Timelapse_OFF.png');
                }
                if (timelapseCheckbox2.checked) {
                    toggleMediaUploadButton(timelapseLabel2, false, 'source_img/Timelapse_OFF.png');
                }
            }
            break;
        case "ReportTimelapse":
            if (timelapseCheckbox1.checked) {
                toggleMediaUploadButton(timelapseLabel1, false, 'source_img/Timelapse_OFF.png');
            } else {
                toggleMediaUploadButton(timelapseLabel1, true, 'source_img/Timelapse_ON.png');
                if (imageCheckbox1.checked) {
                    toggleMediaUploadButton(imageLabel1, false, 'source_img/Image_OFF.png');
                }
                if (videoCheckbox1.checked) {
                    toggleMediaUploadButton(videoLabel1, false, 'source_img/Video_OFF.png');
                }
                if (imageCheckbox2.checked) {
                    toggleMediaUploadButton(imageLabel2, false, 'source_img/Image_OFF.png');
                }
            }
            break;
        case "ReportVideo":
            if (videoCheckbox1.checked) {
                toggleMediaUploadButton(videoLabel1, false, 'source_img/Video_OFF.png');
            } else {
                toggleMediaUploadButton(videoLabel1, true, 'source_img/Video_ON.png');
                if (timelapseCheckbox1.checked) {
                    toggleMediaUploadButton(timelapseLabel1, false, 'source_img/Timelapse_OFF.png');
                }
            }
            break;
        default:
            if (!enableCheckbox1.checked){
                if (imageCheckbox1.checked) {
                    toggleMediaUploadButton(imageLabel1, false, 'source_img/Image_OFF.png');
                }
                if (timelapseCheckbox1) {
                    toggleMediaUploadButton(timelapseLabel1, false, 'source_img/Timelapse_OFF.png');
                }
                if (videoCheckbox1) {
                    toggleMediaUploadButton(videoLabel1, false, 'source_img/Video_OFF.png');
                }
            }
            break;
    }
    if (option != 'Enable') {
        enableCheckbox1.checked = (imageCheckbox1.checked || timelapseCheckbox1.checked || videoCheckbox1.checked);
        enableCheckbox2.checked = (imageCheckbox2.checked || timelapseCheckbox2.checked || videoCheckbox2.checked);
    }
}

function toggleMediaUploadButton (button, activate, imgSrc) {
    const buttonId = document.getElementById(button + 'Id');
    const buttonCheckbox = document.getElementById(button + 'Checkbox');
    buttonCheckbox.checked = activate;
    buttonId.src = imgSrc;
    toggleSummaryCell(button + 'Summary', activate, imgSrc);
}

function toggleCheckAndImageButton(button, imgOnSrc, imgOffSrc) {
    const buttonId = document.getElementById(button + 'Id');
    const buttonCheckbox = document.getElementById(button + 'Checkbox');
    if (buttonCheckbox.disabled) {
        return;
    }
    buttonCheckbox.checked = !buttonCheckbox.checked;
    if (buttonCheckbox.checked) {
        buttonId.src = imgOnSrc;
        toggleSummaryCell(button + 'Summary', true, imgOnSrc);
    } else {
        buttonId.src = imgOffSrc;
        toggleSummaryCell(button + 'Summary', false, imgOffSrc);
    }
}

function toggleSummaryCell (cell, activate, imgSrc) {
    const summaryCell = document.getElementById(cell);
    const summaryCellImg = document.getElementById(cell + 'Img');
    if (summaryCell) {
        if (activate) {
            summaryCell.classList.remove('inactive-summary-cell');
            summaryCell.classList.add('active-summary-cell');
        } else {
            summaryCell.classList.remove('active-summary-cell');
            summaryCell.classList.add('inactive-summary-cell');
        }
        summaryCellImg.src = imgSrc;
    }
}

// Script Test for New FrontEnd
function toggleImageAndCheckbox(id_img, imagePath1, imagePath2, checkboxId) {
    const imgElement = document.getElementById(id_img);
    const checkboxElement = document.getElementById(checkboxId);

    //console.log('Current image src:', imgElement.src);
    //console.log('Toggle to:', imgElement.src.includes(imagePath2) ? imagePath1 : imagePath2);

    if (imgElement.src.includes(imagePath2)) {
        imgElement.src = imagePath1;
        if (id_img === 'DMS_DriverAsleep_ReportVideoDMS' || id_img === 'DMS_DriverAsleep_ReportVideoADAS') {
            const checkbox = document.getElementById('DMS_DriverAsleep_Timelapse');
            checkbox.checked = false; // Desmarca el checkbox
        }
    } else {
        imgElement.src = imagePath2;
    }

    // Toggle checkbox checked state
    checkboxElement.checked = !checkboxElement.checked;
    //console.log('Checkbox checked state:', checkboxElement.checked);
}

document.addEventListener("DOMContentLoaded", function() {
    // Hide all sub-parameters blocks and set initial button text
    const subParams = document.querySelectorAll('.sub-parameters');
    const toggles = document.querySelectorAll('.toggle-button');
    
    subParams.forEach(param => {
        param.style.display = 'none';
    });
    
    toggles.forEach(toggle => {
        const img = toggle.querySelector('img');
        if (img) {
            img.src = 'source_img/more_options_icon.png';
            img.alt = 'More Options';
        } else {
            toggle.textContent = '[+]';
        }
    });
});

function toggleSubParameters(id, button, moreOptionsImg, lessOptionsImg, headerId) {
    // Seleccionar todos los elementos con la clase 'sub-parameters'
    const allSubParams = document.querySelectorAll('.sub-parameters');

    // Recorrer cada elemento para ocultar todos los menús excepto el que se está alternando
    allSubParams.forEach(subParam => {
        if (subParam.id !== id) {
            // Ocultar los menús que no están siendo alternados
            subParam.classList.remove('show');
            subParam.style.display = 'none';

            // Actualizar la imagen del botón asociado al menú que se está ocultando
            const associatedButton = document.querySelector(`.toggle-button[onclick*="${subParam.id}"] img`);
            if (associatedButton) {
                associatedButton.src = moreOptionsImg;
                associatedButton.alt = 'More Options';
            }
        }
    });

    // Seleccionar el menú que se está alternando
    const subParams = document.getElementById(id);
    if (subParams) {
        // Verificar si el menú está oculto
        const isHidden = !subParams.classList.contains('show');
        if (isHidden) {
            // Mostrar el menú
            subParams.style.display = 'block';  // Hacerlo visible primero para aplicar la transición
            subParams.offsetHeight;  // Forzar un reflujo
            subParams.classList.add('show');
            scrollToView(headerId);
        } else {
            // Ocultar el menú
            subParams.classList.remove('show');
            setTimeout(() => {
                if (!subParams.classList.contains('show')) {
                    subParams.style.display = 'none';
                }
            }, 125); // Ajustar la duración del temporizador con la duración de la transición CSS
        }

        // Actualizar la imagen del botón del menú alternado
        const img = button.querySelector('img');
        if (img) {
            img.src = isHidden ? lessOptionsImg : moreOptionsImg;
            img.alt = isHidden ? 'Less Options' : 'More Options';
        }
    }
}

function scrollToView(elementId) {
    var element = document.getElementById(elementId);
    var headerOffset = document.getElementById('header').offsetHeight; // Get the height of the fixed header
    var elementPosition = element.getBoundingClientRect().top; // Get the element's position relative to the viewport
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
}

function toggleMenuActivation(id) {
    const activationButton = document.getElementById(id + "ActivationCheckbox");
    const feedbackVisualButton = document.getElementById(id + "FeedbackVisualCheckbox");
    const feedbackAudioButton = document.getElementById(id + "FeedbackAudioCheckbox");
    const feedbackSpeechButton = document.getElementById(id + "FeedbackSpeechCheckbox");
    const detectionEventButton = document.getElementById(id + "DetectionEventCheckbox");
    const enableInCabinButton = document.getElementById(id + "EnableInCabinCheckbox");
    const enableRoadFacingButton = document.getElementById(id + "EnableRoadFacingCheckbox");
    const feedbackOutputSelect = document.getElementById(id + "FeedbackOutputId");
    const feedbackSpeechSummaryCell = document.getElementById(id + "FeedbackSpeechSummary");
    if (activationButton.checked) {
        feedbackVisualButton.disabled = false;
        feedbackAudioButton.disabled = false;
        if (!feedbackSpeechSummaryCell.classList.contains("disabled-summary-cell")) {
            feedbackSpeechButton.disabled = false;
        }
        feedbackOutputSelect.disabled = false;
        detectionEventButton.disabled = false;
        enableInCabinButton.disabled = false;
        enableRoadFacingButton.disabled = false;
    } else {
        if (feedbackVisualButton.checked) {
            toggleCheckAndImageButton(id + "FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
        }
        if (feedbackAudioButton.checked) {
            toggleCheckAndImageButton(id + "FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
        }
        if (feedbackSpeechButton.checked) {
            toggleCheckAndImageButton(id + "FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
        }
        feedbackOutputSelect.value = "None";
        toggleFeedbackOutputSummary(id + "FeedbackOutput");
        detectionEventButton.checked = false;
        toggleDetectionClosureEvent(id, false);
        enableInCabinButton.checked = false;
        toggleMediaUpload(id, 'Enable', 'InCabin');
        enableRoadFacingButton.checked = false;
        toggleMediaUpload(id, 'Enable', 'RoadFacing');
        feedbackVisualButton.disabled = true;
        feedbackAudioButton.disabled = true;
        feedbackSpeechButton.disabled = true;
        feedbackOutputSelect.disabled = true;
        detectionEventButton.disabled = true;
        enableInCabinButton.disabled = true;
        enableRoadFacingButton.disabled = true;
    }
}

function updateLinkedCheckboxes(id, isChecked) {
    document.getElementById(id).checked = isChecked;
}

function updateLinkedMenu(id, isChecked) {
    updateLinkedCheckboxes(id + "ActivationCheckbox", isChecked);
    toggleMenuActivation(id);
}
