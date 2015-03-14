angular
	.module('accuchallenge')
	.controller('profileCtrl', ['$scope', '$http', 'UserID', function($scope, $http, UserID) {
		$scope.userID = UserID.id;
	}]);