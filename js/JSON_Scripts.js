function load_FS10_JSON() {
    const fileInput = document.getElementById("file-input");
    const jsonInput = document.getElementById("jsonInput");

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const content = e.target.result;
        jsonInput.value = content;
    };

    reader.readAsText(file);
}

function update_FS10_report_media(labelReport){
    if(labelReport === "None"){
        return false;
    }
    else {
        return true;
    }
}

function update_FS10_textInputs(inputFromTextbox){
    if(inputFromTextbox === ""){
        return inputFromTextbox;
    }
    else{
        return inputFromTextbox;
    }
}

function generate_FS10_JSON(){
    // DMS
    var DriverAsleep_Activation = document.getElementById("DMS_driverAsleepActivationCheckbox").checked; 
    var DriverAsleep_FeedbackAudio = document.getElementById("DMS_driverAsleepFeedbackAudioCheckbox").checked; 
    var DriverAsleep_FeedbackOutput = document.getElementById("DMS_driverAsleepFeedbackOutputId").value; 
    var DriverAsleep_FeedbackSpeech = document.getElementById("DMS_driverAsleepFeedbackSpeechCheckbox").checked; 
    var DriverAsleep_FeedbackVisual = document.getElementById("DMS_driverAsleepFeedbackVisualCheckbox").checked; 
    var DriverAsleep_ReportEvent = document.getElementById("DMS_driverAsleepDetectionEventCheckbox").checked; 
    var DriverAsleep_ReportCabinSnapshot = document.getElementById("DMS_driverAsleepReportImageInCabinCheckbox").checked;
    var DriverAsleep_ReportCabinTimelapse = document.getElementById("DMS_driverAsleepReportTimelapseInCabinCheckbox").checked;
    var DriverAsleep_ReportRoadSnapshot = document.getElementById("DMS_driverAsleepReportImageRoadFacingCheckbox").checked;
    var DriverAsleep_ReportRoadTimelapse = document.getElementById("DMS_driverAsleepReportTimelapseRoadFacingCheckbox").checked;
    var DriverAsleep_ReportImage = "None";
    if (DriverAsleep_ReportCabinSnapshot && DriverAsleep_ReportRoadSnapshot) {
        DriverAsleep_ReportImage = "BothSingle";
    } else if (DriverAsleep_ReportCabinSnapshot && !DriverAsleep_ReportRoadSnapshot) {
        DriverAsleep_ReportImage = "SingleDMS";
    } else if (!DriverAsleep_ReportCabinSnapshot && DriverAsleep_ReportRoadSnapshot) {
        DriverAsleep_ReportImage = "SingleADAS";
    } else if (DriverAsleep_ReportCabinTimelapse && DriverAsleep_ReportRoadTimelapse) {
        DriverAsleep_ReportImage = "BothTimelaps";
    } else if (DriverAsleep_ReportCabinTimelapse && !DriverAsleep_ReportRoadTimelapse) {
        DriverAsleep_ReportImage = "TimelapseDMS";
    } else if (!DriverAsleep_ReportCabinTimelapse && DriverAsleep_ReportRoadTimelapse) {
        DriverAsleep_ReportImage = "TimelapseADAS";
    }
    var DriverAsleep_ReportFootageCabin = document.getElementById("DMS_driverAsleepReportVideoInCabinCheckbox").checked;
    var DriverAsleep_ReportFootageRoad = document.getElementById("DMS_driverAsleepReportVideoRoadFacingCheckbox").checked;
    var DriverAsleep_ReportFootage = "None";
    if (DriverAsleep_ReportFootageCabin && DriverAsleep_ReportFootageRoad) {
        DriverAsleep_ReportFootage = "Both";
    } else if (DriverAsleep_ReportFootageCabin && !DriverAsleep_ReportFootageRoad) {
        DriverAsleep_ReportFootage = "DMS";
    } else if (!DriverAsleep_ReportFootageCabin && DriverAsleep_ReportFootageRoad) {
        DriverAsleep_ReportFootage = "ADAS";
    }
    var Drowsiness_Activation = document.getElementById("DMS_drowsinessActivationCheckbox").checked; 
    var Drowsiness_FeedbackAudio = document.getElementById("DMS_drowsinessFeedbackAudioCheckbox").checked; 
    var Drowsiness_FeedbackOutput = document.getElementById("DMS_drowsinessFeedbackOutputId").value; 
    var Drowsiness_FeedbackSpeech = document.getElementById("DMS_drowsinessFeedbackSpeechCheckbox").checked; 
    var Drowsiness_FeedbackVisual = document.getElementById("DMS_drowsinessFeedbackVisualCheckbox").checked; 
    var Drowsiness_ReportEvent = document.getElementById("DMS_drowsinessDetectionEventCheckbox").checked; 
    var Drowsiness_ReportCabinSnapshot = document.getElementById("DMS_drowsinessReportImageInCabinCheckbox").checked;
    var Drowsiness_ReportCabinTimelapse = document.getElementById("DMS_drowsinessReportTimelapseInCabinCheckbox").checked;
    var Drowsiness_ReportRoadSnapshot = document.getElementById("DMS_drowsinessReportImageRoadFacingCheckbox").checked;
    var Drowsiness_ReportRoadTimelapse = document.getElementById("DMS_drowsinessReportTimelapseRoadFacingCheckbox").checked;
    var Drowsiness_ReportImage = "None";
    if (Drowsiness_ReportCabinSnapshot && Drowsiness_ReportRoadSnapshot) {
        Drowsiness_ReportImage = "BothSingle";
    } else if (Drowsiness_ReportCabinSnapshot && !Drowsiness_ReportRoadSnapshot) {
        Drowsiness_ReportImage = "SingleDMS";
    } else if (!Drowsiness_ReportCabinSnapshot && Drowsiness_ReportRoadSnapshot) {
        Drowsiness_ReportImage = "SingleADAS";
    } else if (Drowsiness_ReportCabinTimelapse && Drowsiness_ReportRoadTimelapse) {
        Drowsiness_ReportImage = "BothTimelaps";
    } else if (Drowsiness_ReportCabinTimelapse && !Drowsiness_ReportRoadTimelapse) {
        Drowsiness_ReportImage = "TimelapseDMS";
    } else if (!Drowsiness_ReportCabinTimelapse && Drowsiness_ReportRoadTimelapse) {
        Drowsiness_ReportImage = "TimelapseADAS";
    }
    var Drowsiness_ReportFootageCabin = document.getElementById("DMS_drowsinessReportVideoInCabinCheckbox").checked;
    var Drowsiness_ReportFootageRoad = document.getElementById("DMS_drowsinessReportVideoRoadFacingCheckbox").checked;
    var Drowsiness_ReportFootage = "None";
    if (Drowsiness_ReportFootageCabin && Drowsiness_ReportFootageRoad) {
        Drowsiness_ReportFootage = "Both";
    } else if (Drowsiness_ReportFootageCabin && !Drowsiness_ReportFootageRoad) {
        Drowsiness_ReportFootage = "DMS";
    } else if (!Drowsiness_ReportFootageCabin && Drowsiness_ReportFootageRoad) {
        Drowsiness_ReportFootage = "ADAS";
    }
    var DriverDistracted_Activation = document.getElementById("DMS_driverDistractedActivationCheckbox").checked; 
    var DriverDistracted_FeedbackAudio = document.getElementById("DMS_driverDistractedFeedbackAudioCheckbox").checked; 
    var DriverDistracted_FeedbackOutput = document.getElementById("DMS_driverDistractedFeedbackOutputId").value; 
    var DriverDistracted_FeedbackSpeech = document.getElementById("DMS_driverDistractedFeedbackSpeechCheckbox").checked; 
    var DriverDistracted_FeedbackVisual = document.getElementById("DMS_driverDistractedFeedbackVisualCheckbox").checked; 
    var DriverDistracted_ReportEvent = document.getElementById("DMS_driverDistractedDetectionEventCheckbox").checked; 
    var DriverDistracted_ReportCabinSnapshot = document.getElementById("DMS_driverDistractedReportImageInCabinCheckbox").checked;
    var DriverDistracted_ReportCabinTimelapse = document.getElementById("DMS_driverDistractedReportTimelapseInCabinCheckbox").checked;
    var DriverDistracted_ReportRoadSnapshot = document.getElementById("DMS_driverDistractedReportImageRoadFacingCheckbox").checked;
    var DriverDistracted_ReportRoadTimelapse = document.getElementById("DMS_driverDistractedReportTimelapseRoadFacingCheckbox").checked;
    var DriverDistracted_ReportImage = "None";
    if (DriverDistracted_ReportCabinSnapshot && DriverDistracted_ReportRoadSnapshot) {
        DriverDistracted_ReportImage = "BothSingle";
    } else if (DriverDistracted_ReportCabinSnapshot && !DriverDistracted_ReportRoadSnapshot) {
        DriverDistracted_ReportImage = "SingleDMS";
    } else if (!DriverDistracted_ReportCabinSnapshot && DriverDistracted_ReportRoadSnapshot) {
        DriverDistracted_ReportImage = "SingleADAS";
    } else if (DriverDistracted_ReportCabinTimelapse && DriverDistracted_ReportRoadTimelapse) {
        DriverDistracted_ReportImage = "BothTimelaps";
    } else if (DriverDistracted_ReportCabinTimelapse && !DriverDistracted_ReportRoadTimelapse) {
        DriverDistracted_ReportImage = "TimelapseDMS";
    } else if (!DriverDistracted_ReportCabinTimelapse && DriverDistracted_ReportRoadTimelapse) {
        DriverDistracted_ReportImage = "TimelapseADAS";
    }
    var DriverDistracted_ReportFootageCabin = document.getElementById("DMS_driverDistractedReportVideoInCabinCheckbox").checked;
    var DriverDistracted_ReportFootageRoad = document.getElementById("DMS_driverDistractedReportVideoRoadFacingCheckbox").checked;
    var DriverDistracted_ReportFootage = "None";
    if (DriverDistracted_ReportFootageCabin && DriverDistracted_ReportFootageRoad) {
        DriverDistracted_ReportFootage = "Both";
    } else if (DriverDistracted_ReportFootageCabin && !DriverDistracted_ReportFootageRoad) {
        DriverDistracted_ReportFootage = "DMS";
    } else if (!DriverDistracted_ReportFootageCabin && DriverDistracted_ReportFootageRoad) {
        DriverDistracted_ReportFootage = "ADAS";
    }
    var PhoneUse_Activation = document.getElementById("DMS_phoneUseActivationCheckbox").checked; 
    var PhoneUse_FeedbackAudio = document.getElementById("DMS_phoneUseFeedbackAudioCheckbox").checked; 
    var PhoneUse_FeedbackOutput = document.getElementById("DMS_phoneUseFeedbackOutputId").value; 
    var PhoneUse_FeedbackSpeech = document.getElementById("DMS_phoneUseFeedbackSpeechCheckbox").checked; 
    var PhoneUse_FeedbackVisual = document.getElementById("DMS_phoneUseFeedbackVisualCheckbox").checked; 
    var PhoneUse_ReportEvent = document.getElementById("DMS_phoneUseDetectionEventCheckbox").checked; 
    var PhoneUse_ReportCabinSnapshot = document.getElementById("DMS_phoneUseReportImageInCabinCheckbox").checked;
    var PhoneUse_ReportCabinTimelapse = document.getElementById("DMS_phoneUseReportTimelapseInCabinCheckbox").checked;
    var PhoneUse_ReportRoadSnapshot = document.getElementById("DMS_phoneUseReportImageRoadFacingCheckbox").checked;
    var PhoneUse_ReportRoadTimelapse = document.getElementById("DMS_phoneUseReportTimelapseRoadFacingCheckbox").checked;
    var PhoneUse_ReportImage = "None";
    if (PhoneUse_ReportCabinSnapshot && PhoneUse_ReportRoadSnapshot) {
        PhoneUse_ReportImage = "BothSingle";
    } else if (PhoneUse_ReportCabinSnapshot && !PhoneUse_ReportRoadSnapshot) {
        PhoneUse_ReportImage = "SingleDMS";
    } else if (!PhoneUse_ReportCabinSnapshot && PhoneUse_ReportRoadSnapshot) {
        PhoneUse_ReportImage = "SingleADAS";
    } else if (PhoneUse_ReportCabinTimelapse && PhoneUse_ReportRoadTimelapse) {
        PhoneUse_ReportImage = "BothTimelaps";
    } else if (PhoneUse_ReportCabinTimelapse && !PhoneUse_ReportRoadTimelapse) {
        PhoneUse_ReportImage = "TimelapseDMS";
    } else if (!PhoneUse_ReportCabinTimelapse && PhoneUse_ReportRoadTimelapse) {
        PhoneUse_ReportImage = "TimelapseADAS";
    }
    var PhoneUse_ReportFootageCabin = document.getElementById("DMS_phoneUseReportVideoInCabinCheckbox").checked;
    var PhoneUse_ReportFootageRoad = document.getElementById("DMS_phoneUseReportVideoRoadFacingCheckbox").checked;
    var PhoneUse_ReportFootage = "None";
    if (PhoneUse_ReportFootageCabin && PhoneUse_ReportFootageRoad) {
        PhoneUse_ReportFootage = "Both";
    } else if (PhoneUse_ReportFootageCabin && !PhoneUse_ReportFootageRoad) {
        PhoneUse_ReportFootage = "DMS";
    } else if (!PhoneUse_ReportFootageCabin && PhoneUse_ReportFootageRoad) {
        PhoneUse_ReportFootage = "ADAS";
    }
    var Seatbelt_Activation = document.getElementById("DMS_seatbeltActivationCheckbox").checked; 
    var Seatbelt_FeedbackAudio = document.getElementById("DMS_seatbeltFeedbackAudioCheckbox").checked; 
    var Seatbelt_FeedbackOutput = document.getElementById("DMS_seatbeltFeedbackOutputId").value; 
    var Seatbelt_FeedbackSpeech = document.getElementById("DMS_seatbeltFeedbackSpeechCheckbox").checked; 
    var Seatbelt_FeedbackVisual = document.getElementById("DMS_seatbeltFeedbackVisualCheckbox").checked; 
    var Seatbelt_ReportEvent = document.getElementById("DMS_seatbeltDetectionEventCheckbox").checked; 
    var Seatbelt_ReportCabinSnapshot = document.getElementById("DMS_seatbeltReportImageInCabinCheckbox").checked;
    var Seatbelt_ReportCabinTimelapse = document.getElementById("DMS_seatbeltReportTimelapseInCabinCheckbox").checked;
    var Seatbelt_ReportRoadSnapshot = document.getElementById("DMS_seatbeltReportImageRoadFacingCheckbox").checked;
    var Seatbelt_ReportRoadTimelapse = document.getElementById("DMS_seatbeltReportTimelapseRoadFacingCheckbox").checked;
    var Seatbelt_ReportImage = "None";
    if (Seatbelt_ReportCabinSnapshot && Seatbelt_ReportRoadSnapshot) {
        Seatbelt_ReportImage = "BothSingle";
    } else if (Seatbelt_ReportCabinSnapshot && !Seatbelt_ReportRoadSnapshot) {
        Seatbelt_ReportImage = "SingleDMS";
    } else if (!Seatbelt_ReportCabinSnapshot && Seatbelt_ReportRoadSnapshot) {
        Seatbelt_ReportImage = "SingleADAS";
    } else if (Seatbelt_ReportCabinTimelapse && Seatbelt_ReportRoadTimelapse) {
        Seatbelt_ReportImage = "BothTimelaps";
    } else if (Seatbelt_ReportCabinTimelapse && !Seatbelt_ReportRoadTimelapse) {
        Seatbelt_ReportImage = "TimelapseDMS";
    } else if (!Seatbelt_ReportCabinTimelapse && Seatbelt_ReportRoadTimelapse) {
        Seatbelt_ReportImage = "TimelapseADAS";
    }
    var Seatbelt_ReportFootageCabin = document.getElementById("DMS_seatbeltReportVideoInCabinCheckbox").checked;
    var Seatbelt_ReportFootageRoad = document.getElementById("DMS_seatbeltReportVideoRoadFacingCheckbox").checked;
    var Seatbelt_ReportFootage = "None";
    if (Seatbelt_ReportFootageCabin && Seatbelt_ReportFootageRoad) {
        Seatbelt_ReportFootage = "Both";
    } else if (Seatbelt_ReportFootageCabin && !Seatbelt_ReportFootageRoad) {
        Seatbelt_ReportFootage = "DMS";
    } else if (!Seatbelt_ReportFootageCabin && Seatbelt_ReportFootageRoad) {
        Seatbelt_ReportFootage = "ADAS";
    }
    var Smoking_Activation = document.getElementById("DMS_smokingActivationCheckbox").checked;
    var Smoking_FeedbackAudio = document.getElementById("DMS_smokingFeedbackAudioCheckbox").checked;
    var Smoking_FeedbackOutput = document.getElementById("DMS_smokingFeedbackOutputId").value;
    var Smoking_FeedbackSpeech = document.getElementById("DMS_smokingFeedbackSpeechCheckbox").checked;
    var Smoking_FeedbackVisual = document.getElementById("DMS_smokingFeedbackVisualCheckbox").checked;
    var Smoking_ReportEvent = document.getElementById("DMS_smokingDetectionEventCheckbox").checked;
    var Smoking_ReportCabinSnapshot = document.getElementById("DMS_smokingReportImageInCabinCheckbox").checked;
    var Smoking_ReportCabinTimelapse = document.getElementById("DMS_smokingReportTimelapseInCabinCheckbox").checked;
    var Smoking_ReportRoadSnapshot = document.getElementById("DMS_smokingReportImageRoadFacingCheckbox").checked;
    var Smoking_ReportRoadTimelapse = document.getElementById("DMS_smokingReportTimelapseRoadFacingCheckbox").checked;
    var Smoking_ReportImage = "None";
    if (Smoking_ReportCabinSnapshot && Smoking_ReportRoadSnapshot) {
        Smoking_ReportImage = "BothSingle";
    } else if (Smoking_ReportCabinSnapshot && !Smoking_ReportRoadSnapshot) {
        Smoking_ReportImage = "SingleDMS";
    } else if (!Smoking_ReportCabinSnapshot && Smoking_ReportRoadSnapshot) {
        Smoking_ReportImage = "SingleADAS";
    } else if (Smoking_ReportCabinTimelapse && Smoking_ReportRoadTimelapse) {
        Smoking_ReportImage = "BothTimelaps";
    } else if (Smoking_ReportCabinTimelapse && !Smoking_ReportRoadTimelapse) {
        Smoking_ReportImage = "TimelapseDMS";
    } else if (!Smoking_ReportCabinTimelapse && Smoking_ReportRoadTimelapse) {
        Smoking_ReportImage = "TimelapseADAS";
    }
    var Smoking_ReportFootageCabin = document.getElementById("DMS_smokingReportVideoInCabinCheckbox").checked;
    var Smoking_ReportFootageRoad = document.getElementById("DMS_smokingReportVideoRoadFacingCheckbox").checked;
    var Smoking_ReportFootage = "None";
    if (Smoking_ReportFootageCabin && Smoking_ReportFootageRoad) {
        Smoking_ReportFootage = "Both";
    } else if (Smoking_ReportFootageCabin && !Smoking_ReportFootageRoad) {
        Smoking_ReportFootage = "DMS";
    } else if (!Smoking_ReportFootageCabin && Smoking_ReportFootageRoad) {
        Smoking_ReportFootage = "ADAS";
    }
    //var LightDrowsiness_Activation = document.getElementById("DMS_1x7_select").value; 
    //var LightDrowsiness_FeedbackAudio = document.getElementById("DMS_2x7_select").value;
    //var LightDrowsiness_FeedbackOutput = document.getElementById("DMS_3x7_select").value; 
    //var LightDrowsiness_FeedbackSpeech = document.getElementById("DMS_4x7_select").value; 
    //var LightDrowsiness_FeedbackVisual = document.getElementById("DMS_5x7_select").value; 
    //var LightDrowsiness_ReportEvent = document.getElementById("DMS_6x7_select").value; 
    //var LightDrowsiness_ReportImage = document.getElementById("DMS_7x7_select").value; 
    //var LightDrowsiness_ReportFootage = document.getElementById("DMS_8x7_select").value; 
    var TamperingDetection_Activation = document.getElementById("DMS_tamperingDetectionActivationCheckbox").checked;
    var TamperingDetection_FeedbackAudio = document.getElementById("DMS_tamperingDetectionFeedbackAudioCheckbox").checked;
    var TamperingDetection_FeedbackOutput = document.getElementById("DMS_tamperingDetectionFeedbackOutputId").value;
    var TamperingDetection_FeedbackSpeech = document.getElementById("DMS_tamperingDetectionFeedbackSpeechCheckbox").checked;
    var TamperingDetection_FeedbackVisual = document.getElementById("DMS_tamperingDetectionFeedbackVisualCheckbox").checked;
    var TamperingDetection_ReportEvent = document.getElementById("DMS_tamperingDetectionDetectionEventCheckbox").checked;
    var TamperingDetection_ReportCabinSnapshot = document.getElementById("DMS_tamperingDetectionReportImageInCabinCheckbox").checked;
    var TamperingDetection_ReportCabinTimelapse = document.getElementById("DMS_tamperingDetectionReportTimelapseInCabinCheckbox").checked;
    var TamperingDetection_ReportRoadSnapshot = document.getElementById("DMS_tamperingDetectionReportImageRoadFacingCheckbox").checked;
    var TamperingDetection_ReportRoadTimelapse = document.getElementById("DMS_tamperingDetectionReportTimelapseRoadFacingCheckbox").checked;
    var TamperingDetection_ReportImage = "None";
    if (TamperingDetection_ReportCabinSnapshot && TamperingDetection_ReportRoadSnapshot) {
        TamperingDetection_ReportImage = "BothSingle";
    } else if (TamperingDetection_ReportCabinSnapshot && !TamperingDetection_ReportRoadSnapshot) {
        TamperingDetection_ReportImage = "SingleDMS";
    } else if (!TamperingDetection_ReportCabinSnapshot && TamperingDetection_ReportRoadSnapshot) {
        TamperingDetection_ReportImage = "SingleADAS";
    } else if (TamperingDetection_ReportCabinTimelapse && TamperingDetection_ReportRoadTimelapse) {
        TamperingDetection_ReportImage = "BothTimelaps";
    } else if (TamperingDetection_ReportCabinTimelapse && !TamperingDetection_ReportRoadTimelapse) {
        TamperingDetection_ReportImage = "TimelapseDMS";
    } else if (!TamperingDetection_ReportCabinTimelapse && TamperingDetection_ReportRoadTimelapse) {
        TamperingDetection_ReportImage = "TimelapseADAS";
    }
    var TamperingDetection_ReportFootageCabin = document.getElementById("DMS_tamperingDetectionReportVideoInCabinCheckbox").checked;
    var TamperingDetection_ReportFootageRoad = document.getElementById("DMS_tamperingDetectionReportVideoRoadFacingCheckbox").checked;
    var TamperingDetection_ReportFootage = "None";
    if (TamperingDetection_ReportFootageCabin && TamperingDetection_ReportFootageRoad) {
        TamperingDetection_ReportFootage = "Both";
    } else if (TamperingDetection_ReportFootageCabin && !TamperingDetection_ReportFootageRoad) {
        TamperingDetection_ReportFootage = "DMS";
    } else if (!TamperingDetection_ReportFootageCabin && TamperingDetection_ReportFootageRoad) {
        TamperingDetection_ReportFootage = "ADAS";
    }
    var DriverIdentified_Activation = document.getElementById("DMS_driverIdentifiedActivationCheckbox").checked;
    var DriverIdentified_FeedbackAudio = document.getElementById("DMS_driverIdentifiedFeedbackAudioCheckbox").checked;
    var DriverIdentified_FeedbackOutput = document.getElementById("DMS_driverIdentifiedFeedbackOutputId").value;
    var DriverIdentified_FeedbackSpeech = document.getElementById("DMS_driverIdentifiedFeedbackSpeechCheckbox").checked;
    var DriverIdentified_FeedbackVisual = document.getElementById("DMS_driverIdentifiedFeedbackVisualCheckbox").checked;
    var DriverIdentified_ReportEvent = document.getElementById("DMS_driverIdentifiedDetectionEventCheckbox").checked;
    var DriverIdentified_ReportCabinSnapshot = document.getElementById("DMS_driverIdentifiedReportImageInCabinCheckbox").checked;
    var DriverIdentified_ReportCabinTimelapse = document.getElementById("DMS_driverIdentifiedReportTimelapseInCabinCheckbox").checked;
    var DriverIdentified_ReportRoadSnapshot = document.getElementById("DMS_driverIdentifiedReportImageRoadFacingCheckbox").checked;
    var DriverIdentified_ReportRoadTimelapse = document.getElementById("DMS_driverIdentifiedReportTimelapseRoadFacingCheckbox").checked;
    var DriverIdentified_ReportImage = "None";
    if (DriverIdentified_ReportCabinSnapshot && DriverIdentified_ReportRoadSnapshot) {
        DriverIdentified_ReportImage = "BothSingle";
    } else if (DriverIdentified_ReportCabinSnapshot && !DriverIdentified_ReportRoadSnapshot) {
        DriverIdentified_ReportImage = "SingleDMS";
    } else if (!DriverIdentified_ReportCabinSnapshot && DriverIdentified_ReportRoadSnapshot) {
        DriverIdentified_ReportImage = "SingleADAS";
    } else if (DriverIdentified_ReportCabinTimelapse && DriverIdentified_ReportRoadTimelapse) {
        DriverIdentified_ReportImage = "BothTimelaps";
    } else if (DriverIdentified_ReportCabinTimelapse && !DriverIdentified_ReportRoadTimelapse) {
        DriverIdentified_ReportImage = "TimelapseDMS";
    } else if (!DriverIdentified_ReportCabinTimelapse && DriverIdentified_ReportRoadTimelapse) {
        DriverIdentified_ReportImage = "TimelapseADAS";
    }
    var DriverIdentified_ReportFootageCabin = document.getElementById("DMS_driverIdentifiedReportVideoInCabinCheckbox").checked;
    var DriverIdentified_ReportFootageRoad = document.getElementById("DMS_driverIdentifiedReportVideoRoadFacingCheckbox").checked;
    var DriverIdentified_ReportFootage = "None";
    if (DriverIdentified_ReportFootageCabin && DriverIdentified_ReportFootageRoad) {
        DriverIdentified_ReportFootage = "Both";
    } else if (DriverIdentified_ReportFootageCabin && !DriverIdentified_ReportFootageRoad) {
        DriverIdentified_ReportFootage = "DMS";
    } else if (!DriverIdentified_ReportFootageCabin && DriverIdentified_ReportFootageRoad) {
        DriverIdentified_ReportFootage = "ADAS";
    }
    var UnidentifiedUnauthDriver_Activation = document.getElementById("DMS_driverUnidentifiedActivationCheckbox").checked;
    var UnidentifiedUnauthDriver_FeedbackAudio = document.getElementById("DMS_driverUnidentifiedFeedbackAudioCheckbox").checked;
    var UnidentifiedUnauthDriver_FeedbackOutput = document.getElementById("DMS_driverUnidentifiedFeedbackOutputId").value;
    var UnidentifiedUnauthDriver_FeedbackSpeech = document.getElementById("DMS_driverUnidentifiedFeedbackSpeechCheckbox").checked;
    var UnidentifiedUnauthDriver_FeedbackVisual = document.getElementById("DMS_driverUnidentifiedFeedbackVisualCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportEvent = document.getElementById("DMS_driverUnidentifiedDetectionEventCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportCabinSnapshot = document.getElementById("DMS_driverUnidentifiedReportImageInCabinCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportCabinTimelapse = document.getElementById("DMS_driverUnidentifiedReportTimelapseInCabinCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportRoadSnapshot = document.getElementById("DMS_driverUnidentifiedReportImageRoadFacingCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportRoadTimelapse = document.getElementById("DMS_driverUnidentifiedReportTimelapseRoadFacingCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportImage = "None";
    if (UnidentifiedUnauthDriver_ReportCabinSnapshot && UnidentifiedUnauthDriver_ReportRoadSnapshot) {
        UnidentifiedUnauthDriver_ReportImage = "BothSingle";
    } else if (UnidentifiedUnauthDriver_ReportCabinSnapshot && !UnidentifiedUnauthDriver_ReportRoadSnapshot) {
        UnidentifiedUnauthDriver_ReportImage = "SingleDMS";
    } else if (!UnidentifiedUnauthDriver_ReportCabinSnapshot && UnidentifiedUnauthDriver_ReportRoadSnapshot) {
        UnidentifiedUnauthDriver_ReportImage = "SingleADAS";
    } else if (UnidentifiedUnauthDriver_ReportCabinTimelapse && UnidentifiedUnauthDriver_ReportRoadTimelapse) {
        UnidentifiedUnauthDriver_ReportImage = "BothTimelaps";
    } else if (UnidentifiedUnauthDriver_ReportCabinTimelapse && !UnidentifiedUnauthDriver_ReportRoadTimelapse) {
        UnidentifiedUnauthDriver_ReportImage = "TimelapseDMS";
    } else if (!UnidentifiedUnauthDriver_ReportCabinTimelapse && UnidentifiedUnauthDriver_ReportRoadTimelapse) {
        UnidentifiedUnauthDriver_ReportImage = "TimelapseADAS";
    }
    var UnidentifiedUnauthDriver_ReportFootageCabin = document.getElementById("DMS_driverUnidentifiedReportVideoInCabinCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportFootageRoad = document.getElementById("DMS_driverUnidentifiedReportVideoRoadFacingCheckbox").checked;
    var UnidentifiedUnauthDriver_ReportFootage = "None";
    if (UnidentifiedUnauthDriver_ReportFootageCabin && UnidentifiedUnauthDriver_ReportFootageRoad) {
        UnidentifiedUnauthDriver_ReportFootage = "Both";
    } else if (UnidentifiedUnauthDriver_ReportFootageCabin && !UnidentifiedUnauthDriver_ReportFootageRoad) {
        UnidentifiedUnauthDriver_ReportFootage = "DMS";
    } else if (!UnidentifiedUnauthDriver_ReportFootageCabin && UnidentifiedUnauthDriver_ReportFootageRoad) {
        UnidentifiedUnauthDriver_ReportFootage = "ADAS";
    }
    var DriverDisappeared_Activation = document.getElementById("DMS_driverDisappearedActivationCheckbox").checked;
    var DriverDisappeared_FeedbackAudio = document.getElementById("DMS_driverDisappearedFeedbackAudioCheckbox").checked;
    var DriverDisappeared_FeedbackOutput = document.getElementById("DMS_driverDisappearedFeedbackOutputId").value;
    var DriverDisappeared_FeedbackSpeech = document.getElementById("DMS_driverDisappearedFeedbackSpeechCheckbox").checked;
    var DriverDisappeared_FeedbackVisual = document.getElementById("DMS_driverDisappearedFeedbackVisualCheckbox").checked;
    var DriverDisappeared_ReportEvent = document.getElementById("DMS_driverDisappearedDetectionEventCheckbox").checked;
    var DriverDisappeared_ReportCabinSnapshot = document.getElementById("DMS_driverDisappearedReportImageInCabinCheckbox").checked;
    var DriverDisappeared_ReportCabinTimelapse = document.getElementById("DMS_driverDisappearedReportTimelapseInCabinCheckbox").checked;
    var DriverDisappeared_ReportRoadSnapshot = document.getElementById("DMS_driverDisappearedReportImageRoadFacingCheckbox").checked;
    var DriverDisappeared_ReportRoadTimelapse = document.getElementById("DMS_driverDisappearedReportTimelapseRoadFacingCheckbox").checked;
    var DriverDisappeared_ReportImage = "None";
    if (DriverDisappeared_ReportCabinSnapshot && DriverDisappeared_ReportRoadSnapshot) {
        DriverDisappeared_ReportImage = "BothSingle";
    } else if (DriverDisappeared_ReportCabinSnapshot && !DriverDisappeared_ReportRoadSnapshot) {
        DriverDisappeared_ReportImage = "SingleDMS";
    } else if (!DriverDisappeared_ReportCabinSnapshot && DriverDisappeared_ReportRoadSnapshot) {
        DriverDisappeared_ReportImage = "SingleADAS";
    } else if (DriverDisappeared_ReportCabinTimelapse && DriverDisappeared_ReportRoadTimelapse) {
        DriverDisappeared_ReportImage = "BothTimelaps";
    } else if (DriverDisappeared_ReportCabinTimelapse && !DriverDisappeared_ReportRoadTimelapse) {
        DriverDisappeared_ReportImage = "TimelapseDMS";
    } else if (!DriverDisappeared_ReportCabinTimelapse && DriverDisappeared_ReportRoadTimelapse) {
        DriverDisappeared_ReportImage = "TimelapseADAS";
    }
    var DriverDisappeared_ReportFootageCabin = document.getElementById("DMS_driverDisappearedReportVideoInCabinCheckbox").checked;
    var DriverDisappeared_ReportFootageRoad = document.getElementById("DMS_driverDisappearedReportVideoRoadFacingCheckbox").checked;
    var DriverDisappeared_ReportFootage = "None";
    if (DriverDisappeared_ReportFootageCabin && DriverDisappeared_ReportFootageRoad) {
        DriverDisappeared_ReportFootage = "Both";
    } else if (DriverDisappeared_ReportFootageCabin && !DriverDisappeared_ReportFootageRoad) {
        DriverDisappeared_ReportFootage = "DMS";
    } else if (!DriverDisappeared_ReportFootageCabin && DriverDisappeared_ReportFootageRoad) {
        DriverDisappeared_ReportFootage = "ADAS";
    } 
    var DriverChange_Activation = document.getElementById("DMS_driverChangedActivationCheckbox").checked;
    var DriverChange_FeedbackAudio = document.getElementById("DMS_driverChangedFeedbackAudioCheckbox").checked;
    var DriverChange_FeedbackOutput = document.getElementById("DMS_driverChangedFeedbackOutputId").value;
    var DriverChange_FeedbackSpeech = document.getElementById("DMS_driverChangedFeedbackSpeechCheckbox").checked;
    var DriverChange_FeedbackVisual = document.getElementById("DMS_driverChangedFeedbackVisualCheckbox").checked;
    var DriverChange_ReportEvent = document.getElementById("DMS_driverChangedDetectionEventCheckbox").checked;
    var DriverChange_ReportCabinSnapshot = document.getElementById("DMS_driverChangedReportImageInCabinCheckbox").checked;
    var DriverChange_ReportCabinTimelapse = document.getElementById("DMS_driverChangedReportTimelapseInCabinCheckbox").checked;
    var DriverChange_ReportRoadSnapshot = document.getElementById("DMS_driverChangedReportImageRoadFacingCheckbox").checked;
    var DriverChange_ReportRoadTimelapse = document.getElementById("DMS_driverChangedReportTimelapseRoadFacingCheckbox").checked;
    var DriverChange_ReportImage = "None";
    if (DriverChange_ReportCabinSnapshot && DriverChange_ReportRoadSnapshot) {
        DriverChange_ReportImage = "BothSingle";
    } else if (DriverChange_ReportCabinSnapshot && !DriverChange_ReportRoadSnapshot) {
        DriverChange_ReportImage = "SingleDMS";
    } else if (!DriverChange_ReportCabinSnapshot && DriverChange_ReportRoadSnapshot) {
        DriverChange_ReportImage = "SingleADAS";
    } else if (DriverChange_ReportCabinTimelapse && DriverChange_ReportRoadTimelapse) {
        DriverChange_ReportImage = "BothTimelaps";
    } else if (DriverChange_ReportCabinTimelapse && !DriverChange_ReportRoadTimelapse) {
        DriverChange_ReportImage = "TimelapseDMS";
    } else if (!DriverChange_ReportCabinTimelapse && DriverChange_ReportRoadTimelapse) {
        DriverChange_ReportImage = "TimelapseADAS";
    }
    var DriverChange_ReportFootageCabin = document.getElementById("DMS_driverChangedReportVideoInCabinCheckbox").checked;
    var DriverChange_ReportFootageRoad = document.getElementById("DMS_driverChangedReportVideoRoadFacingCheckbox").checked;
    var DriverChange_ReportFootage = "None";
    if (DriverChange_ReportFootageCabin && DriverChange_ReportFootageRoad) {
        DriverChange_ReportFootage = "Both";
    } else if (DriverChange_ReportFootageCabin && !DriverChange_ReportFootageRoad) {
        DriverChange_ReportFootage = "DMS";
    } else if (!DriverChange_ReportFootageCabin && DriverChange_ReportFootageRoad) {
        DriverChange_ReportFootage = "ADAS";
    } 
    var DriverIDUpdated_Activation = document.getElementById("DMS_driverIdUpdatedActivationCheckbox").checked;
    var DriverIDUpdated_FeedbackAudio = document.getElementById("DMS_driverIdUpdatedFeedbackAudioCheckbox").checked;
    var DriverIDUpdated_FeedbackOutput = document.getElementById("DMS_driverIdUpdatedFeedbackOutputId").value;
    var DriverIDUpdated_FeedbackSpeech = document.getElementById("DMS_driverIdUpdatedFeedbackSpeechCheckbox").checked;
    var DriverIDUpdated_FeedbackVisual = document.getElementById("DMS_driverIdUpdatedFeedbackVisualCheckbox").checked;
    var DriverIDUpdated_ReportEvent = document.getElementById("DMS_driverIdUpdatedDetectionEventCheckbox").checked;
    var DriverIDUpdated_ReportCabinSnapshot = document.getElementById("DMS_driverIdUpdatedReportImageInCabinCheckbox").checked;
    var DriverIDUpdated_ReportCabinTimelapse = document.getElementById("DMS_driverIdUpdatedReportTimelapseInCabinCheckbox").checked;
    var DriverIDUpdated_ReportRoadSnapshot = document.getElementById("DMS_driverIdUpdatedReportImageRoadFacingCheckbox").checked;
    var DriverIDUpdated_ReportRoadTimelapse = document.getElementById("DMS_driverIdUpdatedReportTimelapseRoadFacingCheckbox").checked;
    var DriverIDUpdated_ReportImage = "None";
    if (DriverIDUpdated_ReportCabinSnapshot && DriverIDUpdated_ReportRoadSnapshot) {
        DriverIDUpdated_ReportImage = "BothSingle";
    } else if (DriverIDUpdated_ReportCabinSnapshot && !DriverIDUpdated_ReportRoadSnapshot) {
        DriverIDUpdated_ReportImage = "SingleDMS";
    } else if (!DriverIDUpdated_ReportCabinSnapshot && DriverIDUpdated_ReportRoadSnapshot) {
        DriverIDUpdated_ReportImage = "SingleADAS";
    } else if (DriverIDUpdated_ReportCabinTimelapse && DriverIDUpdated_ReportRoadTimelapse) {
        DriverIDUpdated_ReportImage = "BothTimelaps";
    } else if (DriverIDUpdated_ReportCabinTimelapse && !DriverIDUpdated_ReportRoadTimelapse) {
        DriverIDUpdated_ReportImage = "TimelapseDMS";
    } else if (!DriverIDUpdated_ReportCabinTimelapse && DriverIDUpdated_ReportRoadTimelapse) {
        DriverIDUpdated_ReportImage = "TimelapseADAS";
    }
    var DriverIDUpdated_ReportFootageCabin = document.getElementById("DMS_driverIdUpdatedReportVideoInCabinCheckbox").checked;
    var DriverIDUpdated_ReportFootageRoad = document.getElementById("DMS_driverIdUpdatedReportVideoRoadFacingCheckbox").checked;
    var DriverIDUpdated_ReportFootage = "None";
    if (DriverIDUpdated_ReportFootageCabin && DriverIDUpdated_ReportFootageRoad) {
        DriverIDUpdated_ReportFootage = "Both";
    } else if (DriverIDUpdated_ReportFootageCabin && !DriverIDUpdated_ReportFootageRoad) {
        DriverIDUpdated_ReportFootage = "DMS";
    } else if (!DriverIDUpdated_ReportFootageCabin && DriverIDUpdated_ReportFootageRoad) {
        DriverIDUpdated_ReportFootage = "ADAS";
    }
   
    // ADAS
    var LDW_Activation = document.getElementById("ADAS_LDW_ActivationCheckbox").checked;
    var LDW_FeedbackAudio = document.getElementById("ADAS_LDW_FeedbackAudioCheckbox").checked;
    var LDW_FeedbackOutput = document.getElementById("ADAS_LDW_FeedbackOutputId").value;
    var LDW_FeedbackSpeech = document.getElementById("ADAS_LDW_FeedbackSpeechCheckbox").checked;
    var LDW_FeedbackVisual = document.getElementById("ADAS_LDW_FeedbackVisualCheckbox").checked;
    var LDW_ReportEvent = document.getElementById("ADAS_LDW_DetectionEventCheckbox").checked;
    var LDW_ReportCabinSnapshot = document.getElementById("ADAS_LDW_ReportImageInCabinCheckbox").checked;
    var LDW_ReportCabinTimelapse = document.getElementById("ADAS_LDW_ReportTimelapseInCabinCheckbox").checked;
    var LDW_ReportRoadSnapshot = document.getElementById("ADAS_LDW_ReportImageRoadFacingCheckbox").checked;
    var LDW_ReportRoadTimelapse = document.getElementById("ADAS_LDW_ReportTimelapseRoadFacingCheckbox").checked;
    var LDW_ReportImage = "None";
    if (LDW_ReportCabinSnapshot && LDW_ReportRoadSnapshot) {
        LDW_ReportImage = "BothSingle";
    } else if (LDW_ReportCabinSnapshot && !LDW_ReportRoadSnapshot) {
        LDW_ReportImage = "SingleDMS";
    } else if (!LDW_ReportCabinSnapshot && LDW_ReportRoadSnapshot) {
        LDW_ReportImage = "SingleADAS";
    } else if (LDW_ReportCabinTimelapse && LDW_ReportRoadTimelapse) {
        LDW_ReportImage = "BothTimelaps";
    } else if (LDW_ReportCabinTimelapse && !LDW_ReportRoadTimelapse) {
        LDW_ReportImage = "TimelapseDMS";
    } else if (!LDW_ReportCabinTimelapse && LDW_ReportRoadTimelapse) {
        LDW_ReportImage = "TimelapseADAS";
    }
    var LDW_ReportFootageCabin = document.getElementById("ADAS_LDW_ReportVideoInCabinCheckbox").checked;
    var LDW_ReportFootageRoad = document.getElementById("ADAS_LDW_ReportVideoRoadFacingCheckbox").checked;
    var LDW_ReportFootage = "None";
    if (LDW_ReportFootageCabin && LDW_ReportFootageRoad) {
        LDW_ReportFootage = "Both";
    } else if (LDW_ReportFootageCabin && !LDW_ReportFootageRoad) {
        LDW_ReportFootage = "DMS";
    } else if (!LDW_ReportFootageCabin && LDW_ReportFootageRoad) {
        LDW_ReportFootage = "ADAS";
    }
    //var RedLight_Activation = document.getElementById("ADAS_1x2_select").value;
    //var RedLight_FeedbackAudio = document.getElementById("ADAS_2x2_select").value;
    //var RedLight_FeedbackOutput = document.getElementById("ADAS_3x2_select").value;
    //var RedLight_FeedbackSpeech = document.getElementById("ADAS_4x2_select").value;
    //var RedLight_FeedbackVisual = document.getElementById("ADAS_5x2_select").value;
    //var RedLight_ReportEvent = document.getElementById("ADAS_6x2_select").value;
    //var RedLight_ReportImage = document.getElementById("ADAS_7x2_select").value;
    //var RedLight_ReportFootage = document.getElementById("ADAS_8x2_select").value;
    //var StopDisobeyed_Activation = document.getElementById("ADAS_1x3_select").value;
    //var StopDisobeyed_FeedbackAudio = document.getElementById("ADAS_2x3_select").value;
    //var StopDisobeyed_FeedbackOutput = document.getElementById("ADAS_3x3_select").value;
    //var StopDisobeyed_FeedbackSpeech = document.getElementById("ADAS_4x3_select").value;
    //var StopDisobeyed_FeedbackVisual = document.getElementById("ADAS_5x3_select").value;
    //var StopDisobeyed_ReportEvent = document.getElementById("ADAS_6x3_select").value;
    //var StopDisobeyed_ReportImage = document.getElementById("ADAS_7x3_select").value;
    //var StopDisobeyed_ReportFootage = document.getElementById("ADAS_8x3_select").value;
    var HMW_Activation = document.getElementById("ADAS_HMW_ActivationCheckbox").checked;
    var HMW_FeedbackAudio = document.getElementById("ADAS_HMW_FeedbackAudioCheckbox").checked;
    var HMW_FeedbackOutput = document.getElementById("ADAS_HMW_FeedbackOutputId").value;
    var HMW_FeedbackSpeech = document.getElementById("ADAS_HMW_FeedbackSpeechCheckbox").checked;
    var HMW_FeedbackVisual = document.getElementById("ADAS_HMW_FeedbackVisualCheckbox").checked;
    var HMW_ReportEvent = document.getElementById("ADAS_HMW_DetectionEventCheckbox").checked;
    var HMW_ReportCabinSnapshot = document.getElementById("ADAS_HMW_ReportImageInCabinCheckbox").checked;
    var HMW_ReportCabinTimelapse = document.getElementById("ADAS_HMW_ReportTimelapseInCabinCheckbox").checked;
    var HMW_ReportRoadSnapshot = document.getElementById("ADAS_HMW_ReportImageRoadFacingCheckbox").checked;
    var HMW_ReportRoadTimelapse = document.getElementById("ADAS_HMW_ReportTimelapseRoadFacingCheckbox").checked;
    var HMW_ReportImage = "None";
    if (HMW_ReportCabinSnapshot && HMW_ReportRoadSnapshot) {
        HMW_ReportImage = "BothSingle";
    } else if (HMW_ReportCabinSnapshot && !HMW_ReportRoadSnapshot) {
        HMW_ReportImage = "SingleDMS";
    } else if (!HMW_ReportCabinSnapshot && HMW_ReportRoadSnapshot) {
        HMW_ReportImage = "SingleADAS";
    } else if (HMW_ReportCabinTimelapse && HMW_ReportRoadTimelapse) {
        HMW_ReportImage = "BothTimelaps";
    } else if (HMW_ReportCabinTimelapse && !HMW_ReportRoadTimelapse) {
        HMW_ReportImage = "TimelapseDMS";
    } else if (!HMW_ReportCabinTimelapse && HMW_ReportRoadTimelapse) {
        HMW_ReportImage = "TimelapseADAS";
    }
    var HMW_ReportFootageCabin = document.getElementById("ADAS_HMW_ReportVideoInCabinCheckbox").checked;
    var HMW_ReportFootageRoad = document.getElementById("ADAS_HMW_ReportVideoRoadFacingCheckbox").checked;
    var HMW_ReportFootage = "None";
    if (HMW_ReportFootageCabin && HMW_ReportFootageRoad) {
        HMW_ReportFootage = "Both";
    } else if (HMW_ReportFootageCabin && !HMW_ReportFootageRoad) {
        HMW_ReportFootage = "DMS";
    } else if (!HMW_ReportFootageCabin && HMW_ReportFootageRoad) {
        HMW_ReportFootage = "ADAS";
    }
    var UrbanFCW_Activation = document.getElementById("ADAS_UFCW_ActivationCheckbox").checked;
    var UrbanFCW_FeedbackAudio = document.getElementById("ADAS_UFCW_FeedbackAudioCheckbox").checked;
    var UrbanFCW_FeedbackOutput = document.getElementById("ADAS_UFCW_FeedbackOutputId").value;
    var UrbanFCW_FeedbackSpeech = document.getElementById("ADAS_UFCW_FeedbackSpeechCheckbox").checked;
    var UrbanFCW_FeedbackVisual = document.getElementById("ADAS_UFCW_FeedbackVisualCheckbox").checked;
    var UrbanFCW_ReportEvent = document.getElementById("ADAS_UFCW_DetectionEventCheckbox").checked;
    var UrbanFCW_ReportCabinSnapshot = document.getElementById("ADAS_UFCW_ReportImageInCabinCheckbox").checked;
    var UrbanFCW_ReportCabinTimelapse = document.getElementById("ADAS_UFCW_ReportTimelapseInCabinCheckbox").checked;
    var UrbanFCW_ReportRoadSnapshot = document.getElementById("ADAS_UFCW_ReportImageRoadFacingCheckbox").checked;
    var UrbanFCW_ReportRoadTimelapse = document.getElementById("ADAS_UFCW_ReportTimelapseRoadFacingCheckbox").checked;
    var UrbanFCW_ReportImage = "None";
    if (UrbanFCW_ReportCabinSnapshot && UrbanFCW_ReportRoadSnapshot) {
        UrbanFCW_ReportImage = "BothSingle";
    } else if (UrbanFCW_ReportCabinSnapshot && !UrbanFCW_ReportRoadSnapshot) {
        UrbanFCW_ReportImage = "SingleDMS";
    } else if (!UrbanFCW_ReportCabinSnapshot && UrbanFCW_ReportRoadSnapshot) {
        UrbanFCW_ReportImage = "SingleADAS";
    } else if (UrbanFCW_ReportCabinTimelapse && UrbanFCW_ReportRoadTimelapse) {
        UrbanFCW_ReportImage = "BothTimelaps";
    } else if (UrbanFCW_ReportCabinTimelapse && !UrbanFCW_ReportRoadTimelapse) {
        UrbanFCW_ReportImage = "TimelapseDMS";
    } else if (!UrbanFCW_ReportCabinTimelapse && UrbanFCW_ReportRoadTimelapse) {
        UrbanFCW_ReportImage = "TimelapseADAS";
    }
    var UrbanFCW_ReportFootageCabin = document.getElementById("ADAS_UFCW_ReportVideoInCabinCheckbox").checked;
    var UrbanFCW_ReportFootageRoad = document.getElementById("ADAS_UFCW_ReportVideoRoadFacingCheckbox").checked;
    var UrbanFCW_ReportFootage = "None";
    if (UrbanFCW_ReportFootageCabin && UrbanFCW_ReportFootageRoad) {
        UrbanFCW_ReportFootage = "Both";
    } else if (UrbanFCW_ReportFootageCabin && !UrbanFCW_ReportFootageRoad) {
        UrbanFCW_ReportFootage = "DMS";
    } else if (!UrbanFCW_ReportFootageCabin && UrbanFCW_ReportFootageRoad) {
        UrbanFCW_ReportFootage = "ADAS";
    }
    var FCW_Activation = document.getElementById("ADAS_FCW_ActivationCheckbox").checked;
    var FCW_FeedbackAudio = document.getElementById("ADAS_FCW_FeedbackAudioCheckbox").checked;
    var FCW_FeedbackOutput = document.getElementById("ADAS_FCW_FeedbackOutputId").value;
    var FCW_FeedbackSpeech = document.getElementById("ADAS_FCW_FeedbackSpeechCheckbox").checked;
    var FCW_FeedbackVisual = document.getElementById("ADAS_FCW_FeedbackVisualCheckbox").checked;
    var FCW_ReportEvent = document.getElementById("ADAS_FCW_DetectionEventCheckbox").checked;
    var FCW_ReportCabinSnapshot = document.getElementById("ADAS_FCW_ReportImageInCabinCheckbox").checked;
    var FCW_ReportCabinTimelapse = document.getElementById("ADAS_FCW_ReportTimelapseInCabinCheckbox").checked;
    var FCW_ReportRoadSnapshot = document.getElementById("ADAS_FCW_ReportImageRoadFacingCheckbox").checked;
    var FCW_ReportRoadTimelapse = document.getElementById("ADAS_FCW_ReportTimelapseRoadFacingCheckbox").checked;
    var FCW_ReportImage = "None";
    if (FCW_ReportCabinSnapshot && FCW_ReportRoadSnapshot) {
        FCW_ReportImage = "BothSingle";
    } else if (FCW_ReportCabinSnapshot && !FCW_ReportRoadSnapshot) {
        FCW_ReportImage = "SingleDMS";
    } else if (!FCW_ReportCabinSnapshot && FCW_ReportRoadSnapshot) {
        FCW_ReportImage = "SingleADAS";
    } else if (FCW_ReportCabinTimelapse && FCW_ReportRoadTimelapse) {
        FCW_ReportImage = "BothTimelaps";
    } else if (FCW_ReportCabinTimelapse && !FCW_ReportRoadTimelapse) {
        FCW_ReportImage = "TimelapseDMS";
    } else if (!FCW_ReportCabinTimelapse && FCW_ReportRoadTimelapse) {
        FCW_ReportImage = "TimelapseADAS";
    }
    var FCW_ReportFootageCabin = document.getElementById("ADAS_FCW_ReportVideoInCabinCheckbox").checked;
    var FCW_ReportFootageRoad = document.getElementById("ADAS_FCW_ReportVideoRoadFacingCheckbox").checked;
    var FCW_ReportFootage = "None";
    if (FCW_ReportFootageCabin && FCW_ReportFootageRoad) {
        FCW_ReportFootage = "Both";
    } else if (FCW_ReportFootageCabin && !FCW_ReportFootageRoad) {
        FCW_ReportFootage = "DMS";
    } else if (!FCW_ReportFootageCabin && FCW_ReportFootageRoad) {
        FCW_ReportFootage = "ADAS";
    }
    //var Overspeeding_Activation = document.getElementById("ADAS_1x7_select").value;
    //var Overspeeding_FeedbackAudio = document.getElementById("ADAS_2x7_select").value;
    //var Overspeeding_FeedbackOutput = document.getElementById("ADAS_3x7_select").value;
    //var Overspeeding_FeedbackSpeech = document.getElementById("ADAS_4x7_select").value;
    //var Overspeeding_FeedbackVisual = document.getElementById("ADAS_5x7_select").value;
    //var Overspeeding_ReportEvent = document.getElementById("ADAS_6x7_select").value;
    //var Overspeeding_ReportImage = document.getElementById("ADAS_7x7_select").value;
    //var Overspeeding_ReportFootage = document.getElementById("ADAS_8x7_select").value;
    var PCW_Activation = document.getElementById("ADAS_PCW_ActivationCheckbox").checked;
    var PCW_FeedbackAudio = document.getElementById("ADAS_PCW_FeedbackAudioCheckbox").checked;
    var PCW_FeedbackOutput = document.getElementById("ADAS_PCW_FeedbackOutputId").value;
    var PCW_FeedbackSpeech = document.getElementById("ADAS_PCW_FeedbackSpeechCheckbox").checked;
    var PCW_FeedbackVisual = document.getElementById("ADAS_PCW_FeedbackVisualCheckbox").checked;
    var PCW_ReportEvent = document.getElementById("ADAS_PCW_DetectionEventCheckbox").checked;
    var PCW_ReportCabinSnapshot = document.getElementById("ADAS_PCW_ReportImageInCabinCheckbox").checked;
    var PCW_ReportCabinTimelapse = document.getElementById("ADAS_PCW_ReportTimelapseInCabinCheckbox").checked;
    var PCW_ReportRoadSnapshot = document.getElementById("ADAS_PCW_ReportImageRoadFacingCheckbox").checked;
    var PCW_ReportRoadTimelapse = document.getElementById("ADAS_PCW_ReportTimelapseRoadFacingCheckbox").checked;
    var PCW_ReportImage = "None";
    if (PCW_ReportCabinSnapshot && PCW_ReportRoadSnapshot) {
        PCW_ReportImage = "BothSingle";
    } else if (PCW_ReportCabinSnapshot && !PCW_ReportRoadSnapshot) {
        PCW_ReportImage = "SingleDMS";
    } else if (!PCW_ReportCabinSnapshot && PCW_ReportRoadSnapshot) {
        PCW_ReportImage = "SingleADAS";
    } else if (PCW_ReportCabinTimelapse && PCW_ReportRoadTimelapse) {
        PCW_ReportImage = "BothTimelaps";
    } else if (PCW_ReportCabinTimelapse && !PCW_ReportRoadTimelapse) {
        PCW_ReportImage = "TimelapseDMS";
    } else if (!PCW_ReportCabinTimelapse && PCW_ReportRoadTimelapse) {
        PCW_ReportImage = "TimelapseADAS";
    }
    var PCW_ReportFootageCabin = document.getElementById("ADAS_PCW_ReportVideoInCabinCheckbox").checked;
    var PCW_ReportFootageRoad = document.getElementById("ADAS_PCW_ReportVideoRoadFacingCheckbox").checked;
    var PCW_ReportFootage = "None";
    if (PCW_ReportFootageCabin && PCW_ReportFootageRoad) {
        PCW_ReportFootage = "Both";
    } else if (PCW_ReportFootageCabin && !PCW_ReportFootageRoad) {
        PCW_ReportFootage = "DMS";
    } else if (!PCW_ReportFootageCabin && PCW_ReportFootageRoad) {
        PCW_ReportFootage = "ADAS";
    }

    //Tracking Events
    var IgnitionON_Activation = document.getElementById("TES_ignitionOnActivationCheckbox").checked;
    var IgnitionON_FeedbackAudio = document.getElementById("TES_ignitionOnFeedbackAudioCheckbox").checked;
    var IgnitionON_FeedbackOutput = document.getElementById("TES_ignitionOnFeedbackOutputId").value;
    var IgnitionON_FeedbackSpeech = document.getElementById("TES_ignitionOnFeedbackSpeechCheckbox").checked;
    var IgnitionON_FeedbackVisual = document.getElementById("TES_ignitionOnFeedbackVisualCheckbox").checked;
    var IgnitionON_ReportEvent = document.getElementById("TES_ignitionOnDetectionEventCheckbox").checked;
    var IgnitionON_ReportCabinSnapshot = document.getElementById("TES_ignitionOnReportImageInCabinCheckbox").checked;
    var IgnitionON_ReportCabinTimelapse = document.getElementById("TES_ignitionOnReportTimelapseInCabinCheckbox").checked;
    var IgnitionON_ReportRoadSnapshot = document.getElementById("TES_ignitionOnReportImageRoadFacingCheckbox").checked;
    var IgnitionON_ReportRoadTimelapse = document.getElementById("TES_ignitionOnReportTimelapseRoadFacingCheckbox").checked;
    var IgnitionON_ReportImage = "None";
    if (IgnitionON_ReportCabinSnapshot && IgnitionON_ReportRoadSnapshot) {
        IgnitionON_ReportImage = "BothSingle";
    } else if (IgnitionON_ReportCabinSnapshot && !IgnitionON_ReportRoadSnapshot) {
        IgnitionON_ReportImage = "SingleDMS";
    } else if (!IgnitionON_ReportCabinSnapshot && IgnitionON_ReportRoadSnapshot) {
        IgnitionON_ReportImage = "SingleADAS";
    } else if (IgnitionON_ReportCabinTimelapse && IgnitionON_ReportRoadTimelapse) {
        IgnitionON_ReportImage = "BothTimelaps";
    } else if (IgnitionON_ReportCabinTimelapse && !IgnitionON_ReportRoadTimelapse) {
        IgnitionON_ReportImage = "TimelapseDMS";
    } else if (!IgnitionON_ReportCabinTimelapse && IgnitionON_ReportRoadTimelapse) {
        IgnitionON_ReportImage = "TimelapseADAS";
    }
    var IgnitionON_ReportFootageCabin = document.getElementById("TES_ignitionOnReportVideoInCabinCheckbox").checked;
    var IgnitionON_ReportFootageRoad = document.getElementById("TES_ignitionOnReportVideoRoadFacingCheckbox").checked;
    var IgnitionON_ReportFootage = "None";
    if (IgnitionON_ReportFootageCabin && IgnitionON_ReportFootageRoad) {
        IgnitionON_ReportFootage = "Both";
    } else if (IgnitionON_ReportFootageCabin && !IgnitionON_ReportFootageRoad) {
        IgnitionON_ReportFootage = "DMS";
    } else if (!IgnitionON_ReportFootageCabin && IgnitionON_ReportFootageRoad) {
        IgnitionON_ReportFootage = "ADAS";
    }
    var IgnitionOFF_Activation = document.getElementById("TES_ignitionOffActivationCheckbox").checked;
    var IgnitionOFF_FeedbackAudio = document.getElementById("TES_ignitionOffFeedbackAudioCheckbox").checked;
    var IgnitionOFF_FeedbackOutput = document.getElementById("TES_ignitionOffFeedbackOutputId").value;
    var IgnitionOFF_FeedbackSpeech = document.getElementById("TES_ignitionOffFeedbackSpeechCheckbox").checked;
    var IgnitionOFF_FeedbackVisual = document.getElementById("TES_ignitionOffFeedbackVisualCheckbox").checked;
    var IgnitionOFF_ReportEvent = document.getElementById("TES_ignitionOffDetectionEventCheckbox").checked;
    var IgnitionOFF_ReportCabinSnapshot = document.getElementById("TES_ignitionOffReportImageInCabinCheckbox").checked;
    var IgnitionOFF_ReportCabinTimelapse = document.getElementById("TES_ignitionOffReportTimelapseInCabinCheckbox").checked;
    var IgnitionOFF_ReportRoadSnapshot = document.getElementById("TES_ignitionOffReportImageRoadFacingCheckbox").checked;
    var IgnitionOFF_ReportRoadTimelapse = document.getElementById("TES_ignitionOffReportTimelapseRoadFacingCheckbox").checked;
    var IgnitionOFF_ReportImage = "None";
    if (IgnitionOFF_ReportCabinSnapshot && IgnitionOFF_ReportRoadSnapshot) {
        IgnitionOFF_ReportImage = "BothSingle";
    } else if (IgnitionOFF_ReportCabinSnapshot && !IgnitionOFF_ReportRoadSnapshot) {
        IgnitionOFF_ReportImage = "SingleDMS";
    } else if (!IgnitionOFF_ReportCabinSnapshot && IgnitionOFF_ReportRoadSnapshot) {
        IgnitionOFF_ReportImage = "SingleADAS";
    } else if (IgnitionOFF_ReportCabinTimelapse && IgnitionOFF_ReportRoadTimelapse) {
        IgnitionOFF_ReportImage = "BothTimelaps";
    } else if (IgnitionOFF_ReportCabinTimelapse && !IgnitionOFF_ReportRoadTimelapse) {
        IgnitionOFF_ReportImage = "TimelapseDMS";
    } else if (!IgnitionOFF_ReportCabinTimelapse && IgnitionOFF_ReportRoadTimelapse) {
        IgnitionOFF_ReportImage = "TimelapseADAS";
    }
    var IgnitionOFF_ReportFootageCabin = document.getElementById("TES_ignitionOffReportVideoInCabinCheckbox").checked;
    var IgnitionOFF_ReportFootageRoad = document.getElementById("TES_ignitionOffReportVideoRoadFacingCheckbox").checked;
    var IgnitionOFF_ReportFootage = "None";
    if (IgnitionOFF_ReportFootageCabin && IgnitionOFF_ReportFootageRoad) {
        IgnitionOFF_ReportFootage = "Both";
    } else if (IgnitionOFF_ReportFootageCabin && !IgnitionOFF_ReportFootageRoad) {
        IgnitionOFF_ReportFootage = "DMS";
    } else if (!IgnitionOFF_ReportFootageCabin && IgnitionOFF_ReportFootageRoad) {
        IgnitionOFF_ReportFootage = "ADAS";
    }
    var MovementStarted_Activation = document.getElementById("TES_movementStartedActivationCheckbox").checked;
    var MovementStarted_FeedbackAudio = document.getElementById("TES_movementStartedFeedbackAudioCheckbox").checked;
    var MovementStarted_FeedbackOutput = document.getElementById("TES_movementStartedFeedbackOutputId").value;
    var MovementStarted_FeedbackSpeech = document.getElementById("TES_movementStartedFeedbackSpeechCheckbox").checked;
    var MovementStarted_FeedbackVisual = document.getElementById("TES_movementStartedFeedbackVisualCheckbox").checked;
    var MovementStarted_ReportEvent = document.getElementById("TES_movementStartedDetectionEventCheckbox").checked;
    var MovementStarted_ReportCabinSnapshot = document.getElementById("TES_movementStartedReportImageInCabinCheckbox").checked;
    var MovementStarted_ReportCabinTimelapse = document.getElementById("TES_movementStartedReportTimelapseInCabinCheckbox").checked;
    var MovementStarted_ReportRoadSnapshot = document.getElementById("TES_movementStartedReportImageRoadFacingCheckbox").checked;
    var MovementStarted_ReportRoadTimelapse = document.getElementById("TES_movementStartedReportTimelapseRoadFacingCheckbox").checked;
    var MovementStarted_ReportImage = "None";
    if (MovementStarted_ReportCabinSnapshot && MovementStarted_ReportRoadSnapshot) {
        MovementStarted_ReportImage = "BothSingle";
    } else if (MovementStarted_ReportCabinSnapshot && !MovementStarted_ReportRoadSnapshot) {
        MovementStarted_ReportImage = "SingleDMS";
    } else if (!MovementStarted_ReportCabinSnapshot && MovementStarted_ReportRoadSnapshot) {
        MovementStarted_ReportImage = "SingleADAS";
    } else if (MovementStarted_ReportCabinTimelapse && MovementStarted_ReportRoadTimelapse) {
        MovementStarted_ReportImage = "BothTimelaps";
    } else if (MovementStarted_ReportCabinTimelapse && !MovementStarted_ReportRoadTimelapse) {
        MovementStarted_ReportImage = "TimelapseDMS";
    } else if (!MovementStarted_ReportCabinTimelapse && MovementStarted_ReportRoadTimelapse) {
        MovementStarted_ReportImage = "TimelapseADAS";
    }
    var MovementStarted_ReportFootageCabin = document.getElementById("TES_movementStartedReportVideoInCabinCheckbox").checked;
    var MovementStarted_ReportFootageRoad = document.getElementById("TES_movementStartedReportVideoRoadFacingCheckbox").checked;
    var MovementStarted_ReportFootage = "None";
    if (MovementStarted_ReportFootageCabin && MovementStarted_ReportFootageRoad) {
        MovementStarted_ReportFootage = "Both";
    } else if (MovementStarted_ReportFootageCabin && !MovementStarted_ReportFootageRoad) {
        MovementStarted_ReportFootage = "DMS";
    } else if (!MovementStarted_ReportFootageCabin && MovementStarted_ReportFootageRoad) {
        MovementStarted_ReportFootage = "ADAS";
    }
    var MovementStopped_Activation = document.getElementById("TES_movementStoppedActivationCheckbox").checked;
    var MovementStopped_FeedbackAudio = document.getElementById("TES_movementStoppedFeedbackAudioCheckbox").checked;
    var MovementStopped_FeedbackOutput = document.getElementById("TES_movementStoppedFeedbackOutputId").value;
    var MovementStopped_FeedbackSpeech = document.getElementById("TES_movementStoppedFeedbackSpeechCheckbox").checked;
    var MovementStopped_FeedbackVisual = document.getElementById("TES_movementStoppedFeedbackVisualCheckbox").checked;
    var MovementStopped_ReportEvent = document.getElementById("TES_movementStoppedDetectionEventCheckbox").checked;
    var MovementStopped_ReportCabinSnapshot = document.getElementById("TES_movementStoppedReportImageInCabinCheckbox").checked;
    var MovementStopped_ReportCabinTimelapse = document.getElementById("TES_movementStoppedReportTimelapseInCabinCheckbox").checked;
    var MovementStopped_ReportRoadSnapshot = document.getElementById("TES_movementStoppedReportImageRoadFacingCheckbox").checked;
    var MovementStopped_ReportRoadTimelapse = document.getElementById("TES_movementStoppedReportTimelapseRoadFacingCheckbox").checked;
    var MovementStopped_ReportImage = "None";
    if (MovementStopped_ReportCabinSnapshot && MovementStopped_ReportRoadSnapshot) {
        MovementStopped_ReportImage = "BothSingle";
    } else if (MovementStopped_ReportCabinSnapshot && !MovementStopped_ReportRoadSnapshot) {
        MovementStopped_ReportImage = "SingleDMS";
    } else if (!MovementStopped_ReportCabinSnapshot && MovementStopped_ReportRoadSnapshot) {
        MovementStopped_ReportImage = "SingleADAS";
    } else if (MovementStopped_ReportCabinTimelapse && MovementStopped_ReportRoadTimelapse) {
        MovementStopped_ReportImage = "BothTimelaps";
    } else if (MovementStopped_ReportCabinTimelapse && !MovementStopped_ReportRoadTimelapse) {
        MovementStopped_ReportImage = "TimelapseDMS";
    } else if (!MovementStopped_ReportCabinTimelapse && MovementStopped_ReportRoadTimelapse) {
        MovementStopped_ReportImage = "TimelapseADAS";
    }
    var MovementStopped_ReportFootageCabin = document.getElementById("TES_movementStoppedReportVideoInCabinCheckbox").checked;
    var MovementStopped_ReportFootageRoad = document.getElementById("TES_movementStoppedReportVideoRoadFacingCheckbox").checked;
    var MovementStopped_ReportFootage = "None";
    if (MovementStopped_ReportFootageCabin && MovementStopped_ReportFootageRoad) {
        MovementStopped_ReportFootage = "Both";
    } else if (MovementStopped_ReportFootageCabin && !MovementStopped_ReportFootageRoad) {
        MovementStopped_ReportFootage = "DMS";
    } else if (!MovementStopped_ReportFootageCabin && MovementStopped_ReportFootageRoad) {
        MovementStopped_ReportFootage = "ADAS";
    }
    var Heartbeat_Activation = document.getElementById("TES_heartbeatActivationCheckbox").checked;
    var Heartbeat_FeedbackAudio = document.getElementById("TES_heartbeatFeedbackAudioCheckbox").checked;
    var Heartbeat_FeedbackOutput = document.getElementById("TES_heartbeatFeedbackOutputId").value;
    var Heartbeat_FeedbackSpeech = document.getElementById("TES_heartbeatFeedbackSpeechCheckbox").checked;
    var Heartbeat_FeedbackVisual = document.getElementById("TES_heartbeatFeedbackVisualCheckbox").checked;
    var Heartbeat_ReportEvent = document.getElementById("TES_heartbeatDetectionEventCheckbox").checked;
    var Heartbeat_ReportCabinSnapshot = document.getElementById("TES_heartbeatReportImageInCabinCheckbox").checked;
    var Heartbeat_ReportCabinTimelapse = document.getElementById("TES_heartbeatReportTimelapseInCabinCheckbox").checked;
    var Heartbeat_ReportRoadSnapshot = document.getElementById("TES_heartbeatReportImageRoadFacingCheckbox").checked;
    var Heartbeat_ReportRoadTimelapse = document.getElementById("TES_heartbeatReportTimelapseRoadFacingCheckbox").checked;
    var Heartbeat_ReportImage = "None";
    if (Heartbeat_ReportCabinSnapshot && Heartbeat_ReportRoadSnapshot) {
        Heartbeat_ReportImage = "BothSingle";
    } else if (Heartbeat_ReportCabinSnapshot && !Heartbeat_ReportRoadSnapshot) {
        Heartbeat_ReportImage = "SingleDMS";
    } else if (!Heartbeat_ReportCabinSnapshot && Heartbeat_ReportRoadSnapshot) {
        Heartbeat_ReportImage = "SingleADAS";
    } else if (Heartbeat_ReportCabinTimelapse && Heartbeat_ReportRoadTimelapse) {
        Heartbeat_ReportImage = "BothTimelaps";
    } else if (Heartbeat_ReportCabinTimelapse && !Heartbeat_ReportRoadTimelapse) {
        Heartbeat_ReportImage = "TimelapseDMS";
    } else if (!Heartbeat_ReportCabinTimelapse && Heartbeat_ReportRoadTimelapse) {
        Heartbeat_ReportImage = "TimelapseADAS";
    }
    var Heartbeat_ReportFootageCabin = document.getElementById("TES_heartbeatReportVideoInCabinCheckbox").checked;
    var Heartbeat_ReportFootageRoad = document.getElementById("TES_heartbeatReportVideoRoadFacingCheckbox").checked;
    var Heartbeat_ReportFootage = "None";
    if (Heartbeat_ReportFootageCabin && Heartbeat_ReportFootageRoad) {
        Heartbeat_ReportFootage = "Both";
    } else if (Heartbeat_ReportFootageCabin && !Heartbeat_ReportFootageRoad) {
        Heartbeat_ReportFootage = "DMS";
    } else if (!Heartbeat_ReportFootageCabin && Heartbeat_ReportFootageRoad) {
        Heartbeat_ReportFootage = "ADAS";
    }
    var GPSstatusUpdate_Activation = document.getElementById("TES_GPS_updateStatusActivationCheckbox").checked;
    var GPSstatusUpdate_FeedbackAudio = document.getElementById("TES_GPS_updateStatusFeedbackAudioCheckbox").checked;
    var GPSstatusUpdate_FeedbackOutput = document.getElementById("TES_GPS_updateStatusFeedbackOutputId").value;
    var GPSstatusUpdate_FeedbackSpeech = document.getElementById("TES_GPS_updateStatusFeedbackSpeechCheckbox").checked;
    var GPSstatusUpdate_FeedbackVisual = document.getElementById("TES_GPS_updateStatusFeedbackVisualCheckbox").checked;
    var GPSstatusUpdate_ReportEvent = document.getElementById("TES_GPS_updateStatusDetectionEventCheckbox").checked;
    var GPSstatusUpdate_ReportCabinSnapshot = document.getElementById("TES_GPS_updateStatusReportImageInCabinCheckbox").checked;
    var GPSstatusUpdate_ReportCabinTimelapse = document.getElementById("TES_GPS_updateStatusReportTimelapseInCabinCheckbox").checked;
    var GPSstatusUpdate_ReportRoadSnapshot = document.getElementById("TES_GPS_updateStatusReportImageRoadFacingCheckbox").checked;
    var GPSstatusUpdate_ReportRoadTimelapse = document.getElementById("TES_GPS_updateStatusReportTimelapseRoadFacingCheckbox").checked;
    var GPSstatusUpdate_ReportImage = "None";
    if (GPSstatusUpdate_ReportCabinSnapshot && GPSstatusUpdate_ReportRoadSnapshot) {
        GPSstatusUpdate_ReportImage = "BothSingle";
    } else if (GPSstatusUpdate_ReportCabinSnapshot && !GPSstatusUpdate_ReportRoadSnapshot) {
        GPSstatusUpdate_ReportImage = "SingleDMS";
    } else if (!GPSstatusUpdate_ReportCabinSnapshot && GPSstatusUpdate_ReportRoadSnapshot) {
        GPSstatusUpdate_ReportImage = "SingleADAS";
    } else if (GPSstatusUpdate_ReportCabinTimelapse && GPSstatusUpdate_ReportRoadTimelapse) {
        GPSstatusUpdate_ReportImage = "BothTimelaps";
    } else if (GPSstatusUpdate_ReportCabinTimelapse && !GPSstatusUpdate_ReportRoadTimelapse) {
        GPSstatusUpdate_ReportImage = "TimelapseDMS";
    } else if (!GPSstatusUpdate_ReportCabinTimelapse && GPSstatusUpdate_ReportRoadTimelapse) {
        GPSstatusUpdate_ReportImage = "TimelapseADAS";
    }
    var GPSstatusUpdate_ReportFootageCabin = document.getElementById("TES_GPS_updateStatusReportVideoInCabinCheckbox").checked;
    var GPSstatusUpdate_ReportFootageRoad = document.getElementById("TES_GPS_updateStatusReportVideoRoadFacingCheckbox").checked;
    var GPSstatusUpdate_ReportFootage = "None";
    if (GPSstatusUpdate_ReportFootageCabin && GPSstatusUpdate_ReportFootageRoad) {
        GPSstatusUpdate_ReportFootage = "Both";
    } else if (GPSstatusUpdate_ReportFootageCabin && !GPSstatusUpdate_ReportFootageRoad) {
        GPSstatusUpdate_ReportFootage = "DMS";
    } else if (!GPSstatusUpdate_ReportFootageCabin && GPSstatusUpdate_ReportFootageRoad) {
        GPSstatusUpdate_ReportFootage = "ADAS";
    }
    var TripPath_Activation = document.getElementById("TES_tripPathActivationCheckbox").checked;
    var TripPath_FeedbackAudio = document.getElementById("TES_tripPathFeedbackAudioCheckbox").checked;
    var TripPath_FeedbackOutput = document.getElementById("TES_tripPathFeedbackOutputId").value;
    var TripPath_FeedbackSpeech = document.getElementById("TES_tripPathFeedbackSpeechCheckbox").checked;
    var TripPath_FeedbackVisual = document.getElementById("TES_tripPathFeedbackVisualCheckbox").checked;
    var TripPath_ReportEvent = document.getElementById("TES_tripPathDetectionEventCheckbox").checked;
    var TripPath_ReportCabinSnapshot = document.getElementById("TES_tripPathReportImageInCabinCheckbox").checked;
    var TripPath_ReportCabinTimelapse = document.getElementById("TES_tripPathReportTimelapseInCabinCheckbox").checked;
    var TripPath_ReportRoadSnapshot = document.getElementById("TES_tripPathReportImageRoadFacingCheckbox").checked;
    var TripPath_ReportRoadTimelapse = document.getElementById("TES_tripPathReportTimelapseRoadFacingCheckbox").checked;
    var TripPath_ReportImage = "None";
    if (TripPath_ReportCabinSnapshot && TripPath_ReportRoadSnapshot) {
        TripPath_ReportImage = "BothSingle";
    } else if (TripPath_ReportCabinSnapshot && !TripPath_ReportRoadSnapshot) {
        TripPath_ReportImage = "SingleDMS";
    } else if (!TripPath_ReportCabinSnapshot && TripPath_ReportRoadSnapshot) {
        TripPath_ReportImage = "SingleADAS";
    } else if (TripPath_ReportCabinTimelapse && TripPath_ReportRoadTimelapse) {
        TripPath_ReportImage = "BothTimelaps";
    } else if (TripPath_ReportCabinTimelapse && !TripPath_ReportRoadTimelapse) {
        TripPath_ReportImage = "TimelapseDMS";
    } else if (!TripPath_ReportCabinTimelapse && TripPath_ReportRoadTimelapse) {
        TripPath_ReportImage = "TimelapseADAS";
    }
    var TripPath_ReportFootageCabin = document.getElementById("TES_tripPathReportVideoInCabinCheckbox").checked;
    var TripPath_ReportFootageRoad = document.getElementById("TES_tripPathReportVideoRoadFacingCheckbox").checked;
    var TripPath_ReportFootage = "None";
    if (TripPath_ReportFootageCabin && TripPath_ReportFootageRoad) {
        TripPath_ReportFootage = "Both";
    } else if (TripPath_ReportFootageCabin && !TripPath_ReportFootageRoad) {
        TripPath_ReportFootage = "DMS";
    } else if (!TripPath_ReportFootageCabin && TripPath_ReportFootageRoad) {
        TripPath_ReportFootage = "ADAS";
    }

    //System
    var CameraCalibrationCompleted_Activation = document.getElementById("SI_cameraCalibrationOkActivationCheckbox").checked;
    var CameraCalibrationCompleted_FeedbackAudio = document.getElementById("SI_cameraCalibrationOkFeedbackAudioCheckbox").checked;
    var CameraCalibrationCompleted_FeedbackOutput = document.getElementById("SI_cameraCalibrationOkFeedbackOutputId").value;
    var CameraCalibrationCompleted_FeedbackSpeech = document.getElementById("SI_cameraCalibrationOkFeedbackSpeechCheckbox").checked;
    var CameraCalibrationCompleted_FeedbackVisual = document.getElementById("SI_cameraCalibrationOkFeedbackVisualCheckbox").checked;
    var CameraCalibrationCompleted_ReportEvent = document.getElementById("SI_cameraCalibrationOkDetectionEventCheckbox").checked;
    var CameraCalibrationCompleted_ReportCabinSnapshot = document.getElementById("SI_cameraCalibrationOkReportImageInCabinCheckbox").checked;
    var CameraCalibrationCompleted_ReportCabinTimelapse = document.getElementById("SI_cameraCalibrationOkReportTimelapseInCabinCheckbox").checked;
    var CameraCalibrationCompleted_ReportRoadSnapshot = document.getElementById("SI_cameraCalibrationOkReportImageRoadFacingCheckbox").checked;
    var CameraCalibrationCompleted_ReportRoadTimelapse = document.getElementById("SI_cameraCalibrationOkReportTimelapseRoadFacingCheckbox").checked;
    var CameraCalibrationCompleted_ReportImage = "None";
    if (CameraCalibrationCompleted_ReportCabinSnapshot && CameraCalibrationCompleted_ReportRoadSnapshot) {
        CameraCalibrationCompleted_ReportImage = "BothSingle";
    } else if (CameraCalibrationCompleted_ReportCabinSnapshot && !CameraCalibrationCompleted_ReportRoadSnapshot) {
        CameraCalibrationCompleted_ReportImage = "SingleDMS";
    } else if (!CameraCalibrationCompleted_ReportCabinSnapshot && CameraCalibrationCompleted_ReportRoadSnapshot) {
        CameraCalibrationCompleted_ReportImage = "SingleADAS";
    } else if (CameraCalibrationCompleted_ReportCabinTimelapse && CameraCalibrationCompleted_ReportRoadTimelapse) {
        CameraCalibrationCompleted_ReportImage = "BothTimelaps";
    } else if (CameraCalibrationCompleted_ReportCabinTimelapse && !CameraCalibrationCompleted_ReportRoadTimelapse) {
        CameraCalibrationCompleted_ReportImage = "TimelapseDMS";
    } else if (!CameraCalibrationCompleted_ReportCabinTimelapse && CameraCalibrationCompleted_ReportRoadTimelapse) {
        CameraCalibrationCompleted_ReportImage = "TimelapseADAS";
    }
    var CameraCalibrationCompleted_ReportFootageCabin = document.getElementById("SI_cameraCalibrationOkReportVideoInCabinCheckbox").checked;
    var CameraCalibrationCompleted_ReportFootageRoad = document.getElementById("SI_cameraCalibrationOkReportVideoRoadFacingCheckbox").checked;
    var CameraCalibrationCompleted_ReportFootage = "None";
    if (CameraCalibrationCompleted_ReportFootageCabin && CameraCalibrationCompleted_ReportFootageRoad) {
        CameraCalibrationCompleted_ReportFootage = "Both";
    } else if (CameraCalibrationCompleted_ReportFootageCabin && !CameraCalibrationCompleted_ReportFootageRoad) {
        CameraCalibrationCompleted_ReportFootage = "DMS";
    } else if (!CameraCalibrationCompleted_ReportFootageCabin && CameraCalibrationCompleted_ReportFootageRoad) {
        CameraCalibrationCompleted_ReportFootage = "ADAS";
    }
    var CameraCalibrationFailed_Activation = document.getElementById("SI_cameraCalibrationFailedActivationCheckbox").checked;
    var CameraCalibrationFailed_FeedbackAudio = document.getElementById("SI_cameraCalibrationFailedFeedbackAudioCheckbox").checked;
    var CameraCalibrationFailed_FeedbackOutput = document.getElementById("SI_cameraCalibrationFailedFeedbackOutputId").value;
    var CameraCalibrationFailed_FeedbackSpeech = document.getElementById("SI_cameraCalibrationFailedFeedbackSpeechCheckbox").checked;
    var CameraCalibrationFailed_FeedbackVisual = document.getElementById("SI_cameraCalibrationFailedFeedbackVisualCheckbox").checked;
    var CameraCalibrationFailed_ReportEvent = document.getElementById("SI_cameraCalibrationFailedDetectionEventCheckbox").checked;
    var CameraCalibrationFailed_ReportCabinSnapshot = document.getElementById("SI_cameraCalibrationFailedReportImageInCabinCheckbox").checked;
    var CameraCalibrationFailed_ReportCabinTimelapse = document.getElementById("SI_cameraCalibrationFailedReportTimelapseInCabinCheckbox").checked;
    var CameraCalibrationFailed_ReportRoadSnapshot = document.getElementById("SI_cameraCalibrationFailedReportImageRoadFacingCheckbox").checked;
    var CameraCalibrationFailed_ReportRoadTimelapse = document.getElementById("SI_cameraCalibrationFailedReportTimelapseRoadFacingCheckbox").checked;
    var CameraCalibrationFailed_ReportImage = "None";
    if (CameraCalibrationFailed_ReportCabinSnapshot && CameraCalibrationFailed_ReportRoadSnapshot) {
        CameraCalibrationFailed_ReportImage = "BothSingle";
    } else if (CameraCalibrationFailed_ReportCabinSnapshot && !CameraCalibrationFailed_ReportRoadSnapshot) {
        CameraCalibrationFailed_ReportImage = "SingleDMS";
    } else if (!CameraCalibrationFailed_ReportCabinSnapshot && CameraCalibrationFailed_ReportRoadSnapshot) {
        CameraCalibrationFailed_ReportImage = "SingleADAS";
    } else if (CameraCalibrationFailed_ReportCabinTimelapse && CameraCalibrationFailed_ReportRoadTimelapse) {
        CameraCalibrationFailed_ReportImage = "BothTimelaps";
    } else if (CameraCalibrationFailed_ReportCabinTimelapse && !CameraCalibrationFailed_ReportRoadTimelapse) {
        CameraCalibrationFailed_ReportImage = "TimelapseDMS";
    } else if (!CameraCalibrationFailed_ReportCabinTimelapse && CameraCalibrationFailed_ReportRoadTimelapse) {
        CameraCalibrationFailed_ReportImage = "TimelapseADAS";
    }
    var CameraCalibrationFailed_ReportFootageCabin = document.getElementById("SI_cameraCalibrationFailedReportVideoInCabinCheckbox").checked;
    var CameraCalibrationFailed_ReportFootageRoad = document.getElementById("SI_cameraCalibrationFailedReportVideoRoadFacingCheckbox").checked;
    var CameraCalibrationFailed_ReportFootage = "None";
    if (CameraCalibrationFailed_ReportFootageCabin && CameraCalibrationFailed_ReportFootageRoad) {
        CameraCalibrationFailed_ReportFootage = "Both";
    } else if (CameraCalibrationFailed_ReportFootageCabin && !CameraCalibrationFailed_ReportFootageRoad) {
        CameraCalibrationFailed_ReportFootage = "DMS";
    } else if (!CameraCalibrationFailed_ReportFootageCabin && CameraCalibrationFailed_ReportFootageRoad) {
        CameraCalibrationFailed_ReportFootage = "ADAS";
    }
    var AccelerometerCalibrationCompleted_Activation = document.getElementById("SI_accelCalibrationOkActivationCheckbox").checked;
    var AccelerometerCalibrationCompleted_FeedbackAudio = document.getElementById("SI_accelCalibrationOkFeedbackAudioCheckbox").checked;
    var AccelerometerCalibrationCompleted_FeedbackOutput = document.getElementById("SI_accelCalibrationOkFeedbackOutputId").value;
    var AccelerometerCalibrationCompleted_FeedbackSpeech = document.getElementById("SI_accelCalibrationOkFeedbackSpeechCheckbox").checked;
    var AccelerometerCalibrationCompleted_FeedbackVisual = document.getElementById("SI_accelCalibrationOkFeedbackVisualCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportEvent = document.getElementById("SI_accelCalibrationOkDetectionEventCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportCabinSnapshot = document.getElementById("SI_accelCalibrationOkReportImageInCabinCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportCabinTimelapse = document.getElementById("SI_accelCalibrationOkReportTimelapseInCabinCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportRoadSnapshot = document.getElementById("SI_accelCalibrationOkReportImageRoadFacingCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportRoadTimelapse = document.getElementById("SI_accelCalibrationOkReportTimelapseRoadFacingCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportImage = "None";
    if (AccelerometerCalibrationCompleted_ReportCabinSnapshot && AccelerometerCalibrationCompleted_ReportRoadSnapshot) {
        AccelerometerCalibrationCompleted_ReportImage = "BothSingle";
    } else if (AccelerometerCalibrationCompleted_ReportCabinSnapshot && !AccelerometerCalibrationCompleted_ReportRoadSnapshot) {
        AccelerometerCalibrationCompleted_ReportImage = "SingleDMS";
    } else if (!AccelerometerCalibrationCompleted_ReportCabinSnapshot && AccelerometerCalibrationCompleted_ReportRoadSnapshot) {
        AccelerometerCalibrationCompleted_ReportImage = "SingleADAS";
    } else if (AccelerometerCalibrationCompleted_ReportCabinTimelapse && AccelerometerCalibrationCompleted_ReportRoadTimelapse) {
        AccelerometerCalibrationCompleted_ReportImage = "BothTimelaps";
    } else if (AccelerometerCalibrationCompleted_ReportCabinTimelapse && !AccelerometerCalibrationCompleted_ReportRoadTimelapse) {
        AccelerometerCalibrationCompleted_ReportImage = "TimelapseDMS";
    } else if (!AccelerometerCalibrationCompleted_ReportCabinTimelapse && AccelerometerCalibrationCompleted_ReportRoadTimelapse) {
        AccelerometerCalibrationCompleted_ReportImage = "TimelapseADAS";
    }
    var AccelerometerCalibrationCompleted_ReportFootageCabin = document.getElementById("SI_accelCalibrationOkReportVideoInCabinCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportFootageRoad = document.getElementById("SI_accelCalibrationOkReportVideoRoadFacingCheckbox").checked;
    var AccelerometerCalibrationCompleted_ReportFootage = "None";
    if (AccelerometerCalibrationCompleted_ReportFootageCabin && AccelerometerCalibrationCompleted_ReportFootageRoad) {
        AccelerometerCalibrationCompleted_ReportFootage = "Both";
    } else if (AccelerometerCalibrationCompleted_ReportFootageCabin && !AccelerometerCalibrationCompleted_ReportFootageRoad) {
        AccelerometerCalibrationCompleted_ReportFootage = "DMS";
    } else if (!AccelerometerCalibrationCompleted_ReportFootageCabin && AccelerometerCalibrationCompleted_ReportFootageRoad) {
        AccelerometerCalibrationCompleted_ReportFootage = "ADAS";
    } 
    var EnteredSleepMode_Activation = document.getElementById("SI_enteringSleepModeActivationCheckbox").checked;
    var EnteredSleepMode_FeedbackAudio = document.getElementById("SI_enteringSleepModeFeedbackAudioCheckbox").checked;
    var EnteredSleepMode_FeedbackOutput = document.getElementById("SI_enteringSleepModeFeedbackOutputId").value;
    var EnteredSleepMode_FeedbackSpeech = document.getElementById("SI_enteringSleepModeFeedbackSpeechCheckbox").checked;
    var EnteredSleepMode_FeedbackVisual = document.getElementById("SI_enteringSleepModeFeedbackVisualCheckbox").checked;
    var EnteredSleepMode_ReportEvent = document.getElementById("SI_enteringSleepModeDetectionEventCheckbox").checked;
    var EnteredSleepMode_ReportCabinSnapshot = document.getElementById("SI_enteringSleepModeReportImageInCabinCheckbox").checked;
    var EnteredSleepMode_ReportCabinTimelapse = document.getElementById("SI_enteringSleepModeReportTimelapseInCabinCheckbox").checked;
    var EnteredSleepMode_ReportRoadSnapshot = document.getElementById("SI_enteringSleepModeReportImageRoadFacingCheckbox").checked;
    var EnteredSleepMode_ReportRoadTimelapse = document.getElementById("SI_enteringSleepModeReportTimelapseRoadFacingCheckbox").checked;
    var EnteredSleepMode_ReportImage = "None";
    if (EnteredSleepMode_ReportCabinSnapshot && EnteredSleepMode_ReportRoadSnapshot) {
        EnteredSleepMode_ReportImage = "BothSingle";
    } else if (EnteredSleepMode_ReportCabinSnapshot && !EnteredSleepMode_ReportRoadSnapshot) {
        EnteredSleepMode_ReportImage = "SingleDMS";
    } else if (!EnteredSleepMode_ReportCabinSnapshot && EnteredSleepMode_ReportRoadSnapshot) {
        EnteredSleepMode_ReportImage = "SingleADAS";
    } else if (EnteredSleepMode_ReportCabinTimelapse && EnteredSleepMode_ReportRoadTimelapse) {
        EnteredSleepMode_ReportImage = "BothTimelaps";
    } else if (EnteredSleepMode_ReportCabinTimelapse && !EnteredSleepMode_ReportRoadTimelapse) {
        EnteredSleepMode_ReportImage = "TimelapseDMS";
    } else if (!EnteredSleepMode_ReportCabinTimelapse && EnteredSleepMode_ReportRoadTimelapse) {
        EnteredSleepMode_ReportImage = "TimelapseADAS";
    }
    var EnteredSleepMode_ReportFootageCabin = document.getElementById("SI_enteringSleepModeReportVideoInCabinCheckbox").checked;
    var EnteredSleepMode_ReportFootageRoad = document.getElementById("SI_enteringSleepModeReportVideoRoadFacingCheckbox").checked;
    var EnteredSleepMode_ReportFootage = "None";
    if (EnteredSleepMode_ReportFootageCabin && EnteredSleepMode_ReportFootageRoad) {
        EnteredSleepMode_ReportFootage = "Both";
    } else if (EnteredSleepMode_ReportFootageCabin && !EnteredSleepMode_ReportFootageRoad) {
        EnteredSleepMode_ReportFootage = "DMS";
    } else if (!EnteredSleepMode_ReportFootageCabin && EnteredSleepMode_ReportFootageRoad) {
        EnteredSleepMode_ReportFootage = "ADAS";
    }
    var FwUpdateStarted_Activation = document.getElementById("SI_firmwareUpdateStartedActivationCheckbox").checked;
    var FwUpdateStarted_FeedbackAudio = document.getElementById("SI_firmwareUpdateStartedFeedbackAudioCheckbox").checked;
    var FwUpdateStarted_FeedbackOutput = document.getElementById("SI_firmwareUpdateStartedFeedbackOutputId").value;
    var FwUpdateStarted_FeedbackSpeech = document.getElementById("SI_firmwareUpdateStartedFeedbackSpeechCheckbox").checked;
    var FwUpdateStarted_FeedbackVisual = document.getElementById("SI_firmwareUpdateStartedFeedbackVisualCheckbox").checked;
    var FwUpdateStarted_ReportEvent = document.getElementById("SI_firmwareUpdateStartedDetectionEventCheckbox").checked;
    var FwUpdateStarted_ReportCabinSnapshot = document.getElementById("SI_firmwareUpdateStartedReportImageInCabinCheckbox").checked;
    var FwUpdateStarted_ReportCabinTimelapse = document.getElementById("SI_firmwareUpdateStartedReportTimelapseInCabinCheckbox").checked;
    var FwUpdateStarted_ReportRoadSnapshot = document.getElementById("SI_firmwareUpdateStartedReportImageRoadFacingCheckbox").checked;
    var FwUpdateStarted_ReportRoadTimelapse = document.getElementById("SI_firmwareUpdateStartedReportTimelapseRoadFacingCheckbox").checked;
    var FwUpdateStarted_ReportImage = "None";
    if (FwUpdateStarted_ReportCabinSnapshot && FwUpdateStarted_ReportRoadSnapshot) {
        FwUpdateStarted_ReportImage = "BothSingle";
    } else if (FwUpdateStarted_ReportCabinSnapshot && !FwUpdateStarted_ReportRoadSnapshot) {
        FwUpdateStarted_ReportImage = "SingleDMS";
    } else if (!FwUpdateStarted_ReportCabinSnapshot && FwUpdateStarted_ReportRoadSnapshot) {
        FwUpdateStarted_ReportImage = "SingleADAS";
    } else if (FwUpdateStarted_ReportCabinTimelapse && FwUpdateStarted_ReportRoadTimelapse) {
        FwUpdateStarted_ReportImage = "BothTimelaps";
    } else if (FwUpdateStarted_ReportCabinTimelapse && !FwUpdateStarted_ReportRoadTimelapse) {
        FwUpdateStarted_ReportImage = "TimelapseDMS";
    } else if (!FwUpdateStarted_ReportCabinTimelapse && FwUpdateStarted_ReportRoadTimelapse) {
        FwUpdateStarted_ReportImage = "TimelapseADAS";
    }
    var FwUpdateStarted_ReportFootageCabin = document.getElementById("SI_firmwareUpdateStartedReportVideoInCabinCheckbox").checked;
    var FwUpdateStarted_ReportFootageRoad = document.getElementById("SI_firmwareUpdateStartedReportVideoRoadFacingCheckbox").checked;
    var FwUpdateStarted_ReportFootage = "None";
    if (FwUpdateStarted_ReportFootageCabin && FwUpdateStarted_ReportFootageRoad) {
        FwUpdateStarted_ReportFootage = "Both";
    } else if (FwUpdateStarted_ReportFootageCabin && !FwUpdateStarted_ReportFootageRoad) {
        FwUpdateStarted_ReportFootage = "DMS";
    } else if (!FwUpdateStarted_ReportFootageCabin && FwUpdateStarted_ReportFootageRoad) {
        FwUpdateStarted_ReportFootage = "ADAS";
    }
    var FwUpdateCompleted_Activation = document.getElementById("SI_firmwareUpdateOK_ActivationCheckbox").checked;
    var FwUpdateCompleted_FeedbackAudio = document.getElementById("SI_firmwareUpdateOK_FeedbackAudioCheckbox").checked;
    var FwUpdateCompleted_FeedbackOutput = document.getElementById("SI_firmwareUpdateOK_FeedbackOutputId").value;
    var FwUpdateCompleted_FeedbackSpeech = document.getElementById("SI_firmwareUpdateOK_FeedbackSpeechCheckbox").checked;
    var FwUpdateCompleted_FeedbackVisual = document.getElementById("SI_firmwareUpdateOK_FeedbackVisualCheckbox").checked;
    var FwUpdateCompleted_ReportEvent = document.getElementById("SI_firmwareUpdateOK_DetectionEventCheckbox").checked;
    var FwUpdateCompleted_ReportCabinSnapshot = document.getElementById("SI_firmwareUpdateOK_ReportImageInCabinCheckbox").checked;
    var FwUpdateCompleted_ReportCabinTimelapse = document.getElementById("SI_firmwareUpdateOK_ReportTimelapseInCabinCheckbox").checked;
    var FwUpdateCompleted_ReportRoadSnapshot = document.getElementById("SI_firmwareUpdateOK_ReportImageRoadFacingCheckbox").checked;
    var FwUpdateCompleted_ReportRoadTimelapse = document.getElementById("SI_firmwareUpdateOK_ReportTimelapseRoadFacingCheckbox").checked;
    var FwUpdateCompleted_ReportImage = "None";
    if (FwUpdateCompleted_ReportCabinSnapshot && FwUpdateCompleted_ReportRoadSnapshot) {
        FwUpdateCompleted_ReportImage = "BothSingle";
    } else if (FwUpdateCompleted_ReportCabinSnapshot && !FwUpdateCompleted_ReportRoadSnapshot) {
        FwUpdateCompleted_ReportImage = "SingleDMS";
    } else if (!FwUpdateCompleted_ReportCabinSnapshot && FwUpdateCompleted_ReportRoadSnapshot) {
        FwUpdateCompleted_ReportImage = "SingleADAS";
    } else if (FwUpdateCompleted_ReportCabinTimelapse && FwUpdateCompleted_ReportRoadTimelapse) {
        FwUpdateCompleted_ReportImage = "BothTimelaps";
    } else if (FwUpdateCompleted_ReportCabinTimelapse && !FwUpdateCompleted_ReportRoadTimelapse) {
        FwUpdateCompleted_ReportImage = "TimelapseDMS";
    } else if (!FwUpdateCompleted_ReportCabinTimelapse && FwUpdateCompleted_ReportRoadTimelapse) {
        FwUpdateCompleted_ReportImage = "TimelapseADAS";
    }
    var FwUpdateCompleted_ReportFootageCabin = document.getElementById("SI_firmwareUpdateOK_ReportVideoInCabinCheckbox").checked;
    var FwUpdateCompleted_ReportFootageRoad = document.getElementById("SI_firmwareUpdateOK_ReportVideoRoadFacingCheckbox").checked;
    var FwUpdateCompleted_ReportFootage = "None";
    if (FwUpdateCompleted_ReportFootageCabin && FwUpdateCompleted_ReportFootageRoad) {
        FwUpdateCompleted_ReportFootage = "Both";
    } else if (FwUpdateCompleted_ReportFootageCabin && !FwUpdateCompleted_ReportFootageRoad) {
        FwUpdateCompleted_ReportFootage = "DMS";
    } else if (!FwUpdateCompleted_ReportFootageCabin && FwUpdateCompleted_ReportFootageRoad) {
        FwUpdateCompleted_ReportFootage = "ADAS";
    }
    var FwUpdateFailed_Activation = document.getElementById("SI_firmwareUpdateFailedActivationCheckbox").checked;
    var FwUpdateFailed_FeedbackAudio = document.getElementById("SI_firmwareUpdateFailedFeedbackAudioCheckbox").checked;
    var FwUpdateFailed_FeedbackOutput = document.getElementById("SI_firmwareUpdateFailedFeedbackOutputId").value;
    var FwUpdateFailed_FeedbackSpeech = document.getElementById("SI_firmwareUpdateFailedFeedbackSpeechCheckbox").checked;
    var FwUpdateFailed_FeedbackVisual = document.getElementById("SI_firmwareUpdateFailedFeedbackVisualCheckbox").checked;
    var FwUpdateFailed_ReportEvent = document.getElementById("SI_firmwareUpdateFailedDetectionEventCheckbox").checked;
    var FwUpdateFailed_ReportCabinSnapshot = document.getElementById("SI_firmwareUpdateFailedReportImageInCabinCheckbox").checked;
    var FwUpdateFailed_ReportCabinTimelapse = document.getElementById("SI_firmwareUpdateFailedReportTimelapseInCabinCheckbox").checked;
    var FwUpdateFailed_ReportRoadSnapshot = document.getElementById("SI_firmwareUpdateFailedReportImageRoadFacingCheckbox").checked;
    var FwUpdateFailed_ReportRoadTimelapse = document.getElementById("SI_firmwareUpdateFailedReportTimelapseRoadFacingCheckbox").checked;
    var FwUpdateFailed_ReportImage = "None";
    if (FwUpdateFailed_ReportCabinSnapshot && FwUpdateFailed_ReportRoadSnapshot) {
        FwUpdateFailed_ReportImage = "BothSingle";
    } else if (FwUpdateFailed_ReportCabinSnapshot && !FwUpdateFailed_ReportRoadSnapshot) {
        FwUpdateFailed_ReportImage = "SingleDMS";
    } else if (!FwUpdateFailed_ReportCabinSnapshot && FwUpdateFailed_ReportRoadSnapshot) {
        FwUpdateFailed_ReportImage = "SingleADAS";
    } else if (FwUpdateFailed_ReportCabinTimelapse && FwUpdateFailed_ReportRoadTimelapse) {
        FwUpdateFailed_ReportImage = "BothTimelaps";
    } else if (FwUpdateFailed_ReportCabinTimelapse && !FwUpdateFailed_ReportRoadTimelapse) {
        FwUpdateFailed_ReportImage = "TimelapseDMS";
    } else if (!FwUpdateFailed_ReportCabinTimelapse && FwUpdateFailed_ReportRoadTimelapse) {
        FwUpdateFailed_ReportImage = "TimelapseADAS";
    }
    var FwUpdateFailed_ReportFootageCabin = document.getElementById("SI_firmwareUpdateFailedReportVideoInCabinCheckbox").checked;
    var FwUpdateFailed_ReportFootageRoad = document.getElementById("SI_firmwareUpdateFailedReportVideoRoadFacingCheckbox").checked;
    var FwUpdateFailed_ReportFootage = "None";
    if (FwUpdateFailed_ReportFootageCabin && FwUpdateFailed_ReportFootageRoad) {
        FwUpdateFailed_ReportFootage = "Both";
    } else if (FwUpdateFailed_ReportFootageCabin && !FwUpdateFailed_ReportFootageRoad) {
        FwUpdateFailed_ReportFootage = "DMS";
    } else if (!FwUpdateFailed_ReportFootageCabin && FwUpdateFailed_ReportFootageRoad) {
        FwUpdateFailed_ReportFootage = "ADAS";
    }
    var SystemBoot_Activation = document.getElementById("SI_systemBootActivationCheckbox").checked;
    var SystemBoot_FeedbackAudio = document.getElementById("SI_systemBootFeedbackAudioCheckbox").checked;
    var SystemBoot_FeedbackOutput = document.getElementById("SI_systemBootFeedbackOutputId").value;
    var SystemBoot_FeedbackSpeech = document.getElementById("SI_systemBootFeedbackSpeechCheckbox").checked;
    var SystemBoot_FeedbackVisual = document.getElementById("SI_systemBootFeedbackVisualCheckbox").checked;
    var SystemBoot_ReportEvent = document.getElementById("SI_systemBootDetectionEventCheckbox").checked;
    var SystemBoot_ReportCabinSnapshot = document.getElementById("SI_systemBootReportImageInCabinCheckbox").checked;
    var SystemBoot_ReportCabinTimelapse = document.getElementById("SI_systemBootReportTimelapseInCabinCheckbox").checked;
    var SystemBoot_ReportRoadSnapshot = document.getElementById("SI_systemBootReportImageRoadFacingCheckbox").checked;
    var SystemBoot_ReportRoadTimelapse = document.getElementById("SI_systemBootReportTimelapseRoadFacingCheckbox").checked;
    var SystemBoot_ReportImage = "None";
    if (SystemBoot_ReportCabinSnapshot && SystemBoot_ReportRoadSnapshot) {
        SystemBoot_ReportImage = "BothSingle";
    } else if (SystemBoot_ReportCabinSnapshot && !SystemBoot_ReportRoadSnapshot) {
        SystemBoot_ReportImage = "SingleDMS";
    } else if (!SystemBoot_ReportCabinSnapshot && SystemBoot_ReportRoadSnapshot) {
        SystemBoot_ReportImage = "SingleADAS";
    } else if (SystemBoot_ReportCabinTimelapse && SystemBoot_ReportRoadTimelapse) {
        SystemBoot_ReportImage = "BothTimelaps";
    } else if (SystemBoot_ReportCabinTimelapse && !SystemBoot_ReportRoadTimelapse) {
        SystemBoot_ReportImage = "TimelapseDMS";
    } else if (!SystemBoot_ReportCabinTimelapse && SystemBoot_ReportRoadTimelapse) {
        SystemBoot_ReportImage = "TimelapseADAS";
    }
    var SystemBoot_ReportFootageCabin = document.getElementById("SI_systemBootReportVideoInCabinCheckbox").checked;
    var SystemBoot_ReportFootageRoad = document.getElementById("SI_systemBootReportVideoRoadFacingCheckbox").checked;
    var SystemBoot_ReportFootage = "None";
    if (SystemBoot_ReportFootageCabin && SystemBoot_ReportFootageRoad) {
        SystemBoot_ReportFootage = "Both";
    } else if (SystemBoot_ReportFootageCabin && !SystemBoot_ReportFootageRoad) {
        SystemBoot_ReportFootage = "DMS";
    } else if (!SystemBoot_ReportFootageCabin && SystemBoot_ReportFootageRoad) {
        SystemBoot_ReportFootage = "ADAS";
    }
    var SystemBootFailure_Activation = document.getElementById("SI_systemBootFailureActivationCheckbox").checked;
    var SystemBootFailure_FeedbackAudio = document.getElementById("SI_systemBootFailureFeedbackAudioCheckbox").checked;
    var SystemBootFailure_FeedbackOutput = document.getElementById("SI_systemBootFailureFeedbackOutputId").value;
    var SystemBootFailure_FeedbackSpeech = document.getElementById("SI_systemBootFailureFeedbackSpeechCheckbox").checked;
    var SystemBootFailure_FeedbackVisual = document.getElementById("SI_systemBootFailureFeedbackVisualCheckbox").checked;
    var SystemBootFailure_ReportEvent = document.getElementById("SI_systemBootFailureDetectionEventCheckbox").checked;
    var SystemBootFailure_ReportCabinSnapshot = document.getElementById("SI_systemBootFailureReportImageInCabinCheckbox").checked;
    var SystemBootFailure_ReportCabinTimelapse = document.getElementById("SI_systemBootFailureReportTimelapseInCabinCheckbox").checked;
    var SystemBootFailure_ReportRoadSnapshot = document.getElementById("SI_systemBootFailureReportImageRoadFacingCheckbox").checked;
    var SystemBootFailure_ReportRoadTimelapse = document.getElementById("SI_systemBootFailureReportTimelapseRoadFacingCheckbox").checked;
    var SystemBootFailure_ReportImage = "None";
    if (SystemBootFailure_ReportCabinSnapshot && SystemBootFailure_ReportRoadSnapshot) {
        SystemBootFailure_ReportImage = "BothSingle";
    } else if (SystemBootFailure_ReportCabinSnapshot && !SystemBootFailure_ReportRoadSnapshot) {
        SystemBootFailure_ReportImage = "SingleDMS";
    } else if (!SystemBootFailure_ReportCabinSnapshot && SystemBootFailure_ReportRoadSnapshot) {
        SystemBootFailure_ReportImage = "SingleADAS";
    } else if (SystemBootFailure_ReportCabinTimelapse && SystemBootFailure_ReportRoadTimelapse) {
        SystemBootFailure_ReportImage = "BothTimelaps";
    } else if (SystemBootFailure_ReportCabinTimelapse && !SystemBootFailure_ReportRoadTimelapse) {
        SystemBootFailure_ReportImage = "TimelapseDMS";
    } else if (!SystemBootFailure_ReportCabinTimelapse && SystemBootFailure_ReportRoadTimelapse) {
        SystemBootFailure_ReportImage = "TimelapseADAS";
    }
    var SystemBootFailure_ReportFootageCabin = document.getElementById("SI_systemBootFailureReportVideoInCabinCheckbox").checked;
    var SystemBootFailure_ReportFootageRoad = document.getElementById("SI_systemBootFailureReportVideoRoadFacingCheckbox").checked;
    var SystemBootFailure_ReportFootage = "None";
    if (SystemBootFailure_ReportFootageCabin && SystemBootFailure_ReportFootageRoad) {
        SystemBootFailure_ReportFootage = "Both";
    } else if (SystemBootFailure_ReportFootageCabin && !SystemBootFailure_ReportFootageRoad) {
        SystemBootFailure_ReportFootage = "DMS";
    } else if (!SystemBootFailure_ReportFootageCabin && SystemBootFailure_ReportFootageRoad) {
        SystemBootFailure_ReportFootage = "ADAS";
    }
    var ExternalEventTriggering_Activation = document.getElementById("SI_externalEventTriggeringActivationCheckbox").checked;
    var ExternalEventTriggering_FeedbackAudio = document.getElementById("SI_externalEventTriggeringFeedbackAudioCheckbox").checked;
    var ExternalEventTriggering_FeedbackOutput = document.getElementById("SI_externalEventTriggeringFeedbackOutputId").value;
    var ExternalEventTriggering_FeedbackSpeech = document.getElementById("SI_externalEventTriggeringFeedbackSpeechCheckbox").checked;
    var ExternalEventTriggering_FeedbackVisual = document.getElementById("SI_externalEventTriggeringFeedbackVisualCheckbox").checked;
    var ExternalEventTriggering_ReportEvent = document.getElementById("SI_externalEventTriggeringDetectionEventCheckbox").checked;
    var ExternalEventTriggering_ReportCabinSnapshot = document.getElementById("SI_externalEventTriggeringReportImageInCabinCheckbox").checked;
    var ExternalEventTriggering_ReportCabinTimelapse = document.getElementById("SI_externalEventTriggeringReportTimelapseInCabinCheckbox").checked;
    var ExternalEventTriggering_ReportRoadSnapshot = document.getElementById("SI_externalEventTriggeringReportImageRoadFacingCheckbox").checked;
    var ExternalEventTriggering_ReportRoadTimelapse = document.getElementById("SI_externalEventTriggeringReportTimelapseRoadFacingCheckbox").checked;
    var ExternalEventTriggering_ReportImage = "None";
    if (ExternalEventTriggering_ReportCabinSnapshot && ExternalEventTriggering_ReportRoadSnapshot) {
        ExternalEventTriggering_ReportImage = "BothSingle";
    } else if (ExternalEventTriggering_ReportCabinSnapshot && !ExternalEventTriggering_ReportRoadSnapshot) {
        ExternalEventTriggering_ReportImage = "SingleDMS";
    } else if (!ExternalEventTriggering_ReportCabinSnapshot && ExternalEventTriggering_ReportRoadSnapshot) {
        ExternalEventTriggering_ReportImage = "SingleADAS";
    } else if (ExternalEventTriggering_ReportCabinTimelapse && ExternalEventTriggering_ReportRoadTimelapse) {
        ExternalEventTriggering_ReportImage = "BothTimelaps";
    } else if (ExternalEventTriggering_ReportCabinTimelapse && !ExternalEventTriggering_ReportRoadTimelapse) {
        ExternalEventTriggering_ReportImage = "TimelapseDMS";
    } else if (!ExternalEventTriggering_ReportCabinTimelapse && ExternalEventTriggering_ReportRoadTimelapse) {
        ExternalEventTriggering_ReportImage = "TimelapseADAS";
    }
    var ExternalEventTriggering_ReportFootageCabin = document.getElementById("SI_externalEventTriggeringReportVideoInCabinCheckbox").checked;
    var ExternalEventTriggering_ReportFootageRoad = document.getElementById("SI_externalEventTriggeringReportVideoRoadFacingCheckbox").checked;
    var ExternalEventTriggering_ReportFootage = "None";
    if (ExternalEventTriggering_ReportFootageCabin && ExternalEventTriggering_ReportFootageRoad) {
        ExternalEventTriggering_ReportFootage = "Both";
    } else if (ExternalEventTriggering_ReportFootageCabin && !ExternalEventTriggering_ReportFootageRoad) {
        ExternalEventTriggering_ReportFootage = "DMS";
    } else if (!ExternalEventTriggering_ReportFootageCabin && ExternalEventTriggering_ReportFootageRoad) {
        ExternalEventTriggering_ReportFootage = "ADAS";
    }
    var ApplicationError_Activation = document.getElementById("SI_applicationErrorActivationCheckbox").checked;
    var ApplicationError_FeedbackAudio = document.getElementById("SI_applicationErrorFeedbackAudioCheckbox").checked;
    var ApplicationError_FeedbackOutput = document.getElementById("SI_applicationErrorFeedbackOutputId").value;
    var ApplicationError_FeedbackSpeech = document.getElementById("SI_applicationErrorFeedbackSpeechCheckbox").checked;
    var ApplicationError_FeedbackVisual = document.getElementById("SI_applicationErrorFeedbackVisualCheckbox").checked;
    var ApplicationError_ReportEvent = document.getElementById("SI_applicationErrorDetectionEventCheckbox").checked;
    var ApplicationError_ReportCabinSnapshot = document.getElementById("SI_applicationErrorReportImageInCabinCheckbox").checked;
    var ApplicationError_ReportCabinTimelapse = document.getElementById("SI_applicationErrorReportTimelapseInCabinCheckbox").checked;
    var ApplicationError_ReportRoadSnapshot = document.getElementById("SI_applicationErrorReportImageRoadFacingCheckbox").checked;
    var ApplicationError_ReportRoadTimelapse = document.getElementById("SI_applicationErrorReportTimelapseRoadFacingCheckbox").checked;
    var ApplicationError_ReportImage = "None";
    if (ApplicationError_ReportCabinSnapshot && ApplicationError_ReportRoadSnapshot) {
        ApplicationError_ReportImage = "BothSingle";
    } else if (ApplicationError_ReportCabinSnapshot && !ApplicationError_ReportRoadSnapshot) {
        ApplicationError_ReportImage = "SingleDMS";
    } else if (!ApplicationError_ReportCabinSnapshot && ApplicationError_ReportRoadSnapshot) {
        ApplicationError_ReportImage = "SingleADAS";
    } else if (ApplicationError_ReportCabinTimelapse && ApplicationError_ReportRoadTimelapse) {
        ApplicationError_ReportImage = "BothTimelaps";
    } else if (ApplicationError_ReportCabinTimelapse && !ApplicationError_ReportRoadTimelapse) {
        ApplicationError_ReportImage = "TimelapseDMS";
    } else if (!ApplicationError_ReportCabinTimelapse && ApplicationError_ReportRoadTimelapse) {
        ApplicationError_ReportImage = "TimelapseADAS";
    }
    var ApplicationError_ReportFootageCabin = document.getElementById("SI_applicationErrorReportVideoInCabinCheckbox").checked;
    var ApplicationError_ReportFootageRoad = document.getElementById("SI_applicationErrorReportVideoRoadFacingCheckbox").checked;
    var ApplicationError_ReportFootage = "None";
    if (ApplicationError_ReportFootageCabin && ApplicationError_ReportFootageRoad) {
        ApplicationError_ReportFootage = "Both";
    } else if (ApplicationError_ReportFootageCabin && !ApplicationError_ReportFootageRoad) {
        ApplicationError_ReportFootage = "DMS";
    } else if (!ApplicationError_ReportFootageCabin && ApplicationError_ReportFootageRoad) {
        ApplicationError_ReportFootage = "ADAS";
    }
    var CameraError_Activation = document.getElementById("SI_cameraErrorActivationCheckbox").checked;
    var CameraError_FeedbackAudio = document.getElementById("SI_cameraErrorFeedbackAudioCheckbox").checked;
    var CameraError_FeedbackOutput = document.getElementById("SI_cameraErrorFeedbackOutputId").value;
    var CameraError_FeedbackSpeech = document.getElementById("SI_cameraErrorFeedbackSpeechCheckbox").checked;
    var CameraError_FeedbackVisual = document.getElementById("SI_cameraErrorFeedbackVisualCheckbox").checked;
    var CameraError_ReportEvent = document.getElementById("SI_cameraErrorDetectionEventCheckbox").checked;
    var CameraError_ReportCabinSnapshot = document.getElementById("SI_cameraErrorReportImageInCabinCheckbox").checked;
    var CameraError_ReportCabinTimelapse = document.getElementById("SI_cameraErrorReportTimelapseInCabinCheckbox").checked;
    var CameraError_ReportRoadSnapshot = document.getElementById("SI_cameraErrorReportImageRoadFacingCheckbox").checked;
    var CameraError_ReportRoadTimelapse = document.getElementById("SI_cameraErrorReportTimelapseRoadFacingCheckbox").checked;
    var CameraError_ReportImage = "None";
    if (CameraError_ReportCabinSnapshot && CameraError_ReportRoadSnapshot) {
        CameraError_ReportImage = "BothSingle";
    } else if (CameraError_ReportCabinSnapshot && !CameraError_ReportRoadSnapshot) {
        CameraError_ReportImage = "SingleDMS";
    } else if (!CameraError_ReportCabinSnapshot && CameraError_ReportRoadSnapshot) {
        CameraError_ReportImage = "SingleADAS";
    } else if (CameraError_ReportCabinTimelapse && CameraError_ReportRoadTimelapse) {
        CameraError_ReportImage = "BothTimelaps";
    } else if (CameraError_ReportCabinTimelapse && !CameraError_ReportRoadTimelapse) {
        CameraError_ReportImage = "TimelapseDMS";
    } else if (!CameraError_ReportCabinTimelapse && CameraError_ReportRoadTimelapse) {
        CameraError_ReportImage = "TimelapseADAS";
    }
    var CameraError_ReportFootageCabin = document.getElementById("SI_cameraErrorReportVideoInCabinCheckbox").checked;
    var CameraError_ReportFootageRoad = document.getElementById("SI_cameraErrorReportVideoRoadFacingCheckbox").checked;
    var CameraError_ReportFootage = "None";
    if (CameraError_ReportFootageCabin && CameraError_ReportFootageRoad) {
        CameraError_ReportFootage = "Both";
    } else if (CameraError_ReportFootageCabin && !CameraError_ReportFootageRoad) {
        CameraError_ReportFootage = "DMS";
    } else if (!CameraError_ReportFootageCabin && CameraError_ReportFootageRoad) {
        CameraError_ReportFootage = "ADAS";
    }
    var SystemOK_Activation = document.getElementById("SI_systemOK_ActivationCheckbox").checked;
    var SystemOK_FeedbackAudio = document.getElementById("SI_systemOK_FeedbackAudioCheckbox").checked;
    var SystemOK_FeedbackOutput = document.getElementById("SI_systemOK_FeedbackOutputId").value;
    var SystemOK_FeedbackSpeech = document.getElementById("SI_systemOK_FeedbackSpeechCheckbox").checked;
    var SystemOK_FeedbackVisual = document.getElementById("SI_systemOK_FeedbackVisualCheckbox").checked;
    var SystemOK_ReportEvent = document.getElementById("SI_systemOK_DetectionEventCheckbox").checked;
    var SystemOK_ReportCabinSnapshot = document.getElementById("SI_systemOK_ReportImageInCabinCheckbox").checked;
    var SystemOK_ReportCabinTimelapse = document.getElementById("SI_systemOK_ReportTimelapseInCabinCheckbox").checked;
    var SystemOK_ReportRoadSnapshot = document.getElementById("SI_systemOK_ReportImageRoadFacingCheckbox").checked;
    var SystemOK_ReportRoadTimelapse = document.getElementById("SI_systemOK_ReportTimelapseRoadFacingCheckbox").checked;
    var SystemOK_ReportImage = "None";
    if (SystemOK_ReportCabinSnapshot && SystemOK_ReportRoadSnapshot) {
        SystemOK_ReportImage = "BothSingle";
    } else if (SystemOK_ReportCabinSnapshot && !SystemOK_ReportRoadSnapshot) {
        SystemOK_ReportImage = "SingleDMS";
    } else if (!SystemOK_ReportCabinSnapshot && SystemOK_ReportRoadSnapshot) {
        SystemOK_ReportImage = "SingleADAS";
    } else if (SystemOK_ReportCabinTimelapse && SystemOK_ReportRoadTimelapse) {
        SystemOK_ReportImage = "BothTimelaps";
    } else if (SystemOK_ReportCabinTimelapse && !SystemOK_ReportRoadTimelapse) {
        SystemOK_ReportImage = "TimelapseDMS";
    } else if (!SystemOK_ReportCabinTimelapse && SystemOK_ReportRoadTimelapse) {
        SystemOK_ReportImage = "TimelapseADAS";
    }
    var SystemOK_ReportFootageCabin = document.getElementById("SI_systemOK_ReportVideoInCabinCheckbox").checked;
    var SystemOK_ReportFootageRoad = document.getElementById("SI_systemOK_ReportVideoRoadFacingCheckbox").checked;
    var SystemOK_ReportFootage = "None";
    if (SystemOK_ReportFootageCabin && SystemOK_ReportFootageRoad) {
        SystemOK_ReportFootage = "Both";
    } else if (SystemOK_ReportFootageCabin && !SystemOK_ReportFootageRoad) {
        SystemOK_ReportFootage = "DMS";
    } else if (!SystemOK_ReportFootageCabin && SystemOK_ReportFootageRoad) {
        SystemOK_ReportFootage = "ADAS";
    }
    var SystemReset_Activation = document.getElementById("SI_systemResetActivationCheckbox").checked;
    var SystemReset_FeedbackAudio = document.getElementById("SI_systemResetFeedbackAudioCheckbox").checked;
    var SystemReset_FeedbackOutput = document.getElementById("SI_systemResetFeedbackOutputId").value;
    var SystemReset_FeedbackSpeech = document.getElementById("SI_systemResetFeedbackSpeechCheckbox").checked;
    var SystemReset_FeedbackVisual = document.getElementById("SI_systemResetFeedbackVisualCheckbox").checked;
    var SystemReset_ReportEvent = document.getElementById("SI_systemResetDetectionEventCheckbox").checked;
    var SystemReset_ReportCabinSnapshot = document.getElementById("SI_systemResetReportImageInCabinCheckbox").checked;
    var SystemReset_ReportCabinTimelapse = document.getElementById("SI_systemResetReportTimelapseInCabinCheckbox").checked;
    var SystemReset_ReportRoadSnapshot = document.getElementById("SI_systemResetReportImageRoadFacingCheckbox").checked;
    var SystemReset_ReportRoadTimelapse = document.getElementById("SI_systemResetReportTimelapseRoadFacingCheckbox").checked;
    var SystemReset_ReportImage = "None";
    if (SystemReset_ReportCabinSnapshot && SystemReset_ReportRoadSnapshot) {
        SystemReset_ReportImage = "BothSingle";
    } else if (SystemReset_ReportCabinSnapshot && !SystemReset_ReportRoadSnapshot) {
        SystemReset_ReportImage = "SingleDMS";
    } else if (!SystemReset_ReportCabinSnapshot && SystemReset_ReportRoadSnapshot) {
        SystemReset_ReportImage = "SingleADAS";
    } else if (SystemReset_ReportCabinTimelapse && SystemReset_ReportRoadTimelapse) {
        SystemReset_ReportImage = "BothTimelaps";
    } else if (SystemReset_ReportCabinTimelapse && !SystemReset_ReportRoadTimelapse) {
        SystemReset_ReportImage = "TimelapseDMS";
    } else if (!SystemReset_ReportCabinTimelapse && SystemReset_ReportRoadTimelapse) {
        SystemReset_ReportImage = "TimelapseADAS";
    }
    var SystemReset_ReportFootageCabin = document.getElementById("SI_systemResetReportVideoInCabinCheckbox").checked;
    var SystemReset_ReportFootageRoad = document.getElementById("SI_systemResetReportVideoRoadFacingCheckbox").checked;
    var SystemReset_ReportFootage = "None";
    if (SystemReset_ReportFootageCabin && SystemReset_ReportFootageRoad) {
        SystemReset_ReportFootage = "Both";
    } else if (SystemReset_ReportFootageCabin && !SystemReset_ReportFootageRoad) {
        SystemReset_ReportFootage = "DMS";
    } else if (!SystemReset_ReportFootageCabin && SystemReset_ReportFootageRoad) {
        SystemReset_ReportFootage = "ADAS";
    }
    var SystemError_Activation = document.getElementById("SI_systemErrorActivationCheckbox").checked;
    var SystemError_FeedbackAudio = document.getElementById("SI_systemErrorFeedbackAudioCheckbox").checked;
    var SystemError_FeedbackOutput = document.getElementById("SI_systemErrorFeedbackOutputId").value;
    var SystemError_FeedbackSpeech = document.getElementById("SI_systemErrorFeedbackSpeechCheckbox").checked;
    var SystemError_FeedbackVisual = document.getElementById("SI_systemErrorFeedbackVisualCheckbox").checked;
    var SystemError_ReportEvent = document.getElementById("SI_systemErrorDetectionEventCheckbox").checked;
    var SystemError_ReportCabinSnapshot = document.getElementById("SI_systemErrorReportImageInCabinCheckbox").checked;
    var SystemError_ReportCabinTimelapse = document.getElementById("SI_systemErrorReportTimelapseInCabinCheckbox").checked;
    var SystemError_ReportRoadSnapshot = document.getElementById("SI_systemErrorReportImageRoadFacingCheckbox").checked;
    var SystemError_ReportRoadTimelapse = document.getElementById("SI_systemErrorReportTimelapseRoadFacingCheckbox").checked;
    var SystemError_ReportImage = "None";
    if (SystemError_ReportCabinSnapshot && SystemError_ReportRoadSnapshot) {
        SystemError_ReportImage = "BothSingle";
    } else if (SystemError_ReportCabinSnapshot && !SystemError_ReportRoadSnapshot) {
        SystemError_ReportImage = "SingleDMS";
    } else if (!SystemError_ReportCabinSnapshot && SystemError_ReportRoadSnapshot) {
        SystemError_ReportImage = "SingleADAS";
    } else if (SystemError_ReportCabinTimelapse && SystemError_ReportRoadTimelapse) {
        SystemError_ReportImage = "BothTimelaps";
    } else if (SystemError_ReportCabinTimelapse && !SystemError_ReportRoadTimelapse) {
        SystemError_ReportImage = "TimelapseDMS";
    } else if (!SystemError_ReportCabinTimelapse && SystemError_ReportRoadTimelapse) {
        SystemError_ReportImage = "TimelapseADAS";
    }
    var SystemError_ReportFootageCabin = document.getElementById("SI_systemErrorReportVideoInCabinCheckbox").checked;
    var SystemError_ReportFootageRoad = document.getElementById("SI_systemErrorReportVideoRoadFacingCheckbox").checked;
    var SystemError_ReportFootage = "None";
    if (SystemError_ReportFootageCabin && SystemError_ReportFootageRoad) {
        SystemError_ReportFootage = "Both";
    } else if (SystemError_ReportFootageCabin && !SystemError_ReportFootageRoad) {
        SystemError_ReportFootage = "DMS";
    } else if (!SystemError_ReportFootageCabin && SystemError_ReportFootageRoad) {
        SystemError_ReportFootage = "ADAS";
    }
    var MCULOG_Activation = document.getElementById("SI_MCU_LogActivationCheckbox").checked;
    var MCULOG_FeedbackAudio = document.getElementById("SI_MCU_LogFeedbackAudioCheckbox").checked;
    var MCULOG_FeedbackOutput = document.getElementById("SI_MCU_LogFeedbackOutputId").value;
    var MCULOG_FeedbackSpeech = document.getElementById("SI_MCU_LogFeedbackSpeechCheckbox").checked;
    var MCULOG_FeedbackVisual = document.getElementById("SI_MCU_LogFeedbackVisualCheckbox").checked;
    var MCULOG_ReportEvent = document.getElementById("SI_MCU_LogDetectionEventCheckbox").checked;
    var MCULOG_ReportCabinSnapshot = document.getElementById("SI_MCU_LogReportImageInCabinCheckbox").checked;
    var MCULOG_ReportCabinTimelapse = document.getElementById("SI_MCU_LogReportTimelapseInCabinCheckbox").checked;
    var MCULOG_ReportRoadSnapshot = document.getElementById("SI_MCU_LogReportImageRoadFacingCheckbox").checked;
    var MCULOG_ReportRoadTimelapse = document.getElementById("SI_MCU_LogReportTimelapseRoadFacingCheckbox").checked;
    var MCULOG_ReportImage = "None";
    if (MCULOG_ReportCabinSnapshot && MCULOG_ReportRoadSnapshot) {
        MCULOG_ReportImage = "BothSingle";
    } else if (MCULOG_ReportCabinSnapshot && !MCULOG_ReportRoadSnapshot) {
        MCULOG_ReportImage = "SingleDMS";
    } else if (!MCULOG_ReportCabinSnapshot && MCULOG_ReportRoadSnapshot) {
        MCULOG_ReportImage = "SingleADAS";
    } else if (MCULOG_ReportCabinTimelapse && MCULOG_ReportRoadTimelapse) {
        MCULOG_ReportImage = "BothTimelaps";
    } else if (MCULOG_ReportCabinTimelapse && !MCULOG_ReportRoadTimelapse) {
        MCULOG_ReportImage = "TimelapseDMS";
    } else if (!MCULOG_ReportCabinTimelapse && MCULOG_ReportRoadTimelapse) {
        MCULOG_ReportImage = "TimelapseADAS";
    }
    var MCULOG_ReportFootageCabin = document.getElementById("SI_MCU_LogReportVideoInCabinCheckbox").checked;
    var MCULOG_ReportFootageRoad = document.getElementById("SI_MCU_LogReportVideoRoadFacingCheckbox").checked;
    var MCULOG_ReportFootage = "None";
    if (MCULOG_ReportFootageCabin && MCULOG_ReportFootageRoad) {
        MCULOG_ReportFootage = "Both";
    } else if (MCULOG_ReportFootageCabin && !MCULOG_ReportFootageRoad) {
        MCULOG_ReportFootage = "DMS";
    } else if (!MCULOG_ReportFootageCabin && MCULOG_ReportFootageRoad) {
        MCULOG_ReportFootage = "ADAS";
    }

    //Modem
    var KeepAliveInSec = parseInt(document.getElementById("SI_communicationsWatchdogKeepAliveNumber").value);
    var ModemResetHWTimeInMin = parseInt(document.getElementById("SI_communicationsWatchdogModemResetNumber").value);
    var ModemResetSignalTimeInMin = parseInt(document.getElementById("SI_communicationsWatchdogModemResetSignalNumber").value);
    var RepeatCycleUntilCommRecovery = document.getElementById("SI_communicationsWatchdogRepeatCycleCheckbox").checked;
    var SelfPowerRecycleTimeInMin = parseInt(document.getElementById("SI_communicationsWatchdogSelfPowerRecycleNumber").value);
    var SocketResetTimeInMin = parseInt(document.getElementById("SI_communicationsWatchdogSocketResetTimeNumber").value);
    
    //Hardware
    var Acc3DDriveTimeFilter = parseInt(document.getElementById("SI_driveTimeFilterNumber").value);
    var Acc3DStopTimeFilter = parseInt(document.getElementById("SI_stopTimeFilterNumber").value);
    var ContRecording = parseInt(document.getElementById("ContRecording").value);
    var StateGPIO = document.getElementById("StateGPIO").value;
    var GPIO_Field_1 = document.getElementById("Select_GPIO_1").value;
    var GPIO_Field_2 = document.getElementById("Select_GPIO_2").value;
    var GPIO_Field_3 = document.getElementById("Select_GPIO_3").value;
    var GPIO_Field_4 = document.getElementById("Select_GPIO_4").value;

    var GPIO = {};
    var GPIO_temp={};

    if(StateGPIO === "Out"){
        GPIO_Field_1 = parseInt(GPIO_Field_1);
        GPIO_Field_2 = parseFloat(GPIO_Field_2).toFixed(1);
        GPIO_Field_3 = parseInt(GPIO_Field_3);
        var GPIO_temp= {
            "State": StateGPIO,
            "DutyCycle": GPIO_Field_1,
            "Frequency": GPIO_Field_2,
            "Length": GPIO_Field_3,
            "Source": GPIO_Field_4
        };
    GPIO = GPIO_temp;
    }
    else{
        GPIO_Field_3 = parseInt(GPIO_Field_3);
        GPIO_Field_4 = parseFloat(GPIO_Field_4).toFixed(1);
        var GPIO_temp = {
            "State": StateGPIO,
            "ActiveLevel": (GPIO_Field_1 === "true"),
            "SpecialFunction": GPIO_Field_2,
            "StateDuration": GPIO_Field_3,
            "VoltageThreshold": GPIO_Field_4
        }
    };
    GPIO = GPIO_temp;

    var ActiveLevelGPI = document.getElementById("ActiveLevelGPI").value;
    ActiveLevelGPI = (ActiveLevelGPI === "true");
    var FunctionGPI = document.getElementById("FunctionGPI").value;
    var StateDurationGPI = parseInt(document.getElementById("StateDurationGPI").value);
    var VoltageThresholdGPI = parseFloat(document.getElementById("VoltageThresholdGPI").value).toFixed(1);
    var DutyCycleGPO = parseInt(document.getElementById("DutyCycleGPO").value);
    var FrequencyGPO = parseFloat(document.getElementById("FrequencyGPO").value).toFixed(1);
    var LengthGPO = parseInt(document.getElementById("LengthGPO").value);
    var SourceGPO = document.getElementById("SourceGPO").value;
    var DeviceTurnOnEnable = document.getElementById("SI_deviceTurnOnCheckbox").checked;
    var SelfEventTriggerEnable = document.getElementById("SI_selfEventTriggerCheckbox").checked;
    var micStatus = document.getElementById("micStatus").value;
    micStatus = (micStatus === "true");
    var SDcardEncryption = document.getElementById("SI_SD_cardEncryptionCheckbox").checked;
    
    //Volume
    var VolumeforAsleep = parseInt(document.getElementById("SI_volumeForAsleepNumber").value);
    var VolumeforAlerts = parseInt(document.getElementById("SI_volumeForOtherAlertsNumber").value);
    var VolumeControls = document.getElementById("SI_volumeControlsCheckbox").checked;
    var Notificationlanguage = parseInt(document.getElementById("SI_notificationLanguageId").value);
    
    //Driver's Feedback
    var DriverFeedbackBeeps = document.getElementById("GP_beepsActivationCheckbox").checked;
    var DriverFeedbackLED = document.getElementById("GP_LED_activationCheckbox").checked;
    var DriverFeedbackVoice = document.getElementById("GP_voiceActivationCheckbox").checked;
    var SystemLEDActivation = document.getElementById("GP_system_LED_activationCheckbox").checked;

    //Driver
    var LeftHandDrive = document.getElementById("LeftHandDrive").value;
    LeftHandDrive = (LeftHandDrive === "true");
    
    //Communications
    var CommChannelState = document.getElementById("SI_communicationSettingsAndHybridCommMainChannelId").value;
    var Alerts = document.getElementById("SI_communicationSettingsAndHybridAlertsSelectId").value;
    var AlertsCheckBox = document.getElementById("SI_communicationSettingsAndHybridAlertsCheckbox");
    var Debug = document.getElementById("SI_communicationSettingsAndHybridDebugSelectId").value;
    var DebugCheckBox = document.getElementById("SI_communicationSettingsAndHybridDebugCheckbox");
    var FOTA = document.getElementById("SI_communicationSettingsAndHybridFOTASelectId").value;
    var FOTACheckBox = document.getElementById("SI_communicationSettingsAndHybridFOTACheckbox");
    var Image_Comm = document.getElementById("SI_communicationSettingsAndHybridImageSelectId").value;
    var ImageCheckBox = document.getElementById("SI_communicationSettingsAndHybridImageCheckbox");
    var Video_Comm = document.getElementById("SI_communicationSettingsAndHybridVideoSelectId").value;
    var VideoCheckBox = document.getElementById("SI_communicationSettingsAndHybridVideoCheckbox");
    var timeBeforeEvent = parseInt(document.getElementById("SI_recordBeforeEventNumber").value);
    var timeAfterEvent = parseInt(document.getElementById("SI_recordAfterEventNumber").value);

    var EnableSleepBlockingByDrowsiness = document.getElementById("DMS_driverAsleepSleepBlockingEnableCheckbox").checked;
    
    // FS10-ADAS (Future use)
    //var DashedLineCrossing = document.getElementById("DashedLineCrossing").value;
    //var SolidLineCrossing = document.getElementById("SolidLineCrossing").value;
    //var ActiveLaneSpeedThreshold = parseInt(document.getElementById("ActiveLaneSpeedThreshold").value);
    //var InstallationHeight = parseInt(document.getElementById("InstallationHeight").value);
    //var OffsetFromCenter = parseInt(document.getElementById("OffsetFromCenter").value);
    //var FCWWarningRange = parseInt(document.getElementById("FCWWarningRange").value);
    //var FCWSpeedThreshold = parseInt(document.getElementById("FCWSpeedThreshold").value);
    //var HMWSpeedThreshold = parseInt(document.getElementById("HMWSpeedThreshold").value);
    //var TimeToTriggerTailgating = parseInt(document.getElementById("TimeToTriggerTailgating").value);
    //var TtcEmergencyRange = parseFloat(document.getElementById("TtcEmergencyRange").value).toFixed(1);
    //var TtcWarningRange = parseFloat(document.getElementById("TtcWarningRange").value).toFixed(1);
    
    // Device Type
    var DeviceTypeRadio = document.querySelector('input[name="deviceType"]:checked').value;
    var MinSpeedMonitor = parseInt(document.getElementById('TES_movementStartedSpeedThresholdNumber').value);
    
    // Hybrid Configs
    if (!AlertsCheckBox.checked) {
        Alerts = CommChannelState;
    }
    if (!DebugCheckBox.checked) {
        Debug = CommChannelState;
    }
    if (!ImageCheckBox.checked) {
        Image_Comm = CommChannelState;
    }
    if (!FOTACheckBox.checked) {
        if(CommChannelState === "RS232"){
            FOTA = "WiFi";
        }
        else{
            FOTA_Comm = CommChannelState;
        }
    }
    if (!VideoCheckBox.checked) {
        if(CommChannelState === "RS232"){
            Video_Comm = "WiFi";
        }
        else{
            Video_Comm = CommChannelState;
        }
    }
    
    // Checking if RS232 protocol is used for Mobileye or Hybrid Configuration
    if(DeviceTypeRadio === "Mobileye" || DeviceTypeRadio === "MobileyeRC" ){
        if(DuplicateMsgOverRS232 || (CommChannelState === "RS232") || (Alerts === "RS232" && AlertsCheckBox.checked) || (Debug === "RS232" && DebugCheckBox.checked) || (Image_Comm === "RS232" && ImageCheckBox.checked)){
            // Cipia-FS10 Serial RX to Mobileye and Cipia-FS10 Serial TX to 3rd Party RS232 Transparent Mode Device.
            var SerialProtocol_JSON = {
                "SerialProtocolSettings": {
                    "serial_protocol": {
                        "incoming_inter_packet_delay": 20,
                        "incoming_packets": {
                            "mobileye_can_msg": {
                                "active": true,
                                "fields": [
                                {
                                    "data": "4043414e3a3730302c382c",
                                    "type": "fixed"
                                },
                                {
                                    "length": 0,
                                    "type": "data"
                                }
                                ],
                                "id": 1001
                            }
                        },
                        "terminal_type": "mobileye",
                        "little_endian": true,
                        "mtu": 900,
                        "outgoing_inter_packet_delay": 75,
                        "outgoing_packets": {
                            "FleetSenseBinaryData": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                ],
                                "id": 1,
                            }
                        }
                    }
                },
            }
            console.log("RS232 + Mobileye");
        } 
        else{
            // Change the Serial Protocol Settings to Mobileye only
            var SerialProtocol_JSON = {
                "SerialProtocolSettings" : {
                    "serial_protocol": {
                        "incoming_inter_packet_delay" : 20,
                        "incoming_packets": {
                            "mobileye_can_msg": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "4043414e3a3730302c382c",
                                        "type": "fixed"
                                    },
                                    {
                                        "length": 0,
                                        "type": "data"
                                    }
                                ],
                                "id": 1001
                            }
                        },
                        "outgoing_packets": {},
                        "terminal_type": "mobileye"
                    }
                },
            }
            console.log("Mobileye");
        }
    } 
    else {
        if(DuplicateMsgOverRS232 || (CommChannelState === "RS232") || (Alerts === "RS232" && AlertsCheckBox.checked) || (Debug === "RS232" && DebugCheckBox.checked) || (Image_Comm === "RS232" && ImageCheckBox.checked)){
            // Change the Serial Protocol Settings to RS232
            var SerialProtocol_JSON = {
                "SerialProtocolSettings": {
                    "serial_protocol": {
                        "little_endian": true,
                        "mtu": 900,
                        "outgoing_inter_packet_delay": 75,
                        "outgoing_packets": {
                            "FleetSenseBinaryData": {
                                "active": true,
                                "fields": [
                                {
                                    "data": "90A3A3",
                                    "type": "fixed"
                                },
                                {
                                    "type": "data"
                                }
                                ],
                                "id": 1
                            }
                        },
                        "incoming_packets": {
                            "ServerSideDataPacket": {
                            "active": true,
                            "fields": [
                                {
                                    "data": "90A3",
                                    "type": "fixed"
                                },
                                {
                                    "type": "length",
                                    "size": 4
                                },
                                {
                                    "type": "data"
                                }
                            ],
                            "id": 2
                            }
                        }
                    }
                },
            }
            console.log("RS232");
        }
        else {
            if(DuplicateMsgOverRS232){
                var SerialProtocol_JSON = {
                    "SerialProtocolSettings": {
                        "serial_protocol": {
                            "little_endian": true,
                            "mtu": 900,
                            "outgoing_inter_packet_delay": 75,
                            "outgoing_packets": {
                                "FleetSenseBinaryData": {
                                    "active": true,
                                    "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                    ],
                                    "id": 1
                                }
                            },
                            "incoming_packets": {
                                "ServerSideDataPacket": {
                                "active": true,
                                "fields": [
                                    {
                                        "data": "90A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "length",
                                        "size": 4
                                    },
                                    {
                                        "type": "data"
                                    }
                                ],
                                "id": 2
                                }
                            }
                        }
                    },
                }
                console.log("Duplicate RS232");
            }
            else{
                var SerialProtocol_JSON = {
                    "SerialProtocolSettings": {
                        "serial_protocol": {
                            "little_endian": true,
                            "mtu": 900,
                            "outgoing_inter_packet_delay": 75,
                            "outgoing_packets": {
                                "FleetSenseBinaryData": {
                                    "active": true,
                                    "fields": [
                                    {
                                        "data": "90A3A3",
                                        "type": "fixed"
                                    },
                                    {
                                        "type": "data"
                                    }
                                    ],
                                    "id": 1
                                }
                            },
                        }
                    },
                }
                console.log("No RS232");
            }
        }
    }
    
    //Disable outputs for ADAS events
    if(DeviceTypeRadio === "Disabled" || DeviceTypeRadio === "DVR"){
        // No events for ADAS
        // Lane Departure Warning
        LDW_Activation = false;
        LDW_FeedbackAudio = false;
        LDW_FeedbackOutput = "None";
        LDW_FeedbackSpeech = false;
        LDW_FeedbackVisual = false;
        LDW_ReportEvent = false;
        LDW_ReportImage = "None";
        LDW_ReportFootage = "None";
        // Redlight
        /*
        RedLight_Activation = false;
        RedLight_FeedbackAudio = false;
        RedLight_FeedbackOutput = "None";
        RedLight_FeedbackSpeech = false;
        RedLight_FeedbackVisual = false;
        RedLight_ReportEvent = false;
        RedLight_ReportImage = "None";
        RedLight_ReportFootage = "None";
        */
        //Stop disobeyed
        /*
        StopDisobeyed_Activation = false;
        StopDisobeyed_FeedbackAudio = false;
        StopDisobeyed_FeedbackOutput = "None";
        StopDisobeyed_FeedbackSpeech = false;
        StopDisobeyed_FeedbackVisual = false;
        StopDisobeyed_ReportEvent = false;
        StopDisobeyed_ReportImage = "None";
        StopDisobeyed_ReportFootage = "None";
        */
        // Tailgating
        HMW_Activation = false;
        HMW_FeedbackAudio  = false;
        HMW_FeedbackOutput = "None";
        HMW_FeedbackSpeech = false;
        HMW_FeedbackVisual = false;
        HMW_ReportEvent = false;
        HMW_ReportImage = "None";
        HMW_ReportFootage = "None";
        //Urban Forward Collision Warning
        UrbanFCW_Activation = false;
        UrbanFCW_FeedbackAudio  = false;
        UrbanFCW_FeedbackOutput = "None";
        UrbanFCW_FeedbackSpeech = false;
        UrbanFCW_FeedbackVisual = false;
        UrbanFCW_ReportEvent = false;
        UrbanFCW_ReportImage = "None";
        UrbanFCW_ReportFootage = "None";
        //Forward Collision Warning
        FCW_Activation = false;
        FCW_FeedbackAudio  = false;
        FCW_FeedbackOutput = "None";
        FCW_FeedbackSpeech = false;
        FCW_FeedbackVisual = false;
        FCW_ReportEvent = false;
        FCW_ReportImage = "None";
        FCW_ReportFootage = "None";
        //Overspeeding
        /*
        Overspeeding_Activation = false;
        Overspeeding_FeedbackAudio  = false;
        Overspeeding_FeedbackOutput = "None";
        Overspeeding_FeedbackSpeech = false;
        Overspeeding_FeedbackVisual = false;
        Overspeeding_ReportEvent = false;
        Overspeeding_ReportImage = "None";
        Overspeeding_ReportFootage = "None";
        */
        //Pedestrian Collision Warning
        PCW_Activation = false;
        PCW_FeedbackAudio  = false;
        PCW_FeedbackOutput = "None";
        PCW_FeedbackSpeech = false;
        PCW_FeedbackVisual = false;
        PCW_ReportEvent = false;
        PCW_ReportImage = "None";
        PCW_ReportFootage = "None";
    }
    
    //Miscellaneous
    var VehicleCategoryMenu = document.getElementsByName("vehicleType");
    var VehicleCategorySelected;
    for (var i = 0; i < VehicleCategoryMenu.length; i++) {
        if (VehicleCategoryMenu[i].checked) {
            VehicleCategorySelected = VehicleCategoryMenu[i];
            break;
        }
    }
    var VehicleCategory = VehicleCategorySelected.value;
    var VideostoStorage = parseInt(document.getElementById("SI_videoToStorageNumber").value);
    var videoResolution = parseInt(document.getElementById("videoResolution").value);
    var photoResolution = parseInt(document.getElementById("photoResolution").value);
    
    //APN settings for the user
    var APN_apn = document.getElementById("SI_APN_SettingsTextId").value;
    var APN_user = document.getElementById("SI_APN_UserTextId").value;
    var APN_pass = document.getElementById("SI_APN_PasswordTextId").value;
    APN_apn = update_FS10_textInputs(APN_apn);
    APN_user = update_FS10_textInputs(APN_user);
    APN_pass = update_FS10_textInputs(APN_pass);
    
    //Events for user
    var EventstoStorage = parseInt(document.getElementById("SI_videoToStorageNumber").value);
    //var CalibrationReferencePoint_x = parseFloat(document.getElementById("CalibrationReferencePoint_x").value).toFixed(1);
    //var CalibrationReferencePoint_y = parseFloat(document.getElementById("CalibrationReferencePoint_y").value).toFixed(1);
    //var CalibrationReferencePoint_z = parseFloat(document.getElementById("CalibrationReferencePoint_z").value).toFixed(1);
    var CameraStatusBackoffTimer = parseInt(document.getElementById("SI_cameraErrorFeedbackBackoffNumber").value);
    var DistractionBackoffTimer = parseInt(document.getElementById("DMS_driverDistractedFeedbackBackoffNumber").value);
    var DistractionSpeedThreshold = parseInt(document.getElementById("DMS_driverDistractedSpeedThresholdNumber").value);
    var DistractionTurnGraceDuration = parseFloat(document.getElementById("DMS_driverDistractedTurnGraceTimerNumber").value).toFixed(1);
    var DriverChangeMinDuration = parseFloat(document.getElementById("DMS_driverChangedMinimumNumber").value).toFixed(1);
    var DrowsinessBackoffTimer = parseInt(document.getElementById("DMS_drowsinessFeedbackBackoffNumber").value);
    var DrowsinessSpeedThreshold = parseInt(document.getElementById("DMS_drowsinessSpeedThresholdNumber").value);
    var EnableYawnBasedDrowsiness = document.getElementById("DMS_drowsinessYawnEnableCheckbox").checked;
    var PhoneBackoffTimer = parseInt(document.getElementById("DMS_phoneUseFeedbackBackoffNumber").value);
    var PhoneSpeedThreshold = parseInt(document.getElementById("DMS_phoneUseSpeedThresholdNumber").value);
    var RoadCenterPitchNeg = parseFloat(document.getElementById("RoadCenterPitchNeg").value).toFixed(1);
    var RoadCenterPitchPos = parseFloat(document.getElementById("RoadCenterPitchPos").value).toFixed(1);
    var RoadCenterYawNeg = parseFloat(document.getElementById("RoadCenterYawNeg").value).toFixed(1);
    var RoadCenterYawPos = parseFloat(document.getElementById("RoadCenterYawPos").value).toFixed(1);
    var SeatbeltBackoffTimer = parseInt(document.getElementById("DMS_seatbeltFeedbackBackoffNumber").value);
    var SeatbeltSpeedThreshold = parseInt(document.getElementById("DMS_seatbeltSpeedThresholdNumber").value);
    var SleepBackoffTimer = parseInt(document.getElementById("DMS_driverAsleepFeedbackBackoffNumber").value);
    var SmokingBackoffTimer = parseInt(document.getElementById("DMS_smokingFeedbackBackoffNumber").value);
    var SmokingSpeedThreshold = parseInt(document.getElementById("DMS_smokingSpeedThresholdNumber").value);
    var AsleepOTAClosure = document.getElementById("DMS_driverAsleepClosureEventCheckbox");
    var DriverDistractedOTAClosure = document.getElementById("DMS_driverDistractedClosureEventCheckbox");
    var DrowsinessOTAClosure = document.getElementById("DMS_drowsinessClosureEventCheckbox");
    var FCWOTAClosure = document.getElementById("ADAS_FCW_ClosureEventCheckbox");
    var LDWOTAClosure = document.getElementById("ADAS_LDW_ClosureEventCheckbox");
    //var LightDrowsinessOTAClosure = document.getElementById("LightDrowsinessOTAClosure");
    var PCWOTAClosure =document.getElementById("ADAS_PCW_ClosureEventCheckbox");
    var PhoneUseOTAClosure = document.getElementById("DMS_phoneUseClosureEventCheckbox");
    var SeatbeltOTAClosure = document.getElementById("DMS_seatbeltClosureEventCheckbox");
    var SmokingOTAClosure = document.getElementById("DMS_smokingClosureEventCheckbox");
    var TailgatingOTAClosure = document.getElementById("ADAS_HMW_ClosureEventCheckbox");
    var UFCWOTAClosure = document.getElementById("ADAS_UFCW_ClosureEventCheckbox");
    var AsleepOTABackOff = parseInt(document.getElementById("DMS_driverAsleepMessageBackoffNumber").value);
    var DriverDistractedOTABackOff = parseInt(document.getElementById("DMS_driverDistractedMessageBackoffNumber").value);
    var DrowsinessOTABackOff = parseInt(document.getElementById("DMS_drowsinessMessageBackoffNumber").value);
    var FCWOTABackOff = parseInt(document.getElementById("ADAS_FCW_MessageBackoffNumber").value);
    var LDWOTABackOff = parseInt(document.getElementById("ADAS_LDW_MessageBackoffNumber").value);
    //var LightDrowsinessOTABackOff = parseInt(document.getElementById("LightDrowsinessOTABackOff").value);
    var PCWOTABackOff = parseInt(document.getElementById("ADAS_PCW_MessageBackoffNumber").value);
    var PhoneUseOTABackOff = parseInt(document.getElementById("DMS_phoneUseMessageBackoffNumber").value);
    var SeatbeltOTABackOff = parseInt(document.getElementById("DMS_seatbeltMessageBackoffNumber").value);
    var SmokingOTABackOff = parseInt(document.getElementById("DMS_smokingMessageBackoffNumber").value);
    var TailgatingOTABackOff = parseInt(document.getElementById("ADAS_HMW_MessageBackoffNumber").value);
    var UFCWOTABackOff = parseInt(document.getElementById("ADAS_UFCW_MessageBackoffNumber").value);
    var CalibrationTimeout = parseInt(document.getElementById("SI_calibrationTimeoutNumber").value);
    var IGNOffInterval = parseInt(document.getElementById("TES_heartbeatIgnitionOffIntervalNumber").value);
    var IGNOnInterval = parseInt(document.getElementById("TES_heartbeatIgnitionOnIntervalNumber").value);
    var TimeToWaitGPSFix = parseInt(document.getElementById("TES_heartbeatTimeToWaitGPSFixNumber").value);
    var DistractionTurnGraceDuration = parseFloat(document.getElementById("DMS_driverDistractedTurnGraceTimerNumber").value).toFixed(1);
    var TrackingGraceTimer = parseInt(document.getElementById("DMS_driverDisappearedTrackingGraceTimerNumber").value);
    var DriverChangeMinDuration = parseFloat(document.getElementById("DMS_driverChangedMinimumNumber").value).toFixed(1);
    var SeatbeltAlertTime = parseFloat(document.getElementById("DMS_seatbeltAlertTimeNumber").value).toFixed(1);
    var SleepDuration = parseFloat(document.getElementById("DMS_driverAsleepSleepDurationNumber").value).toFixed(1);
    var EnableImagesIdDB = document.getElementById("DMS_driverIdentifiedEnableDatabaseCheckbox").checked;
    var videoOverlay = document.getElementById("SI_videoOverlayCheckbox").checked;
    var timeOffset = parseInt(document.getElementById("timeOffset").value);
    var timeSource = document.getElementById("timeSource").value;
    var GSensorWakeThreshold = parseInt(document.getElementById("SI_GSensorWakeThresholdNumber").value);
    var OTAupdateEnable = document.getElementById("SI_OTA_updateCheckbox").checked;
    var GPSFixLossOrRecoveryTime = parseFloat(document.getElementById("TES_heartbeatGPS_FixLossOrRecoveryNumber").value).toFixed(1);
    var MaxHeadingAngleForEvents = parseInt(document.getElementById("MaxHeadingAngleForEvents").value);
    var IGNOffFilter = parseInt(document.getElementById("TES_heartbeatIgnitionOffFilterNumber").value);
    var IGNOnFilter = parseInt(document.getElementById("TES_heartbeatIgnitionOnFilterNumber").value);
    var TripPathEnable = document.getElementById("TES_tripPathEnableCheckbox").checked;
    var TripPathInhibitHeartbeat = document.getElementById("TES_tripPathInhibitHeartbeatCheckbox").checked;
    var TripPathDistance = setSliderAndCheckboxToJson("TES_tripPathDistance");
    var TripPathTime = setSliderAndCheckboxToJson("TES_tripPathTime");
    var TripPathHeading = setSliderAndCheckboxToJson("TES_tripPathHeading");
    var WiFiTO = parseInt(document.getElementById("SI_SettingsAndHybridWi_Fi_TimeOutNumber").value);
    var SleepModeTO = parseInt(document.getElementById("SI_sleepModeTimeoutNumber").value);
    var DriverDisappearTimeThreshold = parseFloat(document.getElementById("DMS_driverDisappearedTimeThresholdNumber").value).toFixed(1);
    var InhibitSeatbeltAlertsOnStop = document.getElementById("DMS_seatbeltInhibitAlertsOnStopCheckbox").checked;
    
    //RS232
    var Baudrate = parseInt(document.getElementById("SI_serialCommBaudrateId").value);
    var Databits = parseInt(document.getElementById("SI_serialCommDatabitsId").value);
    var Parity = document.getElementById("SI_serialCommParityId").value;
    Parity = (Parity === "true");
    var Stopbits = parseInt(document.getElementById("SI_serialCommStopbitsId").value)
    var data2send = document.getElementById("SI_serialCommDataToSendId").value;

    //RS232 Duplicate Messages
    var DuplicateMsgOverRS232 = document.getElementById("SI_communicationSettingsAndHybridDuplicateEventCheckbox").checked;
    
    //Server
    var ServerAddress = document.getElementById("ServerAddress").value;
    var ServerPassword = document.getElementById("ServerPassword").value;
    var ServerPort = parseInt(document.getElementById("Port").value);
    var Server_check = document.getElementById("MW_check");
    
    // Server value update
    if(!Server_check.checked){
        ServerAddress = "fs10.cipia.cloud";
        ServerPassword = "fs1Manager@2021";
        ServerPort = 1883;
    }

    //WiFi Networks
    var WiFi_Network01_check = document.getElementById("WiFi_Network01_check");
    var WiFi_Network01_SSID = document.getElementById("WiFi_Network01_SSID").value;
    var WiFi_Network01_Password = document.getElementById("WiFi_Network01_Password").value;
    var WiFi_Network02_check = document.getElementById("WiFi_Network02_check");
    var WiFi_Network02_SSID = document.getElementById("WiFi_Network02_SSID").value;
    var WiFi_Network02_Password = document.getElementById("WiFi_Network02_Password").value;
    var WiFi_Network03_check = document.getElementById("WiFi_Network03_check");
    var WiFi_Network03_SSID = document.getElementById("WiFi_Network03_SSID").value;
    var WiFi_Network03_Password = document.getElementById("WiFi_Network03_Password").value;
    var WiFi_Network04_check = document.getElementById("WiFi_Network04_check");
    var WiFi_Network04_SSID = document.getElementById("WiFi_Network04_SSID").value;
    var WiFi_Network04_Password = document.getElementById("WiFi_Network04_Password").value;
    var WiFi_Network05_check = document.getElementById("WiFi_Network05_check");
    var WiFi_Network05_SSID = document.getElementById("WiFi_Network05_SSID").value;
    var WiFi_Network05_Password = document.getElementById("WiFi_Network05_Password").value;
    var WiFi_Network06_check = document.getElementById("WiFi_Network06_check");
    var WiFi_Network06_SSID = document.getElementById("WiFi_Network06_SSID").value;
    var WiFi_Network06_Password = document.getElementById("WiFi_Network06_Password").value;
    var WiFi_Network07_check = document.getElementById("WiFi_Network07_check");
    var WiFi_Network07_SSID = document.getElementById("WiFi_Network07_SSID").value;
    var WiFi_Network07_Password = document.getElementById("WiFi_Network07_Password").value;
    var WiFi_Network08_check = document.getElementById("WiFi_Network08_check");
    var WiFi_Network08_SSID = document.getElementById("WiFi_Network08_SSID").value;
    var WiFi_Network08_Password = document.getElementById("WiFi_Network08_Password").value;
    var WiFi_Network09_check = document.getElementById("WiFi_Network09_check");
    var WiFi_Network09_SSID = document.getElementById("WiFi_Network09_SSID").value;
    var WiFi_Network09_Password = document.getElementById("WiFi_Network09_Password").value;
    var WiFi_Network10_check = document.getElementById("WiFi_Network10_check");
    var WiFi_Network10_SSID = document.getElementById("WiFi_Network10_SSID").value;
    var WiFi_Network10_Password = document.getElementById("WiFi_Network10_Password").value;

    var String_Overlay = document.getElementById("String_Overlay").value;
    var Unit_ID_Overlay = document.getElementById("Unit_ID_Overlay").value;
    Unit_ID_Overlay = (Unit_ID_Overlay === "true");

    var VideoOverlay = [];
    if (String_Overlay.trim() !== '' && Unit_ID_Overlay) {
        VideoOverlay = {
            "Enable": videoOverlay,
            "OverlayText": [
                "Unit ID: {unitid}",
                String_Overlay
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    }
    else if(String_Overlay.trim() !== '' && !Unit_ID_Overlay){
        VideoOverlay = {
            "Enable": videoOverlay,
            "OverlayText": [
                String_Overlay
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    } else if(String_Overlay.trim() === '' && Unit_ID_Overlay) {
        VideoOverlay = {
            "Enable": videoOverlay,
            "OverlayText": [
                "Unit ID: {unitid}"
            ],
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    } else {
        VideoOverlay = {
            "Enable": videoOverlay,
            "TimeOffset": timeOffset,
            "TimeSource": timeSource
        }
    }


    var JSON_Networks = [];
    if (WiFi_Network01_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network01_SSID,
            "Password": WiFi_Network01_Password
        });
    }
    else{
        JSON_Networks.push({
            "SSID": "",
            "Password": ""
        });
    }
    if (WiFi_Network02_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network02_SSID,
            "Password": WiFi_Network02_Password
        });
    }
    if (WiFi_Network03_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network03_SSID,
            "Password": WiFi_Network03_Password
        });
    }
    if (WiFi_Network04_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network04_SSID,
            "Password": WiFi_Network04_Password
        });
    }
    if (WiFi_Network05_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network05_SSID,
            "Password": WiFi_Network05_Password
        });
    }
    if (WiFi_Network06_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network06_SSID,
            "Password": WiFi_Network06_Password
        });
    }
    if (WiFi_Network07_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network07_SSID,
            "Password": WiFi_Network07_Password
        });
    }
    if (WiFi_Network08_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network08_SSID,
            "Password": WiFi_Network08_Password
        });
    }
    if (WiFi_Network09_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network09_SSID,
            "Password": WiFi_Network09_Password
        });
    }
    if (WiFi_Network10_check.checked) {
        JSON_Networks.push({
            "SSID": WiFi_Network10_SSID,
            "Password": WiFi_Network10_Password
        });
    }
   
    // JSON Generator
    var json_A = {
        "APNSettings": {
            "APN": APN_apn,
            "User": APN_user,
            "Password": APN_pass
        },
        "Acc3DDriveTimeFilter": Acc3DDriveTimeFilter,
        "Acc3DStopTimeFilter": Acc3DStopTimeFilter,
        "AdasConfig": {
            "ActiveLaneDepartureType": {
                /*
                "DashedLaneCrossing": (DashedLineCrossing === "true"),
                "SolidLaneCrossing": (SolidLineCrossing === "true"),
                "SpeedThreshold": ActiveLaneSpeedThreshold
                */
                "DashedLaneCrossing": false,
                "SolidLaneCrossing": false,
                "SpeedThreshold": 20
            },
            "AdasCamera": {
                /*
                "InstallationHeight": InstallationHeight,
                "OffsetFromCenter": OffsetFromCenter
                */
                "InstallationHeight": 150,
                "OffsetFromCenter": 0
            },
            "FCW": {
                /*
                "FCWlevel": FCWWarningRange,
                "SpeedThreshold": FCWSpeedThreshold
                */
                "FCWlevel": 2,
                "SpeedThreshold": 20
            },
            "Tailgating": {
                /*
                "HMWSpeedThreshold": HMWSpeedThreshold,
                "TimeToTriggerTailgating": TimeToTriggerTailgating,
                "TtcWarningRange": TtcWarningRange,
                "TtcEmergencyRange": TtcEmergencyRange
                */
                "HMWSpeedThreshold": 35,
                "TimeToTriggerTailgating": 5,
                "TtcWarningRange": "2.0",
                "TtcEmergencyRange": "0.8"
            },
            "Type": DeviceTypeRadio
        },
        "BLESettings": {
            "Mode": true,
            "PasswordKey": "123456",
            "SelfName": "FS-BLE"
        },   
        "CommChannelState": CommChannelState,
        "CommChannelSettings": {
            "Alert": Alerts,
            "Debug": Debug,
            "FOTA": FOTA,
            "Image": Image_Comm,
            "Video": Video_Comm 
        },
        "DuplicateMsgOverRS232": DuplicateMsgOverRS232,
        "CommunicationWatchdog": {
            "KeepAliveInSec": KeepAliveInSec,
            "ModemResetHWTimeInMin": ModemResetHWTimeInMin,
            "ModemResetSignalTimeInMin": ModemResetSignalTimeInMin,
            "RepeatCycleUntilCommRecovery": RepeatCycleUntilCommRecovery,
            "SelfPowerRecycleTimeInMin": SelfPowerRecycleTimeInMin,
            "SocketResetTimeInMin": SocketResetTimeInMin
        },
        "ConfigurationName": "Cipia-FS10-Dummy_Configurator",
        "ContRecording": ContRecording,
        "DriverAsleepEventSpeakerVolume": VolumeforAsleep,
        "DriverDisappearTimeThreshold": DriverDisappearTimeThreshold,
        "DriverFeedbackOptions": {
            "Beeps": DriverFeedbackBeeps,
            "LED": DriverFeedbackLED,
            "Voice": DriverFeedbackVoice
        },
        "EventVideoLen": {
            "After": timeAfterEvent,
            "Before": timeBeforeEvent
        },
        "EventsSettings": {
            "3DAccelerometerCalibrationCompleted": {
                "Activation": AccelerometerCalibrationCompleted_Activation,
                "FeedbackAudio": AccelerometerCalibrationCompleted_FeedbackAudio,
                "FeedbackOutput": AccelerometerCalibrationCompleted_FeedbackOutput,
                "FeedbackSpeech": AccelerometerCalibrationCompleted_FeedbackSpeech,
                "FeedbackVisual": AccelerometerCalibrationCompleted_FeedbackVisual,
                "ReportEvent": AccelerometerCalibrationCompleted_ReportEvent,
                "ReportImage": AccelerometerCalibrationCompleted_ReportImage,
                "ReportFootage": AccelerometerCalibrationCompleted_ReportFootage
            },
            "ApplicationError": {
                "Activation": ApplicationError_Activation,
                "FeedbackAudio": ApplicationError_FeedbackAudio,
                "FeedbackOutput": ApplicationError_FeedbackOutput,
                "FeedbackSpeech": ApplicationError_FeedbackSpeech,
                "FeedbackVisual": ApplicationError_FeedbackVisual,
                "ReportEvent": ApplicationError_ReportEvent,
                "ReportImage": ApplicationError_ReportImage,
                "ReportFootage": ApplicationError_ReportFootage
            },
            "CameraCalibrationCompleted": {
                "Activation": CameraCalibrationCompleted_Activation,
                "FeedbackAudio": CameraCalibrationCompleted_FeedbackAudio,
                "FeedbackOutput": CameraCalibrationCompleted_FeedbackOutput,
                "FeedbackSpeech": CameraCalibrationCompleted_FeedbackSpeech,
                "FeedbackVisual": CameraCalibrationCompleted_FeedbackVisual,
                "ReportEvent": CameraCalibrationCompleted_ReportEvent,
                "ReportImage": CameraCalibrationCompleted_ReportImage,
                "ReportFootage": CameraCalibrationCompleted_ReportFootage
            },
            "CameraCalibrationFailed": {
                "Activation": CameraCalibrationFailed_Activation,
                "FeedbackAudio": CameraCalibrationFailed_FeedbackAudio,
                "FeedbackOutput": CameraCalibrationFailed_FeedbackOutput,
                "FeedbackSpeech": CameraCalibrationFailed_FeedbackSpeech,
                "FeedbackVisual": CameraCalibrationFailed_FeedbackVisual,
                "ReportEvent": CameraCalibrationFailed_ReportEvent,
                "ReportImage": CameraCalibrationFailed_ReportImage,
                "ReportFootage": CameraCalibrationFailed_ReportFootage
            },
            "CameraError": {
                "Activation": CameraError_Activation,
                "FeedbackAudio": CameraError_FeedbackAudio,
                "FeedbackOutput": CameraError_FeedbackOutput,
                "FeedbackSpeech": CameraError_FeedbackSpeech,
                "FeedbackVisual": CameraError_FeedbackVisual,
                "ReportEvent": CameraError_ReportEvent,
                "ReportImage": CameraError_ReportImage,
                "ReportFootage": CameraError_ReportFootage
            },
            "TripPath": {
                "Activation": TripPath_Activation,
                "FeedbackAudio": TripPath_FeedbackAudio,
                "FeedbackOutput": TripPath_FeedbackOutput,
                "FeedbackSpeech": TripPath_FeedbackSpeech,
                "FeedbackVisual": TripPath_FeedbackVisual,
                "ReportEvent": TripPath_ReportEvent,
                "ReportImage": TripPath_ReportImage,
                "ReportFootage": TripPath_ReportFootage
            },
            "DriverAsleep": {
                "Activation": DriverAsleep_Activation,
                "FeedbackAudio": DriverAsleep_FeedbackAudio,
                "FeedbackOutput": DriverAsleep_FeedbackOutput,
                "FeedbackSpeech": DriverAsleep_FeedbackSpeech,
                "FeedbackVisual": DriverAsleep_FeedbackVisual,
                "ReportEvent": DriverAsleep_ReportEvent,
                "ReportImage": DriverAsleep_ReportImage,
                "ReportFootage": DriverAsleep_ReportFootage
            },
            "DriverChange": {
                "Activation": DriverChange_Activation,
                "FeedbackAudio": DriverChange_FeedbackAudio,
                "FeedbackOutput": DriverChange_FeedbackOutput,
                "FeedbackSpeech": DriverChange_FeedbackSpeech,
                "FeedbackVisual": DriverChange_FeedbackVisual,
                "ReportEvent": DriverChange_ReportEvent,
                "ReportImage": DriverChange_ReportImage,
                "ReportFootage": DriverChange_ReportFootage
            },
            "DriverDisappeared": {
                "Activation": DriverDisappeared_Activation,
                "FeedbackAudio": DriverDisappeared_FeedbackAudio,
                "FeedbackOutput": DriverDisappeared_FeedbackOutput,
                "FeedbackSpeech": DriverDisappeared_FeedbackSpeech,
                "FeedbackVisual": DriverDisappeared_FeedbackVisual,
                "ReportEvent": DriverDisappeared_ReportEvent,
                "ReportImage": DriverDisappeared_ReportImage,
                "ReportFootage": DriverDisappeared_ReportFootage
            },
            "DriverDistracted": {
                "Activation": DriverDistracted_Activation,
                "FeedbackAudio": DriverDistracted_FeedbackAudio,
                "FeedbackOutput": DriverDistracted_FeedbackOutput,
                "FeedbackSpeech": DriverDistracted_FeedbackSpeech,
                "FeedbackVisual": DriverDistracted_FeedbackVisual,
                "ReportEvent": DriverDistracted_ReportEvent,
                "ReportImage": DriverDistracted_ReportImage,
                "ReportFootage": DriverDistracted_ReportFootage
            },
            "DriverIDUpdated": {
                "Activation": DriverIDUpdated_Activation,
                "FeedbackAudio": DriverIDUpdated_FeedbackAudio,
                "FeedbackOutput": DriverIDUpdated_FeedbackOutput,
                "FeedbackSpeech": DriverIDUpdated_FeedbackSpeech,
                "FeedbackVisual": DriverIDUpdated_FeedbackVisual,
                "ReportEvent": DriverIDUpdated_ReportEvent,
                "ReportImage": DriverIDUpdated_ReportImage,
                "ReportFootage": DriverIDUpdated_ReportFootage
            },
            "DriverIdentified": {
                "Activation": DriverIdentified_Activation,
                "FeedbackAudio": DriverIdentified_FeedbackAudio,
                "FeedbackOutput": DriverIdentified_FeedbackOutput,
                "FeedbackSpeech": DriverIdentified_FeedbackSpeech,
                "FeedbackVisual": DriverIdentified_FeedbackVisual,
                "ReportEvent": DriverIdentified_ReportEvent,
                "ReportImage": DriverIdentified_ReportImage,
                "ReportFootage": DriverIdentified_ReportFootage
            },
            "Drowsiness": {
                "Activation": Drowsiness_Activation,
                "FeedbackAudio": Drowsiness_FeedbackAudio,
                "FeedbackOutput": Drowsiness_FeedbackOutput,
                "FeedbackSpeech": Drowsiness_FeedbackSpeech,
                "FeedbackVisual": Drowsiness_FeedbackVisual,
                "ReportEvent": Drowsiness_ReportEvent,
                "ReportImage": Drowsiness_ReportImage,
                "ReportFootage": Drowsiness_ReportFootage
            },
            "EnteredSleepMode": {
                "Activation": EnteredSleepMode_Activation,
                "FeedbackAudio": EnteredSleepMode_FeedbackAudio,
                "FeedbackOutput": EnteredSleepMode_FeedbackOutput,
                "FeedbackSpeech": EnteredSleepMode_FeedbackSpeech,
                "FeedbackVisual": EnteredSleepMode_FeedbackVisual,
                "ReportEvent": EnteredSleepMode_ReportEvent,
                "ReportImage": EnteredSleepMode_ReportImage,
                "ReportFootage": EnteredSleepMode_ReportFootage
            },
            "ExternalEventTriggering": {
                "Activation": ExternalEventTriggering_Activation,
                "FeedbackAudio": ExternalEventTriggering_FeedbackAudio,
                "FeedbackOutput": ExternalEventTriggering_FeedbackOutput,
                "FeedbackSpeech": ExternalEventTriggering_FeedbackSpeech,
                "FeedbackVisual": ExternalEventTriggering_FeedbackVisual,
                "ReportEvent": ExternalEventTriggering_ReportEvent,
                "ReportImage": ExternalEventTriggering_ReportImage,
                "ReportFootage": ExternalEventTriggering_ReportFootage
            },
            "ForwardCollisionWarning": {
                "Activation": FCW_Activation,
                "FeedbackAudio": FCW_FeedbackAudio,
                "FeedbackOutput": FCW_FeedbackOutput,
                "FeedbackSpeech": FCW_FeedbackSpeech,
                "FeedbackVisual": FCW_FeedbackVisual,
                "ReportEvent": FCW_ReportEvent,
                "ReportImage": FCW_ReportImage,
                "ReportFootage": FCW_ReportFootage
            },
            "FwUpdateCompleted": {
                "Activation": FwUpdateCompleted_Activation,
                "FeedbackAudio": FwUpdateCompleted_FeedbackAudio,
                "FeedbackOutput": FwUpdateCompleted_FeedbackOutput,
                "FeedbackSpeech": FwUpdateCompleted_FeedbackSpeech,
                "FeedbackVisual": FwUpdateCompleted_FeedbackVisual,
                "ReportEvent": FwUpdateCompleted_ReportEvent,
                "ReportImage": FwUpdateCompleted_ReportImage,
                "ReportFootage": FwUpdateCompleted_ReportFootage
            }, 
            "FwUpdateFailed": {
                "Activation": FwUpdateFailed_Activation,
                "FeedbackAudio": FwUpdateFailed_FeedbackAudio,
                "FeedbackOutput": FwUpdateFailed_FeedbackOutput,
                "FeedbackSpeech": FwUpdateFailed_FeedbackSpeech,
                "FeedbackVisual": FwUpdateFailed_FeedbackVisual,
                "ReportEvent": FwUpdateFailed_ReportEvent,
                "ReportImage": FwUpdateFailed_ReportImage,
                "ReportFootage": FwUpdateFailed_ReportFootage
            },
            "FwUpdateStarted": {
                "Activation": FwUpdateStarted_Activation,
                "FeedbackAudio": FwUpdateStarted_FeedbackAudio,
                "FeedbackOutput": FwUpdateStarted_FeedbackOutput,
                "FeedbackSpeech": FwUpdateStarted_FeedbackSpeech,
                "FeedbackVisual": FwUpdateStarted_FeedbackVisual,
                "ReportEvent": FwUpdateStarted_ReportEvent,
                "ReportImage": FwUpdateStarted_ReportImage,
                "ReportFootage": FwUpdateStarted_ReportFootage
            },
            "GpsStatusUpdate": {
                "Activation": GPSstatusUpdate_Activation,
                "FeedbackAudio": GPSstatusUpdate_FeedbackAudio,
                "FeedbackOutput": GPSstatusUpdate_FeedbackOutput,
                "FeedbackSpeech": GPSstatusUpdate_FeedbackSpeech,
                "FeedbackVisual": GPSstatusUpdate_FeedbackVisual,
                "ReportEvent": GPSstatusUpdate_ReportEvent,
                "ReportImage": GPSstatusUpdate_ReportImage,
                "ReportFootage": GPSstatusUpdate_ReportFootage
            },
            "Heartbeat": {
                "Activation": Heartbeat_Activation,
                "FeedbackAudio": Heartbeat_FeedbackAudio,
                "FeedbackOutput": Heartbeat_FeedbackOutput,
                "FeedbackSpeech": Heartbeat_FeedbackSpeech,
                "FeedbackVisual": Heartbeat_FeedbackVisual,
                "ReportEvent": Heartbeat_ReportEvent,
                "ReportImage": Heartbeat_ReportImage,
                "ReportFootage": Heartbeat_ReportFootage
            },
            "IgnitionOff": {
                "Activation": IgnitionOFF_Activation,
                "FeedbackAudio": IgnitionOFF_FeedbackAudio,
                "FeedbackOutput": IgnitionOFF_FeedbackOutput,
                "FeedbackSpeech": IgnitionOFF_FeedbackSpeech,
                "FeedbackVisual": IgnitionOFF_FeedbackVisual,
                "ReportEvent": IgnitionOFF_ReportEvent,
                "ReportImage": IgnitionOFF_ReportImage,
                "ReportFootage": IgnitionOFF_ReportFootage
            },
            "IgnitionOn": {
                "Activation": IgnitionON_Activation,
                "FeedbackAudio": IgnitionON_FeedbackAudio,
                "FeedbackOutput": IgnitionON_FeedbackOutput,
                "FeedbackSpeech": IgnitionON_FeedbackSpeech,
                "FeedbackVisual": IgnitionON_FeedbackVisual,
                "ReportEvent": IgnitionON_ReportEvent,
                "ReportImage": IgnitionON_ReportImage,
                "ReportFootage": IgnitionON_ReportFootage
            },
            "LaneDepartureWarning": {
                "Activation": LDW_Activation,
                "FeedbackAudio": LDW_FeedbackAudio,
                "FeedbackOutput": LDW_FeedbackOutput,
                "FeedbackSpeech": LDW_FeedbackSpeech,
                "FeedbackVisual": LDW_FeedbackVisual,
                "ReportEvent": LDW_ReportEvent,
                "ReportImage": LDW_ReportImage,
                "ReportFootage": LDW_ReportFootage
            },
            "LightDrowsiness": {
                /*
                "Activation": (LightDrowsinessActivation === "true"),
                "FeedbackAudio": (LightDrowsinessFeedbackAudio === "true"),
                "FeedbackOutput": LightDrowsinessFeedbackOutput,
                "FeedbackSpeech": (LightDrowsinessFeedbackSpeech === "true"),
                "FeedbackVisual": (LightDrowsinessFeedbackVisual === "true"),
                "ReportEvent": (LightDrowsinessReportEvent === "true"),
                "ReportImage": LightDrowsinessReportImage,
                "ReportFootage": LightDrowsinessReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "MCULOG": {
                "Activation": MCULOG_Activation,
                "FeedbackAudio": MCULOG_FeedbackAudio,
                "FeedbackOutput": MCULOG_FeedbackOutput,
                "FeedbackSpeech": MCULOG_FeedbackSpeech,
                "FeedbackVisual": MCULOG_FeedbackVisual,
                "ReportEvent": MCULOG_ReportEvent,
                "ReportImage": MCULOG_ReportImage,
                "ReportFootage": MCULOG_ReportFootage
            },
            "MovementStarted": {
                "Activation": MovementStarted_Activation,
                "FeedbackAudio": MovementStarted_FeedbackAudio,
                "FeedbackOutput": MovementStarted_FeedbackOutput,
                "FeedbackSpeech": MovementStarted_FeedbackSpeech,
                "FeedbackVisual": MovementStarted_FeedbackVisual,
                "ReportEvent": MovementStarted_ReportEvent,
                "ReportImage": MovementStarted_ReportImage,
                "ReportFootage": MovementStarted_ReportFootage
            },
            "MovementStop": {
                "Activation": MovementStopped_Activation,
                "FeedbackAudio": MovementStopped_FeedbackAudio,
                "FeedbackOutput": MovementStopped_FeedbackOutput,
                "FeedbackSpeech": MovementStopped_FeedbackSpeech,
                "FeedbackVisual": MovementStopped_FeedbackVisual,
                "ReportEvent": MovementStopped_ReportEvent,
                "ReportImage": MovementStopped_ReportImage,
                "ReportFootage": MovementStopped_ReportFootage
            },
            "OverSpeeding": {
                /*
                "Activation": (Overspeeding_Activation === "true"),
                "FeedbackAudio": (Overspeeding_FeedbackAudio === "true"),
                "FeedbackOutput": Overspeeding_FeedbackOutput,
                "FeedbackSpeech": (Overspeeding_FeedbackSpeech === "true"),
                "FeedbackVisual": (Overspeeding_FeedbackVisual === "true"),
                "ReportEvent": (Overspeeding_ReportEvent === "true"),
                "ReportImage": Overspeeding_ReportImage,
                "ReportFootage": Overspeeding_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "PedestrianCollisionWarning": {
                "Activation": PCW_Activation,
                "FeedbackAudio": PCW_FeedbackAudio,
                "FeedbackOutput": PCW_FeedbackOutput,
                "FeedbackSpeech": PCW_FeedbackSpeech,
                "FeedbackVisual": PCW_FeedbackVisual,
                "ReportEvent": PCW_ReportEvent,
                "ReportImage": PCW_ReportImage,
                "ReportFootage": PCW_ReportFootage
            },
            "PhoneUse": {
                "Activation": PhoneUse_Activation,
                "FeedbackAudio": PhoneUse_FeedbackAudio,
                "FeedbackOutput": PhoneUse_FeedbackOutput,
                "FeedbackSpeech": PhoneUse_FeedbackSpeech,
                "FeedbackVisual": PhoneUse_FeedbackVisual,
                "ReportEvent": PhoneUse_ReportEvent,
                "ReportImage": PhoneUse_ReportImage,
                "ReportFootage": PhoneUse_ReportFootage
            },
            "RunningRedLight": {
                /*
                "Activation": (RedLight_Activation === "true"),
                "FeedbackAudio": (RedLight_FeedbackAudio === "true"),
                "FeedbackOutput": RedLight_FeedbackOutput,
                "FeedbackSpeech": (RedLight_FeedbackSpeech === "true"),
                "FeedbackVisual": (RedLight_FeedbackVisual === "true"),
                "ReportEvent": (RedLight_ReportEvent === "true"),
                "ReportImage": RedLight_ReportImage,
                "ReportFootage": RedLight_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "Seatbelt": {
                "Activation": Seatbelt_Activation,
                "FeedbackAudio": Seatbelt_FeedbackAudio,
                "FeedbackOutput": Seatbelt_FeedbackOutput,
                "FeedbackSpeech": Seatbelt_FeedbackSpeech,
                "FeedbackVisual": Seatbelt_FeedbackVisual,
                "ReportEvent": Seatbelt_ReportEvent,
                "ReportImage": Seatbelt_ReportImage,
                "ReportFootage": Seatbelt_ReportFootage
            },
            "Smoking": {
                "Activation": Smoking_Activation,
                "FeedbackAudio": Smoking_FeedbackAudio,
                "FeedbackOutput": Smoking_FeedbackOutput,
                "FeedbackSpeech": Smoking_FeedbackSpeech,
                "FeedbackVisual": Smoking_FeedbackVisual,
                "ReportEvent": Smoking_ReportEvent,
                "ReportImage": Smoking_ReportImage,
                "ReportFootage": Smoking_ReportFootage
            },
            "StopDisobeyed": {
                /*
                "Activation": (StopDisobeyed_Activation === "true"),
                "FeedbackAudio": (StopDisobeyed_FeedbackAudio === "true"),
                "FeedbackOutput": StopDisobeyed_FeedbackOutput,
                "FeedbackSpeech": (StopDisobeyed_FeedbackSpeech === "true"),
                "FeedbackVisual": (StopDisobeyed_FeedbackVisual === "true"),
                "ReportEvent": (StopDisobeyed_ReportEvent === "true"),
                "ReportImage": StopDisobeyed_ReportImage,
                "ReportFootage": StopDisobeyed_ReportFootage
                */
                "Activation": false,
                "FeedbackAudio": false,
                "FeedbackOutput": "None",
                "FeedbackSpeech": false,
                "FeedbackVisual": false,
                "ReportEvent": false,
                "ReportImage": "None",
                "ReportFootage": "None"
            },
            "SystemBoot": {
                "Activation": SystemBoot_Activation,
                "FeedbackAudio": SystemBoot_FeedbackAudio,
                "FeedbackOutput": SystemBoot_FeedbackOutput,
                "FeedbackSpeech": SystemBoot_FeedbackSpeech,
                "FeedbackVisual": SystemBoot_FeedbackVisual,
                "ReportEvent": SystemBoot_ReportEvent,
                "ReportImage": SystemBoot_ReportImage,
                "ReportFootage": SystemBoot_ReportFootage
            },
            "SystemBootFailure": {
                "Activation": SystemBootFailure_Activation,
                "FeedbackAudio": SystemBootFailure_FeedbackAudio,
                "FeedbackOutput": SystemBootFailure_FeedbackOutput,
                "FeedbackSpeech": SystemBootFailure_FeedbackSpeech,
                "FeedbackVisual": SystemBootFailure_FeedbackVisual,
                "ReportEvent": SystemBootFailure_ReportEvent,
                "ReportImage": SystemBootFailure_ReportImage,
                "ReportFootage": SystemBootFailure_ReportFootage
            },
            "SystemError": {
                "Activation": SystemError_Activation,
                "FeedbackAudio": SystemError_FeedbackAudio,
                "FeedbackOutput": SystemError_FeedbackOutput,
                "FeedbackSpeech": SystemError_FeedbackSpeech,
                "FeedbackVisual": SystemError_FeedbackVisual,
                "ReportEvent": SystemError_ReportEvent,
                "ReportImage": SystemError_ReportImage,
                "ReportFootage": SystemError_ReportFootage
            },
            "SystemOk": {
                "Activation": SystemOK_Activation,
                "FeedbackAudio": SystemOK_FeedbackAudio,
                "FeedbackOutput": SystemOK_FeedbackOutput,
                "FeedbackSpeech": SystemOK_FeedbackSpeech,
                "FeedbackVisual": SystemOK_FeedbackVisual,
                "ReportEvent": SystemOK_ReportEvent,
                "ReportImage": SystemOK_ReportImage,
                "ReportFootage": SystemOK_ReportFootage
            },
            "SystemReset": {
                "Activation": SystemReset_Activation,
                "FeedbackAudio": SystemReset_FeedbackAudio,
                "FeedbackOutput": SystemReset_FeedbackOutput,
                "FeedbackSpeech": SystemReset_FeedbackSpeech,
                "FeedbackVisual": SystemReset_FeedbackVisual,
                "ReportEvent": SystemReset_ReportEvent,
                "ReportImage": SystemReset_ReportImage,
                "ReportFootage": SystemReset_ReportFootage
            },
            "Tailgating(HMW)": {
                "Activation": HMW_Activation,
                "FeedbackAudio": HMW_FeedbackAudio,
                "FeedbackOutput": HMW_FeedbackOutput,
                "FeedbackSpeech": HMW_FeedbackSpeech,
                "FeedbackVisual": HMW_FeedbackVisual,
                "ReportEvent": HMW_ReportEvent,
                "ReportImage": HMW_ReportImage,
                "ReportFootage": HMW_ReportFootage
            },
            "TamperingDetection": {
                "Activation": TamperingDetection_Activation,
                "FeedbackAudio": TamperingDetection_FeedbackAudio,
                "FeedbackOutput": TamperingDetection_FeedbackOutput,
                "FeedbackSpeech": TamperingDetection_FeedbackSpeech,
                "FeedbackVisual": TamperingDetection_FeedbackVisual,
                "ReportEvent": TamperingDetection_ReportEvent,
                "ReportImage": TamperingDetection_ReportImage,
                "ReportFootage": TamperingDetection_ReportFootage
            },
            "UnidentifiedUnauthDriver": {
                "Activation": UnidentifiedUnauthDriver_Activation,
                "FeedbackAudio": UnidentifiedUnauthDriver_FeedbackAudio,
                "FeedbackOutput": UnidentifiedUnauthDriver_FeedbackOutput,
                "FeedbackSpeech": UnidentifiedUnauthDriver_FeedbackSpeech,
                "FeedbackVisual": UnidentifiedUnauthDriver_FeedbackVisual,
                "ReportEvent": UnidentifiedUnauthDriver_ReportEvent,
                "ReportImage": UnidentifiedUnauthDriver_ReportImage,
                "ReportFootage": UnidentifiedUnauthDriver_ReportFootage
            },
            "UrbanForwardCollisionWarning": {
                "Activation": UrbanFCW_Activation,
                "FeedbackAudio": UrbanFCW_FeedbackAudio,
                "FeedbackOutput": UrbanFCW_FeedbackOutput,
                "FeedbackSpeech": UrbanFCW_FeedbackSpeech,
                "FeedbackVisual": UrbanFCW_FeedbackVisual,
                "ReportEvent": UrbanFCW_ReportEvent,
                "ReportImage": UrbanFCW_ReportImage,
                "ReportFootage": UrbanFCW_ReportFootage
            }
        },
        "EventsStorageNumber": EventstoStorage,
        "ExtraParameters": {
            "Calibration": {
                "Timeout": CalibrationTimeout
            },
            "CalibrationReferencePoint": {
                "x": 110,
                "y": 0,
                "z": 10
                //"x": CalibrationReferencePoint_x,
                //"y": CalibrationReferencePoint_y,
                //"z": CalibrationReferencePoint_z
            },
            "CipiaLog": true,
            "DeviceTestDefaultResult": true,
            "DsEngineParams": {
                "PostStartSetParams": {
                    "RoadCenterPitchNeg": RoadCenterPitchNeg,
                    "RoadCenterPitchPos": RoadCenterPitchPos,
                    "RoadCenterYawNeg": RoadCenterYawNeg,
                    "RoadCenterYawPos": RoadCenterYawPos,
                    "DistractionSpeedThreshold": DistractionSpeedThreshold,
                    "DrowsinessSpeedThreshold": DrowsinessSpeedThreshold,
                    "PhoneSpeedThreshold": PhoneSpeedThreshold,
                    "SeatbeltSpeedThreshold": SeatbeltSpeedThreshold,
                    "SmokingSpeedThreshold": SmokingSpeedThreshold,
                    "CameraStatusBackoffTimer": CameraStatusBackoffTimer,
                    "DistractionBackoffTimer": DistractionBackoffTimer,
                    "DrowsinessBackoffTimer": DrowsinessBackoffTimer,
                    "PhoneBackoffTimer": PhoneBackoffTimer,
                    "SeatbeltBackoffTimer": SeatbeltBackoffTimer,
                    "SleepBackoffTimer": SleepBackoffTimer,
                    "SmokingBackoffTimer": SmokingBackoffTimer,
                    "DistractionTurnGraceDuration": DistractionTurnGraceDuration,
                    "DriverChangeMinDuration": DriverChangeMinDuration,
                    "EnableYawnBasedDrowsiness": EnableYawnBasedDrowsiness,
                    "NoAoiScore": 165,
                    "WheelAngleThreshold": 6
                },
                "PreStartSetParams": {
                    "EnableImagesIdDB": EnableImagesIdDB,
                    "EnableSleepBlockingByDrowsiness": EnableSleepBlockingByDrowsiness,
                    "InhibitSeatbeltAlertsOnStop": InhibitSeatbeltAlertsOnStop,
                    "LeftHandDrive": LeftHandDrive,
                    "SeatbeltAlertTime": SeatbeltAlertTime,
                    "SleepDuration": SleepDuration,
                    "TrackingGraceTimer": TrackingGraceTimer
                }
            },
            "GSensorWakeThreshold": GSensorWakeThreshold,
            "HeartbeatConfig": {
                "IGNOffInterval": IGNOffInterval,
                "IGNOnInterval": IGNOnInterval,
                "TimeToWaitGPSFix": TimeToWaitGPSFix
            },
            "TripPathConfig": {
                "Enable": TripPathEnable,
                "Distance": TripPathDistance,
                "Time": TripPathTime,
                "Heading": TripPathHeading,
                "InhibitHeartbeat": TripPathInhibitHeartbeat
            },
            "MqttClientAuth": false,
            "OTAClosureEvent": {
                "Asleep": AsleepOTAClosure.checked,
                "DriverDistracted": DriverDistractedOTAClosure.checked,
                "Drowsiness": DrowsinessOTAClosure.checked,
                "FCW": FCWOTAClosure.checked,
                "LDW": LDWOTAClosure.checked,
                "LightDrowsiness": false,
                //"LightDrowsiness": LightDrowsinessOTAClosure.checked,
                "PCW": PCWOTAClosure.checked,
                "PhoneUse": PhoneUseOTAClosure.checked,
                "Seatbelt": SeatbeltOTAClosure.checked,
                "Smoking": SmokingOTAClosure.checked,
                "Tailgating": TailgatingOTAClosure.checked,
                "UFCW": UFCWOTAClosure.checked
            },
            "OTAMessageBackOff": {
                "Asleep": AsleepOTABackOff,
                "DriverDistracted": DriverDistractedOTABackOff,
                "Drowsiness": DrowsinessOTABackOff,
                "FCW": FCWOTABackOff,
                "LDW": LDWOTABackOff,
                "LightDrowsiness": 0,
                //"LightDrowsiness": LightDrowsinessOTABackOff,
                "PCW": PCWOTABackOff,
                "PhoneUse": PhoneUseOTABackOff,
                "Seatbelt": SeatbeltOTABackOff,
                "Smoking": SmokingOTABackOff,
                "Tailgating": TailgatingOTABackOff,
                "UFCW": UFCWOTABackOff
            },
            "OTAupdateEnable": OTAupdateEnable,
            "RemoteBluetoothMAC": "00:00:00:00:00:00",
            "WifiCountryCode": "US"
        },
        GPIO,
        "GPInputs": {
            "ActiveLevel": ActiveLevelGPI,
            "SpecialFunction": FunctionGPI,
            "StateDuration": StateDurationGPI,
            "VoltageThreshold": VoltageThresholdGPI
        },
        "GPOut": {
            "DutyCycle": DutyCycleGPO,
            "Frequency": FrequencyGPO,
            "Length": LengthGPO,
            "Source": SourceGPO
        },
        "GPSFixLossOrRecoveryTime": GPSFixLossOrRecoveryTime,
        "IGNOffFilter": IGNOffFilter,
        "IGNOnFilter": IGNOnFilter,
        "InstallerAccessCode": "Cipia2021$",
        "MainButtonSettings": {
            "DeviceTurnOnEnable": DeviceTurnOnEnable,
            "SelfEventTriggerEnable": SelfEventTriggerEnable
        },
        "MaxHeadingAngleForEvents": MaxHeadingAngleForEvents,
        "MicStatus": micStatus,
        "MinSpeedMonitorThreshold": MinSpeedMonitor,
        "Port": ServerPort,
        "RS232Settings": {
            "Baud": Baudrate,
            "DataBits": Databits,
            "Parity": Parity,
            "StopBit": Stopbits
        },
        "ResolutionOfUploadedImage": photoResolution,
        "ResolutionOfUploadedVideo": videoResolution,
        "SDCardSettings": {
            "EncryptSDCard": SDcardEncryption
        },
        "SIMLOCK": {
            "Active": false,
            "AllowedNetworks": []
        },
    };

    var json_B = {
        "ServerAddress": ServerAddress,
        "ServerPassword": ServerPassword,
        "SleepModeTO": SleepModeTO,
        "SpeakerControl": VolumeControls,
        "SpeakerVolume": VolumeforAlerts,
        "SystemLEDActivation": SystemLEDActivation,
        "TelematicsDataForwardOptions": data2send,
        "VehicleConfig": {
            "VehicleCategory": VehicleCategory
        },
        VideoOverlay,
        "VideosStorageNumber": VideostoStorage,
        "VoiceNotificationsLang": Notificationlanguage,
        "WiFiTO": WiFiTO,
        "WifiSettings": {
            "APModeEnable": true,
            "APPassword": "1234567890",
            "APSSID": "FS-WiFi",
            "Networks":
                JSON_Networks
        },
        "version": "2.0"
    };

    // Define which keys should not be treated as floats in FS10_json
    const nonFloatKeys = [
        "version"
    ];

    FS10_json = {...json_A, ...SerialProtocol_JSON, ...json_B};
    
    //Json = StringifyWithFloats{JSON}[exceptions]
    const jsonString = StringifyWithFloats(FS10_json, nonFloatKeys);
    var jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.value = jsonString;
    update_ADAS_Select();
}

