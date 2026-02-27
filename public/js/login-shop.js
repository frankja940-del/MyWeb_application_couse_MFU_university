// document.querySelector('button').onclick = function () {
//     alert('test');
// };

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    // alert("asdf");
    // const username = document.querySelector("#username").value
    // const password = document.querySelector("#password").value
    // alert(username + " " + password);

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const username = formObject.username;
    const password = formObject.password;

    // alert(username + password)

    if (username == "admin" && password == "1234") {
        // correct login
        // alert("correct login")
        location.assign("firstPractice-JS(folllowTeacher).html")
    } else {
        alert("wrong login,try agin")
    }
};



