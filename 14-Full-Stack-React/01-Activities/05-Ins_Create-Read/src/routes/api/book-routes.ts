import { Router, Request, Response } from 'express';
import { Book } from '../../models/index.js'; // getting imported from models/index

// Imports:

// Router, Request, and Response are imported from Express for routing and handling HTTP requests/responses.
// Book is imported from your models to interact with the book table.


// Each function defines a specific route’s behavior.
// getAllBooks: Fetches all books from the database and sends them as JSON.

// Controller fucntions (which actually interact with db and send response to client)

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const users = await Book.findAll(); // Read operation Select * FROM book - select title, author, pages, from book where is_paperback = true by title 
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// const book = await Book.findOne({ //find a book whos key is greater than 10, will only return the first one. 
//   where: {
//     pages:{
//       $gt: 10
//     }
//   }
// })


// getAllPaperbackBooks: Fetches only paperback books, orders them by title, and excludes the is_paperback and edition fields in the response.
export const getAllPaperbackBooks = async (_req: Request, res: Response) => {
  try {

    // everything in brackets is a FIND OPTIONS OBJECT, passes properties that the effect the raw findall sql querry

    const users = await Book.findAll({ // select titles, author, pages, from book where is_papaerback = true order by title asc, execpt for is pagpger back, edition
      // Order by title in ascending order
      order: ['title'], // takes in an array of strings, each string matches one column in the colletion Book in assending order
      where: { // where some columns value is a specific value 
        // Only get books that have this boolean set to TRUE
        is_paperback: true
      },
      attributes: { // The select * sql querry, select all of the attributes excluding is paperback in addiftion from our results 
        // Don't include these fields in the returned data
        exclude: ['is_paperback', 'edition']
      }
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// getBookById: Fetches a book by its ID. If the book exists, it’s returned; otherwise, it sends a 404 error.


// GET /Books/:id
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id); // Find by Pk - find by primary key select * from book where book_id = $1' some argument, returns an object book with all atributes of book with that id
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// createBook: Takes book details from the request body and creates a new book in the database. On success, it returns the new book; on error, it sends a 400 error with the error message.
// POST /Books
export const createBook = async (req: Request, res: Response) => {
  const { title, author, isbn, pages, edition, is_paperback } = req.body;
  try {

    // is creating a new book in the database. Here’s what each part does:

    // Book.create(): Calls a function to add a new book to the database.
    // Data in { ... }: The details of the book (like title, author, and whether it’s a paperback) are passed as an object.
    // await: Pauses the code until the book is successfully saved in the database.
    // const newBook: Stores the newly created book record in newBook, which can be used to access or return the new book's data.
    // This line saves a new book with the given details in the Book table.

    const newBook = await Book.create({ title, author, isbn, pages, edition, is_paperback }); //Create operation in sql
    res.status(201).json(newBook);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// createBooks: Seeds (inserts) multiple predefined books into the database at once. On success, it confirms the data was added.
// POST /Books/Seed
export const createBooks = async (_req: Request, res: Response) => {
  try {
  // Multiple rows can be created with `bulkCreate()` and an array
  // This could also be moved to a separate Node.js script to ensure it only happens once
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false
    },
    {
      title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true
    },
    {
      title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true
    }
  ])
    res.status(200).json({ message: 'Book data seeded.' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


// Router Setup:

// router.get('/', getAllBooks): Calls getAllBooks when you access /books.
// router.get('/paperbacks', getAllPaperbackBooks): Calls getAllPaperbackBooks when you access /books/paperbacks.
// router.get('/:id', getBookById): Calls getBookById for a specific book by ID.
// router.post('/', createBook): Calls createBook to add a new book.
// router.post('/seed', createBooks): Calls createBooks to add multiple books.
// Exporting the Router:
// The bookRouter can now be used in your main server file to handle all /books routes.

const router = Router(); // router component that can exent to different methods at different endpoints

// GET /books - Get all books
router.get('/', getAllBooks);

// GET /books/paperbacks - Get all paperback books
router.get('/paperbacks', getAllPaperbackBooks);

// GET a single book
// api/books/:id app.use(routes) - index.ts with depends on index.ts with depends on book- routes 
router.get('/:id', getBookById);

// full route is /api/books- ? I think 
// POST /api/books - Create a new book
router.post('/', createBook);  //server.ts moutes the routes as middleware starting in server.ts, then that server router moutes routes/index.ts router wher its modified by api/index

// POST /books/seed - Create multiple books
router.post('/seed', createBooks); // runs Book.bulkCreate

// or can also be set up like this
// router.route('/')
// .get(getAllBooks)
// .delete(deleteAll) // not real yet
// .post(createBook);

// router.route('/:id')
// .put(modifyBookById) // not real yet
// .get(getBookById);

// router.route('/paperbacks')
// .get(getAllPaperbackBooks);


export { router as bookRouter };
