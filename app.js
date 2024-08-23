import express from 'express';
import path from 'path';
import router from './routes/router.js';

const app = express();
const __dirname = import.meta.dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
