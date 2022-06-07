const express = require('express');
const User = require('../models/User');


const userRouter = express.Router();

userRouter.post('/signUp', (req, res) => {
    const username = req.body.username;

    User.findOne({username: username})
        .then((user) => {
            if (user){
                return res.status(404).json({ exist : true})
            }else{
                const user = new User();
                user.username = username;
                user.save()
                    .then((newUsuario)=>{
                        res.json(newUsuario);
                    })
                    .catch((error)=>{
                        res.status(500).send(error);
                    })
            }
        })
});

userRouter.post('/signIn', (req, res) =>{

    const username = req.body.username;

    User.findOne({username : username})
        .then((user) => {
            if (user){
                const accesToken = {
                    id : user._id,
                    username : user.username
                }
                return res.json({logged : true, token : accesToken});
            }else{
                return res.status(404).json({ logged : false})
            }
        })
        .catch(()=>{
            return res.status(404).json({ logged : false})
        })

});

module.exports = userRouter;