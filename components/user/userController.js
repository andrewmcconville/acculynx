angular
	.module('accuchallenge')
	.controller('userCtrl', ['$scope', '$http', '$stateParams', 'Users', function($scope, $http, $stateParams, Users) {
		//true uses local data, false uses stack api
		var isDebugging = false;
		
		var sixMonthsAgo = (Date.now() - 15768000000).toString().slice(0, 10);

		$scope.getUser = function(user_id){
			var index = Users.getUsers().map(
					function(users){ return users.user_id; }
				).indexOf(user_id);
			
			return Users.getUsers()[index]	;
		};
		
		$scope.user = $scope.getUser(parseInt($stateParams.user_id));

		if(isDebugging) {
			$scope.user.recentBadge = {"award_count":16,"rank":"bronze","name":"Popular Question"};
			$scope.user.pastBadges = [{"award_count":17,"rank":"silver","name":"Notable Question"},{"award_count":42,"rank":"bronze","name":"Popular Question"},{"award_count":1,"rank":"gold","name":"Famous Question"},{"award_count":12,"rank":"bronze","name":"Nice Question"},{"award_count":1,"rank":"silver","name":"Inquisitive"},{"award_count":1,"rank":"gold","name":"Socratic"},{"award_count":1,"rank":"bronze","name":"Curious"},{"award_count":1,"rank":"bronze","name":"Organizer"},{"award_count":1,"rank":"bronze","name":"Custodian"},{"award_count":3,"rank":"silver","name":"Yearling"},{"award_count":1,"rank":"bronze","name":"Peer Pressure"},{"award_count":1,"rank":"bronze","name":"Citizen Patrol"},{"award_count":1,"rank":"bronze","name":"Self-Learner"},{"award_count":1,"rank":"silver","name":"Civic Duty"},{"award_count":1,"rank":"bronze","name":"Cleanup"},{"award_count":1,"rank":"bronze","name":"Tumbleweed"},{"award_count":1,"rank":"bronze","name":"Quorum"},{"award_count":1,"rank":"bronze","name":"Teacher"},{"award_count":1,"rank":"bronze","name":"Critic"},{"award_count":1,"rank":"bronze","name":"Commentator"},{"award_count":1,"rank":"bronze","name":"Editor"},{"award_count":1,"rank":"bronze","name":"Supporter"},{"award_count":1,"rank":"bronze","name":"Scholar"},{"award_count":1,"rank":"bronze","name":"Student"}];
		} else {
			if($scope.user.badge_counts){
				getPastAndPresentBadges($scope.user);
			}
		}
		/*
		 * Two calls seem unnecessary
		 * I could not build a call that returned badge data with dates
		 */
		function getPastAndPresentBadges() {
			$http
				.get('https://api.stackexchange.com/2.2/users/' + $scope.user.user_id + '/badges?pagesize=1&order=desc&sort=awarded&site=stackoverflow&filter=!1zSsisdH2jRr_5V6hpPaf&key=BUjfiSIkQl1FhTfwx0UNqA((')
				.success(function(data, status, headers, config) {
					$scope.user.recentBadge = data.items[0];
				})
				.error(function(data, status, headers, config) {
				});
			$http
				.get('https://api.stackexchange.com/2.2/users/' + $scope.user.user_id + '/badges?pagesize=100&order=desc&max=' + sixMonthsAgo + '&sort=awarded&site=stackoverflow&filter=!SWK)GbIE856CzHm1fM&key=BUjfiSIkQl1FhTfwx0UNqA((')
				.success(function(data, status, headers, config) {
					$scope.user.pastBadges = data.items;
				})
				.error(function(data, status, headers, config) {
				});
		}
	}]);