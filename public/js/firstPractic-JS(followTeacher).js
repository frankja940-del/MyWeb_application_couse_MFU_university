const item = [
    { "name": "hat", "price": 99, "image": "cap.png" },
    { "name": "shoes", "price": 199, "image": "sole.png" },
    { "name": "skirt", "price": 399, "image": "skirt.png" }
];

// let data = '';
// data = `
//     <div class="bg-base-300 rounded-xl shadow-lg p-4 text-center">
//         <img src="/public/${products[0].image}" width="100px" alt="cap">
//         <h3 class="text-xl font-bold">${products[0].name}</h3>
//         <p>${products[0].price} Bath</p>
//         <button class="btn btn-success">Edit</button>
//         <button class="btn btn-error">Delete</button>
//     </div>
// `;

let data = '';
item.forEach(function (product, index) {
    data += `
        <div class="bg-base-300 rounded-xl shadow-lg p-4 text-center">
            <img class="mx-auto" src="/public/image/${product.image}">
            <h3 class="text-xl font-bold">${product.name}</h3>
            <p>${product.price} Bath</p>
            <button class="btn btn-success">Edit</button>
            <button class="btn btn-error" onclick="deleteProduct(${index})">Delete</button>
        </div>
        `;
});
document.querySelector('#products-container').innerHTML = data;

document.querySelector("#btnSignOut").onclick = function () {
    // location.href = "login-shop.html";
    location.replace("login-shop.html")
    // history.back();
    // history.go(-1);
}



// =========function =========== //
let new_products = [];
function showProducts() {
    let data = '';

    item.forEach(function (product, index) {
        data += `
        <div class="bg-base-300 rounded-xl shadow-lg p-4 text-center">
            <img class="mx-auto" src="/public/image/${product.image}">
            <h3 class="text-xl font-bold">${product.name}</h3>
            <p>${product.price} Bath</p>
            <button class="btn btn-success">Edit</button>
            <button class="btn btn-error" onclick="deleteProduct(${index})">Delete</button>
        </div>
        `;
    });

    document.querySelector('#products-container').innerHTML = data;
}


function deleteProduct(index) {
    Swal.fire({
        icon: "wanning",
        title: "are u sure to delete?",
        showCancelButton: true,
        confirmButtonText: "Save",
    }).then((result) => {
        if (result.isConfirmed) {
            // delete the product
            item.splice(index, 1);
            // update the product list  
            showProducts(new_products);


        }
    });
};