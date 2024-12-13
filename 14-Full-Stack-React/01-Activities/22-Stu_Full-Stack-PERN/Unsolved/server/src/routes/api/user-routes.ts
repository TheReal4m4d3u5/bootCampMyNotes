import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../Index.js'; // Adjust this path to where your User model is located


const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
    //TODO: Get all the Users out of the database and send them to the client as a response

    try {
        const users = await User.findAll(); 
        res.status(200).json(users); // Send the users to the client
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

export { router as userRouter };
