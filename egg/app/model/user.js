'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    account: String,
    password: String,
    header: {
      default: '/xxx/yyy.png',
      type: String,
    },
  });
  return mongoose.model('User', UserSchema, 'users');
};
