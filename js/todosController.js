angular.module('todoApp')
  .controller('TodosController', TodosController)

function TodosController() {
  var self = this
  self.add = addTodo
  self.newTodo = {
    content: ''
  }

  self.allTodos = [
    {
      content: "complete this lab",
      completed: false
    },
    {
      content: "workout",
      completed: false
    },
    {
      content: "make dinner",
      completed: true
    }
  ]

  function addTodo(){
      self.allTodos.push({
        content: self.newTodo.content,
        completed: false
      })
      self.newTodo = {
        content: ''
      }
    }
}
