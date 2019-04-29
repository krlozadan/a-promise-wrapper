# A Promise Wrapper

This utility object helps you avoid the try and catch blocks inside async functions. With no dependencies

As a tip: You could use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to get a well named rejection / resolved data back.

### Index

- [Problem description](#problem-description)
- [Installation and usage](#installation-and-usage)
- [Examples](#examples)

## Problem description

Normally you would write code similar to this using the **async/await** keywords

```javascript
async function singleAsyncFunctionCall() {
    try {
        const response = await request.get("https://reqres.in/api/users/");
        // Do something
    } catch (e) {
        // React to the error
    }
}
```

If the function required to perform multiple async functions. Not that this would be a good practice because you might want to separate them into different functions, but you could end up having something like this:

```javascript
async function multipleAsyncFunctionCalls() {
    try {
        const response = await request.get("https://reqres.in/api/users/");
        // Do something
        const hashedPassword = await crypto.hash("password", 10);
        // Do something else
        const dbResponse = await db.save({ any : object });
        // Do something else
    } catch (e) {
        // You might need to check error properties to know what happened
        if (e.hasOwnProperty("response") && e.hasOwnProperty("data")) {
            // Catch request error
        } else if (e.message.includes("hash")) {
            // Catch hashing error
        } else if (e.hasOwnProperty("type") && e.type == "DB Error") {
            // Catch database error
        } else {
            // Uknown error
        }
    }
}
```

Or like this:

```javascript
async function multipleAsyncFunctionCalls() {  
    try {
        const response = await request.get("https://reqres.in/api/users/");
        // Do something
    } catch (e) {
        // Catch the request error
    }
    
    try {
        const hashedPassword = await crypto.hash("password", 10);
        // Do something
    } catch (e) {
        // Catch hashing error
    }
    
    try {
        const dbReponse = await db.save({ any : object });
        // Do something
    } catch (e) {
        // Catch database error
    }
}
```
## Installation and usage

Install with npm

```shell
$ npm install a-promise-wrapper --save
```
Require it where you need to use it

```javascript
const promiseWrapper = require("a-promise-wrapper");
```
The Promise Wrapper can help you clean up and reduce some of that code to improve readability. 

Call the function passing in a function that returns a Promise. 

The Promise Wrapper must be used **inside a function that uses the async / await** keywords

```javascript
const promiseWrapper = require("a-promise-wrapper");

async function singleAsyncFunctionCall() {
    const { data , error } = await promiseWrapper(request.get("https://reqres.in/api/users/"));
    if (error) {
        // Handle the error
    }
    // Do something
}
```

The return value if resolved will be:

```javascript
{
    data,  // This holds the resolved value of the original promise
    error : null
}
```

The return value if rejected will be:

```javascript
{
    data : null,  
    error // This holds the rejected value of the original promise
}
```

## Examples

If you don't need one of the two objects you can just not use them

```javascript
async function singleAsyncFunctionCall() {
    // The error will be silenced
    const { data } = await promiseWrapper(axios.get("https://reqres.in/api/users/"));
    // Do something
}

// If you just care about the promise being rejected
async function singleAsyncFunctionCall() {
    const { error } = await promiseWrapper(axios.get("https://reqres.in/api/users/"));
    if (error) {
        // Handle the error
    }
}
```

You can use object destructuring to assign better names

```javascript
async function singleAsyncFunctionCall() {
    const { data : { data : userInfo } , error : errorFetghingUser } = await promiseWrapper(axios.get("https://reqres.in/api/users/"));
    if (errorFetghingUser) {
        // Handle the error
    }
    // Do something
    console.log(userInfo);
}
```

It really shines with multiple async calls. Your code is way more readable

```javascript
async function multipleAsyncFunctionCalls() {  
    const { data : userResponse, error : errorFetchingUser } = await promiseWrapper(request.get("https://reqres.in/api/users"));
    if (errorFetchingUser) {
        // Do something
    }
    const { data : hashedPassword, error : errorHashingPassword } = await promiseWrapper(crypto.hash("password", 10));
    if (errorHashingPassword) {
        // Do something
    }
    const { data : newObject, error : errorSavingObject } = await promiseWrapper(db.save({ any : object }));
    if (errorSavingObject) {
        // Do something
    }
}
```