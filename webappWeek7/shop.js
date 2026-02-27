let mode = "add";
let editIndex = null;

const productDisplay = document.querySelector("#product_display");
const pname = document.querySelector("#pname");
const pprice = document.querySelector("#pprice");

let products = JSON.parse(localStorage.getItem("products")) || [
    { name: "hat", price: 99, image: "hat.png" },
    { name: "shoes", price: 199, image: "shoes.png" },
    { name: "skirt", price: 399, image: "skirt.png" }
];

const username = localStorage.getItem("username");
if (!username) {
    location.replace("login.html");
}

document.querySelector("#welcome").textContent = "Welcome " + username;

function showProduct() {
    productDisplay.innerHTML = products.map((p, i) => `
        <div class="bg-base-300 rounded-lg shadow-xl p-4 text-center">
            <img src="/public/image/${p.image}" alt="${p.name}">
            <h3 class="text-lg font-bold">${p.name}</h3>
            <p>${p.price} baht</p>
            <button class="btn btn-warning" onclick="editProduct(${i})">Edit</button>
            <button class="btn btn-error" onclick="deleteProduct(${i})">Delete</button>
        </div>
    `).join("");
}

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts();
    showProduct();
}

function addProduct() {
    mode = "add";
    pname.value = "";
    pprice.value = "";
    document.querySelector("#my_modal").showModal();
}

function editProduct(index) {
    mode = "edit";
    editIndex = index;
    pname.value = products[index].name;
    pprice.value = products[index].price;
    document.querySelector("#my_modal").showModal();
}

function addeditProduct() {
    if (mode === "add") {
        products.push({
            name: pname.value,
            price: pprice.value,
            image: "hat.png"
        });
    } else {
        products[editIndex].name = pname.value;
        products[editIndex].price = pprice.value;
    }

    saveProducts();
    showProduct();
    document.querySelector("#my_modal").close();
}

document.querySelector("#btnLogout").addEventListener("click", function () {
    localStorage.removeItem("username");
    location.replace("login.html");
});

showProduct();
