import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {} from 'dotenv/config';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

app.use(bodyParser.json({ limit: "40mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true}));
app.use(cors());