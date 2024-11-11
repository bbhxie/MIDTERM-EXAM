function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('productList');
    const productCount = document.getElementById('productCount');


    productCount.innerText = products.length;

    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('productItem');
        productItem.innerHTML = `
            <div class="col-md-3">
                <img src="${product.image}" alt="${product.name}" width="100">
            </div>
            <div class="col-md-2">
                <p><strong>${product.name}</strong></p>
            </div>
            <div class="col-md-2">
                <p>${product.type}</p>
            </div>
            <div class="col-md-2">
                <p>₱${product.price}</p>  <!-- Changed $ to ₱ -->
            </div>
            <div class="col-md-3">
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        productList.appendChild(productItem);
    });

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.dataset.index;
            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.splice(index, 1);  
            localStorage.setItem('products', JSON.stringify(products));  
            productCount.innerText = products.length;  
        });
    });
}

window.onload = displayProducts;
