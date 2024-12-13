import { Router } from 'express';
import type { Request, Response } from 'express';
import { Driver, Car, License } from '../../models/index.js';

const router = Router();

// Get all drivers
router.get('/', async (_req: Request, res: Response) => {
  try {
    const drivers = await Driver.findAll({
      include: [{ model: Car }, { model: License }], // equivalent to adding a table or a join, I want the drivers but I also want the cars and license
    });

    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single driver
// : is a parameter
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findByPk(req.params.id, {
      include: [{ model: Car }, { model: License }], // get a specific driver and the car and liences with that driver and do a join 
    });

    if (!driver) {
      res.status(404).json({ message: 'No driver found with this id!' });
      return;
    }

    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
