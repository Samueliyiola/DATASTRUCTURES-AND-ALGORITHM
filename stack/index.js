
var stack = [];

var firstWord = "racecar";

var poppedWord = "";

// To put the word in the stack
for(var i = 0; i < firstWord.length; i++){
    stack.push(firstWord[i]);
    // console.log(i);
}


while(stack.length > 0){
    poppedWord += stack.pop();
}

if(poppedWord === firstWord){
    console.log(`The word ${firstWord} is a palindrome `);
}
else{
    console.log(`The word ${firstWord} is not a palindrome`);
}


// console.log(poppedWord);

// console.log(varters);