var app = new Vue({
        el: "#app",
        data: {
            message: 'Hello vue js!!'
        }
    });
var app2 = new Vue({
        el: "#app-2",
        data: {
            title_message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    });
var app3 = new Vue({
        el: "#app-3",
        data: {
            seen: true
        }
    });
var app4 = new Vue({
        el: "#app-4",
        data: {
            todos: [
                { text: 'Learn javascript!!' },
                { text: 'Vue.js is easy?' },
                { text: 'Loop test' }
            ]
        }
    });
var app5 = new Vue({
       el: "#app-5",
        data: {
            message: 'Hello vue js!!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    });
var app6 = new Vue({
        el: "#app-6",
        data: {
            message: "hello!! vue.js"
        }
    });
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});

var data = { a:1 };
var vm = new Vue({
    el: '#example',
    data: data
});
