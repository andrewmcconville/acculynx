angular
	.module('accuchallenge')
	.controller('userCtrl', ['$scope', '$http', '$stateParams', 'UserID', function($scope, $http, $stateParams, UserID) {
		// $http
		// 	.get('https://api.stackexchange.com//2.2/users/' + UserID.id + '?order=desc&sort=reputation&site=stackoverflow')
		// 	.success(function(data, status, headers, config) {
		// 		$scope.user = data.items[0];
		// 	})
		// 	.error(function(data, status, headers, config) {
		// 	});

		$scope.user = {
			display_name: 'Andrew'
		};
	}]);