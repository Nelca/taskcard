/*global Vue, todoListStorage, todoStorage */
(function (exports) {
    'use strict';
    exports.app = new Vue({
        el: '.todoTypeApp',
        data: {
            todoTypes: todoTypeStorage.fetch(),
            newTodoType: '',
            newTodoTypeColor: '',
            editedTodo: null,
        },
        watch: {
            todoTypes: {
                deep: true,
                handler: todoTypeStorage.save
            }
        },
        computed: {

        },
        methods: {
            typeColor: function (colorCode) {
                return 'background-color: ' + colorCode + ';'
            },
            addTodoType: function () {
                var value = this.newTodoType && this.newTodoType.trim();
                var typeColor = this.newTodoTypeColor && this.newTodoTypeColor.trim();
                if (!value) {
                    return;
                }
                this.todoTypes.push({ title: value, color: typeColor });
                this.newTodoType = '';
                this.newTodoColor = '#fff';
            },
            removeTodoType: function (todoType) {
                var index = this.todoTypes.indexOf(todoType);
                this.todoTypes.splice(index, 1);
            },
            editTodoType: function (todo) {
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
        }
    });

})(window);
