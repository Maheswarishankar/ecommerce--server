
const express = require('express');
const Product = require('../models/ProductModel.js');
const router = express.Router();



//Create the products.......

router.post('/create', async (req, res) => {
    try {
        const { name, price, category, description, image, quantity } = req.body;

        // Validation
        if (!name || !price || !category || !description || !image) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        // Create a new product
        const newProduct = new Product({
            name, price, category, description, image, quantity
        });

        // Save the product
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});


//Fetch all Documents........

router.get('/getproducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json({ message: "Fetch Successfully!!!" , products});

    } catch (error) {
        res.status(500).json({ message: "Something went Wrong", error })
    }
});

//Filter products by category................

router.get('/category/:category', async (req, res) => {
    try {
        console.log(req.params.category);  

        const products = await Product.find({ category: req.params.category });
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for this category' });
        }

        res.status(200).json({ message: 'ok', products });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
});


module.exports = router




