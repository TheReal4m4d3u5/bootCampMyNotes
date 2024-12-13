import { Router } from 'express';
import { bookRouter } from './book-routes.js'; 

const router = Router(); // configured from express

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/books', bookRouter); // /api/books router

export default router; // api router 
