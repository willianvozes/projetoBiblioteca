**BIBLIOTECA** {
    *-acervo: EntidadeBibliografica[
        *-codigo*
        *-titulo*
        *-autor*
        *-anoPublicacao*
        *-isEmprestado*
        *-usuarioEmprestimo: Usuario* 👾
        =====================================
        +devolver()
        +emprestar(Usuario)
    ]*

    *-usuários: Usuario[
        -nome
        -registroAcademico
        -dataNascimento
    ]*

    =====================================
    +popularAcervo(itens)
    +adicionarItem(item)
    +listarAcervo()
    +adicionarUsuario(usuario)
    +emprestarItem(codigo, registroAcademico)
    +devolverItem(codigo)
}

**acervo** EntidadeBibliografica { ⭐
    *-codigo*
    *-titulo*
    *-autor*
    *-anoPublicacao*
    *-isEmprestado*
    *-usuarioEmprestimo: Usuario* 👾
    =====================================
    +devolver()
    +emprestar(Usuario)
}

**usuarios** 👾 Usuario { 
    -nome
    -registroAcademico
    -dataNascimento
}

⭐ Livro {
    -genero: GeneroLivro 🔰
    +informacoes()
}
⭐ Revista {
    -edicao
    +informacoes
}

🔰 *GeneroLivro* {
    FICCAO_CIENTIFICA
    TERROR
    COMEDIA
    SUSPENSE
    DRAMA
    HISTORIA
    POLICIAL
}