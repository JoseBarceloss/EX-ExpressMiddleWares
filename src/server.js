const app = require('./app');

const PORT = '3000';

app.listen(PORT, () => {
  console.log(`Online! Running on port ${PORT}`);
});