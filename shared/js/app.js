var app = angular.module('accuchallenge', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/questions');

	$stateProvider
		/*
		 * Home
		 */
		.state('questions', {
			url: '/questions',
			templateUrl: 'components/questions/questionsTemplate.html',
        	controller: 'questionsCtrl'
		})
		/*
		 * Profile
		 */
		.state('questions.user', {
			url: '/user/:id',
			templateUrl: 'components/user/userTemplate.html',
        	controller: 'userCtrl'
		})
		/*
		 * About
		 */
		.state('about', {
			url: '/about',
			templateUrl: 'components/about/aboutTemplate.html'
		})
}]);
