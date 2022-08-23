import { Request, Response } from "express";
import Messages from "../models/messages";

const Message = async (req: Request, res: Response): Promise<void> => {
  try {
    const message: Array<string> = req.body;
    const messageData = new Messages(message);
    const messageSaved = await messageData.save();
    res.status(200).json({ 
      message: messageSaved
    });
  } catch (error) {
    res.status(409).json({ error: error });
  }
}

export default Message