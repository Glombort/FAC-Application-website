document.getElementById("codenameButton").onclick = function() {usernameFunc()};
function usernameFunc() {
  var codename = document.getElementById('codename').value;
  if (checkLength(codename)[0] == true && checkCase(codename)[0] == true && checkNum(codename)[0] == true) {
    document.getElementById("codenameTrue").innerHTML = codename + " is a valid codename"
    document.getElementById("codenameFalse").innerHTML = ""
    document.getElementById("codenameFalseLength").innerHTML = "Your Codename is at least 6 characters long";
    document.getElementById("codenameFalseCase").innerHTML = "You have at least one uppercase letter and one lowercase letter";
    document.getElementById("codenameFalseNum").innerHTML = "You have at least two numbers";
  } else {
      if (checkLength(codename)[0] == false) {
        document.getElementById("codenameFalseLength").innerHTML = checkLength(codename)[1];
      } else {
        document.getElementById("codenameFalseLength").innerHTML = "Your Codename is at least 6 characters long";
      }
      if (checkCase(codename)[0] == false) {
        document.getElementById("codenameFalseCase").innerHTML = checkCase(codename)[1];
      } else {
        document.getElementById("codenameFalseCase").innerHTML = "You have at least one uppercase letter and one lowercase letter";
      }
      if (checkNum(codename)[0] == false) {
        document.getElementById("codenameFalseNum").innerHTML = checkNum(codename)[1]
      }else {
        document.getElementById("codenameFalseNum").innerHTML = "You have at least two numbers";
      }
      document.getElementById("codenameFalse").innerHTML = codename + " is NOT a valid codename"
      document.getElementById("codenameTrue").innerHTML = ""
      
  }
  
  
}

function checkLength(str) {
  if (str.length > 5) {
    return [true]
  } else {
    let reason = "Your string is " + str.length + " it should be at least 6 characters long."
    return [false, reason]
  }
}

function checkCase(str) {
  let uppers = 0
  let lowers = 0
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (character == character.toUpperCase() && isNaN(character)) {
      uppers+=1      
    } else if (character == character.toLowerCase()) {
      lowers +=1    
    }  
  }
  if (lowers * uppers != 0) {
    return [true]
  } else {
    let reason = "You need at least one Uppercase and one Lowercase letter"
    return [false,reason]
  }
}

function checkNum(str) {
  let numbers = 0
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers++
    }
  }
  return numbers >= 2 ? [true] : [false,"You need at least two numbers"]
}
