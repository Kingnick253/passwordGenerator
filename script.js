// Assignment Code

var generateBtn = document.querySelector("#generate");
var passLength;// input for password length
var passNum;// users input if they want numbers included
var passLCase;// uses user input if password is lowercase
var passUCase;// uses user input if password is uppercase
var passSpecial;// do you want special char or not 
var criteriaArry ={ // creates object for all the critera that we are going 

    
    num: ["0","1", "2", "3","4","5","6","7","8","9"],

    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

    lowerCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    speicalChar:["!","@","#","$","%","^","&","*","(",")","?","/"]


}

function generatePassword(){
  console.log("button work")
  // 1.prompt the user for password criteria
  passLength = prompt("Enter paspassword length 8-128");

  if(passLength >= 8 && passLength <= 128){
    confirmPrompt(); // Prompts the user for the criteria 
    result ="";
    length = 0;
      while(length < passLength ){

        if(passUCase === true && length<passLength){
           
          result = result + criteriaArry.upperCase[Math.floor(Math.random() * 26)] // Randomly picks Upper case letters from my upperCase array
          length++
        }
        if(passNum === true && length<passLength){
          result = result + criteriaArry.num[Math.floor(Math.random() * 10)]// Randomly pick numbers from my num array
          length++

        }
        if(passLCase === true && length<passLength){
          result = result + criteriaArry.lowerCase[Math.floor(Math.random() * 26)]
          length++
        }
        if(passSpecial === true && length<passLength){
          result = result +criteriaArry.speicalChar[Math.floor(Math.random() * 12)]
          length++
        }
        

      } 
      

  
  }else{
    alert("invaild input");
    generatePassword();
  }
  

  // a. password length between 8-128.
  // b. prompt user if they want lowercase uppercase special char
  // 2. validate the input
  // 3. generate password based on criteria 


  // 4. display the generated password on the page.
  
  return result;
}
// Creates a funciton to prompt the user for password Criteria
function confirmPrompt(){
  passUCase = confirm("Do you want Upper case letters?");
  passNum = confirm("Do you want Numbers in your password?");
  passLCase = confirm("Do you want Lower case letters?");
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
