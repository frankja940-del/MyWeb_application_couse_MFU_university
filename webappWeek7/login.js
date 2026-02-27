const users = [
    { username: "peter", password: "1111", role: 1 },
    { username: "aaa", password: "2222", role: 2 },
    { username: "bbb", password: "3333", role: 2 }
];

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = e.target.txtUsername.value;
    const password = e.target.txtPassword.value;

    const user = users.find(u =>
        u.username === username && u.password === password
    );

    if (!user) {
        alert("Wrong account");
        return;
    }

    if (user.role === 1) {
        localStorage.setItem("username", username);
        location.replace("shop.html");
    } else {
        alert("Welcome general user");
    }
});
