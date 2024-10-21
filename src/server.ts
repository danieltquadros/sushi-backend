import express, { urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { mainRouter } from './routes/main';
import { errorHandler, notFoundRequest } from './routes/errorHandler';

const server = express();
/* helmet - Adiciona alguns headers nas requisições, automaticamente para
trazer mais proteção e remove o header "ex power by" (ou algo assim) */
server.use(helmet());
server.use(cors());
// server.use(express.json());
server.use(urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json());

server.use('/', mainRouter);
server.use(notFoundRequest);
server.use(errorHandler);
// rotas

server.listen(process.env.PORT || 4000, () => {
  console.log(`Server running at ${process.env.BASE_URL}`);
});
