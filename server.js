const express = require('express')
const jsxEngine = require('jsx-view-engine')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true })) 
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.get('/', function (req, res) {
    res.send(`
    <h1>Captain's Log</h1>
    <h2><a href="/logs">Create Log</a></h2>
    `)
})

// Index Route

// app.get('/log', async (req, res) => {
//     try {
//         const foundLogs = await Log.find({})
//         res.render('log/Index', {
//             log: foundLogs
//         })
//     } catch (error) {
//         res.status(400).send({ message: error.message })
//     }
// })

// New Route

// app.get('/logs', (req, res) => {
//     res.send('new')
// })

app.get('/logs', (req, res) => {
    res.render('New')
})

// Delete Route

// Update Route

// Create Route

app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

// Show Route

app.listen(PORT, () => {
  console.log(`${PORT} is working`)
})