function checkPassword(password) {
    let lengthCheck = password.length >= 8;
    let upperCheck = [...password].some(c => c.match(/[A-Z]/));
    let lowerCheck = [...password].some(c => c.match(/[a-z]/));
    let numberCheck = [...password].some(c => c.match(/[0-9]/));
    let specialCheck = password.split("").some(c => "@#$%".includes(c));

    let score = [lengthCheck, upperCheck, lowerCheck, numberCheck, specialCheck].filter(Boolean).length;

    if (score === 5) return "Strong";
    if (score >= 3) return "Medium";
    return "Weak";
}

console.log(checkPassword("Abc123@"));  
console.log(checkPassword("Abcdefgh"));  
console.log(checkPassword("A1b2C3d4@"));  