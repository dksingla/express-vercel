const express = require("express");
const app = express();
const tips = require("./api/tips");

app.use(express.json({ extended: false }));

app.use("/api/tips", tips);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
