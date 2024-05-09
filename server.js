const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/proxy', (req, res) => {
    const url = 'https://aces-uat.socialservicesconnect.com/civicrm/ajax/api4/Phone/get';

    axios.post(url, req.body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Civi-Auth': 'Bearer 9AbBayXa4Q1wParKXNOfXi2U'
        }
    })
    .then(response => res.json(response.data))
    .catch(error => {
        console.error('Error when calling the API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
