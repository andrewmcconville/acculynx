angular
	.module('accuchallenge')
	.directive('acculynxMeta', function(){
		return {
			restrict: 'A',
			templateUrl: 'components/acculynxMeta/acculynxMetaTemplate.html',
			controller: function($scope, $http, User) {
				//true uses local data, false uses stack api
				var isDebugging = false;

				if(isDebugging) {
					$scope.acculynx = User.getUser();
				} else {				
					$scope.getAccuLynx = function(){
						$http
							.get('https://api.stackexchange.com/2.2/users/44336;87629;1054558;1686485;2256028?order=desc&sort=reputation&site=stackoverflow&filter=!0Z-LvgkK8O*AqQeYL95LH0ePl&key=BUjfiSIkQl1FhTfwx0UNqA((')
							.success(function(data, status, headers, config) {
								$scope.acculynx = data.items;
							})
							.error(function(data, status, headers, config) {
							});
					}
				}
			}
		}
	});