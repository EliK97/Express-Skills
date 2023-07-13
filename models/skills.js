const skills = [
    
        {id: 1997, skill:"I like to play video games on computer",done:true},
        {id: 2003, skill:"Terminal Genius",done: true},
        {id: 1972, skill:"I created blizzard",done: false},
        {id: 1965, skill:"I bought shares into rockstar",done:false},
    ]
   
    function skillTemp(id){
        id = parseInt(id)
        return skills.find(skill => id = skills.id)

    }

    function getAll() {
        return skills;
    }

    function getOne(id) {
        id = parseInt(id)

        return skills.find(skills => skills.id === id);
    }

    function deleteOne(id) {
        // All properties attached to req.params are strings!
        id = parseInt(id);
        // Find the index based on the id of the todo object
        const idx = skills.findIndex(skills => skills.id === id);
        skills.splice(idx, 1);
      }

      function create(skill) {
        // Add the id
        skill.id = Date.now() % 1000000;
        // New todos wouldn't be done :)
        skill.done = false;
        skills.push(skill);
      }
      

    module.exports = {
        getAll , 
        getOne,
        create,
        deleteOne
    }