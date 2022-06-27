interface Ipessoa{
    nome: string,
    idade: number,
    profissao: profissao
}
enum profissao{
    atriz,
    padeiro
}

const pessoa1: Ipessoa = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.atriz
}

const pessoa2: Ipessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.padeiro
}

const pessoa3: Ipessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz
}

const pessoa4: Ipessoa = {
    nome :"carlos",
    idade : 19,
    profissao : profissao.padeiro
}