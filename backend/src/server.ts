import 'reflect-metadata';

import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
