var num1 = '';
var num2 = '';
var operator = null;

const displayElement = document.querySelector(".display>h1");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");

function updateValue(value){
    displayElement.innerHTML = value;
}

function display(value){

    if(!isNaN(value) || value === "."){
        if(operator == null){
            num1+= value;
            updateValue(num1);
        }else{
            num2+= value;
            updateValue(num2);
        }
    }else if(value === "+" || value === "-" || value === "*" || value === "/"){

        if(num1  != '' && operator != null && num2 != ''){
            const result = operate(operator, parseInt(num1), parseInt(num2));
            updateValue(result);
            num1 = result.toString();
            num2 = '';
            operator = value;
        }
        else if(num1 != ''){
            operator = value;
        }
    }else if(value === "="){
        if(num1  != '' && operator != null && num2 != ''){
            const result = operate(operator, parseInt(num1), parseInt(num2));
            updateValue(result);
            num1 = result.toString();
            num2 = '';
            operator = null;
        }
    }else if(value === "AC"){
        num1 = '';
        num2 = '';
        operator = null;
        updateValue(0);
    }
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1/num2;
    }
    
}

function plusButtonCss(){
    plusButton.classList.add("button-pressed");
    minusButton.classList.remove("button-pressed");
    multiplyButton.classList.remove("button-pressed");
    divideButton.classList.remove("button-pressed");
}

function minusButtonCss(){
    plusButton.classList.remove("button-pressed");
    minusButton.classList.add("button-pressed");
    multiplyButton.classList.remove("button-pressed");
    divideButton.classList.remove("button-pressed");
}

function multiplyButtonCss(){
    plusButton.classList.remove("button-pressed");
    minusButton.classList.remove("button-pressed");
    multiplyButton.classList.add("button-pressed");
    divideButton.classList.remove("button-pressed");
}

function divideButtonCss(){
    plusButton.classList.remove("button-pressed");
    minusButton.classList.remove("button-pressed");
    multiplyButton.classList.remove("button-pressed");
    divideButton.classList.add("button-pressed");
}

function normalButton(){
    plusButton.classList.remove("button-pressed");
    minusButton.classList.remove("button-pressed");
    multiplyButton.classList.remove("button-pressed");
    divideButton.classList.remove("button-pressed");
}

const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const btn = document.querySelectorAll("button");


btn.forEach( button => {
    button.addEventListener("click", (event) => {
        const value = event.target.textContent;
        display(value);

        if(value === plusButton.innerHTML){
            button.classList.remove("button-pressed");
            plusButtonCss();
        }else if(value === minusButton.innerHTML){
            button.classList.remove("button-pressed");
            minusButtonCss(button);
        }else if(value === multiplyButton.innerHTML){
            button.classList.remove("button-pressed");
            multiplyButtonCss(button);
        }else if(value === divideButton.innerHTML){
            button.classList.remove("button-pressed");
            divideButtonCss(button);
        }else{
            button.classList.add("button-pressed");
            normalButton(button);
            setTimeout(() => {
                button.classList.remove("button-pressed");
            }, 75); 
        }
    })
});
