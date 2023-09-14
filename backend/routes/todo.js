const express = require("express");
const router = express.Router();

const {
    getAllToDo,
    postCreateToDo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo")

router.get("/" , getAllToDo);
router.post("/" , postCreateToDo);
router.put("/:id" , putUpdateTodo);
router.delete("/:id" , deleteTodo );

module.exports = router;