import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import logger from '@config/logger';
import initApoloServer from '@graphql/server';

const { env } = process;

const bootstrap = async () => {
  try {
    const app: express.Application = express();
    app.use(express.json());
    app.use(cors());

    initApoloServer(app);

    app.listen(env.PORT, () => {
      logger(`🚀  Server ready at ${env.PORT}`);
    });
  } catch (error) {
    logger('bootstrap-error::  ', error);
  }
};

bootstrap();
