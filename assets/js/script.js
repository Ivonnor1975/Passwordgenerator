
// Array of alphabet/numbers and special characters to be used
var lowercasealfa = "abcdefghijklmnopqrstuvwxyz";
var Upercasealfa="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

//Recover text area 
var contEl= document.querySelector("#password");  //need it to display the passowrd on area text

//Recover and stire what the user selected
var strlengthEl = document.getElementById("length");  
var inclettersEl = document.getElementById("typeLetters");
var incSymbolsEl = document.getElementById("spec");


// Get references to the #generate and #copy (buttons)
var generateBtn = document.querySelector("#generate");
var copyBtn = document.getElementById("#copy");

//Validate user choises before generating password
var validatedata = function(){
     let characters = " ";
    // check if inputs are empty (validate)
    if (strlengthEl.value < 8 || strlengthEl.value > 128){
             alert("You need to enter a number between 8 to 128");
    return false;
    }
    // use switch case to built the string based onn user choices
    switch (inclettersEl.value) {
    case 'UL':    //Include Upercase and LowerCase Letters
          characters= lowercasealfa + Upercasealfa;
           break;
    case 'OU':    //Only Include Uppercase letters
          characters= Upercasealfa;
          break;
    case 'OL':    //Only Include LowerCase Letters
          characters= lowercasealfa
          break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      break;
  }
  var passwordTxt = generatePassword(strlengthEl.value, characters);
  SetpasswordText(passwordTxt)
 
}
  
// Generate the password
var generatePassword = (length, characters) => {
  let passcode = "";
  for (let i = 0; i < length; i++) {
    passcode += characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return passcode;
}

//Print password on the text area
function SetpasswordText(text)
{
    contEl.textContent= text;
}

function copyPassword() {
  contEl.select();
  document.execCommand("copy");  
}



// Add event listener to generate button

