const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/ageOfEMpires';
// const DB_URL = 'mongodb://localhost:27017/ageOfEMpires';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});