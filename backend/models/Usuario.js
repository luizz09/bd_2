const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario', {
    codUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    }, {
        timeStamps: false
})

module.exports = Usuario