import { products } from '../data/mockData.js';

// A function to simulate some delay as if we were fetching from a database
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getProductsForPage = async (req, res) => {
  try {
    // Simulating a delay of 1 second
    await delay(1000);

    const productData = products.map(product => ({
      name: product.name,
      image: product.image
    }));

    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
