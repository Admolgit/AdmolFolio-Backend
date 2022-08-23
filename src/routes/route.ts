import express from 'express';

import Message from '../controllers/message';
import getAllMessages from '../controllers/getAllMessages';

const router = express.Router();

router.post('/message', Message);

router.get('/allmessages', getAllMessages);

export default router;