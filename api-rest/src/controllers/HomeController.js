import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Zoro',
      sobrenome: 'Roronoa',
      email: 'zoro@teste.com',
      idade: 21,
      peso: 80,
      altura: 1.81,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
