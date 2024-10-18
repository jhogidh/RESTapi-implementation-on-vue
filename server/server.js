const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Mengizinkan permintaan dari sumber lain
app.use(express.json()); // Middleware untuk parsing JSON

// Definisikan route POST /users
app.post('/users', (req, res) => {
    console.log(req.body); // Cek data yang diterima
    res.status(201).send(req.body); // Kembalikan respons
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
