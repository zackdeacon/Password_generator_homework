// Assignment Code
var generateBtn = document.querySelector("#generate");

var possibleCharacters = []

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_"]
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",	"m", "n",	"o",	"p", "q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G",	"H",	"I",	"J",	"K",	"L",	"M",	"N",	"O",	"P",	"Q",	"R",	"S",	"T",	"U",	"V",	"W",	"X",	"Y",	"Z"] 
var userLength;

function promptUser() {
  var passwordLength = Number(prompt("How many characters do you want in your password?"))
  if (passwordLength >= 8 && passwordLength <= 128) {
    userLength=passwordLength
  }
  else{
    alert("Please try again and select a character length between 8-128 characters.")
    // promptUser();
    return;
  }
  //store password length in variable 
//confirm other user wants special characters 
var includesSpecial = prompt("Do you want special characters in your password?")
  if (includesSpecial.toLowerCase() === "yes") {
    possibleCharacters.push(specialChars)
  } 
  //return the boolean (hasSpecialCharacters)
//confirm if user wants numbers 
var includesNumbers = prompt("Do you want numbers in your password?")
  if (includesNumbers.toLowerCase() === "yes") {
    possibleCharacters.push(numChars)
  }
  //return the boolean (hasNumbers)
//confirm whether user wants lower case 
var includesLower = prompt("Do you want lower case characters in your password")
  if (includesLower.toLowerCase() === "yes") {
    possibleCharacters.push(lowerChars)
  }
  //return the boolean (hasLowerCase)
//confirm if user wants upper case 
var includesUpper = prompt("Do you want upper case characters in your password?")
  if (includesUpper.toLowerCase() === "yes") {
    possibleCharacters.push(upperChars)
  }
  else{
    alert("Sorry, I cant create a password without characters. Goodbye.")
  }
}

//create "generatePassword" function that returns password
function generatePassword() {
  var output = ""
  promptUser();
  for (var i = 0; i < userLength; i++) {
    // output+="s"
    var firstIndex = Math.floor((Math.random() * possibleCharacters.length -1) +1)
    var secondIndex = Math.floor((Math.random() * possibleCharacters[firstIndex].length -1) +1)
    output+=possibleCharacters[firstIndex][secondIndex]
  }
    
  return output
}
  //create prompt to ask user for password length 
    //store password length in variable 
  //confirm other user wants special characters 
    //return the boolean (hasSpecialCharacters)
  //confirm if user wants numbers 
    //return the boolean (hasNumbers)
  //confirm whether user wants lower case 
    //return the boolean (hasLowerCase)
  //confirm if user wants upper case 
    //return the boolean (hasUpperCase)
    
  //if character boolean is true, add that array to the possible characters array DONE. 

  //create arrays full of all possibilities (upper case, lower case, special characters etc)

  //then when we have completed possibleCharactersArray, we build passwords string

  //then return password string

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
