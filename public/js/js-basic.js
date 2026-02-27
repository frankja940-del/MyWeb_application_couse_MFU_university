// document.write("Hello from external JavaScript!");

// variables    
// global variable
var age = 20;
var name = "John Doe";


// local variable
let major = "Computer engineering";

// constant variable "unchangeable"
const university = "MFU University";

document.write("<h2>" + name + "</h2>" + "<p>" + age + "</p>" + "<p>" + major + "</p>" + "<p>" + university + "</p>");
document.write(`${name} is ${age} years old and studies ${major} at ${university}.`);

// function
function Hello(studies) {
    // alert(`Hello, ${name}! Welcome to ${university} ${studies}.`);
    return `hello ` + studies;
}

// call function
// let result = Hello("john");
// alert(result);

// array
let color = ["red", "green", "blue"];

// docment.write(color[0]); // red
// document.write(color.length); // 3
// for (let i = 0; i < color.length; i++) {
//     document.write("<br>" + color[i] + " ");
// }

// color.forEach(function (color, index) {
//     if (index !== 2) {
//         document.write("<br>" + index + ": " + color + " ");
//     }
// });

