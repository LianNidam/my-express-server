//jshint esversion:6

const express= require("express");

const app= express();

app.get("/", function(request, response){
  response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(request, response){
  response.send("<h1>Hi, you can contact me at Liannidam04@gmail.com </h1>");
});

app.get("/about", function(request, response){
  response.send("<h1>Hi, I am Lian Nidam' 26 years old :) </h1>");
});

app.get("/hobbies", function(request, response){
  response.send("<h1>love the gym, shopping and sleep. </h1>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
