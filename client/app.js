var app = angular.module('app', [
  'app.homeController',
  'app.detailsController',
  'app.googleMapController',
  'app.mapService',
  'ui.router',
  'ui.bootstrap'
  // 'ngMock'
])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../html/index.html',
    controller: 'HomeController'
  });
});
