import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    nombre: {
      type: String,

      trim: true,
    },
    msg: {
      type: String,

      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;