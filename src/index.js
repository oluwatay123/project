// import express from 'express'
// import cors from 'cors'
// import requestIp from 'request-ip'
// import axios from 'axios'

// const app = express()

// app.use(cors())

// app.get('/api/hello', async (req, res) => {
//     const { visitor_name } = req.query
//     const clientIp = requestIp.getClientIp(req);
//     const clientLocation = await fetch(`https://ipinfo.io/${clientIp}?token=37944c66c349ed`).then((res) => res.json()).then((data) => { return data })
//     const randomNumber = Math.floor(Math.random() * 100)

//     res.send({
//         'client_ip': clientIp,
//         'location': clientLocation?.city,
//         'greeting': `Hello, ${visitor_name}!, the temperature is ${randomNumber} degrees Celcius in ${clientLocation.city}`
//     })
//     // console.log(clientLocation.region)
// })

// app.listen(4000, () => {
//     console.log('working')
// })

// index.js
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
	// Set the response header
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Write some text to the response
	res.end('Welcome to my simple Node.js app!');
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
