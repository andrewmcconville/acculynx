var app = angular.module('accuchallenge', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		/*
		 * Home
		 */
		.state('list', {
			url: '/',
			templateUrl: 'components/list/list.html',
        	controller: 'listCtrl'
		})
		/*
		 * Profile
		 */
		.state('list.profile', {
			url: '/profile',
			templateUrl: 'components/profile/profile.html',
        	controller: 'profileCtrl'
		})
}]);
