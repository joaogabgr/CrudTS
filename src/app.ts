import { ConectarBanco } from "./config/database";
import express from 'express';

import pages from './routes/pages'
import usuario from './routes/usuario'
import publicacoes from './routes/publicacoes'

import path from 'path'

const session = require('express-session');
const app = express();
const port = 3000;
ConectarBanco()

app.set('views', path.join(__dirname, '../src/views/pages'));
app.use(session({
    secret: 'crud',
    resave: false,
    saveUninitialized: false
}));

app.use('/', pages)
app.use('/', usuario)
app.use('/', publicacoes)

app.listen(port, () => {
    console.log('Servidor iniciado');
})
