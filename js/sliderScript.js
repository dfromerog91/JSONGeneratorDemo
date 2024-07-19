let lowerLimit = 10; // Lower limit for the slider
let upperLimit = 60; // Upper limit for the slider

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const arcPath = document.getElementById("arc-path");
    const numberBox = document.getElementById("number-box");
    const arcRadius = 63;
    const centerX = 70;
    const centerY = 63;

    let dragging = false;

    // Set initial value of the number box
    numberBox.innerHTML = lowerLimit.toString().padStart(3, '0');

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("touchstart", startDrag);
    numberBox.addEventListener("click", editNumber);

    function startDrag(event) {
        dragging = true;
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("touchmove", onDrag);
        document.addEventListener("mouseup", endDrag);
        document.addEventListener("touchend", endDrag);
    }

    function onDrag(event) {
        if (!dragging) return;

        event.preventDefault();

        let clientX, clientY;
        if (event.type === 'mousemove') {
            clientX = event.clientX;
            clientY = event.clientY;
        } else if (event.type === 'touchmove') {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }

        // Get coordinates relative to the arc rectangle
        const rect = arcPath.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        // Calculate the angle based on coordinates relative to the center of the circle
        const dx = mouseX - centerX;
        const dy = centerY - mouseY; // Invert dy for the upper arc
        let angle = Math.atan2(dy - 7, dx + 14);

        // Adjust the angle to be in the range of 0 to π (0 to 180 degrees)
        if (angle < -Math.PI / 2) {
            angle = Math.PI; // Limit angle to π (180 degrees)
        } else if (angle < 0) {
            angle = 0; // Limit angle to 0 degrees
        }

        // Map the angle to the range of lowerLimit to upperLimit
        const percentage = upperLimit - ((angle / Math.PI) * (upperLimit - lowerLimit));
        numberBox.innerHTML = Math.round(percentage).toString().padStart(3, '0');

        // Convert the angle to the point on the arc
        const sliderX = centerX + arcRadius * Math.cos(angle);
        const sliderY = centerY - arcRadius * Math.sin(angle); // Use '-' for the upper arc
        slider.setAttribute("cx", sliderX);
        slider.setAttribute("cy", sliderY);
    }

    function endDrag() {
        dragging = false;
        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("touchmove", onDrag);
        document.removeEventListener("mouseup", endDrag);
        document.removeEventListener("touchend", endDrag);
    }

    function editNumber() {
        numberBox.contentEditable = true;
        numberBox.focus();
        numberBox.addEventListener("keydown", function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                numberBox.contentEditable = false;
                let value = parseInt(numberBox.innerText);
                if (isNaN(value)) {
                    value = lowerLimit; // If not a number, set to lowerLimit
                } else if (value < lowerLimit) {
                    value = lowerLimit; // Limit to minimum
                } else if (value > upperLimit) {
                    value = upperLimit; // Limit to maximum
                }
                // Update slider position
                const angle = (value - lowerLimit) / (upperLimit - lowerLimit) * Math.PI;
                const sliderX = centerX - arcRadius * Math.cos(angle);
                const sliderY = centerY - arcRadius * Math.sin(angle);
                slider.setAttribute("cx", sliderX);
                slider.setAttribute("cy", sliderY);
                numberBox.innerHTML = value.toString().padStart(3, '0'); // Display always with 3 digits
            }
        });
    }
});
