angular
	.module('accuchallenge')
	.controller('questionsCtrl', ['$scope', '$http', '$sce', '$stateParams', 'UserID', function($scope, $http, $sce, $stateParams, UserID) {
		// $http
		// 	.get('https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=creation&site=stackoverflow&filter=!9YdnSCK0S')
		// 	.success(function(data, status, headers, config) {
		// 		$scope.questions = data.items;
		// 		$scope.reputationSum = $scope.getReputationSum(data.items);
		// 		$scope.highScore = $scope.getHighScore(data.items);
		// 	})
		// 	.error(function(data, status, headers, config) {
		// 	});

		$scope.getHighScore = function(questions){
			var highScore = {};
				highScore.score = questions[0].score;
				highScore.title = questions[0].title;
				highScore.owner = questions[0].owner.display_name;
				highScore.ties = 0;

			for(var i = 0; i < questions.length; i++){
				if(questions[i].score > highScore.score) {
					highScore.score = questions[i].score;
					highScore.title = questions[i].title;
					highScore.owner = questions[i].owner.display_name;
					highScore.ties = 0;
				} else if(questions[i].score == highScore.score) {
					highScore.ties++;
				}
			}

			return highScore;
		};

		$scope.getReputationSum = function(questions){
			var reputationSum = 0;

			for(var i = 0; i < questions.length; i++){
				reputationSum += questions[i].owner.reputation;
			}

			return reputationSum;
		};
		
		$scope.setUserID = function(userID){
			$scope.userID = userID;
			UserID.id = userID;
		}

		var data = {"items":[{"tags":["android","android-intent"],"owner":{"badge_counts":{"bronze":20,"silver":5,"gold":1},"reputation":1862,"user_id":3900120,"user_type":"registered","accept_rate":62,"profile_image":"http://i.stack.imgur.com/oO3JJ.jpg?s=128&g=1","display_name":"Apurva","link":"http://stackoverflow.com/users/3900120/apurva"},"is_answered":false,"view_count":1,"answer_count":0,"score":0,"last_activity_date":1426351705,"creation_date":1426351705,"question_id":29051523,"link":"http://stackoverflow.com/questions/29051523/how-to-check-whether-the-received-intent-contains-string-or-int","title":"How to check whether the received intent contains String or int"},{"tags":["linux","node.js","ubuntu","browser","express"],"owner":{"reputation":1,"user_id":3233753,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/2875e243f185c4ddc0545322201c0ded?s=128&d=identicon&r=PG&f=1","display_name":"user3233753","link":"http://stackoverflow.com/users/3233753/user3233753"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1426351685,"creation_date":1426351685,"question_id":29051521,"link":"http://stackoverflow.com/questions/29051521/i-have-just-run-my-new-node-js-express-app-on-a-new-server-which-runs-ubuntu-ho","title":"I have just run my new node.js/express app on a new server which runs Ubuntu, how can i see my web app?"},{"tags":["machine-learning","apache-spark","collaborative-filtering","mllib"],"owner":{"badge_counts":{"bronze":7,"silver":0,"gold":0},"reputation":46,"user_id":2335990,"user_type":"registered","accept_rate":92,"profile_image":"https://www.gravatar.com/avatar/b278dff2b0dd34bccf2c4516c864319d?s=128&d=identicon&r=PG","display_name":"monster","link":"http://stackoverflow.com/users/2335990/monster"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1426351685,"creation_date":1426351685,"question_id":29051520,"link":"http://stackoverflow.com/questions/29051520/apache-spark-als-recommendation","title":"Apache Spark ALS Recommendation"},{"tags":["java","android","jcifs"],"owner":{"badge_counts":{"bronze":1,"silver":0,"gold":0},"reputation":9,"user_id":4070432,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/f8b2212781e9f41cb75ace4e2f8a57e1?s=128&d=identicon&r=PG&f=1","display_name":"Lalit Kale","link":"http://stackoverflow.com/users/4070432/lalit-kale"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1426351668,"creation_date":1426351668,"question_id":29051516,"link":"http://stackoverflow.com/questions/29051516/jcifs-netbios-nbtaddress-not-giving-android-device-hostname","title":"jcifs.netbios.NbtAddress not giving android device hostname"},{"tags":["django","ubuntu","nginx","amazon-ec2","uwsgi"],"owner":{"badge_counts":{"bronze":63,"silver":25,"gold":5},"reputation":2190,"user_id":1592380,"user_type":"registered","accept_rate":79,"profile_image":"https://www.gravatar.com/avatar/1b375c795476432e64d4433a651d2804?s=128&d=identicon&r=PG","display_name":"user61629","link":"http://stackoverflow.com/users/1592380/user61629"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1426351633,"creation_date":1426351633,"question_id":29051511,"link":"http://stackoverflow.com/questions/29051511/nginx-unable-to-fork-cannot-allocate-memory","title":"Nginx, unable to fork: Cannot allocate memory"},{"tags":["javascript","ruby-on-rails","oauth","devise","omniauth"],"owner":{"badge_counts":{"bronze":1,"silver":0,"gold":0},"reputation":1,"user_id":4541432,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/0e83005184c072e90b48185b38b82b23?s=128&d=identicon&r=PG&f=1","display_name":"asbren13","link":"http://stackoverflow.com/users/4541432/asbren13"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1426351620,"creation_date":1426351620,"question_id":29051510,"link":"http://stackoverflow.com/questions/29051510/how-to-save-and-send-an-oauth-omniauth-token-from-rails-api-to-javascript-fron","title":"How to save and send an OAuth (omniauth) token from Rails Api to JavaScript front-end?"},{"tags":["javascript","internet-explorer","autoit"],"owner":{"badge_counts":{"bronze":5,"silver":0,"gold":0},"reputation":83,"user_id":3816412,"user_type":"registered","profile_image":"http://i.stack.imgur.com/L8Y5M.gif?s=128&g=1","display_name":"Trojan","link":"http://stackoverflow.com/users/3816412/trojan"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1426351614,"creation_date":1426351614,"question_id":29051509,"link":"http://stackoverflow.com/questions/29051509/how-to-read-the-java-developer-console-with-ie-au3","title":"How to read the java developer console with IE.au3"},{"tags":["java","html","javadoc"],"owner":{"badge_counts":{"bronze":35,"silver":13,"gold":2},"reputation":13961,"user_id":756809,"user_type":"registered","accept_rate":71,"profile_image":"http://i.stack.imgur.com/jFZnE.jpg?s=128&g=1","display_name":"Shai Almog","link":"http://stackoverflow.com/users/756809/shai-almog"},"is_answered":false,"view_count":5,"answer_count":0,"score":0,"last_activity_date":1426351600,"creation_date":1426351600,"question_id":29051506,"link":"http://stackoverflow.com/questions/29051506/embed-javadoc-into-websites-html","title":"Embed Javadoc Into Websites HTML"},{"tags":["css","tabs"],"owner":{"reputation":1,"user_id":4671117,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-w-MCANAXdcc/AAAAAAAAAAI/AAAAAAAAAAA/EOU6K8mu-R0/photo.jpg?sz=128","display_name":"Abhilash k","link":"http://stackoverflow.com/users/4671117/abhilash-k"},"is_answered":false,"view_count":4,"answer_count":0,"score":0,"last_activity_date":1426351600,"creation_date":1426351600,"question_id":29051505,"link":"http://stackoverflow.com/questions/29051505/trouble-creating-nested-tabs","title":"Trouble creating nested tabs"},{"tags":["angularjs","angularjs-directive","ui.bootstrap"],"owner":{"badge_counts":{"bronze":6,"silver":0,"gold":0},"reputation":16,"user_id":3329789,"user_type":"registered","profile_image":"http://i.stack.imgur.com/JMwQ1.jpg?s=128&g=1","display_name":"Chuck B","link":"http://stackoverflow.com/users/3329789/chuck-b"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1426351594,"creation_date":1426351594,"question_id":29051504,"link":"http://stackoverflow.com/questions/29051504/cannot-get-an-angularjs-popover-to-work-inside-a-directives-template","title":"Cannot get an AngularJS popover to work inside a directive&#39;s template"}],"has_more":true,"quota_max":300,"quota_remaining":2};
		var dataArray = data.items;
		$scope.questions = dataArray;
		$scope.reputationSum = $scope.getReputationSum(dataArray);
		$scope.highScore = $scope.getHighScore(dataArray);
	}]);