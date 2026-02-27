// when the button is clicked
// document.querySelector('#btnLogin').onclick = function() {
//     // get username and password
//     const username = document.querySelector('#txtUsername').value;
//     const password = document.querySelector('#txtPassword').value;
//     alert(username + ' ' + password);
// }

// login data
// const users = [
//     { "username": "admin", "password": "1111", "role": 1 },
//     { "username": "aaa", "password": "1111", "role": 2 },
//     { "username": "bbb", "password": "1111", "role": 2 }
// ];

const json = `[
  { "username": "admin", "password": "1111", "role": 1 },
  { "username": "aaa", "password": "1111", "role": 2 },
  { "username": "bbb", "password": "1111", "role": 2 }
]`;

const users = JSON.parse(json);

console.log(users[0].username); // admin


document.querySelector('form').onsubmit = function (event) {
  // prevent the form to refresh
  event.preventDefault();
  // get form data
  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData.entries());
  const username = formObject.txtUsername;
  const password = formObject.txtPassword;

  // alert(username + ' ' + password);
  // if (username == 'admin' && password == '1234') {
  //     // forward to shop page
  //     // remember previous page in navigation stack/history
  //     // location.assign('shop.html');
  //     // location.href = 'shop.html';
  //     // prevent returning to previous page i.e. keep no history
  //     location.replace('shop.html');
  // }

  // let login = false;
  // let i;

  // for (i = 0; i < users.length; i++) {
  //   if (username == users[i].username && password == users[i].password) {
  //     login = true;
  //     break;
  //   }
  // }

  // if (login === true) {
  //   alert("welcome " + username);
  // } else {
  //   alert("wrong password try meow meow!!!")
  // };

  const result = users.find(function (user) {
    return (username == user.username && password == user.password);
  });
  if (result === undefined) {
    alert("wrong")
  } else if (result.role == 1) {
    alert("correct")
    location.replace("shop.html")
    localStorage.username = username
  } else {

  }

}