//Generate Stringify JSON with Float numbers
function StringifyWithFloats(objData, exclude) {
    for(let i=0;i<exclude.length;i++){
        getAndModifyValue(objData,exclude[i])
    }
    const jsonResult = JSON.stringify(objData, undefined, 2).replace(/"(-?\d+\.\d+)"/g, (match, capturedValue) => { return `${capturedValue}`; });
    return jsonResult.replace(/\.0\.0\.0\.0\.0/g, "");
}

//Generate with Float numbers
function getAndModifyValue(object, path) {
    var parts = path.split(".");
    var value = object;
    for (var i = 0; i < parts.length - 1; i++) {
        if (value.hasOwnProperty(parts[i])) {
            value = value[parts[i]];
        } else {
            return;
        }
    }
    var lastProperty = parts[parts.length - 1];
    if (value.hasOwnProperty(lastProperty)) {
        value[lastProperty] = `${value[lastProperty]}.0.0.0.0.0`;
    } else {
        return;
    }
}


function download_FS10_JSON(filename) {
    const jsonOutput = document.getElementById("jsonOutput").value;
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(jsonOutput));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function clearJsonInput() {
    var jsonInput = document.getElementById("jsonInput");
    jsonInput.value = "";
}

// Logical values from true/false
function updateSelectValue(selectId, JSONdata, propertyPath) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        }
        else {
            value = "false";
            break;
        }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = value;
}

