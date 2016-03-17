## Usage
### Initialize
```js
var Be = require('behance.js');
var be = new Be(YOUR_CLIENT_ID);
```
### Get a user's information
```js
be.user(USER_ID, function(data) {
	console.log(data);
})
```