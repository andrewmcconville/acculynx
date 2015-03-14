angular
	.module('accuchallenge')
	.directive('question', function(){
		return {
			restrict: 'A',
			templateUrl: 'components/question/questionTemplate.html'
		}
	});