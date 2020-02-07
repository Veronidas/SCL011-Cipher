//variables

const textToCode = document.getElementById("decodeText");
const shiftInput = document.getElementById("shift");
const encodeB = document.getElementById("encode");
// const decodeB = document.getElementById("decode");

// encode
encodeB.addEventListener("click", () => {
    let textToCodeValue = textToCode.value;
    let shiftInputValue = shiftInput.value;
    let result = document.getElementById("result")
    document.getElementById("result").innerHTML = "";
    let finalResult = cipher.encode(textToCodeValue, shiftInputValue);
    result.innerHTML = finalResult;
});