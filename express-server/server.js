import express from 'express';
import chalk from 'chalk';

//create a new express server
const app = express();

//define some routes
app.get("/", (req, res) => {
    res.status(200);
    res.header("Content-Type", "application/json");
    res.send({
        id: 0,
        name: "IPhone 16",
        price: 999.99,
        description: "An expensive phone..."
    })
})

const softwareTools = [
    { name: "Postman", description: "Test tool for web APIs" },
    { name: "React Dev Tools", description: "Browser extension" },
    { name: "Visual Studio Code", description: "Source-code editor with built-in support for debugging" },
    { name: "Docker", description: "Containerization platform for developing and deploying applications" },
    { name: "Git", description: "Version control system for tracking changes in source code" },
    { name: "Webpack", description: "Module bundler for JavaScript applications" },
    { name: "JIRA", description: "Project management tool for tracking issues and tasks" },
    { name: "Slack", description: "Messaging platform for team collaboration and communication" },
    { name: "Figma", description: "Design tool for creating user interfaces and prototypes" },
    { name: "Node.js", description: "JavaScript runtime for building server-side applications" },
    { name: "Jenkins", description: "Automation server for continuous integration and delivery" },
    { name: "MongoDB Compass", description: "GUI for interacting with MongoDB databases" }
];

app.get("/tools", (req, res) => {
    res.status(200).send(softwareTools);
})

//path parameters
app.get("/tools/:name", (req, res) => {
    const name = req.params.name;
    const filtered = softwareTools.filter(tool => tool.name === name)
    const tool = filtered[0];
    res.status(200).send(tool);
})

app.get("/points/:x/:y", (req, res) => {
    //destructuring!
    let {x, y} = req.params;

    x = parseInt(x);
    y = parseInt(y);

    res.status(200).send({
        x,
        y
    })
})

//query string values


//bind to a port and start server
const PORT = 9001;
app.listen(PORT, () => {
    console.log(`Server running on port ${chalk.green(PORT)}`);
});