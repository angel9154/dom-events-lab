// first step to create the funtion of my calculator is get all the
// elements that i need
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
// after getting all the elements i need the second step 
// would be to set up all the variables using the the variable
// declared keyworkd let 
// i learned the purpose of shouldResetDisplay is to add new numbers when 
// the value its true and keep adding numbers to the current number when is false

let firstNumber = '';
let operator = '' ;
let secondNumber = '';
let shouldResetDisplay = false;
let lastNumber = ';'
 
display.textContent ='0'

// next step is to add click handlers by adding a for each looop

// this for each loop is going to add a click listener
// to every button
// that is gonna run a handle click function when the buttons
// are clicked 
// that is gonna run a handle click function when the buttons
// are clicked 
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(event){
    const button = event.target;

// this if statement is gonna check if a number button was clicked 
// and its gonna get it from the buttons text 
// and update the display
if(button.classList.contains('number')) {
    handleNumber(button.textContent);
}
 
// this if statement Checks if an operator button was clicked
// Stores the operator for later
// Prepares for second number
 if(button.classList.contains('operator')) {
    handleOperator(button.textContent);

}
// this if statement does the math when the equal button is clicked 
// and shows the result as well it prepares the calculator 
// for the next calculation
if (button.classList.contains('equals')) {
 handleEquals();
}
}

function handleNumber(number){
    if(shouldResetDisplay) {
        display.textContent = number;
        shouldResetDisplay = false; // haivng this to false will let me add numbers together like 4 and 5 together would be 45 
         // compare if i had it to true if i click 4 and try to click 5 to do 45 its going to reset the nummber 4 and only show the number 5
    } else {
        display.textContent = display.textContent === '0' ? // this code here makes the program display the digit 0
        number : // in the calculator 
        display.textContent + number;
    }
    if(!operator){ // what !operator does if i have not clicked any operator number is gonna display the first number 
        firstNumber = display.textContent; // but if i have clicked the operator number is gonna display the second number 
    } else{
        secondNumber = display.textContent;
    }
}

function handleOperator(op) {
    if(op === 'C'){
        display.textContent = '0'
        firstNumber = '' // the empty quotation, is to let the program know
        operator = ''   // nothing is stored and the calculator can restart and be 
        secondNumber = '' // ready for new numbers 
        shouldResetDisplay = false;
        return;
    }
    operator = op;
    shouldResetDisplay = true // as i can see here because shouldresetdisplay is equal to true when i hit a operator button
 }// it will reset the display in the calculator and i can add a new number

function handleEquals() {
    if (operator && firstNumber && !secondNumber && lastNumber) { // here if all the conditions are met the if i keep hitting the equal button 
        secondNumber = lastNumber; // is gonna keep adding up or dividing or substracting the last result for example result of 5 + 5 = 10 its going to keep going up to 20 30 etc
    } //the last result for example result 10 its going to keep going up to 20 30 etc

    if(firstNumber && operator && secondNumber){
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat (secondNumber); // parsefloat function is a function, that makes javascrip read a number text like 56 as a real valueable number that
        let result = 0;  // that it could use to do a calculation or equation compare to see as a text that just says 56 ,

        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
                case '-':
                    result = num1 - num2;
                    break;
                    case '*':
                        result = num1 * num2;
                        break;
                        case '/':
                            result = num1 / num2;
                            break;
        }
        lastNumber = secondNumber;
        display.textContent = result;
        firstNumber = result.toString();
        secondNumber = '';
    }
}