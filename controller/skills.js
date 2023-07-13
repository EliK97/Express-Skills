const skills = require('../models/skills')

function index(req,res) {
    res.render('skills/index',{
        skills: skills.getAll(), title:''
    })
}

function show(req,res){
    res.render('skills/show',{
        skills: skills.getOne(req.params.id), title: ''
   })
}

function newTodo(req, res){
    res.render('skills/new',{title: 'New Todo'});
}

function deleteSkills(req, res) {
    skills.deleteOne(req.params.id);
    res.redirect('/skills'); 
  }
  
  function create(req, res) {
    console.log(req.body);
    skills.create(req.body)
    res.redirect('/skills');
  }
  


module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteSkills


}