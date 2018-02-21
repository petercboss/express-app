const express = require('express');
const app = express();

app.route('/').get((req, res) => res.send('Hello World!'))
.post((req, res) => res.send('Got a POST request'))
.put((req, res) => res.send('Got a PUT request at /user'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));