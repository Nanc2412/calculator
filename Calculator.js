const inputField = document.getElementById("inputField");
const buttons = document.querySelectorAll("button");
// console.log(inputField);
// console.log(buttons);

let inputString = "";
let inputArray = Array.from(buttons);

inputArray.forEach(buttonClick => {
    buttonClick.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            inputString = eval(inputString);
            inputField.value = inputString;
        }
        else if(e.target.innerHTML == "Ac"){
            inputString = "";
            inputField.value = inputString;
        }
        else if(e.target.innerHTML === "Del"){
            inputString = inputString.substring(0, inputString.length - 1);
            inputField.value = inputString; 
        }
        else{
            inputString += e.target.innerHTML;
            inputField.value = inputString;
        }
    });
});