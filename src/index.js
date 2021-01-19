import express from 'express';
import cors from 'cors';
import routes from './router';

const log = [];

const app = express();
const port = process.env.PORT || 3333;

app.use((req, res, next) => {
  console.log(`Metodo: ${req.method}, URL:${req.url}, IP: ${req.ip}, Parametro ${req.params}`)
  log.push(`Metodo: ${req.method}, URL:${req.url}, IP: ${req.ip}, Parametro ${req.params}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

app.use(routes);

app.listen(port);

export {
  log
}