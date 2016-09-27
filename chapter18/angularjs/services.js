// angular.module("customServices", [])
// .factory("logService", function () {
// var messageCount = 0;
// return {
// log: function (msg) {
// console.log("(LOG + " + messageCount++ + ") " + msg);
// }
// };
// });

// angular.module("customServices", [])
// .service("logService", function() {
// 	return {
// 		messageCount: 0,
// 		log: function(msg){
// 			console.log("Debug: " + (this.messageCount++) + " " + msg);
// 		}
// 	};
// });

angular.module("customServices", [])
<<<<<<< HEAD
.provider("logService", function(){
	var counter = true;
	var debug = true;
	return {

		messageCounterEnabled: function(setting){
			if(angular.isDefined(setting)) {
=======
.provider("logService", function () {
	var counter = true;
	var debug = true;
	return {
		messageCounterEnabled: function (setting) {
			if (angular.isDefined(setting)) {
>>>>>>> 96d6c667ef94affef883a2b569580b28e255a04b
				counter = setting;
				return this;
			} else {
				return counter;
			}
		},
<<<<<<< HEAD

		debugEnabled: function(setting) {
=======
		debugEnabled: function (setting) {
>>>>>>> 96d6c667ef94affef883a2b569580b28e255a04b
			if (angular.isDefined(setting)) {
				debug = setting;
				return this;
			} else {
				return debug;
			}
		},
<<<<<<< HEAD

		$get: function() {
			return {
				messageCount: 0,
				log: function (msg) {
					if (debug) {console.log("(LOG" + (counter ? " + " + this.messageCount++ + ") " : ") ") + msg);
				}
					
=======
		$get: function ($log) {
			return {
				messageCount: 0,
				log: function (msg) {
					if (debug) {
						$log.log("(LOG"
							+ (counter ? " + " + this.messageCount++ + ") " : ") ")
							+ msg);
					}
>>>>>>> 96d6c667ef94affef883a2b569580b28e255a04b
				}
			};
		}
	}
});