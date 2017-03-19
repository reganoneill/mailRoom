'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// app.use();

app.listen(PORT, () => console.log(`server up on ${PORT}`));
