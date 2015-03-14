angular
	.module('accuchallenge')
	.controller('listCtrl', ['$scope', '$http', '$sce', '$stateParams', 'UserID', function($scope, $http, $sce, $stateParams, UserID) {
		$http
			.get('https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=creation&site=stackoverflow&filter=!9YdnSCK0S')
			.success(function(data, status, headers, config) {
				$scope.questions = data.items;
				$scope.reputationSum = $scope.getReputationSum();
				$scope.highScore = $scope.getHighScore();
			})
			.error(function(data, status, headers, config) {
			});

		$scope.getHighScore = function(){
			var highScore = {};
				highScore.score = $scope.questions[0].score;
				highScore.title = $scope.questions[0].title;

			for(var i = 0; i < $scope.questions.length; i++){
				if($scope.questions[i].score > highScore.score) {
					highScore.score = $scope.questions[i].score;
					highScore.title = $scope.questions[i].title;
				}
			}

			return highScore;
		};

		$scope.getReputationSum = function(){
			var reputationSum = 0;

			for(var i = 0; i < $scope.questions.length; i++){
				reputationSum += $scope.questions[i].owner.reputation;
			}

			return reputationSum;
		};
		
		$scope.setUserID = function(userID){
			$scope.userID = userID;
			UserID.id = userID;
		}
	}]);