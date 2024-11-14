//wait for the page to load
window.onload = () => {
    fetchData();
}

const fetchData = async () => {
    const uri = "http://localhost:4242/api/v1/products";
    const config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(uri, config);
    console.log(response);
    const results = await response.json();
    assembleList(results.products);
}

const assembleList = products => {
    const list = document.querySelector("#products-list");

    //add each product to the list
    for (const prod of products) {
        const item = document.createElement("li");
        item.textContent = prod.productName;

        list.append(item);
    }
}