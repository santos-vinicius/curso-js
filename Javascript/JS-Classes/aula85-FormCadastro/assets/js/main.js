class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.isValid();
    const passwordIsValid = this.passwordIsValid();

    if (isValid && passwordIsValid) {
      alert('Formulário enviado!');
      this.formulario.submit();
    }
  }

  passwordIsValid() {
    let valid = true;

    const password = this.formulario.querySelector('.senha');
    const repeatPassword = this.formulario.querySelector('.repetir-senha');

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(password, 'Campos senha e repetir senha precisam ser iguais.');
      this.createError(
        repeatPassword,
        'Campos senha e repetir senha precisam ser iguais.'
      );

      if (password.value.length < 6 || password.value.length > 12) {
        valid = false;
        this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres.');
      }
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.formulario.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `O campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validateCPF(field)) valid = false;
      }

      if (field.classList.contains('usuario')) {
        if (!this.validateUser(field)) valid = false;
      }
    }
    return valid;
  }

  validateUser(field) {
    const user = field.value;
    let valid = true;
    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        field,
        'Nome de Usuário precisa conter apenas letras e/ou números.'
      );
      valid = false;
    }

    return true;
  }

  validateCPF(field) {
    const cpf = new ValidateCPF(field.value);

    if (!cpf.valida()) {
      this.createError(field, 'CPF inválido.');
      return false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
