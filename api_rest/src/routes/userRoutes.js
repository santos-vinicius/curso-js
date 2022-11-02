import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router;

/* REGRAS DE ROTA
index -> lista -> GET
store/create -> cria -> POST
delete -> apaga -> DELETE
show ->  mostra  -> GET
update -> atualiza -> PATCH ou PUT
*/
