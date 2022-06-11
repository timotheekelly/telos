import express from 'express';

const app = express();

// MIDDLEWARES
app.use('/topics')


// ROUTES
app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(8000, () => console.log('App is listening on port 8000.'));