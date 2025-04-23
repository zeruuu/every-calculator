const convertButton = document.getElementById("convert-button")

function convert() {
    var convertType1 = document.getElementById("convert-select-1").value
    var convertType2 = document.getElementById("convert-select-2").value
    const msg = document.getElementById("result-msg")

    if (convertType1 === "decimal") {
        if (convertType2 === "binary") {
            convertDecimalToBinary()
        } else if (convertType2 === "octal") {
            convertDecimalToOctal()
        }
    } else if (convertType1 === "binary") {
        if (convertType2 === "decimal") {
            convertBinaryToDecimal()
        }
    }

}

function convertDecimalToBinary() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

    // decimal to binary

    if (input.value.trim() === "") {
        msg.innerHTML = "Input must not be empty!"
    } else {
        msg.innerHTML = ""
        var decimalValue = parseInt(input.value)
        let binaryResult = ""

        if (decimalValue < 0) {
            msg.innerHTML = "Input must not be less than 0!"
        } else {
            if (decimalValue === 0) {
                binaryResult = "0"
            }
            while (decimalValue > 0) {
                binaryResult = (decimalValue % 2) + binaryResult
                decimalValue = Math.floor(decimalValue / 2)
            }
        }
        result.value = binaryResult
    }
}

function convertDecimalToOctal() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

    // decimal to octal

    if (input.value.trim() === "") {
        msg.innerHTML = "Input must not be empty!"
    } else {
        msg.innerHTML = ""
        var decimalValue = parseInt(input.value)
        let octalResult = ""

        if (decimalValue < 0) {
            msg.innerHTML = "Input must not be less than 0!"
        } else {
            if (decimalValue === 0) {
                octalResult = "0"
            }
            while (decimalValue > 0) {
                octalResult = (decimalValue % 8) + octalResult
                decimalValue = Math.floor(decimalValue / 8)
            }
        }
        result.value = octalResult
    }
}

function convertBinaryToDecimal() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

    function hasNumbers(decimal) {
        return (/[2-9]/).test(String(decimal))
    }

    // binary to decimal

    if (input.value.trim() === "") {
        msg.innerHTML = "Input must not be empty!"
    } else if (hasNumbers(input.value)) {
        msg.innerHTML = "Binary input must have only 0s and 1s!"
    } else {
        msg.innerHTML = ""
        var binaryValue = parseInt(input.value)
        let decimalResult = 0

        if (binaryValue < 0) {
            msg.innerHTML = "Input must not be less than 0!"
        } else {
            if (binaryValue === 0) {
                decimalResult = 0
            }
            else {
                var binaryValue = String(binaryValue)
                var reversedBinaryValue = ""
                for (let i = 0; i < binaryValue.length; i++) {
                    reversedBinaryValue = binaryValue.charAt(i) + reversedBinaryValue
                }

                for (let i = 0; i < reversedBinaryValue.length; i++) {
                    if (reversedBinaryValue.charAt(i) == 1) {
                        decimalResult += (2 ** i)
                    } else {
                        decimalResult += 0
                    }
                }
            }
        }
        result.value = decimalResult
    }
}

convertButton.addEventListener("click", convert)