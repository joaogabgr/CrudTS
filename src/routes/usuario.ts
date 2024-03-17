import { Usuarios } from '../models/usuario';
import bodyParser from 'body-parser';
import express from 'express'

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const senha = req.body.senha;
    const confSenha = req.body.confSenha;

    if (senha === confSenha) {
        Usuarios.create({
            nome: nome,
            email: email,
            idade: idade,
            senha: senha
        }).then(usuario => {
            res.send('Usuário criado com sucesso');
        }).catch(error => {
            console.error('Erro ao criar usuário:', error);
            res.status(500).send('Erro interno do servidor');
        });
    } else {
        res.status(400).send('As senhas não são iguais');
    }
});

router.post('/logar', async (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    const usuario = await Usuarios.findOne({ where: { email: email, senha: senha } });
    if (usuario) {
        req.session.usuarioID = usuario.get('id');
        res.redirect('/')
    } else {
        res.status(404).send('Usuário não encontrado ou senha invalida');
    }
})

export default router;
