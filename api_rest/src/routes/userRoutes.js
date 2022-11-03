import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
export default router;

/* REGRAS DE ROTA
index -> lista -> GET
store/create -> cria -> POST
delete -> apaga -> DELETE
show ->  mostra  -> GET
update -> atualiza -> PATCH ou PUT
*/
