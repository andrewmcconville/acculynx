angular
	.module('accuchallenge')
	.filter('sortRank', function(){
		return function(badges){
			var goldBadges = [],
				silverBadges = [],
				bronzeBadges = [];

			angular.forEach(badges, function(badge){
				if(badge.rank == "gold"){
					goldBadges.push(badge);
				} else if(badge.rank == "silver"){
					silverBadges.push(badge);
				} else if (badge.rank == "bronze"){
					bronzeBadges.push(badge);
				}
			});

			return goldBadges.concat(silverBadges, bronzeBadges);
		}
	})
    .filter('toHTML', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .filter('toYesNo', function(){
        return function(bool) {
        	if(bool){
            	return 'Yes';
            } else {
            	return 'No';
            }
        };
    });