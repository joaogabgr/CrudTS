import { ConectarBanco } from "./config/database";
import express from 'express';
import pages from './routes/pages'
import usuario from './routes/usuario'
import path from 'path'

const session = require('express-session');
const app = express();
const port = 3000;
ConectarBanco()

app.set('views', path.join(__dirname, '../src/views/pages'));
app.use(session({
    secret: 'sua-chave-secreta-aqui', // Chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: false
}));
app.use('/', pages)
app.use('/', usuario)

app.listen(port, () => {
    console.log('Servidor iniciado');    
})
