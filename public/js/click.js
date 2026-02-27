// obj => click a btn and increase a counter and show the result in h1 tag
// find reference to the button and h1 tag
// add click event
// increase the counter
// find the h1 tag and update its text

// const button = document.querySelector('button');
// button.onclick = function () {
//     alert('Button clicked!');
// }

var counter = 0;

const result = document.querySelector('h1');
document.querySelector('button').onclick = function () {
    // alert('Button clicked!');
    counter++;
    result.innerText = 'Counter: ' + counter;
}