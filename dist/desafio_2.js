"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["padeiro"] = 1] = "padeiro";
})(profissao || (profissao = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.atriz
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.padeiro
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.padeiro
};
