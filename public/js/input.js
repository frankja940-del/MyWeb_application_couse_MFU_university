// output part
const output = document.querySelector('#output');

// input part
document.querySelector('button').onclick = function () {
    // text input value
    const favNumber = document.querySelector('#favNumber').value;
    // output.innerHTML = 'Your favorite number is ' + favNumber;

    // drop down input value
    const color = document.querySelector('#color').value;

    // radio button input value
    const sport = document.querySelector('input[name="sport"]:checked').value;

    // chechbox input value
    const food = document.querySelectorAll("input[name='food']:checked");
    let resultfood = "";
    food.forEach(function (food) {
        resultfood += food.value + " ";
    });

    // alert (favNumber and fav color);
    let message = `your fav number is ${favNumber} <br>`;
    message += `your fav color is ${color} <br>`;
    message += `your fav sport is ${sport} <br>`;
    message += `your fav food are ${resultfood} <br>`;
    output.innerHTML = message;
}