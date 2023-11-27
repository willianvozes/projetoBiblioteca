//Sistema Biblioteca JS- Will

//trabalhar com DOM, classes, herança e objetos
// Criação da classe base EntidadeBibliografica
class EntidadeBibliografica {
  constructor(titulo, autor, anoPublicacao, codigo) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.codigo = codigo;
    this.emprestado = false;
    this.usuarioEmprestimo = null;

  }
  estaEmprestado() {
    return this.emprestado;
  }
  emprestar(usuario) {
    if (this.estaEmprestado()) {
      console.log('Este item já está emprestado.');
      return;
    } else {
      this.emprestado = true;
      this.usuarioEmprestimo = usuario;
    }
  }

  devolver() {
    if (!this.estaEmprestado()) {
      console.log('Este item não está emprestado.');
      return;
    } else {
      this.emprestado = false;
      this.usuarioEmprestimo = null;
    }
  }
}

// Criação da classe Livro que herda de EntidadeBibliografica
class Livro extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicacao, codigo, genero) {
    super(titulo, autor, anoPublicacao, codigo);
    this.genero = genero;
  }
}


// Criação da classe Revista que herda de EntidadeBibliografica
class Revista extends EntidadeBibliografica {
  constructor(titulo, autor, anoPublicacao, codigo) {
    super(titulo, autor, anoPublicacao, codigo);
  }
}

// Criação da classe Usuario
class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome;
    this.registroAcademico = registroAcademico;
    this.dataNascimento = dataNascimento;
  }
}

class Biblioteca {
  constructor() {
    this.acervo = [];
    this.usuarios = [];
  }
  adicionarItem(item) {
    this.acervo.push(item);
  }
}
var biblioteca = new Biblioteca();
var livro = new Livro();
