const calcDisplay = document.querySelector("input");
const calcButton = document.querySelector("#btn");
let arr = [];
let total = 0;
let operation = "";
let lastPress = "";
let arr3 = [];



function numButton(e){
    if(calcDisplay.value[0] == "0"){
        calcDisplay.value = calcDisplay.value.replace("0","")
    }
    calcDisplay.value = calcDisplay.value + e
    if (lastPress == opPress || lastPress == operate){
        calcDisplay.value = "";
        lastPress = numButton;
        calcDisplay.value = calcDisplay.value + e;
    }
    if (calcDisplay.value.length == 11){
     let arr = calcDisplay.value.split("");
       arr.pop();
       calcDisplay.value = arr.join("");
       calcDisplay.value;
    }
    if(calcDisplay.value.length > 9){
        calcDisplay.style.fontSize = "3em";
    }
    
    

}
 
function opPress(ope){
        lastPress = opPress;
        operation = ope;
        num1 = calcDisplay.value;
        if(operation == "posneg"){
            num1 = (-1)*num1
        calcDisplay.value = num1
        }
        if(operation == "percent"){
            num1 = num1/100;
        calcDisplay.value = num1
        }
        arr[0] = num1;
        console.log(arr)
    }

    
    
    
function operate(){
    num2 = calcDisplay.value;
    lastPress = operate;
    arr[1] = (num2)
    let arr2 = arr.map(function toInt(z){
        return parseFloat(z.replaceAll(",",""));
    })
    console.log(arr2)
    if(operation == "+"){
        total = arr2.reduce(function total(a,b){
                return a + b
            },0);
    }
    else if(operation == "-"){
        total = arr2.reduce(function total(a,b){
                return a - b
        })
    }
    else if(operation == "*"){
        total = arr2.reduce(function total(a,b){
                return a * b
        },1)
    }
    else if(operation == "/"){
        total = arr2.reduce(function total(a,b){
                return a / b
        })
    }
    arr2[1] = total;
    total.toString();
    calcDisplay.value = total
}

function clearDisplay(){
    calcDisplay.style.fontSize = "3.3em";
    lastPress = "";
    arr = []
    calcDisplay.value = ""
}
