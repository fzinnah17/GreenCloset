import React from "react";
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import '../css/IndividualProductPage.css'
const ProductPage = () => {
    let { id } = useParams()
    const [product, setProduct] = useState({})
    console.log(id)

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
            <img src="https://picsum.photos/500/500" alt="" />
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