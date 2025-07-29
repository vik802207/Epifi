const express = require('express');
const mongoose = require('mongoose');
const connectDB=require('./config/db')
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const setupSwagger = require('./swagger');
const app = express();
setupSwagger(app);
app.use(cors());
app.use(express.json());
connectDB();


app.use('/api', authRoutes);
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
