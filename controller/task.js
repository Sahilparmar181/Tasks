const uuid = require('uuid')
const tasks = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Purchase milk, bread, cheese, eggs, and vegetables from the store."
    },
    {
        id: 2,
        title: "Finish project report",
        description: "Complete the final report for the project and submit it to the manager by the end of the week."
    },
    {
        id: 3,
        title: "Call plumber",
        description: "Contact a plumber to fix the leaking sink in the kitchen as soon as possible."
    }
];

// Define the getTask function
exports.getTask = (req, res) => {
    try{

        res.status(200).json(tasks);
    }catch(err){
        res.status(500).send(err)
    }
};

exports.createTask =(req, res)=>{
    try{
        console.log("reqqqq", req.body)

        const newtask = req.body;
        tasks.push({id: uuid.v4(), ...newtask});
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.getTaskId =(req,res)=>{
    try{

        let task = tasks.filter((task)=> task.id === req.params.id);
        res.json(task)
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.updateTask = (req, res) => {
    try {
      console.log("reqqqqqqqqq", req.params);
      const index = tasks.findIndex((task) => task.id === req.params.id); 
      console.log("indexxxx", index);
      if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        console.log("taskksss", tasks[index]);
        res.json(tasks[index]);
      } else {
        res.status(400).json({ message: "Task is not available" });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

exports.deleteTask=(req,res)=>{
    try{
        console.log("reqqqqiddd", req.params.id);
        const index = tasks.findIndex((task)=> task.id == req.params.id.toString());
        console.log("indexxx", index)
        if(index!==-1){
            const deletedTask = tasks.splice(index, 1);
            console.log("task", deletedTask);
            res.json(deletedTask);
        }else{
            res.status(400).json({message:"Task is not available"})
        }
    }catch(err){
        res.status(500).send(err);
    }
}