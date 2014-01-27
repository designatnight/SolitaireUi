(function (app) {

    app.addUiRouteConfiguration({name: 'home', config: {
        url: '/',
        views: {
            header: {templateUrl: 'views/home/header.html'},
            content: {templateUrl: 'views/home/goals.html'},
            menu: {templateUrl: 'views/home/menu.html'}
        }
    }});

    app.addUiRouteConfiguration({name: 'home.todos', config:{
        url:'goals',
        views:{
            'content@':{templateUrl: 'views/home/todos.html'}
        }
    }});

})(solitaire);