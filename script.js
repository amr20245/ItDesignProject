// Mock product data with multiple stores for each product
const mockProducts = [
  {
      name: 'Product A',
      image: 'https://via.placeholder.com/100',
      category: 'Electronics',
      upc: '123456789012',
      stores: [
          { name: 'Store X', location: 'Location 1', price: 100, availability: 'In Stock' },
          { name: 'Store Y', location: 'Location 2', price: 80, availability: 'Low Stock' },
          { name: 'Store Z', location: 'Location 3', price: 90, availability: 'Out of Stock' }
      ]
  },
  {
      name: 'Product B',
      image: 'https://via.placeholder.com/100',
      category: 'Appliances',
      upc: '987654321098',
      stores: [
          { name: 'Store A', location: 'Location 1', price: 150, availability: 'In Stock' },
          { name: 'Store B', location: 'Location 2', price: 120, availability: 'Low Stock' },
          { name: 'Store C', location: 'Location 3', price: 130, availability: 'Out of Stock' }
      ]
  },
  {
      name: 'Product C',
      image: 'https://via.placeholder.com/100',
      category: 'Home Goods',
      upc: '567890123456',
      stores: [
          { name: 'Store P', location: 'Location 1', price: 60, availability: 'Low Stock' },
          { name: 'Store Q', location: 'Location 2', price: 55, availability: 'In Stock' },
          { name: 'Store R', location: 'Location 3', price: 70, availability: 'In Stock' }
      ]
  }
];

// Function to handle product search
function searchProducts() {
  const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  if (!searchQuery) {
      searchResults.innerHTML = '<p>Please enter a product name to search.</p>';
      return;
  }

  const results = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
  );

  if (results.length === 0) {
      searchResults.innerHTML = '<p>No products found.</p>';
      return;
  }

  results.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.image}" alt="${product.name}">
          <p>Category: ${product.category}</p>
          <p>UPC: ${product.upc}</p>
          <div id="stores_${product.name}" class="stores-info">
              ${product.stores.map((store, index) => `
                  <div>
                      <p><strong>Store:</strong> ${store.name}</p>
                      <p><strong>Location:</strong> ${store.location}</p>
                      <p><strong>Price:</strong> $${store.price}</p>
                      <p><strong>Availability:</strong> ${store.availability}</p>
                  </div>
                  ${index < product.stores.length - 1 ? '<div class="store-divider"></div>' : ''}
              `).join('')}
          </div>
          <button onclick="compareProduct('${product.name}')">Compare</button>
      `;
      searchResults.appendChild(productDiv);
  });
}

// Function to compare prices and find the best deal
function compareProduct(productName) {
  const product = mockProducts.find(p => p.name === productName);
  if (!product) return;

  const availableStores = product.stores.filter(store => store.availability !== 'Out of Stock');
  if (availableStores.length === 0) {
      alert(`All stores are out of stock for ${product.name}.`);
      return;
  }

  // Find the best deal
  const bestDeal = availableStores.reduce((best, store) =>
      store.price < best.price ? store : best,
      availableStores[0]
  );

  const message = `The best deal for ${product.name} is at ${bestDeal.name} in ${bestDeal.location} for $${bestDeal.price}.`;

  alert(message);
}

// Function to handle email subscription
function subscribeEmail() {
  const emailInput = document.getElementById('footerEmail').value;
  if (emailInput) {
      alert(`Subscribed successfully with email: ${emailInput}`);
      document.getElementById('footerEmail').value = '';
  } else {
      alert('Please enter a valid email.');
  }
}
