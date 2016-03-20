提供一套更適合懶人的 Behance API 介面懶人包。

## Usage
#### Initialize
```js
var Be = require('beSimple.js');
var be = new Be(YOUR_CLIENT_ID);
```
### User

##### Get a user's basic info
```js
be.user(USER_ID, function(data) {
	console.log(data);
})
```

##### Get a user's projects
```js
be.userProjects(USER_ID, function(data) {
	console.log(data);
})
```

##### Get all followers of a user
Please be careful when calling this method, if a user has more than 1000 followers, the request might be block by Behance.
```js
be.userAllFollowers(USER_ID, function(followers) {
	console.log(followers);
})
```

##### Get all followings of a user
Please be careful when calling this method, if a user has more than 1000 followings, the request might be block by Behance.
```js
be.userAllFollowings(USER_ID, function(followings) {
	console.log(followers);
})
```

##### Get a user's statics
```js
be.userStats(USER_ID, function(data) {
	console.log(data);
})
```