import React from "react";
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import '../css/IndividualProductPage.css'
const ProductPage = () => {
    let { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async() => {
        let req = await fetch(`/api/products/${id}`)
        let res = await req.json()
        setProduct(res)
    }

    useEffect(()=> {
        getProduct()
    }, [])
return (
    <main id="product-page">
        <header>
            <img id='product-page-main-image' src={product?.image} alt="" />
            <section id="product-page-info-section">
                <h2 id="product-page-title">{product?.name}</h2>
                <p id="product-page-description">{product?.description}</p>
                <button id="product-page-request-btn">Request Item</button>
            </section>
        </header>
    </main>
)
}

export default ProductPage