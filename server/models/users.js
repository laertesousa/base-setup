const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: 'endpoint is required.',
  },
  password: {
    type: String,
    trim: true,
    required: 'endpoint is required.',
  },
  created: { type: Date, default: Date.now },
});

UsersSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('Users', UsersSchema);
