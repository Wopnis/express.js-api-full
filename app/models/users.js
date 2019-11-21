const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: Number
});
mongoose.model('Users', UsersSchema);