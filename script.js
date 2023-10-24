function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "celsiusToFahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (conversionType === "fahrenheitToCelsius") {
        result = (inputTemperature - 32) * 5/9;
    }

    document.getElementById("result").textContent = `Resultado: ${result.toFixed(2)} °`;
}
