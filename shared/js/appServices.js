angular
	.module('accuchallenge')
    .factory('User', function(){
    	var currentUser = {};

    	return {
    		setUser: function(user){
    			currentUser = user;
    		},
    		getUser: function(){
    			return currentUser
    		}
    	}
    });