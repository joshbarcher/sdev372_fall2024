import express from 'express';
import fs from 'fs/promises';

const app = express();

//serve up static files from the /public directory
app.use(express.static("./public"))

//configure your web server to parse JSON in a request body
app.use(express.json());

//create
app.post("/products", async (req, res) => {
    const { name, description, price } = req.body;

    //read existing products
    const data = await fs.readFile("./products.json", "utf-8");
    
    //convert from JSON to JS object notation
    const products = JSON.parse(data);
    const product = {
        id: products.length,
        name,
        description,
        price
    };
    products.push(product);

    await fs.writeFile("./products.json", JSON.stringify(products, null, 2), "utf-8");

    //let the user know the data was saved
    res.status(201).send({
        message: `Product saved with ID: ${product.id}`
    })
});

app.get("/products/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const data = await fs.readFile("./products.json", "utf-8");
    const products = JSON.parse(data);
    const result = products.filter(prod => prod.id === id);

    if (result.length !== 0) {
        const product = result[0];
        res.status(200).json({
            message: `Found product with id ${id}`,
            product
        })
    }  else {
        res.status(404).json({
            message: `Record not found with id ${id}`
        })
    }
})

//read
app.get("/products", async (req, res) => {
    const data = await fs.readFile("./products.json", "utf-8");

    //convert from JSON to JS object notation
    const products = JSON.parse(data);

    res.status(200).send({
        message: `Returning ${products.length} products`,
        products
    })
});

//update 
app.patch("/products/:id", (req, res) => {
    
});

//delete
app.delete("/products", (req, res) => {

});

app.listen(4242, () => console.log(`Server started on port 4242`));