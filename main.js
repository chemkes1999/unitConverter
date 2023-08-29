document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convert);
});

function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    if (isNaN(inputValue)) {
        document.getElementById("result").textContent = "Ingresa un valor válido.";
        return;
    }

    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let result;

    switch (inputUnit) {
        case "meters":
            result = convertMetersTo(inputValue, outputUnit);
            break;
        case "inches":
            result = convertInchesTo(inputValue, outputUnit);
            break;
        case "pounds":
            result = convertPoundsTo(inputValue, outputUnit);
            break;
        // Add more cases for other units as needed
        default:
            result = inputValue;
            break;
    }

    const resultText = `${inputValue} ${inputUnit} es igual a ${result.toFixed(2)} ${outputUnit}`;
    document.getElementById("result").textContent = resultText;
}

function convertMetersTo(value, targetUnit) {
    switch (targetUnit) {
        case "inches":
            return value * 39.37;
        // Add more conversion cases for meters to other units
        default:
            return value;
    }
}

function convertInchesTo(value, targetUnit) {
    switch (targetUnit) {
        case "meters":
            return value / 39.37;
        // Add more conversion cases for inches to other units
        default:
            return value;
    }
}

function convertPoundsTo(value, targetUnit) {
    // Add conversion logic for pounds to other units
    return value;
}
