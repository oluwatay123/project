const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

let clientIp = '';

// Function to fetch IP address and store it
const fetchIpAddress = async () => {
    try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        clientIp = ipResponse.data.ip;
        console.log(`Fetched IP address: ${clientIp}`);
    } catch (error) {
        console.error('Failed to fetch IP address:', error);
    }
};

// Fetch the IP address on server start
fetchIpAddress();

app.get('/api/hello', async (req, res) => {
    const { visitor_name } = req.query;

    if (!clientIp) {
        return res.status(500).send({
            error: 'IP address not available. Please try again later.'
        });
    }

    try {
        const clientLocationResponse = await axios.get(`https://ipinfo.io/${clientIp}?token=37944c66c349ed`);
        const clientLocation = clientLocationResponse.data;
        const randomNumber = Math.floor(Math.random() * 100);

        res.send({
            'client_ip': clientIp,
            'location': clientLocation?.city || 'Unknown',
            'greeting': `Hello, ${visitor_name}! The temperature is ${randomNumber} degrees Celsius in ${clientLocation.city}`
        });
    } catch (error) {
        res.status(500).send({
            error: 'Failed to fetch location information'
        });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
