const users = [
    { id: 1, username: "admin", password: "1111", role: 1 },
    { id: 2, username: "aaa", password: "2222", role: 2 },
    { id: 3, username: "bbb", password: "333", role: 2 }
];
const modal = document.getElementById("alertModal");
const icon = document.getElementById("alertIcon");
const title = document.getElementById("alertTitle");
const message = document.getElementById("alertMessage");
const okBtn = document.getElementById("alertOk");

document.getElementById("loginbtn").addEventListener("click", () => {
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const foundUser = users.find(u =>
        u.username === email && u.password === password
    );

    if (foundUser) {
        showAlert("success", foundUser.username);
    } else {
        showAlert("error");
    }
});

function showAlert(type, username = "") {

    if (type === "success") {
        icon.src = "/public/image/check.png";
        title.textContent = "Login Successful";
        message.textContent = "Welcome " + username;
    }
    else {
        icon.src = "/public/image/cancel.png";
        title.textContent = "Login Failed";
        message.textContent = "Username or Password is incorrect";
    }
    modal.showModal();
}

okBtn.addEventListener("click", () => {
    modal.close();
});