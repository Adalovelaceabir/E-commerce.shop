// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone X1",
        price: 299.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 89.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Smart Watch Pro",
        price: 199.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 4,
        name: "4K Ultra HD TV",
        price: 799.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 5,
        name: "Laptop Elite",
        price: 1299.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 49.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 7,
        name: "Digital Camera",
        price: 349.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 8,
        name: "Gaming Console",
        price: 499.99,
        image: "https://via.placeholder.com/200"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);
    });
    
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            alert(`Added ${product.name} to cart!`);
            // Here you would typically add to a cart array or send to backend
        });
    });
});

// Simple search functionality
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p>No products found. Try a different search term.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productItem);
        });
    }
});
