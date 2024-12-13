import { Router } from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

// CREATE a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Add JWT signing and separate login route from userRoutes
router.post('/login', async (req: Request, res: Response) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    const secret_key = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign({ id: req.params.id, email: req.body.email }, secret_key, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ token }).status(200).json({ message: 'You are now logged in!' });

  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
