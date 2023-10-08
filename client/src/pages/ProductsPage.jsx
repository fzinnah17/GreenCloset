import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../css/ProductsPage.css';
import { products as mockProducts } from '../../../server/data/mockData.js'; // I've added this line assuming you have exported products from mockData


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
            {products && products.length > 0 && products.map((product, index) => (
                <div key={index} className="product-card">
                    <img className="productcard-image" src={product.image} alt={product.name} />
                    <div className={`product-cover product-cover${(index % 3) + 1}`}>
                        <h1 style={{ margin: "0.25em" }}>{product.name}</h1>
                        <h2 className="description-text" style={{ margin: "0.1em", marginBottom: "1.5em" }}>{product.description}</h2>
                        <button onClick={() => navigate(`/view/${product.id}`)}>View</button>
                    </div>
                </div>
            ))}
            <div onClick={() => navigate("/add")} className="content-btn content-btn-add">
                <span className="plus-btn">+</span>
                <span className="add-text">Add</span>
            </div>
        </div>
    );
}

export default ProductsPage;
