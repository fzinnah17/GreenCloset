import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import Item from './data'
// import eventsRoutes from './routes/eventsRoutes.js';
// import locationsRoutes from './routes/locationsRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// // API routes
// app.use('/api/products', productsPage);

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


app.get('/:id', async(req,res)=> {
    try{

    }catch{

    }
})

//   try{
//     let session = await Session.findOne({where: {id: req.params.id}})
//     return res.json(session)
// } catch(err){
//     console.log(err)
//     return res.json(err)
// }


app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});