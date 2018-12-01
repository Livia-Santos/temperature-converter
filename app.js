// pull and cache input fields
const celsius_input = document.querySelector('.celsius > input')
const fahrenheit_input = document.querySelector('.fahrenheit > input')
const kelvin_input = document.querySelector('.kelvin > input')

// attached event handlers

function celsiusToFarenheitAndKelvin(){
    const cTemp = parseFloat(celsius_input.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheit_input.value = fTemp;
    kelvin_input.value = kTemp;
}

celsius_input.addEventListener('input', celsiusToFarenheitAndKelvin)
