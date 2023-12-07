// Definindo a classe EntidadeBibliografica
class EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, emprestado = false, usuarioEmprestimo = null) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.emprestado = emprestado;
        this.usuarioEmprestimo = usuarioEmprestimo;
    }

    emprestar(usuario) {
        if (!this.emprestado) {
            this.emprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log(`Item emprestado para ${usuario.nome}.`);
            alert(`Item emprestado para ${usuarioNome}.`);
        } else {
            console.log('O item já está emprestado.');
            alert('O item já está emprestado.');
        }
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            this.usuarioEmprestimo = null;
            console.log('Item devolvido.');
            alert('Item devolvido.');
        } else {
            console.log('O item não está emprestado.');
            alert('O item não está emprestado.');
        }
    }
}

// Definindo a classe Livro que herda de EntidadeBibliografica
class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo, genero) {
        super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo);
        this.genero = genero;
    }
    informacoes() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Gênero: ${this.genero}`);
    }
}

// Definindo a classe Revista que herda de EntidadeBibliografica
class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo, edicao) {
        super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo);
        this.edicao = edicao;
    }
    informacoes() {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`);
    }
}

// Definindo a classe Usuario
class Usuario {
    constructor(nome, registroAcademico, dataNascimento) {
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.dataNascimento = dataNascimento;
    }
}

// Definindo a classe Biblioteca
class Biblioteca {
    constructor() {
        this.acervo = [];
        this.usuarios = [];
    }

    adicionarItem(item) {
        this.acervo.push(item);
        console.log(`Item "${item.titulo}" adicionado ao acervo.`);
    }

    popularAcervo(acervoAPI) {
        acervoAPI.forEach(item => {
            if (item instanceof Livro) {
                this.adicionarItem(new Livro(item.titulo, item.autor, item.anoPublicacao, item.codigo, item.emprestado, item.usuarioEmprestimo, item.genero));
            } else if (item instanceof Revista) {
                this.adicionarItem(new Revista(item.titulo, item.autor, item.anoPublicacao, item.codigo, item.emprestado, item.usuarioEmprestimo, item.edicao));
            }
        });
    }

    listarAcervo() {
        let acervoString = 'Acervo da biblioteca:\n';
        this.acervo.forEach(item => {
            if (item instanceof Livro) {
                acervoString += `Livro: "${item.titulo}"; Autor: ${item.autor}; Ano de Publicação: ${item.anoPublicacao}, Código: ${item.codigo}; Gênero: ${item.genero}\n`;
            } else if (item instanceof Revista) {
                acervoString += `Revista: "${item.titulo}"; Autor: ${item.autor}; Ano de Publicação: ${item.anoPublicacao}, Código: ${item.codigo}; Edição: ${item.edicao}\n`;
            }
        });
        console.log(acervoString);
        alert(acervoString);
    }

    listarUsuarios() {
        let usersString = 'Usuários da biblioteca:\n';
        this.usuarios.forEach(usuario => {
            usersString += `Nome: ${usuario.nome};RA: ${usuario.registroAcademico}; Nascimento: ${usuario.dataNascimento}\n`;
        });
        console.log(usersString);
        alert(usersString);
    }

    adicionarUsuarios(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuário ${usuario.nome} adicionado à biblioteca.`);
    }

    emprestarItem(codigo, registroAcademico) {
        const item = this.acervo.find(i => i.codigo === codigo);
        const usuario = this.usuarios.find(u => u.registroAcademico === registroAcademico);

        if (item && usuario) {
            item.emprestar(usuario);
            console.log('Item emprestado.');
            alert('Item emprestado.');
        } else {
            console.log('Item ou usuário não encontrado.');
            alert('Item ou usuário não encontrado.');
        }
    }

    devolverItem(codigo) {
        const item = this.acervo.find(i => i.codigo === codigo);

        if (item) {
            item.devolver();
            console.log('Item está no acervo.');
            alert('Item está no acervo.');
        } else {
            console.log('Item não encontrado.');
            alert('Item não encontrado.');
        }
    }
}