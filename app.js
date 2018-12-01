// pull and cache input fields
const celsius_input = document.querySelector('.celsius > input')
const fahrenheit_input = document.querySelector('.fahrenheit > input')
const kelvin_input = document.querySelector('.kelvin > input')

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celsiusToFarenheitAndKelvin(){
    const cTemp = parseFloat(celsius_input.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheit_input.value = roundNum(fTemp);
    kelvin_input.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
    const fTemp = parseFloat(fahrenheit_input.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celsius_input.value = roundNum(cTemp);
    kelvin_input.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahrenheit() {
    const kTemp = parseFloat(kelvin_input.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celsius_input.value = roundNum(cTemp);
    fahrenheit_input.value = roundNum(fTemp);
}

celsius_input.addEventListener('input', celsiusToFarenheitAndKelvin)
fahrenheit_input.addEventListener('input', fahrenheitToCelsiusAndKelvin)
kelvin_input.addEventListener('input', kelvinToCelsiusAndFahrenheit)

