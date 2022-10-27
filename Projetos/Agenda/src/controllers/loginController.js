const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if (req.session.user) {
    return res.render('login-logado');
  } else {
    res.render('login');
  }
};

// Registro de usuário

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('index');
      });
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso!');
    req.session.save(function () {
      return res.redirect('index');
    });
  } catch (e) {
    console.log(e);
    return res.redirect('404');
  }
};

// Login de Usuário
exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('index');
      });
      return;
    }

    req.flash('success', 'Login efetuado com sucesso!');
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('index');
    });
  } catch (e) {
    console.log(e);
    return res.redirect('404');
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect('index');
};
