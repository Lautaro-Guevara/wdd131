// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the conditions are suitable for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate the wind chill factor
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        // Format the wind chill factor and return it
        return windChill.toFixed(2) + " °C";
    } else {
        // Return "N/A" if the conditions are not suitable for wind chill calculation
        return "N/A";
    }
}

// Calculate and display the wind chill factor
document.addEventListener("DOMContentLoaded", function() {
    // Example values for temperature and wind speed
    const temperature = 10; // Temperature in degrees Celsius
    const windSpeed = 5; // Wind speed in km/h

    // Update the content of the elements with the calculated values
    document.getElementById('temperature').textContent = temperature + " °C";
    document.getElementById('wind').textContent = windSpeed + " km/h";

    // Determine the weather conditions based on the temperature and wind speed
    const conditionsElement = document.getElementById('conditions');
    let conditions = "";

    if (temperature > 20 && windSpeed < 10) {
        conditions = "Sunny";
    } else if (temperature > 10 && temperature <= 20 && windSpeed < 15) {
        conditions = "Partly Cloudy";
    } else {
        conditions = "Windy";
    }

    // Update the content of the conditions element
    conditionsElement.textContent = conditions;

    // Calculate the wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Update the content of the wind chill element
    const windChillElement = document.getElementById('wind-chill');
    if (windChill !== "N/A") {
        windChillElement.textContent = windChill;
    } else {
        windChillElement.textContent = "N/A";
    }
});
