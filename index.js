// index.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();

// Remove deprecated options
mongoose.connect(process.env.MONGO_DB_URI);

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
