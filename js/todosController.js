angular.module('todoApp')
  .controller(TodosController, TodosController)

function TodosController() {
  var self = this

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
}
