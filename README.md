# Async Wrapper

This utility object helps you avoid the try and catch blocks inside async functions. With no dependencies

As a tip: You could use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to get a well named rejection / resolved data back.

## Problem Description

Normally you would write code similar to this using the **async/await** keywords

```javascript
async function singleAsyncFunctionCall() {
    try {
        const response = await axios.get("https://reqres.in/api/users/");
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
        const response1 = await axios.get("https://reqres.in/api/users/1");
        // Do something
        const response2 = await crypto.hash("password", 10);;
        // Do something else
        const { data } = await db.save({ any : object });
        // Do something else
    } catch (e) {
        // Maybe you will need t check the type of errors here like this:
        if (e.hasOwnProperty("response") && e.hasOwnProperty("data")) {
            // Catch the request error
        } else if (e.message.includes("hash")) {
            // Catch a hashing error
        } else if (e.hasOwnProperty("type") && e.type == "DB Error") {
            // Catch a database error
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
        const response = await axios.get("https://reqres.in/api/usersa/1");
        // Do something
    } catch (e) {
        // Catch the request error
    }
    
    try {
        const hashResult = await crypto.hash("password", 10);;
        // Do something else
    } catch (e) {
        // Catch a database error
    }
    
    try {
        const dbReponse = await db.save({ any : object });
        // Do something else
    } catch (e) {
        // Catch a database error
    }
}
```

## Solution / Examples

The async wrapper can help you clean up and reduce some of that code to improve readability

```javascript
const asyncWrapper = require("async-wrapper");

async function singleAsyncFunctionCall() {
    const { data , error } = await asyncWrapper.wrap(axios.get("https://reqres.in/api/users/"));
    if (error) {
        // Handle the error
    }
    // Do something
}
```

If you don't need one of the two objects you can just not use them

```javascript
async function singleAsyncFunctionCall() {
    // The error will be silenced
    const { data } = await asyncWrapper.wrap(axios.get("https://reqres.in/api/users/"));
    // Do something
}

// If you just care about the promise being rejected
async function singleAsyncFunctionCall() {
    const { error } = await asyncWrapper.wrap(axios.get("https://reqres.in/api/users/"));
    if (error) {
        // Handle the error
    }
}
```

You can use object destructuring to assign better names

```javascript
async function singleAsyncFunctionCall() {
    const { data : { data : userInfo } , error : errorFetghingUser } = await asyncWrapper.wrap(axios.get("https://reqres.in/api/users/"));
    if (errorFetghingUser) {
        // Handle the error
    }
    // Do something
    console.log(userInfo);
}
```

It really shines with multiple async calls. Your code is way more readable and organized

```javascript
async function multipleAsyncFunctionCalls() {  
    const { data : userResponse, error : errorFetchingUser } = await asyncWrapper.wrap(axios.get("https://reqres.in/api/usersa/1"));
    if (errorFetchingUser) {
        // Do something
    }
    const { data : hashedPassword, error : errorHashingPassword } = await asyncWrapper.wrap(crypto.hash("password", 10));
    if (errorHashingPassword) {
        // Do something
    }
    const { data : newObject, error : errorSavingObject } = await asyncWrapper.wrap(db.save({ any : object }));
    if (errorSavingObject) {
        // Do something
    }
}
```
