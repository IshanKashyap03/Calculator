// const container = document.querySelector("#container");

// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=4;j++){
//         const column = document.createElement("div");
//         if(i ==5 && j ==1){
//             column.classList.add("square17");
//         }else if(i ==5 && j ==2){
//             continue;
//         }else{
//             column.className = "squares";
//         }
//         container.appendChild(column);
//     }
// }

var num1 = '';
var num2 = '';
var operator = null;

const displayElement = document.querySelector(".display>h1");

function updateValue(value){
    displayElement.innerHTML = value;
}

function display(value){
    // if(value == "="){
    //     operate(operator, num1, num2);
    //     num1 = '';
    //     num2 = '';
    //     operator = null;
    // }

    // if(num1 == value){
    //     displayElement.innerHTML+=num1;
    // }else if(value == "+" || value == "-"){
    //     operator = value;
    //     console.log(operator);
    // }else if(num1 != value){
    //     if(operator!=null){
    //         num2 = value;
    //         console.log(num2);
    //         displayElement.innerHTML = num2;
    //     }else{
    //         num1 = value;
    //         displayElement.innerHTML = num1;
    //         console.log(num1);
    //     }
    // }

    if(!isNaN(value) || value === "."){
        if(operator == null){
            num1+= value;
            updateValue(num1);
        }else{
            num2+= value;
            updateValue(num2);
        }
    }else if(value === "+"){
        if(num1 != ''){
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
    if(operator == "+"){
        return num1 + num2;
    }
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
    })
});
