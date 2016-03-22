提供一套更適合懶人的 Behance API 介面懶人包。

### Initialize
First, you need to register your application at [Behance Dev](https://www.behance.net/dev/register), and store the client_id.

##### Installation
With [NPM](https://www.npmjs.com/package/be-simple):
```sh
$ npm install be-simple --save
```
```js
var Be = require('be-simple');
var be = new Be(YOUR_CLIENT_ID);
//done!
```
Or another simple way:
```html
<html>
<head>
	<script src="/dist/be-simple.js"></script>
	<script>
		var be = new Be(YOUR_CLIENT_ID);
		// done!
	</script>
</head>
</html>
```
### Methods
#### User Methods

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
Please be careful when calling this method.
```js
be.userAllFollowers(USER_ID, function(followers) {
	console.log(followers);
})
```

##### Get all followings of a user
Please be careful when calling this method.
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

### Next Step
- Add project related methods
- Remove jQuery dependency 