//enum para os generos
const GeneroLivro = {
    TEXTOS_RELIGIOSOS: "Textos religiosos",
    TERROR: "Terror",
    COMEDIA: "Comédia",
    COMEDIA_ROMANTICA: "Comedia romântica",
    SUSPENSE: "Suspense",
    DRAMA: "Drama",
    POLICIAL: "Policial",
    HISTORIA: "História",
    FICCAO_CIENTIFICA: "Ficção cientifica",
};

class EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.isEmprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario) {
        if (!this.isEmprestado) {
            this.isEmprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log(`"${this.titulo}" foi emprestado para "${usuario.nome}".`);
        } else {
            console.log(`"${this.titulo}" já está emprestado.`);
        }
    }

    devolver() {
        if (this.isEmprestado) {
            this.isEmprestado = false;
            this.usuarioEmprestimo = null;
            console.log(`"${this.titulo}" foi devolvido.`);
        } else {
            console.log(`"${this.titulo}" já está disponível.`);
        }
    }
}

class Livro extends EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao, genero) {
        super(codigo, titulo, autor, anoPublicacao);
        this.genero = genero;
    }

    informacoes() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Genero: ${this.genero}`);
    }
}

class Revista extends EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao, edicao) {
        super(codigo, titulo, autor, anoPublicacao);
        this.edicao = edicao;
    }

    informacoes() {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Edição: ${this.edicao}`);
    }
}

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

    popularAcervo(acervoQueVemDaApiConvertidoParaJajascriptObject) {
        acervoQueVemDaApiConvertidoParaJajascriptObject.forEach(item => {
            if (item.EntidadeBibliografica === "Livro") {
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.genero));
            } else if (item.EntidadeBibliografica === "Revista") {
                this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.edicao));
            }
        });
    }

    adicionarItem(item) {
        this.acervo.push(item);
    }

    listarAcervo() {
        console.log("Acervo da Biblioteca:");
        if (this.acervo.length === 0) {
            console.log('Acervo vazio.');
        } else {
            this.acervo.forEach(item => {
                const infoUsuario = item.usuarioEmprestimo
                    ? `Emprestado para ${item.usuarioEmprestimo.nome}`
                    : 'Disponível';
                console.log(`-> ${item.titulo} (Código: ${item.codigo}) - ${infoUsuario}`);
            });
        }
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuário ${usuario.nome} adicionado com sucesso.`);
    }

    emprestarItem(codigo, registroAcademico) {
        const item = this.acervo.find(item => item.codigo === codigo);

        if (item) {
            const usuario = this.usuarios.find(usuario => usuario.registroAcademico === registroAcademico);

            if (usuario) {
                item.emprestar(usuario);
                console.log(`"${item.titulo}" foi emprestado para "${usuario.nome}".`);
            } else {
                console.log(`Usuário com registro acadêmico ${registroAcademico} não encontrado.`);
            }
        } else {
            console.log(`Item com código ${codigo} não encontrado.`);
        }
    }

    devolverItem(codigo) {
        const item = this.acervo.find(item => item.codigo === codigo);

        if (item) {
            item.devolver();
            console.log(`"${item.titulo}" foi devolvido.`);
        } else {
            console.log(`Item com código ${codigo} não encontrado.`);
        }
    }
}
