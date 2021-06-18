// Assignment Code
// Declaring global variables 
var generateBtn = document.querySelector('#generate'); //Locate button object from html
var password = "";
var passLength = 0;
var useUpper = true;
var useLower = true; 
var useNum = true; 
var useSpec = true;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  passwordText.value = password; // The password text value is set to the global password variable.
}

// This function generates and returns a password based off of the candidate's prompt options.
function generatePassword(){
  var password = "";

  var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var allNum = "012345678901234567890123456789"; //Increased frequency of numbers.
  var allSpec = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var allCandidate = "";

  // Set candidate characters based off of criteria.
  if (useUpper)  allCandidate += allUpper; 
  if (useLower)  allCandidate += allLower; 
  if (useNum)  allCandidate += allNum;
  if (useSpec)  allCandidate += allSpec;

  console.log("allCandidate = " + allCandidate);

  // Select random character from candidate's until passLength is met.
  for (var i = 0; i < passLength; i++)
    password += allCandidate.charAt(Math.floor(Math.random() * allCandidate.length));

  return password;
}

//Prompt criteria values and validate input
function promptCriteria () {
  passLength = parseInt (window.prompt("Input between 8 and 128 characters"));
  if(isNaN(passLength) || passLength < 8 || passLength > 128){
    alert ("INVALID PASSWORD LENGTH");
    passLength = 0;
  } else {
    useUpper = confirm("Would you like Uppercase letters?");
    useLower = confirm("Would you like Lowercase letters?");
    useNum = confirm("Would you like Numbers?");
    useSpec = confirm("Would you like Special characters?");
    if (!useUpper && !useLower && !useNum && !useSpec){
      alert ("MUST CHOOSE AT LEAST ONE TYPE!");
      passLength = 0;
    }
  }
  if (passLength !== 0) {
    password = generatePassword();
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', promptCriteria);