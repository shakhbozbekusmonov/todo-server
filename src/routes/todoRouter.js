const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoController')
const { validateTodoPost  } = require('../middleware/validateMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/' ,authMiddleware  ,todoController.getTodo)
router.post('/',authMiddleware , validateTodoPost ,todoController.postTodo)
router.put('/:id',authMiddleware  ,todoController.putTodo)
router.delete('/:id',authMiddleware  ,todoController.deleteTodo)
router.put("/edit/:id",authMiddleware,todoController.completeTodo)

module.exports = router  

// http://192.168.0.106:5000/user/register
// http://192.168.0.106:5000/user/login

// http://192.168.0.106:5000/todo

// http://192.168.0.106:5000/todo/1

// JSON.stringify({text:value})

// authorization

// http://localhost:5000/todo/edit/:id -> todo ni completed property sini o'zgartirish. Hech qanday body kerak emas faqat url da todoning id sini berib yuborish shart
