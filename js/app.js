const errorMsg = document.querySelector(".error-msg"); // VAR for error message
let rgbResult = document.querySelector(".rgb-result"); // VAR for span containing output
let rgbP = document.querySelector(".rgb-p"); // VAR for P containing output
let hexColor = document.querySelector(".hex-color"); //VAR to for DOM object hex-color DIV

function makeHexArray() {
  //Function to take the raw input and convert to array
  rgbResult.textContent = ""; // Clear rgbResult from last run of converter
  rgbP.style.visibility = "hidden";
  hexColor.style.visibility = "hidden";

  const hexStr = document.querySelector("#hex-value").value; //VAR to contain raw input value
  let hexArray = hexStr.split(""); //VAR to convert the string to an array of characters
  const hashIndex = hexArray.indexOf("#"); //VAR to check the array for a # and set a value to it if found

  for (i = 0; i < hexArray.length; i++) {
    //Loop to determine if a character with a value higher than f was input and return error if so
    if (hexArray[i] > "f") {
      errorMsg.style.visibility = "visible";
      document.querySelector("#hex-value").focus();
      return false;
    }
    errorMsg.style.visibility = "hidden";
  }

  if (hashIndex != -1) {
    //Check if # is in the array and remove if so
    hexArray.splice(hashIndex, 1);
  }

  if (
    //Verify array length is either 3 or 6 and return an error if not
    hexArray.length < 3 ||
    (hexArray.length > 3 && hexArray.length < 6) ||
    hexArray.length > 6
  ) {
    errorMsg.style.visibility = "visible";
    document.querySelector("#hex-value").focus();
    return false;
  }
  errorMsg.style.visibility = "hidden";

  if (hexArray.length === 3) {
    //If array is 3 characters long, concat to make a valid full HEX
    hexArray = hexArray.concat(hexArray);
  }

  //Call the function to set the DIV color based on HEX value
  setColor(hexArray);
  calcRGB(hexArray);
}

//Function to set the background color for the div
function setColor(hexArray) {
  //VARs to convert the array back to a valid HEX string starting with a #
  let hexValue = hexArray.join("");
  let setHexColor = "#" + hexValue;

  //Set background color on DIV
  hexColor.style.backgroundColor = setHexColor;

  //Make DIV visible
  hexColor.style.visibility = "visible";
}

function calcRGB(hexArray) {
  hexArray.forEach(() => {
    let indexA = hexArray.indexOf("a");
    let indexB = hexArray.indexOf("b");
    let indexC = hexArray.indexOf("c");
    let indexD = hexArray.indexOf("d");
    let indexE = hexArray.indexOf("e");
    let indexF = hexArray.indexOf("f");

    if (indexA != -1) {
      hexArray[indexA] = 10;
    }
    if (indexB != -1) {
      hexArray[indexB] = 11;
    }
    if (indexC != -1) {
      hexArray[indexC] = 12;
    }
    if (indexD != -1) {
      hexArray[indexD] = 13;
    }
    if (indexE != -1) {
      hexArray[indexE] = 14;
    }
    if (indexF != -1) {
      hexArray[indexF] = 15;
    }
  });

  let r = parseFloat(hexArray[0]) * 16 + parseFloat(hexArray[1]);
  let g = parseFloat(hexArray[2]) * 16 + parseFloat(hexArray[3]);
  let b = parseFloat(hexArray[4]) * 16 + parseFloat(hexArray[5]);

  if (r > 0 && r < 10) {
    r = "00" + r;
  }

  if (g > 0 && g < 10) {
    g = "00" + g;
  }

  if (b > 0 && b < 10) {
    b = "00" + b;
  }

  if (r >= 10 && r < 100) {
    r = "0" + r;
  }

  if (g >= 10 && g < 100) {
    g = "0" + g;
  }

  if (b >= 10 && b < 100) {
    b = "0" + b;
  }

  let rgb = r + ", " + g + ", " + b;
  rgbResult.append(rgb);
  rgbP.style.visibility = "visible";
}

// 1. Check the value of each character of HEX string
//    a. Create variable that receives input from DOM hex-value ID
//    b. Check each character to ensure it isn't greater than f

// 2. Check to ensure the string is at least 3 characters long
//    a. If the string is less than 3 characters, return an error
//    b. If the string is 3 characters, repeat the 3 characters to get the complete hex value

// 3. Check to see if the string is between 3 and 7 characters long and return an error if so

// 4. Check to see if the string is 6 or 7 characters long (with a #)
//    a. If 6 characters long, append a # to the beginning and add complete string to a VAR
//    b. If 7 characters long, check to make sure first character is # and set the string to a VAR if so, or return an error if not
//    c. Save HEX string pairs to three seperate VARs for RGB value calculation

// 5. Change background color of hex-color DIV based on value of HEX string
//    a. Create a VAR to modify DOM hex-color class

// 6. Calculate RGB value based on HEX value
//    a. Convert any HEX value letters to corresponding numbers
//    b. Create function to take first number of HEX pair variable and multiply by 16, then add second HEX value to get RGB value
//    c. Run function for each HEX pair and output result to VARs R, G, and B
//    d. Create a VAR to modify DOM rgb-result class
//    e. Append rgb-result Span to reflect RGB calculated RGB values
