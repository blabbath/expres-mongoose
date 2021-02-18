const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String },
    },
    { collection: 'userinfo' }
);

module.exports = mongoose.model('User', UserSchema);
