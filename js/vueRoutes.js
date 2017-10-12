var router = new VueRouter({

    routes: [
        {
            path: '/top',
            component: {
                template: '<div>This is a Top page</div>'
            }
        },
        {
            path: '/lists',
            component: {
                template: '<div>ToDo Lists !</div>'
            }
       },
       {
           path: '/list/:listId',
            component: {
                template: '<div>{{ $route.params.listId }} Lists !</div>'
            }
        }
    ]
})

var app = new Vue({
    router: router
}).$mount('#routeMountApp')
