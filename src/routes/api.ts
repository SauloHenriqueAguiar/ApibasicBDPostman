import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router();


router.get('/ping',ApiController.ping);
router.get('/random',ApiController.random);
router.get('/nome/:nome',ApiController.nome);

router.post('/frases',ApiController.createPhrase)
router.get('/frases',ApiController.listPhrases)
router.get('/frase/aleatoria', ApiController.randomPhrase);

router.get('/frase/:id',ApiController.getPhrase);
router.put('/frase/:id', ApiController.updatePhrase);
router.delete('/frase/:id',ApiController.deletePhrase);

/*
router.get('/ping',(req,res)=> {
 res.json({pong: true});
}); 

router.get('/random',(req,res) => {
 let nRand: number = Math.floor(Math.random()*10);

 res.json({number: nRand});
})

router.get('/nome/:nome',(req,res)  => {
 let nome : string = req.params.nome;
 res.json({nome: `voce enviou o nome ${nome}`});
} );
 jeito anterior de fazer */


export default router;


