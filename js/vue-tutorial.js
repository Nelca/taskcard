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
            change_seen: 1
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
var vmExample1 = new Vue({
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
                console.log("set new val at typeOfCheckVal")
                if (newValue == "number") {
                    this.chkVal = parseInt(this.chkVal)
                }
            }
        }
    }
});

Vue.component('my-component', {
    template: '<div class="foo bar">component-test div</div>'
});

var vmExample2 = new Vue({
    el: '#example-2',
    data: {
        isActive: true,
        isError: false,
        checkError: false
    },
    watch: {
        checkError: function (newVal, oldVal) {
            console.log("checkError ", oldVal, " to ", newVal)
            this.isError = newVal
        }
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive,
                'error-has-occured': this.isError
            }
        }
    }
});
var vmExample3 = new Vue ({
    el: '#example-3',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '20px'
        },
        chk: 'A'
    }
});

var vmForObj = new Vue ({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'Minato',
            lastName: 'Nakamura',
            age: 28
        }
    }
});

var vmListObj = new Vue ({
    el: '#listObject',
    data: {
        items: [
            { message: 'hoge'},
            { message: 'fuga'},
            { message: 'piyo'}
        ],
        numbers: [
            1,2,3,4,5
        ]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (num) {
                return num % 2 === 0
            })
        }
    }
});

Vue.component('todo-item', {
    template: '\
    <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
    ',
    props: ['title']
});
var todos = [
    {
        id: 1,
        title: 'todo-1'
    },
    {
        id: 2,
        title: 'todo-2'
    },
    {
        id: 3,
        title: 'todo-3'
    }
];
var vmTodo = new Vue({
    el: '#v-for-test',
    data: {
        newTodoText: '',
        todos: todos,
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
});

var vmModelTest = new Vue({
    el: '#v-model-test',
    data: {
        msg: '',
        lazyMsg: ''
    }
});
var propList = {
    numProp: Number,
    strNumProp: [String, Number],
    reqStrProp: {
        type: String,
        requierd: true
    },
    defaultSetedProp: {
        type: Number,
        default: 100
    },
    objProp: {
        type: Object,
        default: function () {
            return { meaage: 'default hello :)'}
        }
    },
    customValidProp: {
        validator: function (value) {
            return value > 10
        }
    }
}
Vue.component('prop-example', {
    template: '<p>{{ numProp }}</p>'
    poprs: propList
});
var vmCheckProp new Vue({
    el: '',
    data: {
        propList: propList
    }
});
