import { createConnection } from 'typeorm';

createConnection().catch((err) => {
  console.log('Database connection error', err);
});
