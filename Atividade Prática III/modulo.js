/*
Implementar um módulo que apresente as seguintes funções:
inserir(user) – insere um usuário no lowdb.
remover(id) – remove um usuário no lowdb a partir do seu id.
procurar(id) – retorna o usuário a partir de seu id.*/
const low = require ('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
const functions = {
    data: (arr) => {
        let data = new Date(arr);
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth()).padStart(2, '0');
        let ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    },
    hora: (arr) => {
        let data = new Date(arr);
        let hora = String(data.getHours()).padStart(2, '0');
        let minutos = String(data.getMinutes()).padStart(2, '0');
        return `${hora}:${minutos}`;
    },
    dataExtenso: (arr) => {
        const diasSemana=['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];
        const meses=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        let data = new Date(arr);
        let diaSemana = diasSemana[data.getDay()];
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    },
    inserir: (arr) => {
        db.get('Usuaros')
        .push(arr)
        .write();
    },
    remover:(arr) =>{
        db.get('Usuarios')
        .remove({id: id})
        .write();
    },
    procurar:(arr) =>{
        return db.get('Usuarios')
        .find({id: id})
        .value()
    }
}

module.exports = functions;