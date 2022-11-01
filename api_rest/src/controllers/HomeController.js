import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Vinicius',
      sobrenome: 'Santos',
      email: 'teste@teste.com',
      idade: 23,
      peso: 70,
      altura: 1.86,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
