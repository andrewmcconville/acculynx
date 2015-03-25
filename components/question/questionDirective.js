angular
	.module('accuchallenge')
	.directive('question', function(){
		return {
			restrict: 'A',
			templateUrl: 'components/question/questionTemplate.html',
			controller: function($scope, $http){
				$scope.getQuestionDetails = function(question_id){
					console.log(question_id);
					$http
						.get('https://api.stackexchange.com/2.2/questions/' + question_id + '?order=desc&sort=activity&site=stackoverflow&filter=!)EhwLl5m317MQfNCekjP.ikK.cUmeo5J)8iEFyX4(3G9nIUwl')
						.success(function(data, status, headers, config) {
							$scope.question.is_answered = data.items[0].is_answered;
							$scope.question.view_count = data.items[0].view_count;
							$scope.question.comment_count = data.items[0].comment_count;
							$scope.question.favorite_count = data.items[0].favorite_count;
							$scope.question.up_vote_count = data.items[0].up_vote_count;
							$scope.question.down_vote_count = data.items[0].down_vote_count;
						})
						.error(function(data, status, headers, config) {
						});
				}
			},
			link: function(scope, element){
				setTimeout(function(){
					//console.log(element);

					var height = element[0].children[0].children[0].offsetHeight +
								 element[0].children[0].children[1].children[0].offsetHeight +
								 element[0].children[0].children[3].offsetHeight +
								 134;

					angular.element(element[0].children[1]).css({'height': height + 'px'});


					var open = true;
					element.bind('click', function(){
						open = !open;

						if(open){
							angular.element(element[0].children[0].children[3]).css({'transform': ''});
						} else {
							angular.element(element[0].children[0].children[3]).css({'transform': 'translate3d(0, ' + element[0].children[0].children[1].children[0].offsetHeight + 'px, 0)'});
						}

						console.log(element);
						console.log(height);
						console.log(
									'header: ' + element[0].children[0].children[0].offsetHeight + '\n' +
									'  body: ' + element[0].children[0].children[1].children[0].offsetHeight + '\n' +
									'footer: ' + element[0].children[0].children[3].offsetHeight
						);
					});
				}, 0);
			}
		}
	});