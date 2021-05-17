import express, { Application } from 'express';
import { Connection } from 'typeorm';
import { postgres } from 'db/postgres';
import users from 'routes/users.routes';

const { PORT } = process.env;

const main = async () => {
  const app: Application = express();
  const connection: Connection = await postgres();

  app.use(express.json());
  app.set('postgres', connection);

  app.use('/api/v0/users', users);

  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

main().catch((err) => console.error(err));
