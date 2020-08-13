Requirements Checklist

The code is written in ES6 as much as possible

 True
create-react-app was used to create your React app

 True
There are 2 container components

 True
Container/Class components


There are 5 stateless components

 True
Stateless/Functional components


There are 3 routes

 True
Routes



react-router is being used with proper RESTful routing

 True
I am using react-router, react-router-dom and connected-react-router to handle all my routing.

Use Redux middleware to respond to and modify state change

 True
Using redux with redux-thunk middleware.

Make use of async actions and redux-thunk middleware to send data to and receive data from a server

 True
Using thunk to handle fetch data requests.

Use of Rails API backend to persist data for the application

 True
Users - persist to database
Uses fetch() within actions to GET and POST data from your API - do not use jQuery methods

 True
All requests to API are handled by fetch().

Good understanding of the react/redux state flow

 True
Action dispatched.
Redux store will pass the current state tree and the action to the reducer function it was given.
The root reducer can combine the output of multiple reducers into a single state tree. Useful for having separate reducers.
Redux store saves the complete state tree returned by the root reducer.
Your client-side application should handle the display of data with minimal data manipulation

 True
Client renders components from data fed from API, it doesn't mutate that data.

Good understanding of state and props in React

 True
Your application should have some minimal styling

 True
uUsed @material-ui/core and @material-ui/icons for styling, in addition to some CSS.

Knowledge of async JS with Promises

 True
A Promise in an object that, effectively promises that a result will be returned in the future. There is no telling when it will be returned, but it will execute the code provided in the case there is a successful result or a failure.

It allows developers to be able to respond to results being returned, whenever that may be. It allows the code to continue executing while awaiting the response.

The most common promise that developers encounter are promises returned from a Web API.

Basic Usage.

When a promise is created, it is considered pending. It will stay pending until it is returned.

When it is returned it is considered resolved.

Successful promises are considered fulfilled. They return a value that can be accessed by chaining a .then() block to the end of the promise chain. Each .then() will contain the previous promise's return value. .then() will let you execute code based on that value.
Unsuccessful promises are considered rejected It returns a reason, an error message explaining why the promise was rejected. These reasons can be accessed by chaining a .catch() block to the end of the promise chain. .catch() will let you execute code when a promise is rejected and can be based on the reason that is given.