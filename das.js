function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('productList');
    const productCount = document.getElementById('productCount');


    productCount.innerText = products.length;

    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productItem = document.createElement('productItem');
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

    productList.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remove-btn')) {
            const index = event.target.dataset.index;
            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.splice(index, 1);  
            localStorage.setItem('products', JSON.stringify(products));  
            productCount.innerText = products.length;  
            displayProducts();  
        }
    });

    // Hide remove buttons on the another page
    if (window.location.pathname.includes("DRINKS.html")) {
        const allRemoveButtons = productList.querySelectorAll('button');
        allRemoveButtons.forEach(button => {
            button.style.display = 'none';  // Hide all remove buttons
        });
    }

}

// Call the function when the page loads
window.onload = displayProducts; 

