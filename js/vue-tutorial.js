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
            seen: true,
            change_seen: 0
        },
        watch: {
            change_seen: function (newVal, oldVal) {
                this.seen = newVal==="1"
                console.log("change cs ", oldVal, " to ", newVal)
            }
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


// tutorial of ...
var data = { chkVal: "str" };
var vm = new Vue({
    el: '#example',
    data: data,
    created: function () {
        console.log("vm is created!")
    },
    watch: {
        a: function (newVal, oldVal) {
            console.log("data is changed from ", oldVal, " to ", newVal)
        }
    },
    computed: {
        typeOfChkVal: {
            get: function () {
                return typeof(this.chkVal)
            },
            set: function (newValue) {
                console.log("set new val of typeOfCheckVal")
                if (newValue == "number") {
                    this.chkVal = parseInt(this.chkVal)
                }
            }
        }
    }
});

