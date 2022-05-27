const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',

        // mySQL username
        user: 'root',

        // mySQL password
        password: 'ckhz727Q!2199',
        database: 'election'
    },

    console.log('Connected to the election database.')
);

// test GET route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});