function updateCheckboxCheckedState(id, JSONdata, propertyPath, imgOnSrc = null, imgOffSrc = null) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        } else {
            value = false;
            break;
        }
    }
    var checkboxElement = document.getElementById(id + 'Checkbox');
    checkboxElement.checked = value;
    if (checkboxElement.checked) {
        updateSummaryCell(id + 'Summary', true, imgOnSrc);
    } else {
        updateSummaryCell(id + 'Summary', false, imgOffSrc);
    }
}

function updateDetectionClosureEvent(id, JSONdata, detectionPath, closurePath, closureEventAdmitted) {
    const fullDetectionPath = "EventsSettings." + detectionPath + ".ReportEvent";
    const detectionSegments = fullDetectionPath.split('.');
    var detectionValue = JSONdata;
    for (var i = 0; i < detectionSegments.length; i++) {
        var segment = detectionSegments[i];
        if (segment in detectionValue) {
            detectionValue = detectionValue[segment];
        } else {
            detectionValue = false;
            break;
        }
    }
    const detectionEventCheckbox = document.getElementById(id + 'DetectionEventCheckbox');
    const closureEventCheckbox = document.getElementById(id + 'ClosureEventCheckbox');
    const summaryCellLabel = id + 'DetectionClosureEventSummary';
    detectionEventCheckbox.checked = detectionValue;
    if (closureEventAdmitted) {
        if (detectionEventCheckbox.checked) {
            closureEventCheckbox.disabled = false;
            const fullClosurePath = "ExtraParameters.OTAClosureEvent." + closurePath;
            const closureSegments = fullClosurePath.split('.');
            closureValue = JSONdata;
            for (var i = 0; i < closureSegments.length; i++) {
                var segment = closureSegments[i];
                if (segment in closureValue) {
                    closureValue = closureValue[segment];
                } else {
                    closureValue = false;
                    break;
                }
            }
            closureEventCheckbox.checked = closureValue;
            if (closureEventCheckbox.checked) {
                updateSummaryCell(summaryCellLabel, true, 'source_img/Detection_Closure_Event_ON.png');
            } else {
                updateSummaryCell(summaryCellLabel, true, 'source_img/Detection_Event_ON.png');
            }
        } else {
            closureEventCheckbox.checked = false;
            closureEventCheckbox.disabled = true;
            updateSummaryCell(summaryCellLabel, false, 'source_img/Detection_Closure_Event_OFF.png');
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

function updateCheckAndImageButton(button, JSONdata, propertyPath, imgOnSrc, imgOffSrc) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        } else {
            value = false;
            break;
        }
    }
    const buttonId = document.getElementById(button + 'Id');
    const buttonCheckbox = document.getElementById(button + 'Checkbox');
    if (buttonCheckbox.disabled) {
        return;
    }
    buttonCheckbox.checked = value;
    if (buttonCheckbox.checked) {
        buttonId.src = imgOnSrc;
        updateSummaryCell(button + 'Summary', true, imgOnSrc);
    } else {
        buttonId.src = imgOffSrc;
        updateSummaryCell(button + 'Summary', false, imgOffSrc);
    }
}

