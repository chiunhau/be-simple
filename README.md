提供一套更適合懶人的 Behance API 介面懶人包。

## 使用方法
###初始化
```js
var Be = require('beSimple.js');
var be = new Be(YOUR_CLIENT_ID);
```
### 使用者相關
```
#### 取得使用者的基本資料
```js
be.user(USER_ID, function(data) {
	console.log(data);
})
```
#### 取得使用者的所有專案
```js
be.userProjects(USER_ID, function(data) {
	console.log(data);
})
```
#### 取得使用者的所有追蹤者（Followers）
請務必小心使用，如遇到 follower 超過 1000 的使用者，可能會使本 API 服務被 Behance 強制中斷。
```js
be.userAllFollowers(USER_ID, function(data) {
	console.log(data);
})
```
#### 取得使用者的社交統計資料
```js
be.userStats(USER_ID, function(data) {
	console.log(data);
})
```