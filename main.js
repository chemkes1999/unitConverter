function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let result;

    // Add your conversion logic here based on the input and output units selected
    // For example, you can use if-else or switch statements to handle different units

    // Example conversion from meters to inches:
    if (inputUnit === "meters" && outputUnit === "inches") {
        result = inputValue * 39.37; // 1 meter = 39.37 inches
    } else if (inputUnit === "inches" && outputUnit === "meters") {
        result = inputValue / 39.37; // 1 inch = 0.0254 meters
    }

    document.getElementById("result").textContent = `${inputValue} ${inputUnit}  es igual a ${result.toFixed(2)} ${outputUnit}`;
}

// Add event listeners or other JavaScript functionalities as needed
