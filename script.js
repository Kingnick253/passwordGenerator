// Assignment Code
var generateBtn = document.querySelector("#generate");
//
function generatePassword(){
  console.log("button work")
  // 1.prompt the user for password criteria
  var userprompt = prompt("How long do you want your password");
  // a. password length between 8-128.
  // b. prompt user if they want lowercase uppercase special char
  // 2. validate the input
  // 3. display the generated password on the page.
  
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