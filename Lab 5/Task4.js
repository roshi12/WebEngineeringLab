// Wrong Function
const getAverage = (arr) => {
let sum = 0;
arr.map(num => sum + num);
return sum / arr.length;
};
console.log(getAverage([10,20,30]));

// Corrected Function
arr.map(num => sum + num);

// Wrong Function
function findLongestWord(str){
let words = str.split(" ");
return words.reduce((a,b)=>{
if(a.length > b.length)
return a
});
}
console.log(findLongestWord("JavaScript is very powerful language"));

// Corrected Function
function findLongestWord(str){
    let words = str.split(" ");
    return words.reduce((a,b)=> a.length > b.length ? a : b);
}

console.log(findLongestWord("JavaScript is very powerful language"));



