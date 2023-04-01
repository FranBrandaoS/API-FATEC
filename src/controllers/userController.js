// busca os usuarios no banco
// faz mapeamento 

import User from '../models/userModel.js'

async function getAllUsers(req,res){
    const users = await User.findAll()
    res.json(users) 
}


async function createUser(req,res){
    const user = await User.create(req.body)
    res.json(user)
}

async function deleteUser(req,res){
    const user = await User.destroy({where: {id: req.params.id}})
    res.json(user)
}


export default {getAllUsers, createUser, deleteUser}