function updateSummaryCell(cell, activate, imgSrc) {
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

// Values from images including inherit from "true/false"
function update_FS10_imageValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "SingleDMS";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

function updateMediaUpload(id, JSONdata, paramPath) {
    const imagePath = "EventsSettings." + paramPath + ".ReportImage";
    const footagePath = "EventsSettings." + paramPath + ".ReportFootage";
    const imageSegments = imagePath.split('.');
    var imageValue = JSONdata;
    for (var i = 0; i < imageSegments.length; i++) {
        var segment = imageSegments[i];
        if (segment in imageValue) {
            imageValue = imageValue[segment];
        } else {
            imageValue = "None";
            break;
        }
    }
    const footageSegments = footagePath.split('.');
    var footageValue = JSONdata;
    for (var i = 0; i < footageSegments.length; i++) {
        var segment = footageSegments[i];
        if (segment in footageValue) {
            footageValue = footageValue[segment];
        } else {
            footageValue = "None";
            break;
        }
    }
    const enableInCabinLabel = id + 'EnableInCabin';
    const imageInCabinLabel = id + 'ReportImageInCabin';
    const timelapseInCabinLabel = id + 'ReportTimelapseInCabin';
    const videoInCabinLabel = id + 'ReportVideoInCabin';
    const enableRoadFacingLabel = id + 'EnableRoadFacing';
    const imageRoadFacingLabel = id + 'ReportImageRoadFacing';
    const timelapseRoadFacingLabel = id + 'ReportTimelapseRoadFacing';
    const videoRoadFacingLabel = id + 'ReportVideoRoadFacing';
    const enableInCabinCheckbox = document.getElementById(enableInCabinLabel + 'Checkbox');
    const imageInCabinCheckbox = document.getElementById(imageInCabinLabel + 'Checkbox');
    const timelapseInCabinCheckbox = document.getElementById(timelapseInCabinLabel + 'Checkbox');
    const videoInCabinCheckbox = document.getElementById(videoInCabinLabel + 'Checkbox');
    const enableRoadFacingCheckbox = document.getElementById(enableRoadFacingLabel + 'Checkbox');
    const imageRoadFacingCheckbox = document.getElementById(imageRoadFacingLabel + 'Checkbox');
    const timelapseRoadFacingCheckbox = document.getElementById(timelapseRoadFacingLabel + 'Checkbox');
    const videoRoadFacingCheckbox = document.getElementById(videoRoadFacingLabel + 'Checkbox');
    updateMediaUploadButton(imageInCabinLabel, false, 'source_img/Image_OFF.png');
    updateMediaUploadButton(timelapseInCabinLabel, false, 'source_img/Timelapse_OFF.png');
    updateMediaUploadButton(imageRoadFacingLabel, false, 'source_img/Image_OFF.png');
    updateMediaUploadButton(timelapseRoadFacingLabel, false, 'source_img/Timelapse_OFF.png');
    updateMediaUploadButton(videoInCabinLabel, false, 'source_img/Video_OFF.png');
    updateMediaUploadButton(videoRoadFacingLabel, false, 'source_img/Video_OFF.png');
    switch (imageValue) {
        case "SingleDMS":
            updateMediaUploadButton(imageInCabinLabel, true, 'source_img/Image_ON.png');
            break;
        case "SingleADAS":
            updateMediaUploadButton(imageRoadFacingLabel, true, 'source_img/Image_ON.png');
            break;
        case "BothSingle":
            updateMediaUploadButton(imageInCabinLabel, true, 'source_img/Image_ON.png');
            updateMediaUploadButton(imageRoadFacingLabel, true, 'source_img/Image_ON.png');
            break;
        case "TimelapseDMS":
            updateMediaUploadButton(timelapseInCabinLabel, true, 'source_img/Timelapse_ON.png');
            footageValue = "None";
            break;
        case "TimelapseADAS":
            updateMediaUploadButton(timelapseRoadFacingLabel, true, 'source_img/Timelapse_ON.png');
            footageValue = "None";
            break;
        case "BothTimelaps":
            updateMediaUploadButton(timelapseInCabinLabel, true, 'source_img/Timelapse_ON.png');
            updateMediaUploadButton(timelapseRoadFacingLabel, true, 'source_img/Timelapse_ON.png');
            footageValue = "None";
            break;
        default:
            break;
    }
    switch (footageValue) {
        case "DMS":
            updateMediaUploadButton(videoInCabinLabel, true, 'source_img/Video_ON.png');
            break;
        case "ADAS":
            updateMediaUploadButton(videoRoadFacingLabel, true, 'source_img/Video_ON.png');
            break;
        case "Both":
            updateMediaUploadButton(videoInCabinLabel, true, 'source_img/Video_ON.png');
            updateMediaUploadButton(videoRoadFacingLabel, true, 'source_img/Video_ON.png');
            break;
        default:
            break;
    }
    enableInCabinCheckbox.checked = (imageInCabinCheckbox.checked || timelapseInCabinCheckbox.checked || videoInCabinCheckbox.checked);
    enableRoadFacingCheckbox.checked = (imageRoadFacingCheckbox.checked || timelapseRoadFacingCheckbox.checked || videoRoadFacingCheckbox.checked);
}

function updateMediaUploadButton (button, activate, imgSrc) {
    const buttonId = document.getElementById(button + 'Id');
    const buttonCheckbox = document.getElementById(button + 'Checkbox');
    buttonCheckbox.checked = activate;
    buttonId.src = imgSrc;
    updateSummaryCell(button + 'Summary', activate, imgSrc);
}

// Values from videos including inherit from "true/false"
function update_FS10_videoValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "DMS";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Values from images including inherit from "true/false"
function update_FS10_OutputValue(selectId, JSONdata, propertyPath) {
    var selectValue = "None";
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }
    if (value === true) {
        selectValue = "GPO";
    } else if (value !== undefined && value !== false) {
            var selectElement = document.getElementById(selectId);
            var options = selectElement.options;
            for (var j = 0; j < options.length; j++) {
                if (options[j].value === value) {
                    selectValue = value;
                    break;
                }
            }
    }
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

function updateFeedbackOutput(id, JSONdata, propertyPath) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        }
        else {
            value = "None";
            break;
        }
    }
    var selectElement = document.getElementById(id + 'Id');
    selectElement.value = value;
    updateFeedbackOutputSummary(id);
}

