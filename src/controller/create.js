const express = require('express')
const student = require('../models/model')

exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return
    }

    //new user
    const user = new student({
        fullName: req.body.fullName,
        class: req.body.class
    })
    //save user in database
    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occoured while creating a create operation"
        })
    })
}
