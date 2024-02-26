const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './var/data/database.sqlite'
  });

sequelize
  .authenticate()
  .then(() => console.log("conexao com bd efetuada com sucesso!"))
  .catch(error => console.log("falha na conexao com o bd!"))

  const Contato = sequelize.define("Contato", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync();

module.exports = Contato;