const http = require('http');
const fs = require('fs');

const express = require('express');
	// event emitters
	// streams
	// clusters

const app = express();

app.use(express.static('client'));



app.listen(8080)