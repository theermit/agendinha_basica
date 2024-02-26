const Contato = require("../services/bdService");

module.exports = {
    exibir_lista: (req, res) => {
        Contato
            .findAll()
            .then(contatos => {
                res.render("lista_contatos.njk",{
                    contatos: contatos
                });
            })
            .catch(error => console.log("Falha na consulta"));
    },
    exibir_form_novo: (req, res) => {
        res.render("form_contato.njk", { acao: 'incluir_contato' });
    },
    processar_incluir_novo_contato: (req, res) => {
        delete req.body.id;
        Contato
            .create(req.body)
            .then(res.render("mensagem.njk", {
                mensagem: "Contato criado com sucesso!",
                link: "/"
            }))
            .catch((err) => res.render("mensagem.njk", {
                mensagem: "Falha na criação do contato!",
                link: "/"
            }));
    },
    exibir_form_editar: (req, res) => {
        Contato 
            .findAll({
                where: {
                    id: req.params.contato_id
                }
            })
            .then(contatos => {
                res.render("form_contato.njk", { 
                    acao: 'editar_contato',
                    contato: contatos[0]
                });
            })
            .catch((err) => res.render("mensagem.njk", {
                mensagem: "Falha na consulta ao contato!",
                link: "/"
            }));
        
    },
    processar_editar_contato: (req, res) => {
        Contato
            .update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(res.render("mensagem.njk", {
                mensagem: "Contato alterado com sucesso!",
                link: "/"
            }))
            .catch((err) => res.render("mensagem.njk", {
                mensagem: "Falha na alteração do contato!",
                link: "/"
            }));
    },
    exibir_form_apagar_contato: (req, res) => {
        Contato 
            .findAll({
                where: {
                    id: req.params.contato_id
                }
            })
            .then(contatos => {
                res.render("form_contato.njk", { 
                    acao: 'apagar_contato',
                    contato: contatos[0]
                });
            })
            .catch((err) => res.render("mensagem.njk", {
                mensagem: "Falha na consulta ao contato!",
                link: "/"
            }));
    },
    processar_apagar_contato: (req, res) => {
        Contato
            .destroy({
                where: {
                    id: req.body.id
                }
            })
            .then(res.render("mensagem.njk", {
                mensagem: "Contato excluído com sucesso!",
                link: "/"
            }))
            .catch((err) => res.render("mensagem.njk", {
                mensagem: "Falha na exclusão do contato!",
                link: "/"
            }));
    }
};