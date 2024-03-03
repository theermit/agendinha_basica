module.exports = (req, res, next) => {
    if(req.session.user_id == null)
        res.render("mensagem.njk", { 
            mensagem: "Você precisa estar logado no sistema.",
            link: "/logar"
        });
    else 
        next();
};