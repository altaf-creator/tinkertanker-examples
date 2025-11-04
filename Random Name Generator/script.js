const passwordOutput = document.getElementById("passwordOutput");
const lengthSlider = document.getElementById("lengthSlider");
const lengthLabel = document.getElementById("lengthLabel");

const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

lengthSlider.addEventListener("input", () => {
    lengthLabel.textContent = lengthSlider.value;
});

function secureRandom(max) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
}

function generatePassword() {
    const length = parseInt(lengthSlider.value);
    const chars = {
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lower: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        symbol: "!@#$%^&*()_+=-{}[];:,.<>/?"
    };

    let validChars = "";

    if (upper.checked) validChars += chars.upper;
    if (lower.checked) validChars += chars.lower;
    if (number.checked) validChars += chars.number;
    if (symbol.checked) validChars += chars.symbol;

    if (validChars.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const idx = secureRandom(validChars.length);
        password += validChars[idx];
    }

    return password;
}

generateBtn.addEventListener("click", () => {
    passwordOutput.value = generatePassword();
});

copyBtn.addEventListener("click", () => {
    if (passwordOutput.value === "") return;
    navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1200);
});
