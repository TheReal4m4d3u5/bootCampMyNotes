import { Router } from "express";
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

const router = Router();

// CREATE a new user

/*
Route Setup:
  This line sets up a POST route. When the server gets a POST request 
  at this route ('/'), it will run the code inside the function.
  async (req: Request, res: Response) => {} means this function is asynchronous, 
  allowing us to wait for some operations to finish before moving to the next step.
*/

router.post('/', async (req: Request, res: Response) => {
  
  try {

    //     Get User Data:
    // const newUser = req.body;
    // This line takes the data that the user sends in their request 
    // (like username, email, and password) and stores it in newUser.
    const newUser = req.body;

    // ! hash the password from 'req.body' and save to newUser
    // Hash the Password:
    // newUser.password = await bcrypt.hash(req.body.password, 10);
    // Here, bcrypt.hash() encrypts (hashes) the password, making it 
    // secure before saving it in the database. The 10 here is the "salt rounds" which 
    // makes the hashing stronger.
    // await ensures the code waits for bcrypt to finish hashing before continuing.
    newUser.password = await bcrypt.hash(req.body.password, 10);


    // ! create the newUser with the hashed password and save to DB

    // Save New User to the Database:
    // const userData = await User.create(newUser);
    // This line takes the newUser object (with the hashed password) 
    // and saves it to the database.
    // await ensures that we wait until the user is successfully saved in the database.
    const userData = await User.create(newUser);

    //     Send Success Response:
    // res.status(200).json(userData);
    // If the user is saved successfully, we send a success response 
    // (status 200) with the user’s data in JSON format.
    res.status(200).json(userData);

  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Add comments describing the functionality of this `login` route
// Route Setup:
// This line sets up a POST route for '/login'. When someone tries to log 
// in by sending a POST request here, it will run this function.

router.post('/login', async (req: Request, res: Response) => {
  try {

    // const userData = await User.findOne({ where: { email: req.body.email } });
    // Here, the code looks for a user in the database with the same email that was 
    // sent in the request (req.body.email).
    // If no user is found (!userData), it means the email doesn't match any user, 
    // so we send a response with a "Login failed" message and stop.

    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }


    //     Check Password:
    // const validPassword = await bcrypt.compare(req.body.password, userData.password);
    // If the user was found, the code checks if the password entered 
    // (req.body.password) matches the hashed password saved in the database (userData.password).
    // bcrypt.compare() handles the comparison. If the password 
    // doesn’t match (!validPassword), it sends a "Login failed" message and stops.

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }


    //     Successful Login:
    // res.status(200).json({ message: 'You are now logged in!' });
    // If both the email and password match, it sends a success message 
    // ("You are now logged in!").
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

