const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World and wellcome to the progrmaing world");
});

app.listen(5000, () => {
    console.log("Server running on port 3000");


    const simpleArray =
        [7, 8, 9];

    const matrix = [
        [1, 2, 3], // Row 0
        [4, 5, 6], // Row 1
        [7, 8, 9]  // Row 2
    ];

    console.log(matrix[1][2]);
});

