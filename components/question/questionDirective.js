angular
	.module('accuchallenge')
	.directive('question', function(){
		return {
			restrict: 'A',
			templateUrl: 'components/question/questionTemplate.html',
			controller: function($scope, $http){
				$scope.getQuestionDetails = function(question_id){
					if($scope.question.body_markdown){
						/*
						 * if the data exists locally do nothing
						 * checks against .body_markdown
						 * because that property should always be returned and be truthy
						 */
					} else {
						$http
							.get('https://api.stackexchange.com/2.2/questions/' + question_id + '?order=desc&sort=activity&site=stackoverflow&filter=!OfZM.T6pvVtBAPT94fBuKPDiszL)y8*0u)Irg3Ey2Pu&key=BUjfiSIkQl1FhTfwx0UNqA((')
							.success(function(data, status, headers, config){
								$scope.question.is_answered = data.items[0].is_answered;
								$scope.question.view_count = data.items[0].view_count;
								$scope.question.comment_count = data.items[0].comment_count;
								$scope.question.favorite_count = data.items[0].favorite_count;
								$scope.question.up_vote_count = data.items[0].up_vote_count;
								$scope.question.down_vote_count = data.items[0].down_vote_count;
								$scope.question.body_markdown = data.items[0].body_markdown;
								$scope.question.link = data.items[0].link;
							})
							.error(function(data, status, headers, config){
							});
					}
				}
			},
			link: function(scope, element){
				setTimeout(function(){
					var height,
						open = true;

					element.bind('click', function(){
						height = 384 - element[0].children[0].children[0].offsetHeight;
						open = !open;

						if(open){
							angular.element(element[0].children[0].children[1]).css({'height': 0});
							angular.element(element[0].children[0].children[3]).css({'transform': ''});
						} else {
							angular.element(element[0].children[0].children[1]).css({'height': height + 'px'});
							angular.element(element[0].children[0].children[3]).css({'transform': 'translate3d(0, ' + (height + 16) + 'px, 0)'});
						}

						//console.log(element);
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