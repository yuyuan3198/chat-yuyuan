import Chat from "../models/Chat.js";

const obtenerChats = async (req, res) => {
    const chats = await Chat.find();
    res.json(chats);
  };
  
  const agregarChat = async (req, res) => {
    const chat = new Chat(req.body);
  
    try {
     chat.save();
      res.json(chat);
    } catch (error) {
      console.log(error);
    }
  };

  export {obtenerChats,agregarChat};