const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAllUsers = catchError(async(req, res) => {
    const users=await User.findAll()
    return res.json(users)
});

const createUser= catchError(async(req,res) =>{
    const newUser= req.body
    const userCreated= await User.create(newUser)
    return userCreated?res.json(userCreated):res.json({"Error":"User no created"})
})

const getUserById = catchError(async (req,res)=>{
    const {id}= req.params
    const user= await User.findByPk(id)
    return user?res.json(user):res.status(404).json({"Error":"User not found"})
})

const deleteUser = catchError(async(req,res)=>{
    const {id} = req.params
    const result= await User.destroy({where:{id}})
    return result?res.json({'Message':'User deleted'}):res.status(404).json({'Error':'User not deleted'})
})

const updateUser= catchError(async(req,res)=>{
    const {id} = req.params
    const userToUpdate=req.body
    const userUpdated= await User.update(userToUpdate,{where:{id},returning:true})
    return userUpdated?res.json(userUpdated[1][0]):{"Error":"User no updated"}

})
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}