angular
	.module('accuchallenge')
    .factory('Users', function($http){
        var users = [];

        return {
            setUsers: function(uArray){
                users = users.concat(uArray);
            },
            getUser: function(id){
                var index = users.map(
                    function(users){ return users.user_id; }
                ).indexOf(id);

                return users[index];
            }
        }
    });