const PORT = "1337";
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const rateLimit = require("express-rate-limit");
let cors = require('cors');

var fs = require('fs');

let data;

fs.readFile('movies.json', 'utf8', function(err, contents) {
		data =  JSON.parse(contents).results;
});

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 10 // limit each IP to N requests per windowMs
});

app.use(limiter);

app.use(bodyParser.json());
app.use(cors());
app.get("/movies", function (req, res) {
	res.send(data);
});

app.route('/movie/:id')
    .get(function (req, res) {
        res.send(data[req.params.id])
    })
    .post(function (req, res) {
		data = [...data.slice(0, req.params.id), req.body, ...data.slice(parseInt(req.params.id) + 1, data.length)];

		fs.writeFile(`./saved_data/${Date.now()}.json`, JSON.stringify(data), function (err, contents) {
			if (err) {
				res.status(500).send("error saving changes");
			}
				res.send({
					"msg": "success",
					"data": req.body,
			});
    });
})

app.listen(PORT, (err) => {
	if (err) console.log("error", err);
	console.log(`> Running on localhost:${PORT}`);
});
