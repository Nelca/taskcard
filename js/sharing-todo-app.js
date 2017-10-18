/*global Vue, todoStorage */
(function (exports) {
    'use strict';

    Vue.use(Buefy.default)

    var filters = {
        all: function (todos) {
            return todos;
        },
        active: function (todos) {
            return todos.filter(function (todo) {
                return !todo.completed;
            });
        },
        completed: function (todos) {
            return todos.filter(function (todo) {
                return todo.completed;
            });
        }
    };

    exports.app = new Vue({
        el: '.todoapp',
        data: {
            todoTypes: todoTypeStorage.fetch(),
            todos: todoStorage.fetch(),
            newTodo: '',
            newTodoType: '',
            editedTodo: null,
            visibility: 'all',
        },
        watch: {
            todos: {
                deep: true,
                handler: todoStorage.save
            }
        },
        computed: {
            filteredTodos: function () {
                return filters[this.visibility](this.todos);
            },
            remaining: function () {
                return filters.active(this.todos).length;
            },
            allDone: {
                get: function () {
                    return this.remaining === 0;
                },
                set: function (value) {
                    this.todos.forEach(function (todo) {
                        todo.completed = value;
                    });
                }
            }
        },
        // note there's no DOM manipulation here at all.
        methods: {
            todoStyle : function (todo) {
                return 'padding: 10px;background-color: ' + this.getTypeColor(todo.type) + ';'
            },
            getTypeColor: function (typeName) {
                for (let i = 0; i < this.todoTypes.length; i++ ) {
                    if (this.todoTypes[i].title == typeName) {
                        return this.todoTypes[i].color
                    }
                }
            },
            pluralize: function (word, count) {
                return word + (count === 1 ? '' : 's');
            },
            addTodo: function () {
                var value = this.newTodo && this.newTodo.trim();
                var typeValue = this.newTodoType && this.newTodoType.trim();
                if (!value) {
                    return;
                }
                this.todos.push({ title: value, completed: false, type:typeValue });
                this.newTodo = '';
                this.newTodoType = '';
            },
            removeTodo: function (todo) {
                var index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            },
            editTodo: function (todo) {
                this.beforeEditCache = todo.title;
                this.editedTodo = todo;
            },
            doneEdit: function (todo) {
                if (!this.editedTodo) {
                    return;
                }
                this.editedTodo = null;
                todo.title = todo.title.trim();
                if (!todo.title) {
                    this.removeTodo(todo);
                }
            },
            cancelEdit: function (todo) {
                this.editedTodo = null;
                todo.title = this.beforeEditCache;
            },
            removeCompleted: function () {
                this.todos = filters.active(this.todos);
            }
        },

        // a custom directive to wait for the DOM to be updated
        // before focusing on the input field.
        // http://vuejs.org/guide/custom-directive.html
        directives: {
            'todo-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    });

})(window);
