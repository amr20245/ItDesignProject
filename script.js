// Placeholder data to simulate search results
const mockProducts = [
    { name: 'Product 1', price: '$10', store: 'Store A', availability: 'In Stock' },
    { name: 'Product 2', price: '$15', store: 'Store B', availability: 'Low Stock' },
    { name: 'Product 3', price: '$12', store: 'Store C', availability: 'Out of Stock' },
    { name: 'Product 4', price: '$11', store: 'Store D', availability: 'In Stock' }
  ];
  
  // Function to handle product search
  function searchProducts() {
    const searchQuery = document.getElementById('searchQuery').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    if (!searchQuery) {
      searchResults.innerHTML = '<p>Please enter a product name to search.</p>';
      return;
    }
  
    // Display mock search results
    mockProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Store: ${product.store}</p>
        <p>Availability: ${product.availability}</p>
        <button onclick="compareProduct('${product.name}')">Compare</button>
      `;
      searchResults.appendChild(productDiv);
    });
  }
  
  // Placeholder for compare function
  function compareProduct(productName) {
    alert(`Comparing ${productName} with other products`);
  }
  