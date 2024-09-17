const express = require('express');
const app = express();
const router = require("./routes/router");
const db = require("./confige/db");
const port = 8000;


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/myUploads',express.static("myUploads"));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server started ${port}`);
});