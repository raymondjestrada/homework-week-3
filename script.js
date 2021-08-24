// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var all = "";
    var special = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";
    var numbers = "0123456789";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var result = "";

    var passLength = parseInt(prompt("How many characters? Please choose between 8 and 128.")); //Prompt asking for the number of characters to be used in the new password

    if (!passLength) {
        return;
    }

    if (passLength < 8 || passLength > 128) {
        alert("Please enter a number between 8 and 128");
        passLength = prompt("How many characters? Please choose between 8 and 128.");
    }

    var inclowercase = confirm("Would you like to include lower case letters to your password?");
    if (inclowercase) {
        all += lowercase;
    }

    var incuppercase = confirm("Would you like to include upper case letters to your password?");
    if (incuppercase) {
        all += uppercase;
    }

    var incnumbers = confirm("Would you like to include numbers to your password?");
    if (incnumbers) {
        all += numbers;
    }

    var incspecial = confirm("Would you like to include specail characters to your password?");
    if (incspecial) {
        all += special;
    }
    console.log(all)

    for (var i = 0; i < passLength; i ++) {
        result += all.charAt(Math.floor(Math.random() * all.length));
    }
    console.log(result)

    return result;
}
