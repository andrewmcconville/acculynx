angular
	.module('accuchallenge')
    .factory('Users', function(){
        var users = [];

        return {
            setUsers: function(uArray){
                users = users.concat(uArray);
            },
            getUsers: function(){
                return users
            }
        }
    });