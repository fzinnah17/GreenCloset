import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import '../css/ProductsPage.css';
import { products as mockProducts } from '../../../server/data/mockData.js';


const ProductsPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            // if there's a searchTerm, filter mock products based on tags
            const filteredProducts = mockProducts.filter(product => 
                product.tags.some(tag => tag.toLowerCase() === searchTerm.toLowerCase())
            );   
            console.log("Filtered products:", filteredProducts);         
            setProducts(filteredProducts);
        } else {
            // Fetch all products if there's no searchTerm
            fetch('/api/productsPage')
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched products:", data);
                    setProducts(data)
                })
                .catch(error => console.error('There was an error fetching products:', error));
        }
    }, [searchTerm]);

    return (
<div className="product-container">
    {products && products.length > 0 &&
        (() => {
            const productElements = [];
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                if (!product.id) {
                    console.error(`Product at index ${i} does not have an ID`, product);
                    continue; // Skip this iteration
                }
                productElements.push(
                    <div key={product.id} className="product-card">
                        <img className="productcard-image" src={product.image} alt={product.name} />
                        <div className={`product-cover product-cover${(i % 3) + 1}`}>
                            <h1 style={{ margin: "0.25em" }}>{product.name}</h1>
                            <h2 className="description-text" style={{ margin: "0.1em", marginBottom: "1.5em" }}>{product.description}</h2>
                            <Link to={`/product-page/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button>View</button>
                            </Link>
                        </div>
                    </div>
                );
            }
            return productElements;
        })()}
    <div onClick={() => navigate("/add")} className="content-btn content-btn-add">
        <span className="plus-btn">+</span>
        <span className="add-text">Add</span>
    </div>
</div>

    );
}

export default ProductsPage;
