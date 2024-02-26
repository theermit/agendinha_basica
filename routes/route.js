const express = require('express');
const router = express.Router();

const contatoController = require("../controllers/contatoController");

const contato_inc_edit_middleware = require("../middlewares/contatoMiddleware");

//rotas
//index -> lista de contatos
router.get("/", contatoController.exibir_lista);

//novo -> novo contato
router.get("/novo", contatoController.exibir_form_novo);

// processar_incluir_novo_contato
router.post("/incluir_contato", contato_inc_edit_middleware, contatoController.processar_incluir_novo_contato);

//editar -> edita contato
router.get("/editar/:contato_id", contatoController.exibir_form_editar);

// processar_editar_contato
router.post("/editar_contato", contato_inc_edit_middleware, contatoController.processar_editar_contato);

//apagar -> apaga contato
router.get("/apagar/:contato_id", contatoController.exibir_form_apagar_contato);

router.post("/apagar_contato", contatoController.processar_apagar_contato);

module.exports = router;