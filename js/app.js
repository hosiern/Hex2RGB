const errorMsg = document.querySelector(".error-msg");

// Create a VAR to modify DOM rgb-result clas
const rgbValue = document.querySelector(".rgb-result");

// Create a VAR to modify DOM hex-color class
const hexColor = document.querySelector(".hex-color");

document.querySelector(".convert").preventDefault;

document.querySelector(".convert").onclick = function convertRGB() {
  //  Create variable that receives input from DOM hex-value ID
  let hexValue = [document.querySelector("#hex-value").split("")];

  // Check each character to ensure it isn't greater than f
  for (i = 0; i < hexValue.length; i++) {
    if (hexValue[i] > "f") {
      errorMsg.style.visibility = "visible";
      document.querySelector("#hex-value").focus();
      return false;
    }
    errorMsg.style.visibility = "hidden";
  }
  console.log(hexValue);
};

function showHexValueProper() {
  let finalHex;
  if (hexValue.charAt(0) != "#") {
    finalHex = "#" + hexValue;
  } else {
    finalHex = hexValue;
  }
  const setHexColor = function (e) {
    showHexValueProper();
    hexColor.setAttribute("visibility", "visible");
    hexColor.style.backgroundColor = finalHex;
  };
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
