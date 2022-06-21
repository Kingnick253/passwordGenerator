// Assignment Code
  // pseudocode code
  // 1.prompt the user for password criteria
  //    a. password length between 8-128.
  //    b. prompt user if they want lowercase uppercase special char
  // 2. validate the input
  // 3. generate password based on criteria 
  // 4. display the generated password on the page.

var generateBtn = document.querySelector("#generate");
var passLength;// input for password length
var passNum;// users input if they want numbers included
var passLCase;// uses user input if password is lowercase
var passUCase;// uses user input if password is uppercase
var passSpecial;// do you want special char or not 
var criteriaArry ={ // creates object for all the critera that we are going in the password 

    
    num: ["0","1", "2", "3","4","5","6","7","8","9"],

    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

    lowerCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    speicalChar:["!","@","#","$","%","^","&","*","(",")","?","/"]


}

function generatePassword(){
  
  
  
  passLength = prompt("Enter paspassword length 8-128");
  
    if(passLength >= 8 && passLength <= 128){
      confirmPrompt(); // Prompts the user for the criteria 
      result ="";
      length = 0;
        //This will hold the length of the password for the criteria 
        while(length < passLength ){

          if(passUCase === true && length<passLength){//If the user confirms that they want Upper case letters. This is will allow the code to run.
            result = result + criteriaArry.upperCase[Math.floor(Math.random() * 26)] // Randomly picks Upper case letters from my upperCase array
            length++
          }
          if(passNum === true && length<passLength){// if the user confirms that they want Numbers in their password this will allow the code to run.
            result = result + criteriaArry.num[Math.floor(Math.random() * 10)]// Randomly pick numbers from my num array
            length++

          }
          if(passLCase === true && length<passLength){// if tthe user confirms that they want LowerCase letters. This will allow the code to run 
            result = result + criteriaArry.lowerCase[Math.floor(Math.random() * 26)]// Randomly picks Lower case letters from my lowerCase array
            length++
          }
        
          if(passSpecial === true && length<passLength){// If the user confirms that they want Special Characters. This is will allow this code to run  
            result = result +criteriaArry.speicalChar[Math.floor(Math.random() * 12)]// Randomly picks Special Characters from my speicalChar array
            length++
          }
        

        } 
      
    }else{
      alert("invaild input");
      generatePassword();
    }
  


  
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
  function writePassword(event) {// stops the code from resetting 
    event.preventDefault();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
