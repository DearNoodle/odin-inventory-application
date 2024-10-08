import express from 'express';
import path from 'path';
import router from './routes/router.js';

const app = express();
const __dirname = process.cwd();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}!`);
});
