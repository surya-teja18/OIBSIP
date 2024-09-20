document.getElementById('convertBtn').addEventListener('click', function () {
    const tempInput = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    const tempValue = parseFloat(tempInput);
    let convertedTemp = 0;
    let convertedScale = '';

    // Perform the conversion based on the selected scale
    if (scale === 'Celsius') {
        convertedTemp = (tempValue * 9 / 5) + 32;  // Celsius to Fahrenheit
        convertedScale = 'Fahrenheit';
    } else if (scale === 'Fahrenheit') {
        convertedTemp = (tempValue - 32) * 5 / 9;  // Fahrenheit to Celsius
        convertedScale = 'Celsius';
    } else if (scale === 'Kelvin') {
        convertedTemp = tempValue - 273.15;  // Kelvin to Celsius
        convertedScale = 'Celsius';
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${convertedScale}`;
});
