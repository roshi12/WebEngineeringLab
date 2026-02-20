
function cleanUsername(name){
    return name
        .trim()                // remove leading & trailing spaces
        .toLowerCase()         // convert to lowercase
        .replace(/\s+/g, "_"); // multiple spaces → single underscore
}


function validateUsername(name){
    
    if(name.length < 5 || name.length > 20)
        return false;

    
    if(!/[a-z]/.test(name.charAt(0)))
        return false;

    
    if(!/^[a-z0-9_]+$/.test(name))
        return false;

    return true;
}



let input = " AHMAD_kHan123 ";

let cleaned = cleanUsername(input);
console.log(cleaned);                
console.log(validateUsername(cleaned)); 