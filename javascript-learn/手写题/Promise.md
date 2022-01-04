# Promise
## Promise.all()
```JavaScript
function PromiseAll(promises) {
	return new Promise((resolve, reject) => {
			if (!Array.isArray(promises)){
				throw 'the input must be an Array';
			}
			const results = [];
			promises.forEach(promise => {
				promise.then(value => {
					result[count++] = value;
					count === promises.length && resolve(results);
				}, err => {
					reject(err);
				});
			})
	})
}
```
## Promise.any()
```JavaScript
function PromiseAny(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			throw 'the input must be an Array';
		}
		promises.forEach(promise => {
			Promise.resolve(promise)
								.then(value => resolve(value))
								.catch(() => {});
		})
	})
}
```
## Promise.race()
```JavaScript
function PromiseRace(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			throw 'the input must be an Array';
		}
		promises.forEach(promise => {
			Promise.resolve(promise)
								.then(value => resolve(value))
								.catch(err => reject(err));
	})
}
```
## Promise.finally()
```JavaScript
Promise.prototype.myFinally = function(cb) {
	return this.then( function(value) {
        return Promise.resolve(cb()).then(function() { return value; });
	}, function(err) {
        return Promise.resolve(cb()).then(function() { throw err; });
	});
}
```