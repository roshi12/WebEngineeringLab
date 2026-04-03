


function countWords(message) {
    return message.trim().split(" ").filter(word => word !== "").length;
}


function countCharacters(message) {
    return message.length;
}


function containsUrgent(message) {
    const urgentWords = ["urgent", "asap", "immediately", "important"];
    
    const lowerMessage = message.toLowerCase();
    for (let word of urgentWords) {
        if (lowerMessage.includes(word)) {
            return true;
        }
    }
    return false;
}


function isShouting(message) {
    let totalLetters = 0;
    let upperCaseLetters = 0;

    for (let char of message) {
        if (char.toLowerCase() !== char.toUpperCase()) { 
            totalLetters++;
            if (char === char.toUpperCase()) {
                upperCaseLetters++;
            }
        }
    }

    if (totalLetters === 0) return false; 
    return (upperCaseLetters / totalLetters) > 0.7;
}


const message = "Sir I submitted the Assignment today!!!";

console.log("Words:", countWords(message));
console.log("Characters:", countCharacters(message));
console.log("Contains Urgent Word:", containsUrgent(message) ? "Yes" : "No");
console.log("Shouting:", isShouting(message) ? "Yes" : "No");