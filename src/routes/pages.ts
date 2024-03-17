import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota teste');
});

router.get('/cadastrar', (req, res) => {
    res.render('cadastrar.ejs')
})

router.get('/logar', (req, res) => {
    res.render('logar.ejs')
})

export default router;
