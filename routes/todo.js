const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')



router.get('/',async(req,res)=>{
    try{
        const todos = await Todo.find()
        res.json(todos)

    }
    catch(err){
        res.send('Error' + err)
    }

})


router.get('/:id',async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        res.json(todo)

    }
    catch(err){
        res.send('Error' + err)
    }

})

router.post('/',async(req,res)=>{
    const todo= new Todo({
        title:req.body.title,
        discription:req.body.discription,
        isCompleted:req.body.isCompleted
    })

    try{
       const a1 =  await todo.save()
       res.json(a1)

    }catch(err){

        res.send('Error')
    }

})


router.patch('/:id',async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        //todo.title= req.body.title
        todo.isCompleted = req.body.isCompleted
        const a1 = await todo.save()
        res.json(a1)
        

    }catch(err){
        res.send('Error')
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
       
        const a1 = await todo.delete()
        res.json( "deleted")
       

    }catch(err){
        res.send('Error')
    }
})

module.exports = router
