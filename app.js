const express = require('express');
const Datastore = require('nedb-promise');
const insults = new Datastore({ filename: 'insults.db', autoload: true });
const app = express();

app.use(express.json());

/*
app.get('/insults/:severity', async (req, res) => {
    const result = await insults.find({})
    res.json({ "result": result })
});
*/

/*
app.get('/insults/:severity', (req, res) => {
    insults.find({ severity: req.params.severity }, function (error, documents) {
        res.json(documents)
    })
});
*/

/* -- Korrekt kod -->
app.get('/insults/:severity', async (req, res) => {
    const result = await
        insults.find({ severity: parseInt(req.params.severity) })
    res.json({ "result": result })
});
*/

app.get('/insults/:severity', async (req, res) => {
    let severity = await insults.find({ severity: parseInt(req.params.severity) })

    if (severity <= 0) {
        res.status(404);
        res.send({ error: "404 Not Found" })
    } else {
        res.send({ "severity": severity })
    }

});

app.get('/hello', (req, res) => {
    res.send('Hello world');
});


app.listen(8080);
console.log("server Started!");