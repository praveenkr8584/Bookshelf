let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('working');
});

let books = [
  {
    id: '1',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    price: 42.99
  },
  {
    id: '2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 37.50
  },
  {
    id: '3',
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 29.99
  },
  {
    id: '4',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 25.00
  },
  {
    id: '5',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    price: 55.00
  }
];

app.get('/books', (req, res) => {
  res.render('books.ejs', { books });
});

app.get('/books/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/books', (req, res) => {
  console.log(req.body);
  let { title, author, price } = req.body;
  books.push({ id: books.length + 1, title, author, price});
  res.redirect('/books');
});

app.listen(PORT, () => {
  console.log('server started');
});