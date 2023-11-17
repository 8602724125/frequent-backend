const mongoose = require('../db/database')

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  country: { type: String, default: null },
  state: { type: String, default: null },
  city: { type: String, default: null },
  gender: { type: String, default: null },
  dob: { type: String, default: null },
})

module.exports = mongoose.model('user', userSchema);