// Sistema Biblioteca JS- Will
// Criação da classe base EntidadeBibliografica
class EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.emprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario) {
        if (this.emprestado === false) {
            this.emprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log('Item emprestado com sucesso!');
            alert('Item emprestado com sucesso!');
            return true;
        } else {
            console.log('Este item não pode ser emprestado!');
            alert('Este item não pode ser emprestado!');
            return false;
        }
    }

    devolver() {
        if (!this.estaEmprestado()) {
            console.log('Este item nao esta emprestado!');
            alert('Este item nao esta emprestado!');
            return false;
        } else {
            console.log('Item devolvido com sucesso!');
            alert('Item devolvido com sucesso!');
            this.emprestado = false;
            this.usuarioEmprestimo = null;
            return true;
        }
    }
}

class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero, emprestado, usuarioEmprestimo) {
        super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo);
        if (['suspense', 'terror', 'comedia', 'romance'].includes(genero)) {
            this.genero = genero;
        } else {
            throw new Error('Gênero inválido');

        }
    }

    informacao() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano de publicação: " + this.anoPublicacao);
        console.log("Código: " + this.codigo);
        console.log("Emprestado: " + this.emprestado);
        console.log("Usuário emprestado: " + this.usuarioEmprestimo);

        console.log("Genero: " + this.genero);//livro necessita de genero

        alert("ler console");
    }
}

class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo) {
        super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo);
    }

    informacao() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano de publicação: " + this.anoPublicacao);
        console.log("Código: " + this.codigo);
        console.log("Emprestado: " + this.emprestado);
        console.log("Usuário emprestado: " + this.usuarioEmprestimo);

        alert("ler console");
    }
}

class Usuario {
    constructor(nome, RA, dataNascimento) {
        this.nome = nome;
        this.RA = RA;
        this.dataNascimento = dataNascimento;
    }
}

class Biblioteca {
    constructor(acervo, usuarios) {
        this.acervo = [];
        this.usuarios = [];
    }

    adicionarItem(item) {
        this.acervo.push(item);
        console.log("Item adicionado com sucesso!");
        alert(`Item ${item.titulo} adicionado com sucesso!`);
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log("Usuario adicionado com sucesso!");
        alert(`Usuario ${usuario.nome} adicionado com sucesso!`);
    }

    listarAcervo() {
        this.acervo.forEach(item => {
            item.informacao();
            console.log("Item ${item.titulo} listado com sucesso!");
            alert(`Item ${item.titulo} listado com sucesso!`);
        })
        return this.acervo;
    }

    emprestarItem(codigoItem, codigoUsuario) {
        let item = this.acervo.find(item => item.codigo === codigoItem);
        let usuario = this.usuarios.find(user => user.RA === codigoUsuario);
        
        if (item.emprestar(usuario)) {
            console.log("Item emprestado com sucesso!");
            alert(`Item ${item.titulo} emprestado com sucesso!`);
        } else {
            console.log("Item não pode ser emprestado!");
            alert(`Item ${item.titulo} não pode ser emprestado!`);
        }
    }

    devolverItem(codigoItem) {
        let item = this.acervo.find(item => item.codigo === codigoItem);

        if (item.devolver()) {
            console.log("Item devolvido com sucesso!");
            alert(`Item ${item.titulo} devolvido com sucesso!`);
        } else {
            console.log("Item não pôde ser devolvido!");
            alert(`Item ${item.titulo} não pôde ser devolvido!`);
        }
    }
}
function adicionarLivro() {
    var titulo = prompt("Digite o título do livro:");
    var autor = prompt("Digite o autor do livro:");
    var anoPublicacao = prompt("Digite o ano de publicação do livro:");
    var codigo = prompt("Digite o código do livro:");
    var genero = prompt("Digite o gênero do livro:");

    // Código para adicionar o livro à biblioteca
}

function adicionarRevista() {
    var titulo = prompt("Digite o título da revista:");
    var autor = prompt("Digite o autor da revista:");
    var anoPublicacao = prompt("Digite o ano de publicação da revista:");
    var codigo = prompt("Digite o código da revista:");

    // Código para adicionar a revista à biblioteca
}

function adicionarUsuario() {
    var nome = prompt("Digite o nome do usuário:");
    var RA = prompt("Digite o RA do usuário:");
    var dataNascimento = prompt("Digite a data de nascimento do usuário:");

}

function listarAcervo() {
    // Código para listar o acervo da biblioteca
}

function emprestarItem() {
    var codigoItem = prompt("Digite o código do item que deseja emprestar:");
    var codigoUsuario = prompt("Digite o código do usuário que irá pegar emprestado:");

    // Código para emprestar o item da biblioteca
}

function devolverItem() {
    var codigoItem = prompt("Digite o código do item que deseja devolver:");
}