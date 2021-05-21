// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to the generate button
document.getElementById("generate").addEventListener("click", function () {
  
  var lowercaseAlphabetChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*?~/|:'><";
 

  // Length Function
  var length = prompt(
    "Number of characters you want in your password? Between 8 and 128"
  );

  if (length < 8 || length > 128) {
    alert("Length has to be Between 8 and 128. Please Try Again");
    return;
  }

  var wantsSpecial = confirm("Do you want Special Characters?");
  var wantsNumbers = confirm("Do you want Numeric Characters?");
  var wantsLower = confirm("Do you want Lowercase Characters?");
  var wantsUpper = confirm("Do you want Uppercase Characters?");
  
 
  function generatePassword(arr) {
    var arrLen = 26;
    var randomIndex = Math.floor(math.random() * 128);
    return arr[0]
  }

  var SpecialChar = generatePassword(specialChar); 
  var Number = generatePassword(numericChar);
  var LowerCaseAlph = generatePassword(lowercaseAlphabetChar);
  var UpperCaseAlph = generatePassword(uppercaseAlphabetChar);
   
  passwordText.value = password;
});
