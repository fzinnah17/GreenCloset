import React from "react";
const ProductPage = () => {
return (
    <main id="product-page">
        <header>
            <img src="https://picsum.photos/500/500" alt="" />
            <section id="product-page-info-section">
                <h2 id="product-page-title">Title</h2>
                <p id="product-page-description">This is a description and there is a lot to say about this item....</p>
                <button id="product-page-request-btn">Request Item</button>
            </section>
        </header>
    </main>
)
}

export default ProductPage