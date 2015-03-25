angular
	.module('accuchallenge')
	.controller('questionsCtrl', ['$scope', '$http', '$sce', '$stateParams', 'Users', function($scope, $http, $sce, $stateParams, Users) {
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

		if(isDebugging){
			//Test data that doesn't require server call to stack api
			var data = {"items":[{"owner":{"reputation":63,"user_id":2528719,"profile_image":"http://i.stack.imgur.com/AGioo.jpg?s=128&g=1","display_name":"Aaron Taylor"},"answer_count":0,"score":0,"question_id":29241671,"title":"OSX File System Events - unit testing"},{"owner":{"reputation":1471,"user_id":1467997,"profile_image":"https://www.gravatar.com/avatar/6c72d7139086df4435a1067a66b02fff?s=128&d=identicon&r=PG","display_name":"limp_chimp"},"answer_count":0,"score":0,"question_id":29241668,"title":"Give sudo NOPASSWD access to certain commands, and fail with any others"},{"owner":{"reputation":1,"user_id":4704380,"profile_image":"http://graph.facebook.com/919824108058576/picture?type=large","display_name":"Alex Weiland"},"answer_count":0,"score":0,"question_id":29241667,"title":"Gridview linkbutton not firing RowCommand"},{"owner":{"reputation":1139,"user_id":1478764,"profile_image":"https://www.gravatar.com/avatar/1bd5ceef90b9ae51814c10e2147f98da?s=128&d=identicon&r=PG","display_name":"chRyNaN"},"answer_count":0,"score":0,"question_id":29241666,"title":"Communication between REST endpoint instances"},{"owner":{"reputation":5,"user_id":4572475,"profile_image":"https://www.gravatar.com/avatar/676e61f7c166bd83e3dc7329654ee440?s=128&d=identicon&r=PG","display_name":"alice meade"},"answer_count":0,"score":0,"question_id":29241664,"title":"Trying to run report in CRM2011, get &#39;Sys is undefined&#39;"},{"owner":{"reputation":1,"user_id":4642520,"profile_image":"https://lh5.googleusercontent.com/-Btv12N88Z2U/AAAAAAAAAAI/AAAAAAAAADI/fBO70Ov4sIE/photo.jpg?sz=128","display_name":"Dan Casler"},"answer_count":0,"score":0,"question_id":29241663,"title":"Font Sizing Issue"},{"owner":{"reputation":1339,"user_id":241005,"profile_image":"https://www.gravatar.com/avatar/b3bfdaba1474efed5ef2e99b512821ba?s=128&d=identicon&r=PG","display_name":"veilig"},"answer_count":0,"score":0,"question_id":29241660,"title":"where does berkshelf look for knife.rb"},{"owner":{"reputation":10,"user_id":2884093,"profile_image":"http://graph.facebook.com/100000489692325/picture?type=large","display_name":"Mostafa Kasem"},"answer_count":0,"score":0,"question_id":29241652,"title":"Twitter TypeAhead.js not working"},{"owner":{"reputation":852,"user_id":893620,"profile_image":"http://i.stack.imgur.com/5zRKR.jpg?s=128&g=1","display_name":"tdunham02"},"answer_count":0,"score":0,"question_id":29241650,"title":"iOS Auto-Renewing Subscription Test Device Crashes"},{"owner":{"reputation":327,"user_id":1220653,"profile_image":"https://www.gravatar.com/avatar/c19b58d15509c95c734ee560841fc133?s=128&d=identicon&r=PG","display_name":"Bradley Odell"},"answer_count":0,"score":0,"question_id":29241649,"title":"Changing color of ListBoxItem based on index"},{"owner":{"reputation":5,"user_id":1767444,"profile_image":"https://www.gravatar.com/avatar/36a587ee64413af560b4a386bfafe7a9?s=128&d=identicon&r=PG","display_name":"user1767444"},"answer_count":0,"score":0,"question_id":29241648,"title":"How to display a PDF from ResponseEntity in controller method and display to JSP using jquery ajax?"},{"owner":{"reputation":736,"user_id":393267,"profile_image":"https://www.gravatar.com/avatar/1f96082e2e18ce24feebbd4de4c188f6?s=128&d=identicon&r=PG","display_name":"newbiez"},"answer_count":0,"score":0,"question_id":29241647,"title":"Best way to retrieve database results for further use?"},{"owner":{"reputation":14,"user_id":4293249,"profile_image":"https://www.gravatar.com/avatar/8e1da54daab45e7168e237ca104bc832?s=128&d=identicon&r=PG&f=1","display_name":"hello world"},"answer_count":0,"score":0,"question_id":29241645,"title":"how do i control width of input with bootstrap"},{"owner":{"reputation":87,"user_id":150582,"profile_image":"https://www.gravatar.com/avatar/92d6b1feafbf0173eca6678c667033bb?s=128&d=identicon&r=PG","display_name":"Jon Weinraub"},"answer_count":0,"score":0,"question_id":29241643,"title":"Unable to dynamically populate dropdown with states from a country select"},{"owner":{"reputation":1,"user_id":4709077,"profile_image":"https://www.gravatar.com/avatar/7d5edf75d9e32edb707b18ca614e91b9?s=128&d=identicon&r=PG&f=1","display_name":"7Lightning7"},"answer_count":0,"score":0,"question_id":29241642,"title":"What is wrong with this piece of code [Python]?"},{"owner":{"reputation":1,"user_id":2692997,"profile_image":"https://www.gravatar.com/avatar/a2180c4830e5cf3c437eb49b0edf55ce?s=128&d=identicon&r=PG&f=1","display_name":"user2692997"},"answer_count":0,"score":0,"question_id":29241640,"title":"Unable to run mksdcard SDK tool ubuntu"},{"owner":{"reputation":1,"user_id":1798028,"profile_image":"https://www.gravatar.com/avatar/b7a73aaab5e4ff9400677798457cef20?s=128&d=identicon&r=PG","display_name":"user1798028"},"answer_count":0,"score":0,"question_id":29241639,"title":"python variable not defined"},{"owner":{"reputation":1446,"user_id":26983,"profile_image":"https://www.gravatar.com/avatar/6daa1a90def6b21f564af06062eb3b22?s=128&d=identicon&r=PG","display_name":"BigSandwich"},"answer_count":0,"score":0,"question_id":29241637,"title":"_get_pgmptr vs GetModuleFileName"},{"owner":{"reputation":1,"user_id":3738658,"profile_image":"https://www.gravatar.com/avatar/3afb9da2cbc30ff712e988819d4482e1?s=128&d=identicon&r=PG&f=1","display_name":"user3738658"},"answer_count":0,"score":0,"question_id":29241634,"title":"Need multiple people in the MailTo section in Java"},{"owner":{"reputation":1,"user_id":4709108,"profile_image":"https://www.gravatar.com/avatar/bf81a08ff007580549d2b48383b8d137?s=128&d=identicon&r=PG&f=1","display_name":"Travis Gerken"},"answer_count":0,"score":0,"question_id":29241632,"title":"Calling Date Modified in CMD"},{"owner":{"reputation":1,"user_id":4324159,"profile_image":"https://www.gravatar.com/avatar/760403d86c8fe2688ed9eceeb2844be5?s=128&d=identicon&r=PG&f=1","display_name":"Salma"},"answer_count":0,"score":0,"question_id":29241631,"title":"Can I use YouTube Data API in a maven project in Eclipse ?"},{"owner":{"reputation":400,"user_id":2200675,"profile_image":"https://www.gravatar.com/avatar/ed9bc0e91a05bfc6ba2bcf83eb29585c?s=128&d=identicon&r=PG&f=1","display_name":"John"},"answer_count":0,"score":0,"question_id":29241630,"title":"Retrofit getting Datetime field from mysql database returns null"},{"owner":{"reputation":1,"user_id":4704237,"profile_image":"https://www.gravatar.com/avatar/4c76727e9ff4a75fc14df16ed260e581?s=128&d=identicon&r=PG&f=1","display_name":"Jack Duffy"},"answer_count":0,"score":-1,"question_id":29241628,"title":"Creating and Displaying a Multidimensional Array with external files C#"},{"owner":{"reputation":1,"user_id":4708733,"profile_image":"https://www.gravatar.com/avatar/1b6e72daa89f0f6782c4cb463b56e513?s=128&d=identicon&r=PG&f=1","display_name":"Moustapha"},"answer_count":0,"score":0,"question_id":29241622,"title":"Use the out-of-the-box move action in custom dashlet in Alfresco"},{"owner":{"reputation":40,"user_id":1565082,"profile_image":"https://www.gravatar.com/avatar/8e61a2a290e0d7ca7685e9c7a32e31d7?s=128&d=identicon&r=PG","display_name":"marcinp"},"answer_count":0,"score":0,"question_id":29241620,"title":"projection of one column from fs.files"},{"owner":{"reputation":1,"user_id":4700556,"profile_image":"http://graph.facebook.com/1028081383886816/picture?type=large","display_name":"Christopher Tauro"},"answer_count":0,"score":0,"question_id":29241619,"title":"Navigation menu for android app based on website"},{"owner":{"reputation":354,"user_id":1652166,"profile_image":"https://www.gravatar.com/avatar/4da8f502012ef8003af59bf5f4ddad0c?s=128&d=identicon&r=PG","display_name":"chris P"},"answer_count":0,"score":0,"question_id":29241618,"title":"Why can&#39;t I change the color status bar color of my views?"},{"owner":{"reputation":4,"user_id":4690774,"profile_image":"https://www.gravatar.com/avatar/c827c5f8203e88da24a3dc7f4f1be13c?s=128&d=identicon&r=PG&f=1","display_name":"Paulo Lima"},"answer_count":0,"score":-2,"question_id":29241614,"title":"Insert link (href url) in javascript data code"},{"owner":{"reputation":4054,"user_id":560435,"profile_image":"https://www.gravatar.com/avatar/208dff887375fd96d5f642a67204306e?s=128&d=identicon&r=PG","display_name":"Robert Rowntree"},"answer_count":0,"score":0,"question_id":29241613,"title":"android ndk - using native lib ( C only , no .cpp ) No implementation Found"},{"owner":{"reputation":34,"user_id":3691040,"profile_image":"http://graph.facebook.com/518938941/picture?type=large","display_name":"Joe Healey"},"answer_count":0,"score":0,"question_id":29241612,"title":"Solving a (simple) numeric exercise in bash"},{"owner":{"reputation":3095,"user_id":899048,"profile_image":"https://www.gravatar.com/avatar/77e4ce6906277675d75d9d612215e908?s=128&d=identicon&r=PG","display_name":"justnS"},"answer_count":0,"score":0,"question_id":29241611,"title":"Transactional Dead-letter queue is filling up"},{"owner":{"reputation":3,"user_id":4109039,"profile_image":"https://www.gravatar.com/avatar/5dcabc1f44f6ff0be44bdef29d8dc76e?s=128&d=identicon&r=PG&f=1","display_name":"Nick Thomas"},"answer_count":1,"score":0,"question_id":29241606,"title":"Extracting part of a string up to a specific character in PHP"},{"owner":{"reputation":19,"user_id":3629787,"profile_image":"https://www.gravatar.com/avatar/e4bb906afc8eaa1989ae7bfd630cf505?s=128&d=identicon&r=PG&f=1","display_name":"user3629787"},"answer_count":0,"score":0,"question_id":29241605,"title":"XML layout cannot be reconstructed programmatically"},{"owner":{"reputation":3,"user_id":3786453,"profile_image":"http://graph.facebook.com/1056798037/picture?type=large","display_name":"Menaka"},"answer_count":0,"score":0,"question_id":29241603,"title":"Cordova - android error when building"},{"owner":{"reputation":1,"user_id":3618525,"profile_image":"https://www.gravatar.com/avatar/5ade57ca3ca810d5dc7ec35c6937e4bb?s=128&d=identicon&r=PG&f=1","display_name":"RawMeat"},"answer_count":0,"score":-1,"question_id":29241602,"title":"Access IP Geolocation linux server through internal Website"},{"owner":{"reputation":390,"user_id":2197820,"profile_image":"https://www.gravatar.com/avatar/d43f4897bac3e108d3b563157550746c?s=128&d=identicon&r=PG","display_name":"Alex"},"answer_count":0,"score":0,"question_id":29241601,"title":"GWT: how to create my own asynchronous methods?"},{"owner":{"reputation":1,"user_id":4709070,"profile_image":"https://www.gravatar.com/avatar/8c07061bacfcf09f9aca40dfa090144c?s=128&d=identicon&r=PG&f=1","display_name":"Youngeun Shin"},"answer_count":0,"score":0,"question_id":29241600,"title":"How to perform KNN Classification to consider a customer data?"},{"owner":{"reputation":120,"user_id":3504466,"profile_image":"https://www.gravatar.com/avatar/e403443744e98a4c9ddd6316ce487c36?s=128&d=identicon&r=PG&f=1","display_name":"user3504466"},"answer_count":0,"score":0,"question_id":29241599,"title":"Headers in excel get replaced"},{"owner":{"reputation":1,"user_id":4355507,"profile_image":"http://graph.facebook.com/100000504680933/picture?type=large","display_name":"IMam Chairul Arifin"},"answer_count":0,"score":0,"question_id":29241595,"title":"send and convert multiple arrays from android to php server"},{"owner":{"reputation":107,"user_id":4678027,"profile_image":"https://www.gravatar.com/avatar/de02495c918e439bab5af1bc9dc2edf8?s=128&d=identicon&r=PG&f=1","display_name":"Prashant"},"answer_count":1,"score":-1,"question_id":29241594,"title":"Microsoft.Owin.Host.HttpListener not loading"},{"owner":{"reputation":8,"user_id":3470609,"profile_image":"https://www.gravatar.com/avatar/a7f3510c89f254cf42bef339bc7f33cc?s=128&d=identicon&r=PG&f=1","display_name":"mexcool"},"answer_count":0,"score":0,"question_id":29241591,"title":"Can&#39;t download elements on table in Windows Azure"},{"owner":{"reputation":1,"user_id":4709099,"profile_image":"https://www.gravatar.com/avatar/6e6a00951ea1e0f453a442a4b30fad93?s=128&d=identicon&r=PG&f=1","display_name":"Lucy"},"answer_count":0,"score":0,"question_id":29241589,"title":"What is the most efficient way to code in java?"},{"owner":{"reputation":101,"user_id":1630495,"profile_image":"https://www.gravatar.com/avatar/85654fc8706de5f34bb1305f3eb12742?s=128&d=identicon&r=PG&f=1","display_name":"rusho1234"},"answer_count":0,"score":0,"question_id":29241588,"title":"Write to RabbitMQ using Spark or Pig or Hive"},{"owner":{"reputation":1,"user_id":4709109,"profile_image":"https://www.gravatar.com/avatar/6b95d4277d2fb25fc64112966a105a3d?s=128&d=identicon&r=PG&f=1","display_name":"yoyoyo"},"answer_count":0,"score":0,"question_id":29241587,"title":"Ajax stops when extra data added"},{"owner":{"reputation":1,"user_id":4702949,"profile_image":"https://lh4.googleusercontent.com/-W_988on2OVk/AAAAAAAAAAI/AAAAAAAAAB8/okE3w4Q1kRI/photo.jpg?sz=128","display_name":"Julia Kolupaeva"},"answer_count":0,"score":0,"question_id":29241584,"title":"Jenkins: How to use logfile_xml.jtl on the fly?"},{"owner":{"reputation":740,"user_id":1078232,"profile_image":"https://www.gravatar.com/avatar/fb6d0399965f116e29f112b8fbea4734?s=128&d=identicon&r=PG","display_name":"Pittfall"},"answer_count":0,"score":0,"question_id":29241582,"title":"How can I call my set my callback function from an object?"},{"owner":{"reputation":535,"user_id":535545,"profile_image":"http://i.stack.imgur.com/J2hgH.jpg?s=128&g=1","display_name":"muffs"},"answer_count":0,"score":0,"question_id":29241580,"title":"How do I remap q to recording mode?"},{"owner":{"reputation":63,"user_id":4303748,"profile_image":"http://i.stack.imgur.com/2Tll0.jpg?s=128&g=1","display_name":"Riyana"},"answer_count":0,"score":0,"question_id":29241578,"title":"How do I prevent the overlooping a sound (in mediaplayer) if it&#39;s already playing?"},{"owner":{"reputation":1000,"user_id":1458877,"profile_image":"https://www.gravatar.com/avatar/12a257c50c156067b553b6236d8cc4c7?s=128&d=identicon&r=PG","display_name":"Marcel Overdijk"},"answer_count":0,"score":0,"question_id":29241575,"title":"New Spring Data JDK8 Jsr310JpaConverters not working automatically?"},{"owner":{"reputation":9,"user_id":4009877,"profile_image":"https://www.gravatar.com/avatar/8e58ea922b2c6a6b5d7ed2a95df5b209?s=128&d=identicon&r=PG&f=1","display_name":"toleolu"},"answer_count":0,"score":0,"question_id":29241574,"title":"cfldap add member to exchange distribution list"},{"owner":{"reputation":1,"user_id":4709049,"profile_image":"https://www.gravatar.com/avatar/eeadea6bcfc13d2c31b6940ec1a5e43f?s=128&d=identicon&r=PG&f=1","display_name":"Skampensis"},"answer_count":0,"score":0,"question_id":29241571,"title":"PHP display database data into HTML table"},{"owner":{"reputation":1,"user_id":4684652,"profile_image":"https://lh6.googleusercontent.com/-7OBTZ0UkRTc/AAAAAAAAAAI/AAAAAAAAABo/cntMQLxtKrc/photo.jpg?sz=128","display_name":"jacks205"},"answer_count":1,"score":0,"question_id":29241563,"title":"Adding gradient to scrolling UITableView"},{"owner":{"reputation":1,"user_id":1681412,"profile_image":"https://www.gravatar.com/avatar/2a9cb7e64fd1278e3214477ac6f367a2?s=128&d=identicon&r=PG","display_name":"user1681412"},"answer_count":0,"score":0,"question_id":29241561,"title":"openfl video targeting HTML5 not working on chrome-mobile?"},{"owner":{"reputation":16,"user_id":4017627,"profile_image":"https://www.gravatar.com/avatar/06bafe5ce2498a70f20b646941497c3a?s=128&d=identicon&r=PG&f=1","display_name":"mkrinblk"},"answer_count":0,"score":0,"question_id":29241557,"title":"why is play framework timing out?"},{"owner":{"reputation":47,"user_id":3677331,"profile_image":"https://www.gravatar.com/avatar/fa279275736f947af90c707176694718?s=128&d=identicon&r=PG&f=1","display_name":"user3677331"},"answer_count":0,"score":0,"question_id":29241556,"title":"Android Service taking up huge amount of memory"},{"owner":{"reputation":1,"user_id":4707608,"profile_image":"https://www.gravatar.com/avatar/64a892310a9e0fabfd6bc6b38d866843?s=128&d=identicon&r=PG&f=1","display_name":"Jan Fischer"},"answer_count":0,"score":0,"question_id":29241554,"title":"node.js - serialport; receive values into buffer"},{"owner":{"reputation":1,"user_id":4709056,"profile_image":"http://graph.facebook.com/10206359114327299/picture?type=large","display_name":"Sounak Mohanta"},"answer_count":0,"score":0,"question_id":29241551,"title":"Comparing values across matrices with a tolerance range"},{"owner":{"reputation":1,"user_id":4709083,"profile_image":"http://graph.facebook.com/825176020896254/picture?type=large","display_name":"karel"},"answer_count":0,"score":-1,"question_id":29241550,"title":"manipulating and animating an image on a matplotlib plot"},{"owner":{"reputation":1,"user_id":1217201,"profile_image":"https://www.gravatar.com/avatar/b0d4391c53a6a705d0c143d86f8e88f3?s=128&d=identicon&r=PG","display_name":"Kristoffer &#214;dmark"},"answer_count":0,"score":0,"question_id":29241549,"title":"Contiki port will not override printf"},{"owner":{"reputation":1,"user_id":3892396,"profile_image":"https://www.gravatar.com/avatar/ac7fdaf230e9b4c02455edcef8ef2495?s=128&d=identicon&r=PG&f=1","display_name":"Luiz Jr"},"answer_count":0,"score":0,"question_id":29241548,"title":"Paint an image without removing it on html5 canvas"},{"owner":{"reputation":1,"user_id":1436492,"profile_image":"https://www.gravatar.com/avatar/ccd8776ae6e84f4526df25a435f51ad0?s=128&d=identicon&r=PG","display_name":"sawdust"},"answer_count":0,"score":0,"question_id":29241545,"title":"multiple phys_to_virt calls in linux kernel object"},{"owner":{"reputation":25,"user_id":2984213,"profile_image":"https://www.gravatar.com/avatar/2fa679bd3831a37cc2a3e416b5e82826?s=128&d=identicon&r=PG&f=1","display_name":"user2984213"},"answer_count":0,"score":0,"question_id":29241543,"title":"How to compare jar files using Ant?"},{"owner":{"reputation":10,"user_id":2845770,"profile_image":"https://www.gravatar.com/avatar/627d0a168d8a1ea426e40c5deb3312b2?s=128&d=identicon&r=PG&f=1","display_name":"akshath"},"answer_count":0,"score":0,"question_id":29241542,"title":"Office365 returns same recordd ID for Two different Contacts?"},{"owner":{"reputation":32,"user_id":1634619,"profile_image":"https://www.gravatar.com/avatar/7979b5b67b5460fbb318f153a470cf5f?s=128&d=identicon&r=PG","display_name":"fermerius"},"answer_count":0,"score":0,"question_id":29241541,"title":"Installing jade using NPM"},{"owner":{"reputation":14,"user_id":4521365,"profile_image":"https://www.gravatar.com/avatar/ca048cf5b23070601260c0325888ef6f?s=128&d=identicon&r=PG&f=1","display_name":"den"},"answer_count":1,"score":0,"question_id":29241539,"title":"jquery-How to limit characters when p class in jquery process?"},{"owner":{"reputation":4095,"user_id":3204250,"profile_image":"https://www.gravatar.com/avatar/e6ad04bcae2e13bea6d5607c8a8425f8?s=128&d=identicon&r=PG&f=1","display_name":"cdeterman"},"answer_count":0,"score":0,"question_id":29241538,"title":"Which CUDA Toolkit version for older NVIDIA Driver"},{"owner":{"reputation":495,"user_id":2063096,"profile_image":"https://www.gravatar.com/avatar/defa8c7c64d6d01336c4e79dc5139197?s=128&d=identicon&r=PG","display_name":"SoEzPz"},"answer_count":0,"score":1,"question_id":29241536,"title":"timing issue? or code structure?"},{"owner":{"reputation":20,"user_id":3990158,"profile_image":"https://www.gravatar.com/avatar/c657e26d1552cbe4705fd965d53d2e25?s=128&d=identicon&r=PG&f=1","display_name":"PHA"},"answer_count":0,"score":0,"question_id":29241535,"title":"How convert string with hex characters convert to human readable value of that hex"},{"owner":{"reputation":357,"user_id":2358309,"profile_image":"https://www.gravatar.com/avatar/6ca6af0c338582ec6f83b36fa9c48816?s=128&d=identicon&r=PG","display_name":"sepikas_antanas"},"answer_count":0,"score":0,"question_id":29241533,"title":"MySQL use results from one query in another"},{"owner":{"reputation":21,"user_id":2398581,"profile_image":"https://www.gravatar.com/avatar/d8569f613881a254c108e1b548cbcffb?s=128&d=identicon&r=PG","display_name":"Marian"},"answer_count":0,"score":0,"question_id":29241529,"title":"Xamarin Forms multiple cell in listview"},{"owner":{"reputation":1,"user_id":4673553,"profile_image":"https://www.gravatar.com/avatar/71bbb290f3569d22a0aaad9da836e210?s=128&d=identicon&r=PG&f=1","display_name":"Arjun"},"answer_count":0,"score":0,"question_id":29241527,"title":"MySQL - Error 1215 - Cannot add foreign key constraint"},{"owner":{"reputation":3,"user_id":4403488,"profile_image":"https://www.gravatar.com/avatar/e679afbaa4f48383f4242d08757d8e39?s=128&d=identicon&r=PG&f=1","display_name":"Roshan"},"answer_count":0,"score":0,"question_id":29241524,"title":"updating results from a cursor"},{"owner":{"reputation":26,"user_id":1675557,"profile_image":"https://www.gravatar.com/avatar/53f5fc9ecc84ffc3b168405cca6532fb?s=128&d=identicon&r=PG","display_name":"user1675557"},"answer_count":0,"score":0,"question_id":29241522,"title":"use angular $http with django urlpatterns to get a json file"},{"owner":{"reputation":1,"user_id":4709006,"profile_image":"https://www.gravatar.com/avatar/108c8fc1cf54801dcd4c9a6dfc962e47?s=128&d=identicon&r=PG&f=1","display_name":"Kyle Farmer"},"answer_count":0,"score":0,"question_id":29241518,"title":"2-3-4 tree insertion overwriting root in every pass"},{"owner":{"reputation":1,"user_id":3339307,"profile_image":"http://i.stack.imgur.com/3YmUy.png?s=128&g=1","display_name":"Plainview"},"answer_count":0,"score":0,"question_id":29241517,"title":"Salesforce: Convert Person Account to Contact - Custom Button"},{"owner":{"reputation":52,"user_id":4372138,"profile_image":"https://www.gravatar.com/avatar/849ce2a9f35447dff77503e86482bd43?s=128&d=identicon&r=PG&f=1","display_name":"EDarrien"},"answer_count":0,"score":0,"question_id":29241513,"title":"Pass value to Datatable script"},{"owner":{"reputation":102,"user_id":831154,"profile_image":"https://www.gravatar.com/avatar/be5d19d0e1c96916123ef7d1c06f8da1?s=128&d=identicon&r=PG","display_name":"Jeroen"},"answer_count":0,"score":0,"question_id":29241512,"title":"How to wait for specific time efficiently"},{"owner":{"reputation":3,"user_id":1430911,"profile_image":"http://i.stack.imgur.com/3BQ0a.jpg?s=128&g=1","display_name":"Connie"},"answer_count":0,"score":0,"question_id":29241506,"title":"Warnings When Starting JDeveloper 12c"},{"owner":{"reputation":71,"user_id":1158780,"profile_image":"https://www.gravatar.com/avatar/7a154e8fb33056626045beb7bd49d0c7?s=128&d=identicon&r=PG","display_name":"fizgig"},"answer_count":0,"score":0,"question_id":29241503,"title":"Autolayout ignoring constraints in Landscape"},{"owner":{"reputation":13,"user_id":4646828,"profile_image":"https://lh6.googleusercontent.com/-7TvMBQoDlKo/AAAAAAAAAAI/AAAAAAAAADA/UEeQy8u0Yuk/photo.jpg?sz=128","display_name":"Tofetopo"},"answer_count":2,"score":0,"question_id":29241502,"title":"How to get user input from EditText in Android and save it to an ArrayList?"},{"owner":{"reputation":6,"user_id":4664572,"profile_image":"https://lh5.googleusercontent.com/-43qYxGDXDHc/AAAAAAAAAAI/AAAAAAAAAL8/975nCg35tkE/photo.jpg?sz=128","display_name":"Moriduri"},"answer_count":0,"score":0,"question_id":29241501,"title":"C,C++ write on parallel port via USB adapter (LINUX)"},{"owner":{"reputation":1,"user_id":4709042,"profile_image":"https://www.gravatar.com/avatar/9c7bbf2111a65db04a82db2a5de7bb3b?s=128&d=identicon&r=PG&f=1","display_name":"Svavl"},"answer_count":0,"score":0,"question_id":29241499,"title":"Move TextView together with pressed ImageButton"},{"owner":{"reputation":1,"user_id":4709076,"profile_image":"https://lh6.googleusercontent.com/-AT76oSJ4W7s/AAAAAAAAAAI/AAAAAAAAAEw/CL_5dbvd-OY/photo.jpg?sz=128","display_name":"Hannah Stang"},"answer_count":1,"score":0,"question_id":29241498,"title":"I need to loop this through and have the program terminate when the string -1 is given"},{"owner":{"reputation":25,"user_id":4611634,"profile_image":"https://www.gravatar.com/avatar/5e558dc21d70be62dcba8b837b9aa73a?s=128&d=identicon&r=PG&f=1","display_name":"Henry Brown"},"answer_count":0,"score":0,"question_id":29241495,"title":"How do I get a users location from the facebook API in swift"},{"owner":{"reputation":3,"user_id":3906969,"profile_image":"https://www.gravatar.com/avatar/96ade3b6287f7ab93784a1d7208085a9?s=128&d=identicon&r=PG&f=1","display_name":"ap6491"},"answer_count":0,"score":0,"question_id":29241493,"title":"Does Gloox have support for sending HTTP request?"},{"owner":{"reputation":916,"user_id":1849997,"profile_image":"http://i.stack.imgur.com/coeIX.jpg?s=128&g=1","display_name":"goldisfine"},"answer_count":0,"score":0,"question_id":29241492,"title":"Fixed-effect model matrix is rank deficient"},{"owner":{"reputation":190,"user_id":1636712,"profile_image":"https://www.gravatar.com/avatar/2f47f2e0e8984ad29f0e79b631115367?s=128&d=identicon&r=PG&f=1","display_name":"WigglyWorld"},"answer_count":0,"score":0,"question_id":29241491,"title":"How do I get the correct Image depth using Python and Wand?"},{"owner":{"reputation":49,"user_id":2704291,"profile_image":"https://www.gravatar.com/avatar/b386cdee00516535e34117e789adb703?s=128&d=identicon&r=PG&f=1","display_name":"user2704291"},"answer_count":0,"score":-1,"question_id":29241485,"title":"What is the most efficient way to save a website&#39;s content after scraping it?"},{"owner":{"reputation":1,"user_id":4709064,"profile_image":"https://www.gravatar.com/avatar/3d8488cfb025f4d1a05f7c7c20d7df22?s=128&d=identicon&r=PG&f=1","display_name":"Aisha"},"answer_count":0,"score":0,"question_id":29241482,"title":"VBA Excel Macro copies the first line multiple times instead of going to the second line"},{"owner":{"reputation":64,"user_id":1994023,"profile_image":"https://www.gravatar.com/avatar/a254d705f49521f836e9b90c50265f01?s=128&d=identicon&r=PG","display_name":"Earle Davies"},"answer_count":0,"score":0,"question_id":29241479,"title":"Magento using extensions in external code"},{"owner":{"reputation":2757,"user_id":562222,"profile_image":"https://www.gravatar.com/avatar/d9c93381a9aa785b6fce90659875d704?s=128&d=identicon&r=PG","display_name":"qed"},"answer_count":0,"score":0,"question_id":29241477,"title":"Margin of a haskell diagrams svg file"},{"owner":{"reputation":88,"user_id":3578820,"profile_image":"http://i.stack.imgur.com/DjTfy.jpg?s=128&g=1","display_name":"JGerulskis"},"answer_count":1,"score":0,"question_id":29241476,"title":"Socket Binding Confusion"},{"owner":{"reputation":1,"user_id":3867566,"profile_image":"https://www.gravatar.com/avatar/e1b368c80d09f6fe0f6a0f86763df165?s=128&d=identicon&r=PG&f=1","display_name":"user3867566"},"answer_count":0,"score":-1,"question_id":29241475,"title":"How would you go about doing this? Python Voice activated home automation"},{"owner":{"reputation":4240,"user_id":1795356,"profile_image":"http://i.stack.imgur.com/Md4Z8.png?s=128&g=1","display_name":"Joey"},"answer_count":0,"score":1,"question_id":29241474,"title":"Enabling NSScrollView to scroll its contents using Auto Layout in Interface Builder"},{"owner":{"reputation":3305,"user_id":1011791,"profile_image":"https://www.gravatar.com/avatar/0b3255fb82db0521fa96509a64a82240?s=128&d=identicon&r=PG","display_name":"Chthonic Project"},"answer_count":0,"score":0,"question_id":29241471,"title":"How to use the Illinois Chunker with sentences as input?"},{"owner":{"reputation":92,"user_id":3606175,"profile_image":"https://www.gravatar.com/avatar/3acd322712389e74f0e2cba87c70eb67?s=128&d=identicon&r=PG&f=1","display_name":"user3606175"},"answer_count":0,"score":0,"question_id":29241469,"title":"Removing duplicates from the left table"},{"owner":{"reputation":5665,"user_id":379677,"profile_image":"https://www.gravatar.com/avatar/62db7f2630a3ee0be5ef9225c8695bf7?s=128&d=identicon&r=PG","display_name":"viperguynaz"},"answer_count":0,"score":0,"question_id":29241465,"title":"Error adding custom domain name for azure website deployment slot"},{"owner":{"reputation":10,"user_id":4424958,"profile_image":"https://www.gravatar.com/avatar/b8197d259cb2e60dfdd7e39f203d2a5a?s=128&d=identicon&r=PG&f=1","display_name":"TheUnnamed454"},"answer_count":0,"score":0,"question_id":29241464,"title":"JSP - Value from tag attribute"},{"owner":{"reputation":4274,"user_id":54467,"profile_image":"https://www.gravatar.com/avatar/9ef49c4a8e016118f36a52d5001ed9af?s=128&d=identicon&r=PG","display_name":"Kaveh Shahbazian"},"answer_count":0,"score":0,"question_id":29241461,"title":"TypeScript, Node.js, require and module in Visual Studio 2013"},{"owner":{"reputation":542,"user_id":1081405,"profile_image":"http://i.stack.imgur.com/xXFGQ.jpg?s=128&g=1","display_name":"Janusz Jasinski"},"answer_count":1,"score":0,"question_id":29241460,"title":"Link to Anchor Tag on Another Page Doesn&#39;t Work"}],"has_more":true,"quota_max":10000,"quota_remaining":9956};
			$scope.questions = data.items;
			Users.setUsers(data.items.map(function(questions){return questions.owner;}));
			$scope.reputationSum = $scope.getReputationSum(data.items);
			$scope.highScore = $scope.getHighScore(data.items);
		} else {
			//Live data from stack api
			$http
				.get('https://api.stackexchange.com/2.2/questions/?pagesize=100&order=desc&sort=creation&site=stackoverflow&filter=!4y_4z.h_mb5SWrcNcs(5-pP3c2iwOVODJ5G_8j')
				.success(function(data, status, headers, config) {
					$scope.questions = data.items;
					Users.setUsers(data.items.map(function(questions){return questions.owner;}));
					$scope.reputationSum = $scope.getReputationSum(data.items);
					$scope.highScore = $scope.getHighScore(data.items);
				})
				.error(function(data, status, headers, config) {
				});
		}
	}]);