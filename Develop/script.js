// Assignment Code
var generateBtn = document.querySelector('#generate');
var password = "";
var passLength = 0;
var useUpper = true;
var useLower = true; 
var useNum = true; 
var useSpec = true;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

function generatePassword(){
  var password = "";

  var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var allNum = "0123456789";
  var allSpec = "!@#$%^&*";
  var allCandidate = "";

  if (useUpper)  allCandidate += allUpper;
  if (useLower)  allCandidate += allLower; 
  if (useNum)  allCandidate += allNum;
  if (useSpec)  allCandidate += allSpec;

  console.log("allCandidate = " + allCandidate);

  for (var i = 0; i < passLength; i++)
    password += allCandidate.charAt(Math.floor(Math.random() * allCandidate.length));

  return password;
}

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

// declare some variables for the answers
// password (the generated password)

// passLength <- prompt for length
// useUpper <- confirm use uppercase
// useLower <- confirm use lowercase
// useNum <- confirm use numbers
// useSpec <- confirm use special chars
// IF useUpper AND useLower AND useNum AND useSpec are ALL false
//   alert "Choose at least one type of character."
//   END function
// IF passLength < 8 OR passLength > 128
//   alert "Password length must be between 8 and 128 characters."
//   END function