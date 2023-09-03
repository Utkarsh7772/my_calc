function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    
}

document.addEventListener("keydown",function(event){
    const key=event.key;

if(/[0-9+\-*/.=]/.test(key))
{
    display(key);
}
if( key==="Delete" ){
    clearScreen();
}
if(key==="Backspace")
{
    var currentValue = document.getElementById("result").value;
                document.getElementById("result").value = currentValue.slice(0, -1);
}
if(key==="Enter"){
    calculate();}
});

function back(){
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}


