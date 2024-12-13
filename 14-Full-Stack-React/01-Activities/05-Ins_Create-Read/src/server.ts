import express from 'express';
import sequelize from './config/connection.js'; // local module imports setup done in ./config/connection.js to connect to database
import routes from './routes/index.js'; // router.use('/api', apiRoutes);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
//created routes by index.ts-> index.tx -> book-routes -> modles/books -> book routes 


// Force true to drop/recreate table(s) on every sync
//force: true - drop all tables and recreate
// once server is set up turn on to listen for client requests
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
