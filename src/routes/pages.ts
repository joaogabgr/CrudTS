import express from 'express';
import { Postagens } from '../models/postagens';
import { Usuarios } from '../models/usuario';

const router = express.Router();

router.get('/', async (req, res) => {
    const publicacoes = await Postagens.findAll({
        include: [ { model: Usuarios, as: 'usuario' } ]
    });
    
    res.render('index.ejs', {usuarioID: req.session.usuarioID, publicacoes: publicacoes})
});

router.get('/cadastrar', (req, res) => {
    res.render('cadastrar.ejs');
});

router.get('/logar', (req, res) => {
    res.render('logar.ejs');
});

router.get('/perfil', async (req, res) => {
    if (req.session.usuarioID == undefined) {
        res.redirect('/');
    };
    const usuario = await Usuarios.findByPk(req.session.usuarioID);
    const publicacoes = await Postagens.findAll({ 
        where: { 
            usuarioId: req.session.usuarioID 
        },
        include: [ 
            { model: Usuarios, as: 'usuario' } 
        ] 
    });
    
    res.render('perfil.ejs', { usuario: usuario, publicacoes: publicacoes});
})

export default router;
