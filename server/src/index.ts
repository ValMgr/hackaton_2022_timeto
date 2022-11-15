import express from 'express';

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log(`Server listen on http://localhost:${3000}`);
});
