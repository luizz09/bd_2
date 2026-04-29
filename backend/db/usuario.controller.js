const Usuario = require('../models/Usuario')

const cadastrar = async(req, res)=>{
    const valores = req.body
    console.log('Dados do front = ', valores)

    try{
        await Usuario.create(valores)
        res.status(201).json({message: 'Usuário Cadastrado com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Não foi possível cadastrar o usuário'})
        console.error('Não foi possível cadastrar o usuário', err)
    }

}

const listar = async(req, res)=>{
    try{
        const usuarios = await Usuario.findAll()
        res.status(201).json(usuarios)
    }catch(err){
        res.status(500).json({message: 'Não foi possível listar os usuários'})
        console.error('Não foi possível listar os usuários', err)
    }
}

module.exports = { cadastrar, listar }
