exports.paginaInicial = (req, res) => {
  req.flash('info', 'Olá mundo!');
  req.flash('error', 'Erro!');
  req.flash('success', 'Sucesso!');
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  //res.send('Formulário recebido!');
  return;
};
