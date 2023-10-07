import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
<<<<<<< HEAD
<<<<<<< HEAD
import getProductByID from './controllers/productController.js'
// import eventsRoutes from './routes/eventsRoutes.js';
// import locationsRoutes from './routes/locationsRoutes.js';
=======
>>>>>>> 61f07f4f1b1d6602c11127057975358f33280504
=======
import productRoutes from "./routes/productRoutes.js"
>>>>>>> 894d7de2201b5659b1ed13346a943d7c00e95e5c

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// // API routes
<<<<<<< HEAD
// app.use('/api/events', eventsRoutes);
// app.use('/api/locations', locationsRoutes);
=======
app.use(productRoutes);
>>>>>>> 894d7de2201b5659b1ed13346a943d7c00e95e5c

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')));
} else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')));
    app.use(express.static(path.resolve('public')));
}

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('..', 'client', 'dist', 'index.html'))
    );
}

app.get('/products/:itemId', getProductByID)

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});