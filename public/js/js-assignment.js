const captcha = Math.floor(1000 + Math.random() * 9000)
document.getElementById("captcha").innerText = captcha;

document.getElementById("registerbtn").addEventListener("click", function () {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm").value;
    const captchaInput = document.querySelector("#captchaInput").value;

    if (username == null || username.trim() === "") {
        document.getElementById("resultMessage").innerText = "Username cannot be empty!";
        return;
    }


    if (password == null || password.trim() === "") {
        document.getElementById("resultMessage").innerText = "Password cannot be empty!";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("resultMessage").innerText = "Passwords do not match!";
        return;
    }

    if (captchaInput != captcha) {
        document.getElementById("resultMessage").innerText = "Invalid captcha!";
        return;
    }


    document.getElementById("resultMessage").innerText = "Registration successful!";
});