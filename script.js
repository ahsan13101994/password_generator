// Assignment Code
var lowercaseAlphabetChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*?~/|:'><";
var password ="";

//everything was originally inside a function now the logic is more separated
function getOptions(){
  var length = parseInt(prompt(
    "Number of characters you want in your password? Between 8 and 128"
  ));
  
  if (length < 8 || length > 128) {
    alert("Length has to be Between 8 and 128. Please Try Again");
    return;
  }
  
  var wantsSpecial = confirm("Do you want Special Characters?");
  var wantsNumbers = confirm("Do you want Numeric Characters?");
  var wantsLower = confirm("Do you want Lowercase Characters?");
  var wantsUpper = confirm("Do you want Uppercase Characters?");

  var options={
    length:length,
    special:wantsSpecial,
    numbers:wantsNumbers,
    lower:wantsLower,
    upper:wantsUpper
  }

  return options;
}
// Length Function





function generatePassword() {
 //originially it was randomily generating a password of 128 characters for each type of character
 //i wasnt  using the user inputs at all
  var options=getOptions()
  console.log(options)
  var finalPassword=[]
  var finalListCharacter=[]

  if(options.lower){
    finalListCharacter=finalListCharacter.concat(lowercaseAlphabetChar.split(""))
   
  }
  if(options.numbers){
    finalListCharacter=finalListCharacter.concat(numericChar.split(""))
  
  }
  if(options.upper){
    finalListCharacter=finalListCharacter.concat(uppercaseAlphabetChar.split(""))
    
  }
  if(options.special){
    finalListCharacter=finalListCharacter.concat(specialChar.split(""))
 
  }
//my randomizer wasnt using the user inputs at all 
 for (var index = 0; index < options.length; index++) {
   var randIndex=Math.floor(Math.random()*finalListCharacter.length)
   var randElement=finalListCharacter[randIndex]
   finalPassword.push(randElement)
   console.log(finalPassword)

 }
  return finalPassword.join("");
}



 


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to the generate button
document.getElementById("generate").addEventListener("click", writePassword)