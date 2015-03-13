var app = angular.module('accuchallenge', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		/*
		 * HOME
		 */
		.state('list', {
			url: '/',
			templateUrl: 'components/list/list.html',
        	controller: 'listCtrl'
		})
}]);
