const ToDo = require("../models/todo");

exports.getAllToDo = (req, res) => {
    ToDo.find()
        .then((todo) => res.json(todo))
        .catch((err) => 
    res 
        .status(404)
        .json({message: "Todo not found",error: err.message})
    );
};

exports.postCreateToDo = (req , res )=> {
    console.log(req.body)
    ToDo.create(req.body)
        .then((data) => res.json({message : "ToDo added successfully" , data}))
        .catch((err) => 
            res
                .status(400)
                .json({message: "Failed to add todo" , error: err.message})
    );
};

exports.putUpdateTodo = (req, res) => {
    ToDo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
