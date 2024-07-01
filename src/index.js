import express from 'express'
import cors from 'cors'
import requestIp from 'request-ip'
import axios from 'axios'

const app = express()

app.use(cors())

app.get('/api/hello', async (req, res) => {
    const { visitor_name } = req.query
    const clientIp = requestIp.getClientIp(req);
    const clientLocation = await fetch(`https://ipinfo.io/${clientIp}?token=37944c66c349ed`).then((res) => res.json()).then((data) => { return data })
    const randomNumber = Math.floor(Math.random() * 100)

    res.send({
        'client_ip': clientIp,
        'location': clientLocation?.city,
        'greeting': `Hello, ${visitor_name}!, the temperature is ${randomNumber} degrees Celcius in ${clientLocation.city}`
    })
    // console.log(clientLocation.region)
})

app.listen(4000, () => {
    console.log('working')
})