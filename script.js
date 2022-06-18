// Assignment Code

var generateBtn = document.querySelector("#generate");
var passLength;// input for password length
var passCase;// input for lowercase or uppercase
var passLCase;// uses user input if password is lowercase
var passUCase;// uses user input if password is uppercase
var passSpecial;// do you want special char or not 

function generatePassword(){
  console.log("button work")
  // 1.prompt the user for password criteria
  passLength = prompt("Enter paspassword length 8-128");

  if(passLength >= 8 && passLength <= 128){
    passCase = prompt("Do you want the to be lowercase or uppercase");
    
  }  else if (passCase === "lowercase") {
    passSpecial = prompt("Do you want speical Character");
    debugger;
  
  } else if(passCase === "uppercase"){
    passSpecial = prompt("Do you want speical Character");
  }else{
    alert("invaild input");
  }

  // a. password length between 8-128.
  // b. prompt user if they want lowercase uppercase special char
  // 2. validate the input
  // 3. generate password based on criteria 


  // 4. display the generated password on the page.
  
  return "Generated password"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);