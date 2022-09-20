'use strict';
const Hapi = require('hapi');
const server = Hapi.server({
port :3000,
host: 'localhost'
});
const mongoose = require(‘mongoose’);
mongoose.connect(‘URL’, () => {
   console.log(‘Connected to Mongo DB Successfully!!’);
})
const init = async () => {
await server.start();
fetch('https://jsonplaceholder.typicode.com/posts/comments' , { 
method : 'GET',
.then(res => { 
   if(res.ok) { console.log("GET request")}
   else { console.log("GET not success")}
return res
});
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))
       
  
fetch('https://jsonplaceholder.typicode.com/posts/comments' , {
method : 'POST'
PATH : './comments/{ID}',
   headers: {
'Content-type' : 'application/json'
},
body : JSON.stringfy(
      {
      "name": "john",
      "email": "john@doe.com",
      "body": "example body"
      }
}
})
 .then((res) => console.log(res))
