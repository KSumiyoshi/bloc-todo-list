(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
      });

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        })
        .state('old', {
          url: '/template2',
          templateUrl: '/templates/old.html'
        });
  }

  angular
    .module('todoList', ['ui.router', 'firebase'])
    .config(config);
})();
