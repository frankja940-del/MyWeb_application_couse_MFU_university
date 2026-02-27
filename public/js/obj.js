// const student_name = "lisa";
// const student_age = "19";
// const student_gender = "female";

// JS object
// const student1 = {
//     "name": "lisa",
//     "age": 19,
//     "gender": "female"
// };

// // console.log(student1.name); // Output: lisa

// document.querySelector('#name').innerText = student1.name;
// document.querySelector('#age').innerText = student1.age;
// document.querySelector('#gender').innerText = student1.gender;

// JS object array
const students = [
    {
        "name": "lisa",
        "age": 19,
        "gender": "female"
    },
    {
        "name": "john",
        "age": 22,
        "gender": "male"
    },
    {
        "name": "emma",
        "age": 20,
        "gender": "female"
    }
];

let result = "";
students.forEach(function (student) {
    result += `<h2>Name: ${student.name}</h2>
    <h3>Age: ${student.age}</h3>
    <h3>Gender: ${student.gender}</h3>
    <hr>`;
});

document.querySelector('#output').innerHTML = result;