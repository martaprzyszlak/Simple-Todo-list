new Vue({
  el: "#app",
  data: {
    task: "",
    todos: []
  },
  methods: {
    addTask () {
      if (this.task.length > 0) {
        this.todos.push({
          text: this.task,
          completed: false
        });
        this.task = "";
      }
    },
    removeTask (todo) {
      const index = this.todos.indexOf(todo)

      this.todos.splice(index, 1);
    }
  },
  watch: {
    todos () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  }
});
