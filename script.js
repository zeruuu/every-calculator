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
        } else if (convertType2 === "hex") {
            convertDecimalToHex()
        } else {
            const input = document.getElementById("input")
            const result = document.getElementById("result")

            result.value = input.value
        }
    } else if (convertType1 === "binary") {
        if (convertType2 === "decimal") {
            convertBinaryToDecimal() 
        } else if (convertType2 === "octal") {
            convertBinaryToOctal()
        } else {
            const input = document.getElementById("input")
            const result = document.getElementById("result")

            result.value = input.value
        }
    }

}

function hasNumbers(decimal) {
    return (/[2-9]/).test(String(decimal))
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

function convertDecimalToHex() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

    // decimal to hex

    if (input.value.trim() === "") {
        msg.innerHTML = "Input must not be empty!"
    } else {
        msg.innerHTML = ""
        var decimalValue = parseInt(input.value)
        let hexResult = ""

        if (decimalValue < 0) {
            msg.innerHTML = "Input must not be less than 0!"
        } else {
            if (decimalValue === 0) {
                hexResult = "0"
            }
            while (decimalValue > 0) {
                if (decimalValue % 16 > 9) {
                    if (decimalValue % 16 == 10) {
                        hexResult = "A" + hexResult
                    } else if (decimalValue % 16 == 11) {
                        hexResult = "B" + hexResult
                    } else if (decimalValue % 16 == 12) {
                        hexResult = "C" + hexResult
                    } else if (decimalValue % 16 == 13) {
                        hexResult = "D" + hexResult
                    } else if (decimalValue % 16 == 14) {
                        hexResult = "E" + hexResult
                    } else if (decimalValue % 16 == 15) {
                        hexResult = "F" + hexResult
                    } else if (decimalValue % 16 == 16) {
                        hexResult = "B" + hexResult
                    }
                } else {
                    hexResult = (decimalValue % 16) + hexResult
                }
                decimalValue = Math.floor(decimalValue / 16)
            }
        }
        result.value = hexResult
    }
}

function convertBinaryToDecimal() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

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

function convertBinaryToOctal() {
    const input = document.getElementById("input")
    const result = document.getElementById("result")
    const msg = document.getElementById("result-msg")

    // binary to octal

    if (input.value.trim() === "") {
        msg.innerHTML = "Input must not be empty!"
    } else if (hasNumbers(input.value)) {
        msg.innerHTML = "Binary input must have only 0s and 1s!"
    } else {
        msg.innerHTML = ""
        var binaryValue = input.value
        let octalResult = ""

        if (parseInt(binaryValue) < 0) {
            msg.innerHTML = "Input must not be less than 0!"
        } else {
            if (parseInt(binaryValue) === 0) {
                octalResult = ""
            }
            else {
                var binaryValue = String(binaryValue) // 110010
                var reversedBinaryValue = ""
                
                for (let i = 0; i < binaryValue.length; i++) {
                    reversedBinaryValue = binaryValue.charAt(i) + reversedBinaryValue  // 010011
                }

                var octals = []

                for (let i = 0; i < reversedBinaryValue.length; i += 3) {
                    octals.push(reversedBinaryValue.slice(i, i+3)) //  010 011
                }

                for (let i = 0; i < octals.length; i++) {
                    let tempval = 0
                    let octal = octals[i] // 011

                    let reverseOctal = ""
                    for (let i = 0; i < octal.length; i++) {
                        reverseOctal = octal.charAt(i) + reverseOctal // 110
                    }
                    let add = 0

                    if (reverseOctal.length >= 2) {
                        if (reverseOctal.length == 2) {
                            add = 2
                        } else {
                            add = 4
                        }

                        for (let i = 0; i < reverseOctal.length; i++) {
                            if (reverseOctal.charAt(i) == 1) {  // 
                                tempval += add
                                add = add / 2
                            } else {
                                add = add / 2
                            }
                        }
                        octalResult = tempval + octalResult                        
                    } else {
                        if (reverseOctal.charAt(0) == 1) {
                            tempval += 1
                        }
                        octalResult = tempval + octalResult    
                    }
                }
            }
        }
        result.value = octalResult
    }
}

convertButton.addEventListener("click", convert)