var charaterLength = (8>=128) ;
var charaterArr =[];

var specialCharArr = [ '!', '@' , '#' , '$', '%' , '&' , '*', '?'];
var lowerCaseArr = [ 'a', 'b' , 'c' , 'd', 'e' , 'f' , 'g', 'h' , 'i' , 'j', 'k' , 'l' ,'m' ,'n' , 'o' , 'p','q' ,'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z',];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7','8', '9',];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function getPrompts(){
  charaterLength = parseInt(prompt("How many characters do you want in your password? (8-128"));
  if(isNaN(charaterLength) || charaterLength< 8 || charaterLength > 128) {
    alert("Character length has to be a number, 8-128 characters, Please try again");
  return false;
  }
  if (confirm("Include lowercaser letters?")) {
    charaterArr = charaterArr.concat(lowerCaseArr);
  }
  if (confirm("Include uppercase letters?")) {
    charaterArr = charaterArr.concat(upperCaseArr);
  }
  if (confirm("Include numbers?")) {
    charaterArr = charaterArr.concat(numberArr);
  }
  if (confirm("Include special characters?")) {
    charaterArr = charaterArr.concat(specialCharArr);
  }
  return true
}

function writePassword() {
var correctPrompts = getPrompts(); 
var passwordText = document.querySelector("#password");


  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";

  return password;
  }

}

function generatePassword() {
  var password = "";
  for(var i = 0; i < charaterLength ; i++) {
    var randomIndex = Math.floor(Math.random() * charaterArr.length);
   password = password + charaterArr[randomIndex] ;
  }
    return password; 
}