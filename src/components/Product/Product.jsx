import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "./../ProductCard/ProductCard";
import './ProductListPage.css'; 

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://myshoppro.onrender.com/api/v1/book/getAll'); 
        setProducts(response.data);
        setFilteredProducts(response.data);
        // Extract authors and categories from products
        const uniqueAuthors = [...new Set(response.data.map(product => product.author))];
        const uniqueCategories = [...new Set(response.data.flatMap(product => product.categories))];
        setAuthors(uniqueAuthors);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  const filterProducts = () => {
    let filtered = [...products];

    // Filter by author
    if (selectedAuthor) {
      filtered = filtered.filter(product => product.author === selectedAuthor);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.categories.includes(selectedCategory));
    }

    // Filter by price range
    if (minPrice && maxPrice) {
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedAuthor, selectedCategory, minPrice, maxPrice]);

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="product-list">
      {/* Filter section */}
      <div className="filters">
        <h3>Filters</h3>
        <div>
          <label htmlFor="author">Author:</label>
          <select id="author" onChange={handleAuthorChange} value={selectedAuthor}>
            <option value="">All Authors</option>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input type="number" id="minPrice" onChange={handleMinPriceChange} value={minPrice} />
        </div>
        <div>
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" onChange={handleMaxPriceChange} value={maxPrice} />
        </div>
      </div>

    
      {filteredProducts.map(product => (
        <ProductCard
          key={product.title}
          product={product}

        />
      ))}
    </div>
  );
};

export default ProductListPage;
