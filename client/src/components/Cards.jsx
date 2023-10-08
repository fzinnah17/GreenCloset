
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/Cards.css";

const Cards = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/productsPage')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('There was an error fetching products:', error));
    }, []);
    return (
        <div className="product-container">
        {products &&
          products.slice(0, 3).map((product, index) => (
            
            <div key={index} className="product-card">

              <img
                className="productcard-image"
                src={product.image}
                alt={product.name}
              />

              <div className={`product-cover product-cover${(index % 3) + 1}`}>
                <h1 style={{ margin: "0.25em" }}>{product.name}</h1>
                <h2
                  className="description-text"
                  style={{ margin: "0.1em", marginBottom: "1.5em" }}
                >
                  {product.description}
                </h2>
                <Link to={`/product-page/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button>View</button>
                </Link>              </div>
            </div>
          ))}
      </div>
      

        
    );
};

export  default Cards;