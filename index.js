var $ = require('jquery');

var Be = function(clientId) {
	this.clientId = clientId;
	this.baseURL = 'http://www.behance.net/v2/';
	this.get = function(methodURL, params, success) {
		var completeURL = this.baseURL + methodURL + 'client_id=' + this.clientId;
		// $.ajax({
		// 	url: completeURL,
		// 	datatype: "jsonp",
		// 	success: success
		// });
		console.log(completeURL);
	}

	this.users = {
		methodBaseURL: 'users/',
		get: this.get,
		user: function(user_id, cb) {
			var methodURL = this.methodBaseURL + user_id + '?';
			this.get(methodURL, {}, cb);
		},
		showThis: function() {
			console.log(this);
		}
	}.bind(this);
}

Be.prototype.hello = function() {
	console.log("hello");
}
Be.prototype.showClientId = function() {
	console.log(this.clientId);
}

Be

module.exports = Be;