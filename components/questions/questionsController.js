angular
	.module('accuchallenge')
	.controller('questionsCtrl', ['$scope', '$http', '$sce', '$stateParams', 'UserID', function($scope, $http, $sce, $stateParams, UserID) {

		//true uses local data, false uses stack api
		var isDebugging = true;

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
		
		//Service to save user id for getting more user info
		$scope.setUserID = function(userID){
			UserID.id = userID;
		}

		if(isDebugging){
			//Test data that doesn't require server call to stack api
			var data = {"items":[{"owner":{"reputation":1022,"user_id":612127,"display_name":"ssaltman"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054633/bada-whats-going-on-with-this-javascript-snippet","title":"&quot;Bada&quot; - what&#39;s going on with this javascript snippet"},{"owner":{"reputation":1,"user_id":4671778,"display_name":"Crystal Rod"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054630/my-java-method-for-get-total-is-not-working-in-my-main-method","title":"My Java Method for get total is not working in my main method"},{"owner":{"reputation":374,"user_id":3323667,"display_name":"PovilasB"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054626/decreasing-begin-iterator-and-then-increasing-it-again","title":"Decreasing begin() iterator and then increasing it again"},{"owner":{"reputation":1,"user_id":3746379,"display_name":"jaskowice1"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054625/i-want-responsive-jcarousel-skeleton","title":"I want responsive jcarousel skeleton"},{"owner":{"reputation":965,"user_id":162034,"display_name":"Constant M"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054623/cannot-get-rails-rest-api-to-work-with-ember-js","title":"Cannot get Rails REST API to work with Ember.js"},{"owner":{"reputation":4912,"user_id":559827,"display_name":"kjo"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054620/looking-for-selectall-like-operation-that-can-return-self-if-it-matches-selector","title":"Looking for selectAll-like operation that can return self if it matches selector"},{"owner":{"reputation":1,"user_id":4671740,"display_name":"Pecana"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054618/android-add-items-one-by-one-into-a-linearlayout","title":"Android Add Items One By One Into a LinearLayout"},{"owner":{"reputation":24,"user_id":4590124,"display_name":"aurora91"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054616/after-sorting-hashmap-by-keys-how-can-i-sort-by-values-if-keys-match","title":"After sorting HashMap by Keys, how can I sort by Values if Keys Match"},{"owner":{"reputation":1,"user_id":3452075,"display_name":"user3452075"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054615/range-setstart-on-phtantomjs-with-nodejs","title":"Range.setStart on PhtantomJs with NodeJs"},{"owner":{"reputation":6,"user_id":2989628,"display_name":"bohdan"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054613/click-on-href-and-get-number-row-number-from-html-table-with-javascript","title":"click on href and get number row number from html table with javascript"},{"owner":{"reputation":541,"user_id":3065506,"display_name":"username_AB"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054611/facing-this-exception-java-lang-exceptionininitializererror","title":"Facing this exception [java.lang.ExceptionInInitializerError]"},{"owner":{"reputation":6,"user_id":3958311,"display_name":"TheX"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054606/which-is-better-for-a-beginner-yokto-project-or-openembedded-building-ones-ow","title":"Which is better for a beginner Yokto project or OpenEmbedded , building one&#39;s own embedded distro?"},{"owner":{"reputation":628,"user_id":1729349,"display_name":"inside"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054604/show-div-only-if-specific-page","title":"Show div only if specific page"},{"owner":{"reputation":114,"user_id":1157283,"display_name":"Ken"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054602/does-a-class-being-its-own-delegate-follow-ios-convention","title":"Does a class being its own delegate follow iOS convention?"},{"owner":{"reputation":85,"user_id":2428101,"display_name":"vinsa"},"answer_count":1,"score":0,"link":"http://stackoverflow.com/questions/29054596/should-i-use-https-for-static-files-images-css","title":"Should I use https for static files (images, css)"},{"owner":{"reputation":18,"user_id":3184917,"display_name":"danielgharvey"},"answer_count":1,"score":0,"link":"http://stackoverflow.com/questions/29054594/using-virtualenv-on-mac-os-x-yosemite","title":"Using virtualenv on Mac OS X Yosemite"},{"owner":{"reputation":70,"user_id":2075848,"display_name":"Salvo Nostrato"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054593/html-select-value-to-php-bp-has-members-search-terms","title":"HTML select value to PHP bp_has_members( &#39;search_terms=??)"},{"owner":{"reputation":78,"user_id":4159467,"display_name":"Jake"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054591/set-an-image-to-sit-on-top-of-sidr-sidebar","title":"Set an image to sit on top of sidr sidebar"},{"owner":{"reputation":72,"user_id":3822370,"display_name":"user3822370"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054590/php-running-out-of-memory-when-resizing-images","title":"PHP running out of memory when resizing images"},{"owner":{"reputation":33,"user_id":4306916,"display_name":"qmnew"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054588/jquery-how-to-add-click-and-hover-in-same-function","title":"jQuery - how to add click and hover in same function"},{"owner":{"reputation":1,"user_id":4671732,"display_name":"Jkrowling"},"answer_count":1,"score":0,"link":"http://stackoverflow.com/questions/29054586/pointer-to-function-list","title":"Pointer to function (list)"},{"owner":{"reputation":1,"user_id":4671764,"display_name":"Bradley Couisns"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054585/javascript-firefly-background-causing-website-delay-lag","title":"Javascript &#39;Firefly&#39; background causing website delay lag"},{"owner":{"reputation":36,"user_id":1059053,"display_name":"Mike Znaet"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054583/gstreamer-failed-to-load-plugin-libgstlibvisual-entry-point-printf-could-no","title":"GStreamer, Failed to load plugin libgstlibvisual entry point __printf__ could not be located"},{"owner":{"reputation":6,"user_id":4084035,"display_name":"kelleyb"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054581/sqlalchemy-object-is-already-attached-to-session-then-detachedinstanceerror-on","title":"SQLAlchemy Object is already attached to session, then DetachedInstanceError on refresh, still adds to database"},{"owner":{"reputation":1,"user_id":4671754,"display_name":"Sebastian Otto Kotz&#233;"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054580/ruby-on-rails-unable-to-display-associated-item-from-database-comment0x44f","title":"Ruby on Rails - Unable to Display Associated Item From Database (#&lt;Comment:0x44f9ec8&gt;)"},{"owner":{"reputation":1,"user_id":4671766,"display_name":"TechGuy"},"answer_count":0,"score":-2,"link":"http://stackoverflow.com/questions/29054577/how-to-copy-files-from-one-amazon-s3-bucket-to-another-bucket-using-python-boto","title":"How to copy files from one Amazon S3 bucket to another bucket using Python Boto library ? Do both buckets needs to be in the same region?"},{"owner":{"reputation":1,"user_id":4058038,"display_name":"Timur Ugurlu"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054574/assigning-script-to-a-variable-with-a-variable","title":"Assigning script to a variable with a variable"},{"owner":{"reputation":1,"user_id":4516897,"display_name":"selfmade"},"answer_count":0,"score":0,"link":"http://stackoverflow.com/questions/29054572/mysql-left-join-with-subselect-limit-1","title":"mysql left join with subselect limit 1"},{"owner":{"reputation":49,"user_id":3062513,"display_name":"user3062513"},"answer_count":1,"score":0,"link":"http://stackoverflow.com/questions/29054566/passing-object-using-post","title":"Passing Object Using POST"},{"owner":{"reputation":11443,"user_id":1291428,"display_name":"Sebas"},"answer_count":2,"score":1,"link":"http://stackoverflow.com/questions/29054564/font-size-expressed-with-divisor","title":"font size expressed with divisor?"}],"has_more":true,"quota_max":10000,"quota_remaining":9656};
			$scope.questions = data.items;
			$scope.reputationSum = $scope.getReputationSum(data.items);
			$scope.highScore = $scope.getHighScore(data.items);
		} else {
			//Live data from stack api
			$http
				.get('https://api.stackexchange.com/2.2/questions?key=BUjfiSIkQl1FhTfwx0UNqA((&order=desc&sort=creation&site=stackoverflow&filter=!.FjwP0I.XfjJedi7B5TMyB4MFtB(n')
				.success(function(data, status, headers, config) {
					$scope.questions = data.items;
					$scope.reputationSum = $scope.getReputationSum(data.items);
					$scope.highScore = $scope.getHighScore(data.items);
				})
				.error(function(data, status, headers, config) {
				});
		}
	}]);