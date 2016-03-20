var $ = require('jquery');

var Be = function(client_id) {
	this.client_id = client_id;
	this.base_url = 'http://www.behance.net/v2/';
}

Be.prototype = {
	user: function(user, cb) {
		// if get both params, call /v2/users/user
		var suffix_url = 'users/';
		if (paramsValidator(user, 'string', cb, 'function')) {
			suffix_url += user;
			this._get(suffix_url, {}, cb);
		}
	},
	userProjects: function(user, params, cb) {
		if (paramsValidator(user, 'string', params, 'object', cb, 'function')) {
			var suffix_url = 'users/' + user + '/projects';
			this._get(suffix_url, params, cb);
		}
	},
	userAppreciations: function(user, params, cb) {
		if (paramsValidator(user, 'string', params, 'object', cb, 'function')) {
			var suffix_url = 'users/' + user + '/appreciations';
			this._get(suffix_url, params, cb);
		}
	},
	userFollowers: function(user, params, cb) {
		if (paramsValidator(user, 'string', params, 'object', cb, 'function')) {
			var suffix_url = 'users/' + user + '/followers';
			this._get(suffix_url, params, cb);
		}
	},
	userAllFollowers: function(user, cb) {
		if (paramsValidator(user, 'string', cb, 'function')) {
			var suffix_url = 'users/' + user + '/followers';
			var combined_followers = [];
			var page = 1;
			var that = this;
			
			function r() {	
				that._get(suffix_url, {per_page: 20, page: page}, function(data) {
					combined_followers = combined_followers.concat(data.followers);
					if (data.followers.length !== 0 && data.followers.length === 20) {
						page += 1;
						r();
					}
					else {
						cb(combined_followers);
					}		
				});
			}
			r();
		}
	},
	userAllFollowings: function(user, cb) {
		if (paramsValidator(user, 'string', cb, 'function')) {
			var suffix_url = 'users/' + user + '/following';
			var combined_followings = [];
			var page = 1;
			var that = this;
			
			function r() {	
				that._get(suffix_url, {per_page: 20, page: page}, function(data) {
					combined_followings = combined_followings.concat(data.following);
					if (data.following.length !== 0 && data.following.length === 20) {
						page += 1;
						r();
					}
					else {
						cb(combined_followings);
					}		
				});
			}
			r();
		}
	},
	userStats: function(user, params, cb) {
		if (paramsValidator(user, 'string', params, 'object', cb, 'function')) {
			var suffix_url = 'users/' + user + '/stats';

			this._get(suffix_url, params, cb);
		}
	},
	_get: function(suffix_url, params, cb) {
		params.client_id = this.client_id;
		var url = this.base_url + suffix_url + paramsBuilder(params);
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: cb
		});
	}
}

function paramsBuilder(params) {
	var str = '?';
	for (var key in params) {
		if (params.hasOwnProperty(key)) {
			str = str.concat(key).concat('=').concat(params[key]).concat('&');
		}
	}
	
	return str
}

function paramsValidator() {
	var passed = true;
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof arguments[i] !== arguments[i + 1]) {
			passed = false
		}
	}
	return passed
}

module.exports = Be;