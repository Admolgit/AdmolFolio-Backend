import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const Messages = mongoose.model('message', messageSchema);

export default Messages;