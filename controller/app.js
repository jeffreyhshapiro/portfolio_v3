angular.module('shapiro', ['ui-router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'partials/gymtrition.html'
      })

  })