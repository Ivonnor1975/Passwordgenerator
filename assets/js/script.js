
// Array of alphabet/numbers and special characters to be used
var lowercasealfa = "abcdefghijklmnopqrstuvwxyz";
var Upercasealfa="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

//Recover text area 
var contEl= document.querySelector("#password");  //need it to display the passowrd on area text

//Validate user choises before generating password
var validatedata = function(){
     var characters = "";
     var count=0;
    //Recover and store what the user selected
    var strlengthEl = document.getElementById("length"); 
     var incuclettersEl = document.querySelector('#ucletters');
     var inclwlettersEl = document.querySelector("#lwletters");
     var incnumbersEl = document.querySelector("#numbers");
     var incSymbolsEl = document.querySelector("#symbols");
     
     // check if inputs are empty (validate)
    if (strlengthEl.value < 8 || strlengthEl.value > 128){
             alert("You need to enter a number between 8 to 128");
    return false;
    };
    //check if user checked at lesst one criteria
    // built the string based on user choices
    if(incuclettersEl.checked ){    //include upper case letters
      count++;
      characters=characters+ Upercasealfa;
    };
    if(inclwlettersEl.checked){    //include lower case letters
      count++;
      characters= characters+ lowercasealfa;
    };
    if(incnumbersEl.checked){    //include numbers
      count++;
      characters= characters+ numbers;
    };
    if(incSymbolsEl.checked){    //include symbols
      count++;
      characters= characters+ symbols;
    };
     //check if user checked at lesst one criteria
    if (count < 1 ){
        alert("You need to select at least one character type: Letters, Numbers and/or Symbols");
        return false;
    }; 
    var passwordTxt = generatePassword(strlengthEl.value, characters);  //call function to gen password 
    SetpasswordText(passwordTxt)                                        // call function to display password on text area 
};
  
// Generate the password
var generatePassword = (length, characters) => {
  let passcode = "";
  for (let i = 0; i < length; i++) {
    passcode += characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return passcode;
};

//Print password on the text area
function SetpasswordText(text)
{
    contEl.textContent= text;
};

function copyPassword() {      //copy password on windows clickboard
  if (!contEl.textContent){   //validate user does not click on copy buttom before gen password
    alert("Please Click on Generate Buttom first");
    return false;
  }
  contEl.select();
  document.execCommand("copy");  
};
