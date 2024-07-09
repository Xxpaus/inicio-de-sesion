document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.querySelector('.product-grid');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="details">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <div class="price">$${product.price}</div>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        });
});
