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
server.route({
methid : 'GET',
path :'
handler (‘'https://jsonplaceholder.typicode.com/posts/comments',’, (request, response) => {
      const user = new User({
         title : request.title,
         body : request.body,
         comments : request.comments,
       
      });
server.route({
methid : 'POST',
path :'
handler (‘'https://jsonplaceholder.typicode.com/posts/comments',’, (request, response) => {
      const user = new User({
         title : request.title,
         body : request.body,
         comments : request.comments,
      });
