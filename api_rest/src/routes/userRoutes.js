import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir

router.get('/', loginRequired, userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário.

//
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/* REGRAS DE ROTA
index -> lista -> GET
store/create -> cria -> POST
delete -> apaga -> DELETE
show ->  mostra  -> GET
update -> atualiza -> PATCH ou PUT
*/
