var Be = require('../beSimple.js');

var be = new Be("JEQi67TKrFJBglc988vISlUxkx9uvqh0");

// be.user('chiunhauyou', function(data) {
// 	console.log(data);
// });

// be.userProjects('chiunhauyou', {}, function(data) {
// 	console.log(data);
// })

// be.userAppreciations('chiunhauyou', {}, function(data) {
// 	console.log(data);
// })

be.userAllFollowings('chiunhauyou', function(data) {
	console.log(data);
})