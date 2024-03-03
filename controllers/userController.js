module.exports = {
    sair_do_app: (req, res) => {
        req.session.user_id = null;
        res.render("mensagem.njk", {
            mensagem: "Você saiu do sistema.",
            link: "/logar"
        });
    }
};