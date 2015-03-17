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
    })
    .factory('Questions', function(){
        var questions = [];

        return {
            setQuestions: function(qArray){
                questions = qArray;
            },
            getQuestions: function(){
                return questions
            }
        }
    });