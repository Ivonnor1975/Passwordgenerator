
// Array of alphabet
var lowercasealfa = "abcdefghijklmnopqrstuvwxyz";
var Upercasealfa="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

//bring user options
var strlengthEl = document.getElementById("length");
var inclettersEl = document.getElementById("typeLetters");
var incSymbolsEl = document.getElementById("spec");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var copyBtn = document.getElementById("copy");

// Add event listener to generate button
var validatedata = function(){
     let characters = " ";
    // check if inputs are empty (validate)
    if (strlengthEl.value < 8 || strlengthEl.value > 128){
             alert("You need to enter a number between 8 to 128");
    return false;
    }
    // use switch case to built the string to chose password
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
  console.log(passwordTxt)
  }



// Assignment code here
var generatePassword = (length, characters) => {
  let passcode = "";
  for (let i = 0; i < length; i++) {
    passcode += characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return passcode;
}
  


/***
// Add event listener to generate button
generateBtn.addEventListener("click", genPassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  
  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  console.dir(listItemEl);

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
 */
