import express from 'express'
import bodyParser from 'body-parser';
import { Postagens } from '../models/postagens';

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/publicar', (req, res) => {
    const titulo = req.body.titulo;
    const mensagem = req.body.mensagem;
    console.log(req.session.usuarioID);
    

    Postagens.create({
        titulo: titulo,
        mensagem: mensagem,
        usuarioId: req.session.usuarioID
    }).then(postagem => {
        res.redirect('/')
    }).catch(error => {
        console.error('Erro ao criar uma postagem', error);
        res.status(500).send('Erro interno do servidor')
    })
})

router.get('/excluir/:id', async (req, res) => {
    const postagem = await Postagens.findByPk(req.params.id)
    if (postagem) {
        postagem.destroy()
        res.redirect('/perfil')
    }
})

router.post('/editar/:id', async (req, res) => {
    const postagem = await Postagens.findByPk(req.params.id)
    if (postagem) {
        postagem.update({
            titulo: req.body.titulo,
            mensagem: req.body.mensagem
        })
        res.redirect('/perfil')
    }
})

export default router;