import { Request, Response } from "express";
import Messages from "../models/messages";

const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Messages.find();
    res.status(200).json({
      messages: messages
    });
  } catch (error) {
    res.status(409).json({ error: error})
  }
}

export default getAllMessages;