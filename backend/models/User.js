const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true }
});

// Compare plaintext password directly (no hashing)
UserSchema.methods.comparePassword = function (plainPwd) {
  return this.password === plainPwd;
};

module.exports = mongoose.model('Usernaya', UserSchema);
