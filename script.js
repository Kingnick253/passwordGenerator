// Assignment Code

var generateBtn = document.querySelector("#generate");
var passLength;// input for password length
var passNum;// users input if they want numbers included
var passLCase;// uses user input if password is lowercase
var passUCase;// uses user input if password is uppercase
var passSpecial;// do you want special char or not 
var criteraArry ={ // creates object for all the critera that we are going 

    num: ["1", "2", "3","4","5","6","7","8","9"],

    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

    lowerCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    speicalChar:["!","@","#","$","%","^","&","*","(",")","?"]


}

function generatePassword(){
  console.log("button work")
  // 1.prompt the user for password criteria
  passLength = prompt("Enter paspassword length 8-128");

  if(passLength >= 8 && passLength <= 128){
    confirmPrompt();
  
  }else if (passLCase ){

  }else{
    alert("invaild input");
    generatePassword();
  }

  // a. password length between 8-128.
  // b. prompt user if they want lowercase uppercase special char
  // 2. validate the input
  // 3. generate password based on criteria 


  // 4. display the generated password on the page.
  
  return "Generated password"
}
// Creates a funciton to prompt the user
function confirmPrompt(){
  passLCase = confirm("Do you want Lower case letters?");
  passUCase = confirm("Do you want Upper case letters?");
  passNum = confirm("Do you want Numbers in your password?");
  passSpecial = confirm("Do you want Speical Characters in your password?");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// // function generator(){
// // var results =" ";
// // for(var i = 0; i<passLength; i++){




// // }
// }