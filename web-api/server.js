import express from 'express';
import chalk from 'chalk';
import fs from 'fs/promises';
import fsSync from 'fs';

const app = express();

//parse JSON text in request body
app.use(express.json());

app.get("/products/sync", (req, res) => {
    //avoid this! (can block other requests on the Node.js event loop)
    fsSync.readFileSync("./products.json");

    fsSync.readFile("./products.json", (err, data) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }

        res.status(200).json({
            message: "success",
            data
        })
    })
})

app.get("/products", async (req, res) => {
    const text = await fs.readFile("./products.json");
    const products = JSON.parse(text);

    console.log(`Read ${products.length} products!`);

    res.status(200).json({
        message: `Found ${products.length} products`,
        data: products
    })
})

app.post("/products", async (req, res) => {
    const text = await fs.readFile("./products.json");
    const products = JSON.parse(text);

    const { name, description, price } = req.body;

    const product = {
        id: products.length + 1,
        name, 
        description,
        price
    }

    products.push(product);
    console.log(products);

    //save changes to file
    const json = JSON.stringify(products, null, 2);
    await fs.writeFile("./products.json", json);

    res.status(201).json({
        message: `Inserted product with id ${product.id}`,
        data: product
    });
})

app.patch("/products", async (req, res) => {
    const { id, name, description, price } = req.body;

    const text = await fs.readFile("./products.json");
    const products = JSON.parse(text);

    //find first match
    const product = products.find(prod => prod.id === id);
    product.name = name;
    product.description = description;
    product.price = price;

    const json = JSON.stringify(products, null, 2);
    await fs.writeFile("./products.json", json);

    res.status(200).json({
        message: `Updated product with id ${product.id}`,
        data: product
    });
})

app.delete("/products", (req, res) => {

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})