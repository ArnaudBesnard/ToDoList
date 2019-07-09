new Vue({
  el: '#todo',
  data: {
    name: null,
    todos: []
  },
  methods: {
    add: function () {
    	if (this.name === null) { return; }
    	this.todos.push({ name: this.name, done: false });
    	this.name = null;
    },
    remove: function (todo) {
    	this.todos.splice(this.todos.indexOf(todo), 1);
    },
    allDone: function () {
    	for (var i in this.todos) { this.todos[i].done = true; }
    }
  },
  computed: {
    remaining: function () {
    	return this.todos.filter(function (todo) { return !todo.done; });
    }
  }
});