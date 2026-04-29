const { Sequelize } = require("sequelize")
const db = new Sequelize(`bd_02`, 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

// db.authenticate()
// .then(()=>{
//     console.log('Conexão realizada com sucesso no BD!')
// })
// .catch((err)=>{
//     console.error('Erro ao conectar com o DB!')
// })

module.exports = db