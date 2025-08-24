// let output = document.getElementById("result")
// function display(num){
//     output.value +=num;
// }
// function calculate(){
//     try {
//         output.value = eval(output.value);
//     }
//     catch(err){
//         alert("invalid");
//     }
// }
// function Clear(){
//     output.value = " ";
// }
// function del(){
//     output.value = output.value.slice(0,-1);
// } 


// Function to display values on the input field
function display(value) {
    let result = document.getElementById("result");
    result.value += value;
}

// Function to clear the input field
function clear() {
    document.getElementById("result").value = "";
}

// Function to delete the last character
function del() {
    let result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        let result = document.getElementById("result");
        result.value = eval(result.value); // Use `eval` carefully; it executes the string as JavaScript code.
    } catch (error) {
        alert("Invalid Expression");
    }
}
