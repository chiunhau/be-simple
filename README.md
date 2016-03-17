## Usage
### Initialize
```
var Be = require('behance.js');
var be = new Be(YOUR_CLIENT_ID);
```
### Get a user's information
```
be.user(USER_ID, function(data) {
	console.log(data);
})
```