function updateSelect(id, JSONdata, propertyPath, defaultReturn) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment in value) {
            value = value[segment];
        }
        else {
            value = defaultReturn;
            break;
        }
    }
    value = String(value);
    defaultReturn = String(defaultReturn);
    var selectElement = document.getElementById(id);
    var optionExists = false;
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value == value) {
            optionExists = true;
            break;
        }
    }
    if (!optionExists) {
        value = defaultReturn;
    }
    selectElement.value = value;
}

function updateFeedbackOutputSummary (paramId) {
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

// Updating tables from FS10-Events
function DMS_menuToUpdate(JSONdata){
    // DMS
    //    -Driver Asleep
    updateCheckboxCheckedState("DMS_driverAsleepActivation", JSONdata, "EventsSettings.DriverAsleep.Activation");
    updateCheckAndImageButton("DMS_driverAsleepFeedbackAudio", JSONdata, "EventsSettings.DriverAsleep.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverAsleepFeedbackOutput", JSONdata, "EventsSettings.DriverAsleep.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverAsleepFeedbackSpeech", JSONdata, "EventsSettings.DriverAsleep.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverAsleepFeedbackVisual", JSONdata, "EventsSettings.DriverAsleep.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverAsleep", JSONdata, 'DriverAsleep', 'Asleep', true);
    updateMediaUpload("DMS_driverAsleep", JSONdata, "DriverAsleep");
    
    //    -Drowsiness
    updateCheckboxCheckedState("DMS_drowsinessActivation", JSONdata, "EventsSettings.Drowsiness.Activation");
    updateCheckAndImageButton("DMS_drowsinessFeedbackAudio", JSONdata, "EventsSettings.Drowsiness.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_drowsinessFeedbackOutput", JSONdata, "EventsSettings.Drowsiness.FeedbackOutput");
    updateCheckAndImageButton("DMS_drowsinessFeedbackSpeech", JSONdata, "EventsSettings.Drowsiness.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_drowsinessFeedbackVisual", JSONdata, "EventsSettings.Drowsiness.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_drowsiness", JSONdata, 'Drowsiness', 'Drowsiness', true);
    updateMediaUpload("DMS_drowsiness", JSONdata, "Drowsiness");
    //    -Driver Distracted
    updateCheckboxCheckedState("DMS_driverDistractedActivation", JSONdata, "EventsSettings.DriverDistracted.Activation");
    updateCheckAndImageButton("DMS_driverDistractedFeedbackAudio", JSONdata, "EventsSettings.DriverDistracted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverDistractedFeedbackOutput", JSONdata, "EventsSettings.DriverDistracted.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverDistractedFeedbackSpeech", JSONdata, "EventsSettings.DriverDistracted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverDistractedFeedbackVisual", JSONdata, "EventsSettings.DriverDistracted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverDistracted", JSONdata, 'DriverDistracted', 'DriverDistracted', true);
    updateMediaUpload("DMS_driverDistracted", JSONdata, "DriverDistracted");
    //    -Phone use
    updateCheckboxCheckedState("DMS_phoneUseActivation", JSONdata, "EventsSettings.PhoneUse.Activation");
    updateCheckAndImageButton("DMS_phoneUseFeedbackAudio", JSONdata, "EventsSettings.PhoneUse.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_phoneUseFeedbackOutput", JSONdata, "EventsSettings.PhoneUse.FeedbackOutput");
    updateCheckAndImageButton("DMS_phoneUseFeedbackSpeech", JSONdata, "EventsSettings.PhoneUse.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_phoneUseFeedbackVisual", JSONdata, "EventsSettings.PhoneUse.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_phoneUse", JSONdata, 'PhoneUse', 'PhoneUse', true);
    updateMediaUpload("DMS_phoneUse", JSONdata, "PhoneUse");
    //    -Seatbelt
    updateCheckboxCheckedState("DMS_seatbeltActivation", JSONdata, "EventsSettings.Seatbelt.Activation");
    updateCheckAndImageButton("DMS_seatbeltFeedbackAudio", JSONdata, "EventsSettings.Seatbelt.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_seatbeltFeedbackOutput", JSONdata, "EventsSettings.Seatbelt.FeedbackOutput");
    updateCheckAndImageButton("DMS_seatbeltFeedbackSpeech", JSONdata, "EventsSettings.Seatbelt.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_seatbeltFeedbackVisual", JSONdata, "EventsSettings.Seatbelt.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_seatbelt", JSONdata, 'Seatbelt', 'Seatbelt', true);
    updateMediaUpload("DMS_seatbelt", JSONdata, "Seatbelt");
    //    -Smoking
    updateCheckboxCheckedState("DMS_smokingActivation", JSONdata, "EventsSettings.Smoking.Activation");
    updateCheckAndImageButton("DMS_smokingFeedbackAudio", JSONdata, "EventsSettings.Smoking.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_smokingFeedbackOutput", JSONdata, "EventsSettings.Smoking.FeedbackOutput");
    updateCheckAndImageButton("DMS_smokingFeedbackSpeech", JSONdata, "EventsSettings.Smoking.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_smokingFeedbackVisual", JSONdata, "EventsSettings.Smoking.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_smoking", JSONdata, 'Smoking', 'Smoking', true);
    updateMediaUpload("DMS_smoking", JSONdata, "Smoking");
    //    -Light Drowsiness
    /*
    updateSelectValue("DMS_1x7_select", JSONdata, "EventsSettings.LightDrowsiness.Activation");
    updateSelectValue("DMS_2x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackAudio");
    update_FS10_OutputValue("DMS_3x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackOutput");
    updateSelectValue("DMS_4x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackSpeech");
    updateSelectValue("DMS_5x7_select", JSONdata, "EventsSettings.LightDrowsiness.FeedbackVisual");
    updateSelectValue("DMS_6x7_select", JSONdata, "EventsSettings.LightDrowsiness.ReportEvent");
    update_FS10_imageValue('DMS_7x7_select', JSONdata, "EventsSettings.LightDrowsiness.ReportImage");
    update_FS10_videoValue("DMS_8x7_select", JSONdata, "EventsSettings.LightDrowsiness.ReportFootage");
    */
    //    -Tampering
    updateCheckboxCheckedState("DMS_tamperingDetectionActivation", JSONdata, "EventsSettings.TamperingDetection.Activation");
    updateCheckAndImageButton("DMS_tamperingDetectionFeedbackAudio", JSONdata, "EventsSettings.TamperingDetection.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_tamperingDetectionFeedbackOutput", JSONdata, "EventsSettings.TamperingDetection.FeedbackOutput");
    updateCheckAndImageButton("DMS_tamperingDetectionFeedbackSpeech", JSONdata, "EventsSettings.TamperingDetection.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_tamperingDetectionFeedbackVisual", JSONdata, "EventsSettings.TamperingDetection.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_tamperingDetection", JSONdata, 'TamperingDetection', 'TamperingDetection', false);
    updateMediaUpload("DMS_tamperingDetection", JSONdata, "TamperingDetection");
    //    -Driver Identified
    updateCheckboxCheckedState("DMS_driverIdentifiedActivation", JSONdata, "EventsSettings.DriverIdentified.Activation");
    updateCheckAndImageButton("DMS_driverIdentifiedFeedbackAudio", JSONdata, "EventsSettings.DriverIdentified.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverIdentifiedFeedbackOutput", JSONdata, "EventsSettings.DriverIdentified.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverIdentifiedFeedbackSpeech", JSONdata, "EventsSettings.DriverIdentified.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverIdentifiedFeedbackVisual", JSONdata, "EventsSettings.DriverIdentified.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverIdentified", JSONdata, 'DriverIdentified', 'DriverIdentified', false);
    updateMediaUpload("DMS_driverIdentified", JSONdata, "DriverIdentified");
    //    -Driver Unindentified
    updateCheckboxCheckedState("DMS_driverUnidentifiedActivation", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.Activation");
    updateCheckAndImageButton("DMS_driverUnidentifiedFeedbackAudio", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverUnidentifiedFeedbackOutput", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverUnidentifiedFeedbackSpeech", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverUnidentifiedFeedbackVisual", JSONdata, "EventsSettings.UnidentifiedUnauthDriver.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverUnidentified", JSONdata, 'UnidentifiedUnauthDriver', 'UnidentifiedUnauthDriver', false);
    updateMediaUpload("DMS_driverUnidentified", JSONdata, "UnidentifiedUnauthDriver");
    //    -Driver Disappeared
    updateCheckboxCheckedState("DMS_driverDisappearedActivation", JSONdata, "EventsSettings.DriverDisappeared.Activation");
    updateCheckAndImageButton("DMS_driverDisappearedFeedbackAudio", JSONdata, "EventsSettings.DriverDisappeared.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverDisappearedFeedbackOutput", JSONdata, "EventsSettings.DriverDisappeared.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverDisappearedFeedbackSpeech", JSONdata, "EventsSettings.DriverDisappeared.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverDisappearedFeedbackVisual", JSONdata, "EventsSettings.DriverDisappeared.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverDisappeared", JSONdata, 'DriverDisappeared', 'DriverDisappeared', false);
    updateMediaUpload("DMS_driverDisappeared", JSONdata, "DriverDisappeared");
    //    -Driver Changed
    updateCheckboxCheckedState("DMS_driverChangedActivation", JSONdata, "EventsSettings.DriverChange.Activation");
    updateCheckAndImageButton("DMS_driverChangedFeedbackAudio", JSONdata, "EventsSettings.DriverChange.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverChangedFeedbackOutput", JSONdata, "EventsSettings.DriverChange.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverChangedFeedbackSpeech", JSONdata, "EventsSettings.DriverChange.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverChangedFeedbackVisual", JSONdata, "EventsSettings.DriverChange.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverChanged", JSONdata, 'DriverChange', 'DriverChange', false);
    updateMediaUpload("DMS_driverChanged", JSONdata, "DriverChange");
    //    -Driver ID Updated
    updateCheckboxCheckedState("DMS_driverIdUpdatedActivation", JSONdata, "EventsSettings.DriverIDUpdated.Activation");
    updateCheckAndImageButton("DMS_driverIdUpdatedFeedbackAudio", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("DMS_driverIdUpdatedFeedbackOutput", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackOutput");
    updateCheckAndImageButton("DMS_driverIdUpdatedFeedbackSpeech", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("DMS_driverIdUpdatedFeedbackVisual", JSONdata, "EventsSettings.DriverIDUpdated.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("DMS_driverIdUpdated", JSONdata, 'DriverIDUpdated', 'DriverIDUpdated', false);
    updateMediaUpload("DMS_driverIdUpdated", JSONdata, "DriverIDUpdated");
}
function ADAS_menuToUpdate(JSONdata){
    // ADAS
    //    -LDW
    updateCheckboxCheckedState("ADAS_LDW_Activation", JSONdata, "EventsSettings.LaneDepartureWarning.Activation");
    updateCheckAndImageButton("ADAS_LDW_FeedbackAudio", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("ADAS_LDW_FeedbackOutput", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackOutput");
    updateCheckAndImageButton("ADAS_LDW_FeedbackSpeech", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("ADAS_LDW_FeedbackVisual", JSONdata, "EventsSettings.LaneDepartureWarning.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("ADAS_LDW_", JSONdata, 'LaneDepartureWarning', 'LDW', true);
    updateMediaUpload("ADAS_LDW_", JSONdata, "LaneDepartureWarning");
    //    -Running Red Light (FS10)
    /*
    updateSelectValue("ADAS_1x2_select", JSONdata, "EventsSettings.RunningRedLight.Activation");
    updateSelectValue("ADAS_2x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackOutput");
    updateSelectValue("ADAS_4x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackSpeech");
    updateSelectValue("ADAS_5x2_select", JSONdata, "EventsSettings.RunningRedLight.FeedbackVisual");
    updateSelectValue("ADAS_6x2_select", JSONdata, "EventsSettings.RunningRedLight.ReportEvent");
    update_FS10_imageValue('ADAS_7x2_select', JSONdata, "EventsSettings.RunningRedLight.ReportImage");
    update_FS10_videoValue("ADAS_8x2_select", JSONdata, "EventsSettings.RunningRedLight.ReportFootage");
    */
    //    -Stop Disobeyed (FS10)
    /*
    updateSelectValue("ADAS_1x3_select", JSONdata, "EventsSettings.StopDisobeyed.Activation");
    updateSelectValue("ADAS_2x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackOutput");
    updateSelectValue("ADAS_4x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackSpeech");
    updateSelectValue("ADAS_5x3_select", JSONdata, "EventsSettings.StopDisobeyed.FeedbackVisual");
    updateSelectValue("ADAS_6x3_select", JSONdata, "EventsSettings.StopDisobeyed.ReportEvent");
    update_FS10_imageValue('ADAS_7x3_select', JSONdata, "EventsSettings.StopDisobeyed.ReportImage");
    update_FS10_videoValue("ADAS_8x3_select", JSONdata, "EventsSettings.StopDisobeyed.ReportFootage");
    */
    //    -HMW
    updateCheckboxCheckedState("ADAS_HMW_Activation", JSONdata, "EventsSettings.Tailgating(HMW).Activation");
    updateCheckAndImageButton("ADAS_HMW_FeedbackAudio", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("ADAS_HMW_FeedbackOutput", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackOutput");
    updateCheckAndImageButton("ADAS_HMW_FeedbackSpeech", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("ADAS_HMW_FeedbackVisual", JSONdata, "EventsSettings.Tailgating(HMW).FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("ADAS_HMW_", JSONdata, 'Tailgating(HMW)', 'Tailgating', true);
    updateMediaUpload("ADAS_HMW_", JSONdata, "Tailgating(HMW)");
    //    -UFCW
    updateCheckboxCheckedState("ADAS_UFCW_Activation", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.Activation");
    updateCheckAndImageButton("ADAS_UFCW_FeedbackAudio", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("ADAS_UFCW_FeedbackOutput", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackOutput");
    updateCheckAndImageButton("ADAS_UFCW_FeedbackSpeech", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("ADAS_UFCW_FeedbackVisual", JSONdata, "EventsSettings.UrbanForwardCollisionWarning.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("ADAS_UFCW_", JSONdata, 'UrbanForwardCollisionWarning', 'UFCW', true);
    updateMediaUpload("ADAS_UFCW_", JSONdata, "UrbanForwardCollisionWarning");
    //    -FCW
    updateCheckboxCheckedState("ADAS_FCW_Activation", JSONdata, "EventsSettings.ForwardCollisionWarning.Activation");
    updateCheckAndImageButton("ADAS_FCW_FeedbackAudio", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("ADAS_FCW_FeedbackOutput", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackOutput");
    updateCheckAndImageButton("ADAS_FCW_FeedbackSpeech", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("ADAS_FCW_FeedbackVisual", JSONdata, "EventsSettings.ForwardCollisionWarning.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("ADAS_FCW_", JSONdata, 'ForwardCollisionWarning', 'FCW', true);
    updateMediaUpload("ADAS_FCW_", JSONdata, "ForwardCollisionWarning");
    //    -FS10
    /*
    updateSelectValue("ADAS_1x7_select", JSONdata, "EventsSettings.OverSpeeding.Activation");
    updateSelectValue("ADAS_2x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackAudio");
    update_FS10_OutputValue("ADAS_3x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackOutput");
    updateSelectValue("ADAS_4x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackSpeech");
    updateSelectValue("ADAS_5x7_select", JSONdata, "EventsSettings.OverSpeeding.FeedbackVisual");
    updateSelectValue("ADAS_6x7_select", JSONdata, "EventsSettings.OverSpeeding.ReportEvent");
    update_FS10_imageValue('ADAS_7x7_select', JSONdata, "EventsSettings.OverSpeeding.ReportImage");
    update_FS10_videoValue("ADAS_8x7_select", JSONdata, "EventsSettings.OverSpeeding.ReportFootage");
    */
    //    -PCW
    updateCheckboxCheckedState("ADAS_PCW_Activation", JSONdata, "EventsSettings.PedestrianCollisionWarning.Activation");
    updateCheckAndImageButton("ADAS_PCW_FeedbackAudio", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("ADAS_PCW_FeedbackOutput", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackOutput");
    updateCheckAndImageButton("ADAS_PCW_FeedbackSpeech", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("ADAS_PCW_FeedbackVisual", JSONdata, "EventsSettings.PedestrianCollisionWarning.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("ADAS_PCW_", JSONdata, 'PedestrianCollisionWarning', 'PCW', true);
    updateMediaUpload("ADAS_PCW_", JSONdata, "PedestrianCollisionWarning");
}
function Tracking_menuToUpdate(JSONdata){
    // Tracking
    //    -Ignition ON
    updateCheckboxCheckedState("TES_ignitionOnActivation", JSONdata, "EventsSettings.IgnitionOn.Activation");
    updateCheckAndImageButton("TES_ignitionOnFeedbackAudio", JSONdata, "EventsSettings.IgnitionOn.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_ignitionOnFeedbackOutput", JSONdata, "EventsSettings.IgnitionOn.FeedbackOutput");
    updateCheckAndImageButton("TES_ignitionOnFeedbackSpeech", JSONdata, "EventsSettings.IgnitionOn.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_ignitionOnFeedbackVisual", JSONdata, "EventsSettings.IgnitionOn.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_ignitionOn", JSONdata, 'IgnitionOn', 'IgnitionOn', false);
    updateMediaUpload("TES_ignitionOn", JSONdata, "IgnitionOn");
    //    -Ignition OFF
    updateCheckboxCheckedState("TES_ignitionOffActivation", JSONdata, "EventsSettings.IgnitionOff.Activation");
    updateCheckAndImageButton("TES_ignitionOffFeedbackAudio", JSONdata, "EventsSettings.IgnitionOff.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_ignitionOffFeedbackOutput", JSONdata, "EventsSettings.IgnitionOff.FeedbackOutput");
    updateCheckAndImageButton("TES_ignitionOffFeedbackSpeech", JSONdata, "EventsSettings.IgnitionOff.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_ignitionOffFeedbackVisual", JSONdata, "EventsSettings.IgnitionOff.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_ignitionOff", JSONdata, 'IgnitionOff', 'IgnitionOff', false);
    updateMediaUpload("TES_ignitionOff", JSONdata, "IgnitionOff");
    //    -Movement Started
    updateCheckboxCheckedState("TES_movementStartedActivation", JSONdata, "EventsSettings.MovementStarted.Activation");
    updateCheckAndImageButton("TES_movementStartedFeedbackAudio", JSONdata, "EventsSettings.MovementStarted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_movementStartedFeedbackOutput", JSONdata, "EventsSettings.MovementStarted.FeedbackOutput");
    updateCheckAndImageButton("TES_movementStartedFeedbackSpeech", JSONdata, "EventsSettings.MovementStarted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_movementStartedFeedbackVisual", JSONdata, "EventsSettings.MovementStarted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_movementStarted", JSONdata, 'MovementStarted', 'MovementStarted', false);
    updateMediaUpload("TES_movementStarted", JSONdata, "MovementStarted");
    //    -Movement Stopped
    updateCheckboxCheckedState("TES_movementStoppedActivation", JSONdata, "EventsSettings.MovementStop.Activation");
    updateCheckAndImageButton("TES_movementStoppedFeedbackAudio", JSONdata, "EventsSettings.MovementStop.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_movementStoppedFeedbackOutput", JSONdata, "EventsSettings.MovementStop.FeedbackOutput");
    updateCheckAndImageButton("TES_movementStoppedFeedbackSpeech", JSONdata, "EventsSettings.MovementStop.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_movementStoppedFeedbackVisual", JSONdata, "EventsSettings.MovementStop.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_movementStopped", JSONdata, 'MovementStop', 'MovementStop', false);
    updateMediaUpload("TES_movementStopped", JSONdata, "MovementStop");
    //    -Heartbeat
    updateCheckboxCheckedState("TES_heartbeatActivation", JSONdata, "EventsSettings.Heartbeat.Activation");
    updateCheckAndImageButton("TES_heartbeatFeedbackAudio", JSONdata, "EventsSettings.Heartbeat.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_heartbeatFeedbackOutput", JSONdata, "EventsSettings.Heartbeat.FeedbackOutput");
    updateCheckAndImageButton("TES_heartbeatFeedbackSpeech", JSONdata, "EventsSettings.Heartbeat.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_heartbeatFeedbackVisual", JSONdata, "EventsSettings.Heartbeat.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_heartbeat", JSONdata, 'Heartbeat', 'Heartbeat', false);
    updateMediaUpload("TES_heartbeat", JSONdata, "Heartbeat");
    //    -GPS Status Update
    updateCheckboxCheckedState("TES_GPS_updateStatusActivation", JSONdata, "EventsSettings.GpsStatusUpdate.Activation");
    updateCheckAndImageButton("TES_GPS_updateStatusFeedbackAudio", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_GPS_updateStatusFeedbackOutput", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackOutput");
    updateCheckAndImageButton("TES_GPS_updateStatusFeedbackSpeech", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_GPS_updateStatusFeedbackVisual", JSONdata, "EventsSettings.GpsStatusUpdate.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_GPS_updateStatus", JSONdata, 'GpsStatusUpdate', 'GpsStatusUpdate', false);
    updateMediaUpload("TES_GPS_updateStatus", JSONdata, "GpsStatusUpdate");
    //    -TripPath
    updateCheckboxCheckedState("TES_tripPathActivation", JSONdata, "EventsSettings.TripPath.Activation");
    updateCheckAndImageButton("TES_tripPathFeedbackAudio", JSONdata, "EventsSettings.TripPath.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("TES_tripPathFeedbackOutput", JSONdata, "EventsSettings.TripPath.FeedbackOutput");
    updateCheckAndImageButton("TES_tripPathFeedbackSpeech", JSONdata, "EventsSettings.TripPath.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("TES_tripPathFeedbackVisual", JSONdata, "EventsSettings.TripPath.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("TES_tripPath", JSONdata, 'TripPath', 'TripPath', false);
    updateMediaUpload("TES_tripPath", JSONdata, "TripPath");
}
function System_wo_event_menuToUpdate(JSONdata){
    //System Events without Reason
    //    -Camera Calibration Completed
    updateCheckboxCheckedState("SI_cameraCalibrationOkActivation", JSONdata, "EventsSettings.CameraCalibrationCompleted.Activation");
    updateCheckAndImageButton("SI_cameraCalibrationOkFeedbackAudio", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_cameraCalibrationOkFeedbackOutput", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackOutput");
    updateCheckAndImageButton("SI_cameraCalibrationOkFeedbackSpeech", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_cameraCalibrationOkFeedbackVisual", JSONdata, "EventsSettings.CameraCalibrationCompleted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_cameraCalibrationOk", JSONdata, 'CameraCalibrationCompleted', 'CameraCalibrationCompleted', false);
    updateMediaUpload("SI_cameraCalibrationOk", JSONdata, "CameraCalibrationCompleted");
    //    -Camera Calibration Failed
    updateCheckboxCheckedState("SI_cameraCalibrationFailedActivation", JSONdata, "EventsSettings.CameraCalibrationFailed.Activation");
    updateCheckAndImageButton("SI_cameraCalibrationFailedFeedbackAudio", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_cameraCalibrationFailedFeedbackOutput", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackOutput");
    updateCheckAndImageButton("SI_cameraCalibrationFailedFeedbackSpeech", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_cameraCalibrationFailedFeedbackVisual", JSONdata, "EventsSettings.CameraCalibrationFailed.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_cameraCalibrationFailed", JSONdata, 'CameraCalibrationFailed', 'CameraCalibrationFailed', false);
    updateMediaUpload("SI_cameraCalibrationFailed", JSONdata, "CameraCalibrationFailed");
    //    -Accelerometer Calibration Complete
    updateCheckboxCheckedState("SI_accelCalibrationOkActivation", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.Activation");
    updateCheckAndImageButton("SI_accelCalibrationOkFeedbackAudio", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_accelCalibrationOkFeedbackOutput", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackOutput");
    updateCheckAndImageButton("SI_accelCalibrationOkFeedbackSpeech", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_accelCalibrationOkFeedbackVisual", JSONdata, "EventsSettings.3DAccelerometerCalibrationCompleted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_accelCalibrationOk", JSONdata, '3DAccelerometerCalibrationCompleted', '3DAccelerometerCalibrationCompleted', false);
    updateMediaUpload("SI_accelCalibrationOk", JSONdata, "3DAccelerometerCalibrationCompleted");
    //    -Entering Sleep Mode
    updateCheckboxCheckedState("SI_enteringSleepModeActivation", JSONdata, "EventsSettings.EnteredSleepMode.Activation");
    updateCheckAndImageButton("SI_enteringSleepModeFeedbackAudio", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_enteringSleepModeFeedbackOutput", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackOutput");
    updateCheckAndImageButton("SI_enteringSleepModeFeedbackSpeech", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_enteringSleepModeFeedbackVisual", JSONdata, "EventsSettings.EnteredSleepMode.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_enteringSleepMode", JSONdata, 'EnteredSleepMode', 'EnteredSleepMode', false);
    updateMediaUpload("SI_enteringSleepMode", JSONdata, "EnteredSleepMode");
    //    -FW Update Started
    updateCheckboxCheckedState("SI_firmwareUpdateStartedActivation", JSONdata, "EventsSettings.FwUpdateStarted.Activation");
    updateCheckAndImageButton("SI_firmwareUpdateStartedFeedbackAudio", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_firmwareUpdateStartedFeedbackOutput", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackOutput");
    updateCheckAndImageButton("SI_firmwareUpdateStartedFeedbackSpeech", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_firmwareUpdateStartedFeedbackVisual", JSONdata, "EventsSettings.FwUpdateStarted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_firmwareUpdateStarted", JSONdata, 'FwUpdateStarted', 'FwUpdateStarted', false);
    updateMediaUpload("SI_firmwareUpdateStarted", JSONdata, "FwUpdateStarted");
    //    -FW Update Completed
    updateCheckboxCheckedState("SI_firmwareUpdateOK_Activation", JSONdata, "EventsSettings.FwUpdateCompleted.Activation");
    updateCheckAndImageButton("SI_firmwareUpdateOK_FeedbackAudio", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_firmwareUpdateOK_FeedbackOutput", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackOutput");
    updateCheckAndImageButton("SI_firmwareUpdateOK_FeedbackSpeech", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_firmwareUpdateOK_FeedbackVisual", JSONdata, "EventsSettings.FwUpdateCompleted.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_firmwareUpdateOK_", JSONdata, 'FwUpdateCompleted', 'FwUpdateCompleted', false);
    updateMediaUpload("SI_firmwareUpdateOK_", JSONdata, "FwUpdateCompleted");
    //    -FW Update Failed
    updateCheckboxCheckedState("SI_firmwareUpdateFailedActivation", JSONdata, "EventsSettings.FwUpdateFailed.Activation");
    updateCheckAndImageButton("SI_firmwareUpdateFailedFeedbackAudio", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_firmwareUpdateFailedFeedbackOutput", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackOutput");
    updateCheckAndImageButton("SI_firmwareUpdateFailedFeedbackSpeech", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_firmwareUpdateFailedFeedbackVisual", JSONdata, "EventsSettings.FwUpdateFailed.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_firmwareUpdateFailed", JSONdata, 'FwUpdateFailed', 'FwUpdateFailed', false);
    updateMediaUpload("SI_firmwareUpdateFailed", JSONdata, "FwUpdateFailed");
    //    -System Boot
    updateCheckboxCheckedState("SI_systemBootActivation", JSONdata, "EventsSettings.SystemBoot.Activation");
    updateCheckAndImageButton("SI_systemBootFeedbackAudio", JSONdata, "EventsSettings.SystemBoot.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_systemBootFeedbackOutput", JSONdata, "EventsSettings.SystemBoot.FeedbackOutput");
    updateCheckAndImageButton("SI_systemBootFeedbackSpeech", JSONdata, "EventsSettings.SystemBoot.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_systemBootFeedbackVisual", JSONdata, "EventsSettings.SystemBoot.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_systemBoot", JSONdata, 'SystemBoot', 'SystemBoot', false);
    updateMediaUpload("SI_systemBoot", JSONdata, "SystemBoot");
    //    -System Boot Failure
    updateCheckboxCheckedState("SI_systemBootFailureActivation", JSONdata, "EventsSettings.SystemBootFailure.Activation");
    updateCheckAndImageButton("SI_systemBootFailureFeedbackAudio", JSONdata, "EventsSettings.SystemBootFailure.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_systemBootFailureFeedbackOutput", JSONdata, "EventsSettings.SystemBootFailure.FeedbackOutput");
    updateCheckAndImageButton("SI_systemBootFailureFeedbackSpeech", JSONdata, "EventsSettings.SystemBootFailure.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_systemBootFailureFeedbackVisual", JSONdata, "EventsSettings.SystemBootFailure.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_systemBootFailure", JSONdata, 'SystemBootFailure', 'SystemBootFailure', false);
    updateMediaUpload("SI_systemBootFailure", JSONdata, "SystemBootFailure");
}
function System_w_event_menuToUpdate(JSONdata){
    //System Events with Reason 
    //    -External Event Triggering
    updateCheckboxCheckedState("SI_externalEventTriggeringActivation", JSONdata, "EventsSettings.ExternalEventTriggering.Activation");
    updateCheckAndImageButton("SI_externalEventTriggeringFeedbackAudio", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_externalEventTriggeringFeedbackOutput", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackOutput");
    updateCheckAndImageButton("SI_externalEventTriggeringFeedbackSpeech", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_externalEventTriggeringFeedbackVisual", JSONdata, "EventsSettings.ExternalEventTriggering.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_externalEventTriggering", JSONdata, 'ExternalEventTriggering', 'ExternalEventTriggering', false);
    updateMediaUpload("SI_externalEventTriggering", JSONdata, "ExternalEventTriggering");
    //    -Application Error
    updateCheckboxCheckedState("SI_applicationErrorActivation", JSONdata, "EventsSettings.ApplicationError.Activation");
    updateCheckAndImageButton("SI_applicationErrorFeedbackAudio", JSONdata, "EventsSettings.ApplicationError.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_applicationErrorFeedbackOutput", JSONdata, "EventsSettings.ApplicationError.FeedbackOutput");
    updateCheckAndImageButton("SI_applicationErrorFeedbackSpeech", JSONdata, "EventsSettings.ApplicationError.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_applicationErrorFeedbackVisual", JSONdata, "EventsSettings.ApplicationError.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_applicationError", JSONdata, 'ApplicationError', 'ApplicationError', false);
    updateMediaUpload("SI_applicationError", JSONdata, "ApplicationError");
    //    -Camera Error
    updateCheckboxCheckedState("SI_cameraErrorActivation", JSONdata, "EventsSettings.CameraError.Activation");
    updateCheckAndImageButton("SI_cameraErrorFeedbackAudio", JSONdata, "EventsSettings.CameraError.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_cameraErrorFeedbackOutput", JSONdata, "EventsSettings.CameraError.FeedbackOutput");
    updateCheckAndImageButton("SI_cameraErrorFeedbackSpeech", JSONdata, "EventsSettings.CameraError.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_cameraErrorFeedbackVisual", JSONdata, "EventsSettings.CameraError.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_cameraError", JSONdata, 'CameraError', 'CameraError', false);
    updateMediaUpload("SI_cameraError", JSONdata, "CameraError");
    //    -System OK
    updateCheckboxCheckedState("SI_systemOK_Activation", JSONdata, "EventsSettings.SystemOk.Activation");
    updateCheckAndImageButton("SI_systemOK_FeedbackAudio", JSONdata, "EventsSettings.SystemOk.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_systemOK_FeedbackOutput", JSONdata, "EventsSettings.SystemOk.FeedbackOutput");
    updateCheckAndImageButton("SI_systemOK_FeedbackSpeech", JSONdata, "EventsSettings.SystemOk.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_systemOK_FeedbackVisual", JSONdata, "EventsSettings.SystemOk.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_systemOK_", JSONdata, 'SystemOk', 'SystemOk', false);
    updateMediaUpload("SI_systemOK_", JSONdata, "SystemOk");
    //    -System Reset
    updateCheckboxCheckedState("SI_systemResetActivation", JSONdata, "EventsSettings.SystemReset.Activation");
    updateCheckAndImageButton("SI_systemResetFeedbackAudio", JSONdata, "EventsSettings.SystemReset.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_systemResetFeedbackOutput", JSONdata, "EventsSettings.SystemReset.FeedbackOutput");
    updateCheckAndImageButton("SI_systemResetFeedbackSpeech", JSONdata, "EventsSettings.SystemReset.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_systemResetFeedbackVisual", JSONdata, "EventsSettings.SystemReset.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_systemReset", JSONdata, 'SystemReset', 'SystemReset', false);
    updateMediaUpload("SI_systemReset", JSONdata, "SystemReset");
    //    -System Error
    updateCheckboxCheckedState("SI_systemErrorActivation", JSONdata, "EventsSettings.SystemError.Activation");
    updateCheckAndImageButton("SI_systemErrorFeedbackAudio", JSONdata, "EventsSettings.SystemError.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_systemErrorFeedbackOutput", JSONdata, "EventsSettings.SystemError.FeedbackOutput");
    updateCheckAndImageButton("SI_systemErrorFeedbackSpeech", JSONdata, "EventsSettings.SystemError.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_systemErrorFeedbackVisual", JSONdata, "EventsSettings.SystemError.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_systemError", JSONdata, 'SystemError', 'SystemError', false);
    updateMediaUpload("SI_systemError", JSONdata, "SystemError");
    //    -MCULOG
    updateCheckboxCheckedState("SI_MCU_LogActivation", JSONdata, "EventsSettings.MCULOG.Activation");
    updateCheckAndImageButton("SI_MCU_LogFeedbackAudio", JSONdata, "EventsSettings.MCULOG.FeedbackAudio", 'source_img/Audio_ON.png', 'source_img/Audio_OFF.png');
    updateFeedbackOutput("SI_MCU_LogFeedbackOutput", JSONdata, "EventsSettings.MCULOG.FeedbackOutput");
    updateCheckAndImageButton("SI_MCU_LogFeedbackSpeech", JSONdata, "EventsSettings.MCULOG.FeedbackSpeech", 'source_img/Speech_ON.png', 'source_img/Speech_OFF.png');
    updateCheckAndImageButton("SI_MCU_LogFeedbackVisual", JSONdata, "EventsSettings.MCULOG.FeedbackVisual", 'source_img/Visual_ON.png', 'source_img/Visual_OFF.png');
    updateDetectionClosureEvent("SI_MCU_Log", JSONdata, 'MCULOG', 'MCULOG', false);
    updateMediaUpload("SI_MCU_Log", JSONdata, "MCULOG");
}

// Updating ComboBox from Numerical Values
function updateAngleValue(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim, arrayValues) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        }
        else {
            value = undefined;
            break;
        }
    }
    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        }
        else if (value < min_Lim) {
            selectValue = min_Lim;
        }
        else {
            selectValue = value;
        }
    }
    selectValue = findNearestValue(selectValue, arrayValues);
    //console.log(selectValue);
    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating ComboBox from Numerical Values
function updateNumericValue(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;

    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        }
        else {
            value = undefined;
            break;
        }
    }

    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        }
        if (value < min_Lim) {
            selectValue = min_Lim;
        } 
        else {
            selectValue = value;
        }
    }

    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

function updateSliderControlInteger(id, JSONdata, propertyPath) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = NaN;
            break;
        }
    }
    const range = document.getElementById(id + "Range");
    const number = document.getElementById(id + "Number");
    let minValue = parseInt(range.min, 10);
    let maxValue = parseInt(range.max, 10);
    if (!isNaN(value)) {
        value = parseInt(value, 10);
        if (value < minValue) {
            value = minValue;
        } else if (value > maxValue) {
            value = maxValue;
        }
    } else {
        value = parseInt((maxValue - minValue) / 2 + minValue, 10);
    }
    range.value = value;
    number.value = value;
    updateSliderControlSummary(id + "Summary", value);
}

function updateCheckboxAndSlider(id, JSONdata, propertyPath) {
    const checkbox = document.getElementById(id + "Checkbox");
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = NaN;
            break;
        }
    }
    if (!isNaN(value)) {
        value = parseInt(value, 10);
    } else {
        value = 0;
    }
    if (value == 0) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
        updateSliderControlInteger(id, JSONdata, propertyPath);
    }
}

function updateSliderControlDecimal(id, JSONdata, propertyPath) {
    var segments = propertyPath.split('.');
    var value = JSONdata;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = NaN;
            break;
        }
    }
    const range = document.getElementById(id + "Range");
    const number = document.getElementById(id + "Number");
    let minValue = parseInt(range.min, 10);
    let maxValue = parseInt(range.max, 10);
    if (!isNaN(value)) {
        value = parseFloat(value).toFixed(1);
        value = parseFloat(value);
        if (value < minValue) {
            value = parseFloat(minValue).toFixed(1);
            value = parseFloat(value);
        } else if (value > maxValue) {
            value = parseFloat(maxValue).toFixed(1);
            value = parseFloat(value);
        }
    } else {
        value = parseFloat((maxValue - minValue) / 2 + minValue).toFixed(1);
        value = parseFloat(value);
    }
    range.value = value;
    number.value = value;
    updateSliderControlSummary(id + "Summary", value);
}


function updateSliderControlSummary(id, value) {
    const summaryCell = document.getElementById(id);
    if (summaryCell) {
        if (value > 0) {
            summaryCell.classList.remove('inactive-summary-cell');
            summaryCell.classList.add('active-summary-cell');
        } else {
            summaryCell.classList.remove('active-summary-cell');
            summaryCell.classList.add('inactive-summary-cell');
        }
        const summaryCellValue = document.getElementById(id + "Value");
        summaryCellValue.textContent = value;
    }
}

// Updating ComboBox from Numerical Values with 0 as disabled option
function updateNumericValueWithDisabled(selectId, JSONdata, propertyPath, nominal, min_Lim, max_Lim) {
    var selectValue = nominal;
    var segments = propertyPath.split('.');
    var value = JSONdata;

    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (value && segment in value) {
            value = value[segment];
        } else {
            value = undefined;
            break;
        }
    }

    if (value !== undefined) {
        if (value > max_Lim) {
            selectValue = max_Lim;
        } else if (value < min_Lim && value !== 0) {
            selectValue = min_Lim;
        } else {
            selectValue = value;
        }
    }

    var selectElement = document.getElementById(selectId);
    selectElement.value = selectValue;
}

// Updating ComboBox from String Values
function updateListValue(selectId, JSONdata, propertyPath, nominal) {
    var selectElement = document.getElementById(selectId);
    var propertyValue = getProperty(JSONdata, propertyPath);
    if (propertyValue !== undefined && isOptionExist(selectElement, propertyValue)) {
        selectElement.value = propertyValue;
    }
    else {
        selectElement.value = nominal;
    }
}

// Support Function for updateListValues & selectRadioCategory
function getProperty(obj, propertyPath) {
    var properties = propertyPath.split('.');
    var value = obj;
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (value && property in value) {
            value = value[property];
        }
        else {
            value = undefined;
            break;
        }
    }
    return value;
}

// Support Function for updateListValues
function isOptionExist(selectElement, value) {
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            return true;
        }
    }
    return false;
}

// Updating RadioButtons
function selectRadioCategory(radioName, JSONdata, propertyPath, nominal) {
    var radioButtons = document.getElementsByName(radioName);
    var propertyValue = getProperty(JSONdata, propertyPath);

    if (propertyValue !== undefined && isRadioButtonValueExist(radioButtons, propertyValue)) {
        var radioButton = document.getElementById(radioName + "_" + propertyValue);
        radioButton.checked = true;
    } 
    else {
        var nominalRadioButton = document.getElementById(radioName + "_" + nominal);
        nominalRadioButton.checked = true;
    }
}

// Support Function for selectRadioCategory
function isRadioButtonValueExist(radioButtons, value) {
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === value) {
            return true;
        }
    }
    return false;
}

//Updating Radio buttons
function updateRadioButton_fromJSON(JSONdata){
    // RadioButtons
    selectRadioCategory("vehicleType", JSONdata, "VehicleConfig.VehicleCategory", "Private");
    selectRadioCategory("deviceType", JSONdata, "AdasConfig.Type", "Disabled");
}

//Updating Text Inputs
function updateTextLabel_fromJSON(JSONdata){
    // APN SETTINGS
    document.getElementById("SI_APN_SettingsTextId").value = JSONdata.APNSettings.APN;
    document.getElementById("SI_APN_UserTextId").value = JSONdata.APNSettings.User;
    document.getElementById("SI_APN_PasswordTextId").value = JSONdata.APNSettings.Password;
    changeAPNFormat('SI_APN_SettingsTextId', 'APN');
    changeAPNFormat('SI_APN_UserTextId', 'user');
    changeAPNFormat('SI_APN_PasswordTextId', 'pass');
    // Server Settings
    document.getElementById("MW_check").checked = true;
    document.getElementById("ServerAddress").value = JSONdata.ServerAddress;
    document.getElementById("ServerPassword").value = JSONdata.ServerPassword;
    document.getElementById("Port").value = JSONdata.Port;
    ServerEnableColor('MW_check', 'ServerAddress', 'ServerPassword', 'Port');    
}

//Updating Check Boxes
function updateCheckBoxValue(checkboxId, JSONdata, propertyPath) {
    var checkboxElement = document.getElementById(checkboxId);
    var propertyValue = getProperty(JSONdata, propertyPath);
    if (propertyValue !== undefined) {
        checkboxElement.checked = !!propertyValue;
    } 
    else{
        checkboxElement.checked = false;
    }
}

// Updating Combo boxes based on values and variable limits
function updateComboBox_fromJSON(JSONdata){
    //Driver Position
    updateSelectValue("LeftHandDrive", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.LeftHandDrive");

    // Global Parameters for Driver's Feedback
    updateCheckAndImageButton("GP_beepsActivation", JSONdata, "DriverFeedbackOptions.Beeps", 'source_img/GP_Beeps_Activation_ON.png', 'source_img/GP_Beeps_Activation_OFF.png');
    updateCheckAndImageButton("GP_voiceActivation", JSONdata, "DriverFeedbackOptions.Voice", 'source_img/GP_Voice_Activation_ON.png', 'source_img/GP_Voice_Activation_OFF.png');
    updateCheckAndImageButton("GP_LED_activation", JSONdata, "DriverFeedbackOptions.LED", 'source_img/GP_LED_Activation_ON.png', 'source_img/GP_LED_Activation_OFF.png');
    updateCheckAndImageButton("GP_system_LED_activation", JSONdata, "SystemLEDActivation", 'source_img/GP_System_LED_Activation_ON.png', 'source_img/GP_System_LED_Activation_OFF.png');
    
    // Driver Angles
    updateAngleValue("RoadCenterPitchPos", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterPitchPos", 15, 0, 45, PitchPos);
    updateAngleValue("RoadCenterPitchNeg", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterPitchNeg", -15, -45, 0, PitchNeg);
    updateAngleValue("RoadCenterYawPos", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterYawPos", 20, 0, 90, YawPos);
    updateAngleValue("RoadCenterYawNeg", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.RoadCenterYawNeg", -20, -90, 0, YawNeg);

    // Driver Distraction
    updateNumericValue("MaxHeadingAngleForEvents", JSONdata, "MaxHeadingAngleForEvents", 15, 2, 30);
    updateSliderControlInteger("DMS_driverDisappearedTimeThreshold", JSONdata, "DriverDisappearTimeThreshold");
    
    // Movement
    updateSliderControlInteger("TES_movementStartedSpeedThreshold", JSONdata, "MinSpeedMonitorThreshold");
    updateSliderControlInteger("TES_movementStoppedSpeedThreshold", JSONdata, "MinSpeedMonitorThreshold");
    
    // SpeedThresholds
    updateSliderControlInteger("DMS_driverDistractedSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionSpeedThreshold");
    updateSliderControlInteger("DMS_driverAsleepSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DrowsinessSpeedThreshold");
    updateSliderControlInteger("DMS_drowsinessSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DrowsinessSpeedThreshold");
    updateSliderControlInteger("DMS_phoneUseSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.PhoneSpeedThreshold");
    updateSliderControlInteger("DMS_seatbeltSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SeatbeltSpeedThreshold");
    updateSliderControlInteger("DMS_smokingSpeedThreshold", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SmokingSpeedThreshold");
    updateSliderControlDecimal("DMS_driverDistractedTurnGraceTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionTurnGraceDuration");
    updateSliderControlInteger("DMS_driverDisappearedTrackingGraceTimer", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.TrackingGraceTimer");
    updateSliderControlDecimal("DMS_driverChangedMinimum", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DriverChangeMinDuration");
    updateSliderControlInteger("DMS_seatbeltAlertTime", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.SeatbeltAlertTime");
    updateSliderControlDecimal("DMS_driverAsleepSleepDuration", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.SleepDuration");
    
    //Enables Post and Pre 
    updateCheckboxCheckedState("DMS_driverAsleepSleepBlockingEnable", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.EnableSleepBlockingByDrowsiness");
    updateCheckboxCheckedState("DMS_seatbeltInhibitAlertsOnStop", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.InhibitSeatbeltAlertsOnStop");
    updateCheckboxCheckedState("DMS_drowsinessYawnEnable", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.EnableYawnBasedDrowsiness");
    updateCheckboxCheckedState("DMS_driverIdentifiedEnableDatabase", JSONdata, "ExtraParameters.DsEngineParams.PreStartSetParams.EnableImagesIdDB");
    
    //Messages Backoff
    updateSliderControlInteger("DMS_driverAsleepMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.Asleep");
    updateSliderControlInteger("DMS_driverDistractedMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.DriverDistracted");
    updateSliderControlInteger("DMS_drowsinessMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.Drowsiness");
    updateSliderControlInteger("ADAS_FCW_MessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.FCW");
    updateSliderControlInteger("ADAS_LDW_MessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.LDW");
    updateSliderControlInteger("ADAS_PCW_MessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.PCW");
    updateSliderControlInteger("DMS_phoneUseMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.PhoneUse");
    updateSliderControlInteger("DMS_seatbeltMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.Seatbelt");
    updateSliderControlInteger("DMS_smokingMessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.Smoking");
    updateSliderControlInteger("ADAS_HMW_MessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.Tailgating");
    updateSliderControlInteger("ADAS_UFCW_MessageBackoff", JSONdata, "ExtraParameters.OTAMessageBackOff.UFCW");
    //updateNumericValue("LightDrowsinessOTABackOff", JSONdata, "ExtraParameters.OTAMessageBackOff.LightDrowsiness", 15, 0, 30);

    // Backoff Timers
    updateSliderControlInteger("SI_cameraErrorFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.CameraStatusBackoffTimer");
    updateSliderControlInteger("DMS_driverDistractedFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DistractionBackoffTimer");
    updateSliderControlInteger("DMS_drowsinessFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.DrowsinessBackoffTimer");
    updateSliderControlInteger("DMS_phoneUseFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.PhoneBackoffTimer");
    updateSliderControlInteger("DMS_seatbeltFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SeatbeltBackoffTimer");
    updateSliderControlInteger("DMS_driverAsleepFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SleepBackoffTimer");
    updateSliderControlInteger("DMS_smokingFeedbackBackoff", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.SmokingBackoffTimer");
    //updateNumericValue("LightDrowsinessBackoffTimer", JSONdata, "ExtraParameters.DsEngineParams.PostStartSetParams.LightDrowsinessBackoffTimer", 900, 30, 1800);

    //Communication Watchdog
    updateSliderControlInteger("SI_communicationsWatchdogKeepAlive", JSONdata, "CommunicationWatchdog.KeepAliveInSec");
    updateSliderControlInteger("SI_communicationsWatchdogModemReset", JSONdata, "CommunicationWatchdog.ModemResetHWTimeInMin");
    updateSliderControlInteger("SI_communicationsWatchdogModemResetSignal", JSONdata, "CommunicationWatchdog.ModemResetSignalTimeInMin");
    updateCheckboxCheckedState("SI_communicationsWatchdogRepeatCycle", JSONdata, "CommunicationWatchdog.RepeatCycleUntilCommRecovery");
    updateSliderControlInteger("SI_communicationsWatchdogSelfPowerRecycle", JSONdata, "CommunicationWatchdog.SelfPowerRecycleTimeInMin");
    updateSliderControlInteger("SI_communicationsWatchdogSocketResetTime", JSONdata, "CommunicationWatchdog.SocketResetTimeInMin");

    //Heartbeat Configuration
    updateSliderControlInteger("TES_heartbeatIgnitionOffInterval", JSONdata, "ExtraParameters.HeartbeatConfig.IGNOffInterval");
    updateSliderControlInteger("TES_heartbeatIgnitionOnInterval", JSONdata, "ExtraParameters.HeartbeatConfig.IGNOnInterval");
    updateSliderControlInteger("TES_heartbeatTimeToWaitGPSFix", JSONdata, "ExtraParameters.HeartbeatConfig.TimeToWaitGPSFix");
    updateSliderControlInteger("TES_heartbeatGPS_FixLossOrRecovery", JSONdata, "GPSFixLossOrRecoveryTime");
    updateSliderControlInteger("TES_heartbeatIgnitionOnFilter", JSONdata, "IGNOnFilter");
    updateSliderControlInteger("TES_heartbeatIgnitionOffFilter", JSONdata, "IGNOffFilter");

    //TripPath Configuration
    updateCheckboxCheckedState("TES_tripPathEnable", JSONdata, "ExtraParameters.TripPathConfig.Enable");
    updateCheckboxAndSlider("TES_tripPathDistance", JSONdata, "ExtraParameters.TripPathConfig.Distance");
    updateCheckboxAndSlider("TES_tripPathTime", JSONdata, "ExtraParameters.TripPathConfig.Time");
    updateCheckboxAndSlider("TES_tripPathHeading", JSONdata, "ExtraParameters.TripPathConfig.Heading");
    updateCheckboxCheckedState("TES_tripPathInhibitHeartbeat", JSONdata, "ExtraParameters.TripPathConfig.InhibitHeartbeat");

    //Serial Configuration
    updateSelect("SI_serialCommBaudrateId", JSONdata, "RS232Settings.Baud", 19200);
    updateSelect("SI_serialCommDatabitsId", JSONdata, "RS232Settings.DataBits", 5);
    updateSelect("SI_serialCommParityId", JSONdata, "RS232Settings.Parity", false);
    updateSelect("SI_serialCommStopbitsId", JSONdata, "RS232Settings.StopBit", 1);
    updateSelect("SI_serialCommDataToSendId", JSONdata, "TelematicsDataForwardOptions", "Event");

    //Volume
    updateSliderControlInteger("SI_volumeForAsleep", JSONdata, "DriverAsleepEventSpeakerVolume");
    updateSliderControlInteger("SI_volumeForOtherAlerts", JSONdata, "SpeakerVolume");
    updateCheckboxCheckedState("SI_volumeControls", JSONdata, "SpeakerControl");
    updateSelect("SI_notificationLanguageId", JSONdata, "VoiceNotificationsLang", 0);

    //General Input/Outputs
    //  GPIO
    //updateSelectValue("ActiveLevelGPIO", JSONdata, "GPIO.ActiveLevel");
    //updateListValue("FunctionGPIO", JSONdata, "GPIO.SpecialFunction", "Other");
    //updateListValue("StateGPIO", JSONdata, "GPIO.State", "In");
    //updateNumericValue("StateDurationGPIO", JSONdata, "GPIO.StateDuration", 10, 10, 500);
    //updateNumericValue("VoltageThresholdGPIO", JSONdata, "GPIO.VoltageThreshold", 0.7, 0.0, 24.0);
    //  GPI
    updateSelectValue("ActiveLevelGPI", JSONdata, "GPInputs.ActiveLevel");
    updateListValue("FunctionGPI", JSONdata, "GPInputs.SpecialFunction", "Other");
    updateNumericValue("StateDurationGPI", JSONdata, "GPInputs.StateDuration", 10, 10, 500);
    updateNumericValue("VoltageThresholdGPI", JSONdata, "GPInputs.VoltageThreshold", 0.7, 0.0, 24.0);

    //  GPO
    updateNumericValue("DutyCycleGPO", JSONdata, "GPOut.DutyCycle", 60, 10, 100);
    updateNumericValue("FrequencyGPO", JSONdata, "GPOut.Frequency", 1, 1, 10);
    updateNumericValue("LengthGPO", JSONdata, "GPOut.Length", 1, 1, 60);
    updateListValue("SourceGPO", JSONdata, "GPOut.Source", "LED");
    generateSignal();

    //Accelerometer
    updateSliderControlInteger("SI_driveTimeFilter", JSONdata, "Acc3DDriveTimeFilter");
    updateSliderControlInteger("SI_stopTimeFilter", JSONdata, "Acc3DStopTimeFilter");

    //Photo and Video
    updateSelect("photoResolution", JSONdata, "ResolutionOfUploadedImage", 1);
    updateSelect("videoResolution", JSONdata, "ResolutionOfUploadedVideo", 1);
    updateCheckboxCheckedState("SI_videoOverlay", JSONdata, "VideoOverlay.Enable");
    updateSelect("timeSource", JSONdata, "VideoOverlay.TimeSource", "UTC");
    updateSliderControlInteger("SI_recordBeforeEvent", JSONdata, "EventVideoLen.Before");
    updateSelect("micStatus", JSONdata, "MicStatus", true);
    updateSliderControlInteger("SI_recordAfterEvent", JSONdata, "EventVideoLen.After");
    updateSliderControlInteger("SI_videoToStorage", JSONdata, "VideosStorageNumber");
    updateSliderControlInteger("SI_eventsToStorage", JSONdata, "EventsStorageNumber");
    updateCheckboxCheckedState("SI_SD_cardEncryption", JSONdata, "SDCardSettings.EncryptSDCard");
    updateSelect("ContRecording", JSONdata, "ContRecording", 0);

    //Main button settings
    updateCheckboxCheckedState("SI_deviceTurnOn", JSONdata, "MainButtonSettings.DeviceTurnOnEnable");
    updateCheckboxCheckedState("SI_selfEventTrigger", JSONdata, "MainButtonSettings.SelfEventTriggerEnable");

    //Additional Configuration
    updateSliderControlInteger("SI_calibrationTimeout", JSONdata, "ExtraParameters.Calibration.Timeout");
    updateSliderControlInteger("SI_SettingsAndHybridWi_Fi_TimeOut", JSONdata, "WiFiTO");
    updateSliderControlInteger("SI_sleepModeTimeout", JSONdata, "SleepModeTO");
    updateSliderControlInteger("SI_GSensorWakeThreshold", JSONdata, "ExtraParameters.GSensorWakeThreshold");
    updateCheckboxCheckedState("SI_OTA_update", JSONdata, "ExtraParameters.OTAupdateEnable");
}

//Updating Check Boxes
function updateCheckBox_fromJSON(JSONdata){
    // CheckBoxes
    updateCheckBoxValue("AsleepOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Asleep");
    updateCheckBoxValue("DriverDistractedOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.DriverDistracted");
    updateCheckBoxValue("DrowsinessOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Drowsiness");
    updateCheckBoxValue("FCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.FCW");
    updateCheckBoxValue("LDWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.LDW");
    //updateCheckBoxValue("LightDrowsinessOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.LightDrowsiness");
    updateCheckBoxValue("PCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.PCW");
    updateCheckBoxValue("PhoneUseOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.PhoneUse");
    updateCheckBoxValue("SeatbeltOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Seatbelt");
    updateCheckBoxValue("SmokingOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Smoking");
    updateCheckBoxValue("HMWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.Tailgating");
    updateCheckBoxValue("UFCWOTAClosure", JSONdata, "ExtraParameters.OTAClosureEvent.UFCW");

}

//Checking Hybrid Configs
function updateSelectedValuebasedOnCheckbox(selectId, checkboxId, JSONdata, propertyPath, defaultOption) {
    var selectElement = document.getElementById(selectId);
    var checkboxElement = document.getElementById(checkboxId);

    var propertyValue = getProperty(JSONdata, propertyPath);

    if (propertyValue !== undefined && isOptionExist(selectElement, propertyValue)) {
        selectElement.value = propertyValue;
        checkboxElement.checked = true;
    } 
    else {
        selectElement.value = defaultOption;
        checkboxElement.checked = true;
    }
    //updateCommunicationsColor(selectElement, selectId);
}

//Hybrid Communications - Updating Communication Settings based on Checkbox and Values
function updatingfromCheckAndCombo_fromJSON(JSONdata){
    // Communication Settings
    updateSelect("SI_communicationSettingsAndHybridCommMainChannelId", JSONdata, "CommChannelState", "WiFi");
    updateSelectedValuebasedOnCheckbox("SI_communicationSettingsAndHybridAlertsSelectId", "SI_communicationSettingsAndHybridAlertsCheckbox", JSONdata, "CommChannelSettings.Alert", "WiFi");
    updateSelectedValuebasedOnCheckbox("SI_communicationSettingsAndHybridDebugSelectId", "SI_communicationSettingsAndHybridDebugCheckbox", JSONdata, "CommChannelSettings.Debug", "WiFi");
    updateSelectedValuebasedOnCheckbox("SI_communicationSettingsAndHybridFOTASelectId", "SI_communicationSettingsAndHybridFOTACheckbox", JSONdata, "CommChannelSettings.FOTA", "WiFi");
    updateSelectedValuebasedOnCheckbox("SI_communicationSettingsAndHybridImageSelectId", "SI_communicationSettingsAndHybridImageCheckbox", JSONdata, "CommChannelSettings.Image", "WiFi");
    updateSelectedValuebasedOnCheckbox("SI_communicationSettingsAndHybridVideoSelectId", "SI_communicationSettingsAndHybridVideoCheckbox", JSONdata, "CommChannelSettings.Video", "WiFi");
    updateCheckboxCheckedState("SI_communicationSettingsAndHybridDuplicateEvent", JSONdata, "DuplicateMsgOverRS232");
}

//Checking WiFi Networks in the device
function updateTextBoxValuebasedOnCheckbox(WiFi_Network_SSID, WiFi_Network_Password, WiFi_Network_check, JSONdata, networksPath, index) {
    // Get the networks array from the JSON data based on the provided networksPath
    var networks = getPropertyValue(JSONdata, networksPath);

    // Function to convert undefined to null
    function undefinedToNull(value) {
        return value === undefined ? null : value;
    }

    // If the index is 0, it means we are updating the first network in the Networks array
    if (index === 0) {
        var ssid = undefinedToNull(getPropertyValue(JSONdata, "WifiSettings.SSID"));
        var password = undefinedToNull(getPropertyValue(JSONdata, "WifiSettings.Password"));

        // Check if the Networks array is empty or the first network doesn't have an SSID
        if (!networks || !networks[index] || networks[index].SSID === undefined) {
        // Update the textboxes and checkbox with values from WifiSettings
        document.getElementById(WiFi_Network_SSID).value = ssid;
        document.getElementById(WiFi_Network_Password).value = password;
        document.getElementById(WiFi_Network_check).checked = true;
        } 
        else {
        // Update the textboxes and checkbox with values from the first network in Networks
        document.getElementById(WiFi_Network_SSID).value = undefinedToNull(networks[index].SSID);
        document.getElementById(WiFi_Network_Password).value = undefinedToNull(networks[index].Password);
        document.getElementById(WiFi_Network_check).checked = true;
        }
    } 
    else {
        // If the index is not 0, we are updating a network other than the first one

        // Check if the Networks array exists and the network at the specified index has an SSID
        if (networks && networks[index] && networks[index].SSID !== undefined) {
        // Update the textboxes and checkbox with values from the specified network
        document.getElementById(WiFi_Network_SSID).value = undefinedToNull(networks[index].SSID);
        document.getElementById(WiFi_Network_Password).value = undefinedToNull(networks[index].Password);
        document.getElementById(WiFi_Network_check).checked = true;
        }
    }

  // Call the WifiNetworkEnableColor function with the checkbox and textboxes as arguments
    WifiNetworkEnableColor(WiFi_Network_check, WiFi_Network_SSID, WiFi_Network_Password);
}

// Function for hierarchic mode
function getPropertyValue(obj, path) {
    var properties = path.split(".");
    var value = obj;
    for (var i = 0; i < properties.length; i++) {
        if (value.hasOwnProperty(properties[i])) {
            value = value[properties[i]];
        }
        else {
            return null;
        }
    }
    return value;
}

//Bring data from Server name
function updatingWiFiNetworksfrom_FS10(JSONdata){
    updateTextBoxValuebasedOnCheckbox("WiFi_Network01_SSID", "WiFi_Network01_Password", "WiFi_Network01_check", JSONdata, "WifiSettings.Networks", 0);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network02_SSID", "WiFi_Network02_Password", "WiFi_Network02_check", JSONdata, "WifiSettings.Networks", 1);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network03_SSID", "WiFi_Network03_Password", "WiFi_Network03_check", JSONdata, "WifiSettings.Networks", 2);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network04_SSID", "WiFi_Network04_Password", "WiFi_Network04_check", JSONdata, "WifiSettings.Networks", 3);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network05_SSID", "WiFi_Network05_Password", "WiFi_Network05_check", JSONdata, "WifiSettings.Networks", 4);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network06_SSID", "WiFi_Network06_Password", "WiFi_Network06_check", JSONdata, "WifiSettings.Networks", 5);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network07_SSID", "WiFi_Network07_Password", "WiFi_Network07_check", JSONdata, "WifiSettings.Networks", 6);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network08_SSID", "WiFi_Network08_Password", "WiFi_Network08_check", JSONdata, "WifiSettings.Networks", 7);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network09_SSID", "WiFi_Network09_Password", "WiFi_Network09_check", JSONdata, "WifiSettings.Networks", 8);
    updateTextBoxValuebasedOnCheckbox("WiFi_Network10_SSID", "WiFi_Network10_Password", "WiFi_Network10_check", JSONdata, "WifiSettings.Networks", 9);
}

// Function to extract "OverlayText" properties
function extractOverlayText(jsonData) {
    var unitID_flag = 0;
    // Check if "VideoOverlay" and "OverlayText" properties exist
    if (jsonData.VideoOverlay && jsonData.VideoOverlay.OverlayText) {
        var overlayTextArray = jsonData.VideoOverlay.OverlayText;
        // Check if the element contains {unitid}
        if (overlayTextArray.length > 0 && overlayTextArray[0].indexOf("{unitid}") !== -1) {
            document.getElementById("Unit_ID_Overlay").value = "true";
            unitID_flag = 1;
            if(overlayTextArray.length > 1 && overlayTextArray[1].trim() !== ""){
                document.getElementById("String_Overlay").value = overlayTextArray[1];
                changeAPNFormat('String_Overlay', 'String Overlay');
            }
            else{
                document.getElementById("String_Overlay").value = "";
                changeAPNFormat('String_Overlay', 'String Overlay');
            }
        }
        // Check if the element contains info
        if (overlayTextArray.length > 0 && overlayTextArray[0].trim() !== "" && unitID_flag === 0) {
            document.getElementById("String_Overlay").value = overlayTextArray[0];
            changeAPNFormat('String_Overlay', 'String Overlay');
            if(overlayTextArray.length > 1 && overlayTextArray[1].indexOf("{unitid}") !== -1){
                document.getElementById("Unit_ID_Overlay").value = "true";
            }
            else{
                document.getElementById("Unit_ID_Overlay").value = "false";
            }
        }
    }
    else {
        //console.log("No OverlayText properties found.");
        document.getElementById("String_Overlay").value = "";
        document.getElementById("Unit_ID_Overlay").value = "false";
        changeAPNFormat('String_Overlay', 'String Overlay');
    } 
}

function extractGPIO_from_JSON(jsonData) {
    const StateGPIO = document.getElementById("StateGPIO");

    if (jsonData.GPIO.State === "In") {
        StateGPIO.value = jsonData.GPIO.State;
    }
    else if (jsonData.GPIO.State === "Out") {
        StateGPIO.value = jsonData.GPIO.State;
    }

    updateGPIOparameters(document.getElementById("StateGPIO"));

    const select1 = document.getElementById("Select_GPIO_1");
    const select2 = document.getElementById("Select_GPIO_2");
    const select3 = document.getElementById("Select_GPIO_3");
    const select4 = document.getElementById("Select_GPIO_4");

    if (jsonData.GPIO.State === "In") {
        selectValueFromJSONProperty(select1, jsonData.GPIO.ActiveLevel, "true");
        selectValueFromJSONProperty(select2, jsonData.GPIO.SpecialFunction, "Other");
        selectValueFromJSONProperty(select3, jsonData.GPIO.StateDuration, "10");
        selectValueFromJSONProperty(select4, jsonData.GPIO.VoltageThreshold, "0.7");
        //console.log("GPIO In");
    }
    else if (jsonData.GPIO.State === "Out") {
        selectValueFromJSONProperty(select1, jsonData.GPIO.DutyCycle, "70");
        selectValueFromJSONProperty(select2, jsonData.GPIO.Frequency, "1");
        selectValueFromJSONProperty(select3, jsonData.GPIO.Length, "5");
        selectValueFromJSONProperty(select4, jsonData.GPIO.Source, "Waveform");
        //console.log("GPIO Out");
    }
}

// Helper function to add an option to a select element with a default value
function selectValueFromJSONProperty(selectElement, jsonDataProperty, defaultValue) {
    if (jsonDataProperty !== undefined && jsonDataProperty !== null) {
        // Check if the JSON property exists and is not null or undefined
        selectElement.value = jsonDataProperty;
    } else if (defaultValue !== undefined && defaultValue !== null) {
        // If JSON property is undefined or null, use the defaultValue if provided
        selectElement.value = defaultValue;
    } else {
        // If neither the JSON property nor a defaultValue is provided, you can handle it here
        // For example, you can select the first option as a default option
        selectElement.selectedIndex = 0;
    }
}

function remove_duplicate_from_menus(){
    //removeDuplicateOptionsAndRestoreSelected(ID_element);
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_x');
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_y');
    //removeDuplicateOptionsAndRestoreSelected('CalibrationReferencePoint_z');
    //removeDuplicateOptionsAndRestoreSelected('InstallationHeight');
    //removeDuplicateOptionsAndRestoreSelected('OffsetFromCenter');
    //removeDuplicateOptionsAndRestoreSelected('ActiveLaneSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('HMWSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('TimeToTriggerTailgating');
    //removeDuplicateOptionsAndRestoreSelected('TtcWarningRange');
    //removeDuplicateOptionsAndRestoreSelected('TtcEmergencyRange');
    //removeDuplicateOptionsAndRestoreSelected('FCWSpeedThreshold');
    //removeDuplicateOptionsAndRestoreSelected('LightDrowsinessOTABackOff');
    removeDuplicateOptionsAndRestoreSelected('VoltageThresholdGPI');
    removeDuplicateOptionsAndRestoreSelected('StateDurationGPI');
    removeDuplicateOptionsAndRestoreSelected('DutyCycleGPO');
    removeDuplicateOptionsAndRestoreSelected('FrequencyGPO');
    removeDuplicateOptionsAndRestoreSelected('LengthGPO');
    removeDuplicateOptionsAndRestoreSelected('MaxHeadingAngleForEvents');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterYawPos');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterYawNeg');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterPitchPos');
    removeDuplicateOptionsAndRestoreSelected('RoadCenterPitchNeg');
}

function updateOnBased_FS10_json() {
    try{
        // Reading from the Cipia-FS10 JSON loaded in the console
        var jsonInput = document.getElementById("jsonInput").value;
        var JSONdata = JSON.parse(jsonInput);

        DMS_menuToUpdate(JSONdata);
        ADAS_menuToUpdate(JSONdata);
        Tracking_menuToUpdate(JSONdata);
        System_w_event_menuToUpdate(JSONdata);
        System_wo_event_menuToUpdate(JSONdata);
        updateComboBox_fromJSON(JSONdata);
        //updateCheckBox_fromJSON(JSONdata);
        updateRadioButton_fromJSON(JSONdata);
        updateTextLabel_fromJSON(JSONdata);
        updatingfromCheckAndCombo_fromJSON(JSONdata);
        updatingWiFiNetworksfrom_FS10(JSONdata);
		extractOverlayText(JSONdata);
        extractGPIO_from_JSON(JSONdata);
		alert("Successful upload! - Please verify parameters");

        validateJSON(JSONdata);

        setInitialValues();
        remove_duplicate_from_menus();
    }
    catch (error) {
        // Display the error message on the screen
        alert("ERROR - Please verify the loaded JSON and its properties");
    }
}

function updateOnBased_FS10_json_init() {
    try{
        // Reading from the Cipia-FS10 JSON loaded in the console
        var jsonInput = document.getElementById("jsonInput").value;
        var JSONdata = JSON.parse(jsonInput);

        DMS_menuToUpdate(JSONdata);
        ADAS_menuToUpdate(JSONdata);
        Tracking_menuToUpdate(JSONdata);
        System_w_event_menuToUpdate(JSONdata);
        System_wo_event_menuToUpdate(JSONdata);
        updateComboBox_fromJSON(JSONdata);
        //updateCheckBox_fromJSON(JSONdata);
        updateRadioButton_fromJSON(JSONdata);
        updateTextLabel_fromJSON(JSONdata);
        updatingfromCheckAndCombo_fromJSON(JSONdata);
        updatingWiFiNetworksfrom_FS10(JSONdata);
		extractOverlayText(JSONdata);
        extractGPIO_from_JSON(JSONdata);
        setInitialValues();	
        remove_duplicate_from_menus()
		
    }
    catch (error) {
        // Display the error message on the screen
    }
}

function validateJSON(JSON_customer_code) {
    // Perform the POST request
    // This one for testing JSON generated for the platform (Actual Parameters)
    fetch('https://api.cipia-fscloud.com/validate-json', {
    //This one for comparing a complete JSON (Missing Parameters)
    //fetch('https://api.cipia-fscloud.com/validate-json?useEtcConfig=false', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Convert the JSON object to a JSON string before sending
      body: JSON.stringify(JSON_customer_code)
    })
    .then(response => {
      if (response.ok) {
        return response.text(); // or response.json() if expecting JSON
      }
      throw new Error('Failed request: ' + response.statusText);
    })
    .then(data => {
      // Display the response in the textbox
      document.getElementById("responseText").value = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("responseText").value = 'Error: ' + error.message;
    });
}
  
function setSliderAndCheckboxToJson(id) {
    const paramCheckbox = document.getElementById(id + "Checkbox");
    if (!paramCheckbox) {
        console.error(`Checkbox with id ${id + "Checkbox"} not found.`);
        return 0;
    }
    if (!paramCheckbox.checked) {
        return 0;
    }
    const paramNumberElement = document.getElementById(id + "Number");
    if (!paramNumberElement) {
        console.error(`Number element with id ${id + "Number"} not found.`);
        return 0;
    }
    const value = paramNumberElement.value;
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
        console.error(`Value "${value}" is not a valid number.`);
        return 0;
    }
    return parsedValue;
}
