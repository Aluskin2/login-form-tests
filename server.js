const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors()); // Pozwala na dostęp do API z dowolnego źródła
app.use(express.json());

// Endpoint do pobrania danych użytkowników
app.get("/api/users", (req, res) => {
    fs.readFile(path.join(__dirname, "users.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Błąd serwera");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});