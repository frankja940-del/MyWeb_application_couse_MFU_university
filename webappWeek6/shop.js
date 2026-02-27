// const product = {"name": "hat", "price": 99, "image": "hat.png"};

// var products = [
//     { "name": "hat", "price": 99, "image": "cap.png" },
//     { "name": "shoes", "price": 199, "image": "sole.png" },
//     { "name": "skirt", "price": 399, "image": "skirt.png" }
// ];
var products = [];
const json = localStorage.products;
const local = localStorage.products;
if (local === undefined) {
    const json = `[
 { "name": "hat", "price": 99, "image": "cap.png" },
 { "name": "shoes", "price": 199, "image": "sole.png" },
 { "name": "skirt", "price": 399, "image": "skirt.png" }
 ]`;
    products = JSON.parse(json);
} else {
    products = JSON.parse(local);
}
// const json = `[
// { "name": "hat", "price": 99, "image": "cap.png" },
// { "name": "shoes", "price": 199, "image": "sole.png" },
// { "name": "skirt", "price": 399, "image": "skirt.png" }
// ]`;
// var prevent = JSON.parse(json);

document.querySelector("#welcome").textContent = "welcome " + localStorage.username;
const username = localStorage.username
if (username === undefined) {
    location.replace("login.html")
}

showProduct();

// logout
document.querySelector('#btnLogout').onclick = function () {
    // get back to login page
    // history.back();
    // history.go(-1);
    localStorage.removeItem("username")
    // localStorage.clear();
    location.replace('login.html');
}

// ============================ functions ======================

function showProduct2() {
    products.forEach(function (product, index) {
        const card = document.createElement("div")
        const product_name = document.createElement("h3")
        product_name.textContent = product.name;
        const edit_button = document.createElement("button")
        edit_button.value = "edit"
        const delete_button = document.createElement("button")
        delete_button.value = "delete"
        card.append(product_name, edit_button, delete_button)
        product_display.appendChild(card);
    })
};

function showProduct() {
    let data = '';
    products.forEach(function (product, index) {
        data += `
        <div class="bg-base-300 rounded-lg shadow-xl p-4 text-center">
            <img src="/public/image/${product.image}" alt="${product.name}">
            <h3 class="text-lg font-bold">${product.name}</h3>
            <p>${product.price} baht</p>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-error" onclick="deleteProduct(${index})">Delete</button>
        </div>`;
    });
    document.querySelector('#product_display').innerHTML = data;
}

function popModal() {
    const my_modal = document.querySelector("#my_modal")
    my_modal.showModal();
}

function closeModal() {
    document.querySelector("#my_modal").close();
}

function addProduct() {
    const pname = document.querySelector("#pname").value
    const pprice = document.querySelector("#pprice").value
    closeModal()
    showProduct();
    localStorage.products = JSON.stringify(products);
}

function deleteProduct(index) {
    // alert('delete');
    Swal.fire({
        icon: "warning",
        title: "Do you want to delete this product?",
        showCancelButton: true,
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            // Swal.fire("Saved!", "", "success");
            // delete the product in the array
            products.splice(index, 1);
            localStorage.products = JSON.stringify(products);
            // refresh the products
            showProduct();
        }
    });
}