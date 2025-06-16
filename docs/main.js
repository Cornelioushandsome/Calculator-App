const display = document.getElementById("display");
const clearButton = document.getElementById("clearButton");
const equalButton = document.getElementById("equalsButton");

function appendToDisplay(input){

    if(display.value==="Error"){
        display.value="";
    }

    const operators = ["+", "-", ".", "/", "*"];
    const lastChar = display.value.slice(-1);

    if(display.value==="" && operators.includes(input) && input !== "-"){
        return;
    }
    if(operators.includes(lastChar) && operators.includes(input)){
        if(input !=="-" || lastChar=== "-"){
            return;
        }
    }
    display.value+=input;
}

clearButton.addEventListener("click", clearDisplay);

function clearDisplay(){
    display.value="";
} 

equalButton.addEventListener("click", calculator);

function calculator(){
    
    try{
        display.value=eval(display.value);
    } catch(error){
        display.value = "Error";
    } finally{

    }

}
