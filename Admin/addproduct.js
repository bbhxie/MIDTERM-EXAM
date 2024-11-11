document.getElementById('productType').addEventListener('change', function () {
    const type = this.value;
    const drinkSizesDiv = document.getElementById('drinkSizes');
    
    if (type === 'Drinks') {
        drinkSizesDiv.style.display = 'block';  
    } else {
        drinkSizesDiv.style.display = 'none';  
    }
});

document.getElementById("AddProduct").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const productName = document.getElementById("productName").value;
    const productType = document.getElementById("productType").value;  
    const productPrice = document.getElementById("productPrice").value;
    const fileInput = document.getElementById("fileInput").files[0];

    const reader = new FileReader();  

    reader.onload = function(event) {
        const imageUrl = event.target.result;  

        let product = {
            name: productName,
            type: productType,  
            price: productPrice,
            image: imageUrl
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        
        products.push(product);

        console.log(product);  

        localStorage.setItem("products", JSON.stringify(products));

        document.getElementById("productForm").reset();

    };

    if (fileInput) {
        window.location.assign('./dasboard.html');
        reader.readAsDataURL(fileInput);  
 
    } else {
        console.log("No file selected");  
    }
});
