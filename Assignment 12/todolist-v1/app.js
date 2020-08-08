const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs') // imporatnt to be below the line above

const items =["Buy Food", "Cook Food", "Eat Food"];
const workItems =[];// when we crate a const array it is possible to push items into it byt can't assign it to a new array

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req,res){
    const day= date.getDate();
    res.render("list", {listTitle: day, newListItems : items})
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about", function(req,res){
    res.render("about")
})

app.post("/", function(req,res){
    const item = req.body.newItem;
   
    if(req.body.list ==="Work"){
        workItems.push(item)
        res.redirect("/work");
    
    }else{
        items.push(item)
        res.redirect("/");
    }
})

app.post("/work", function(req,res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function (){ 
    console.log("Server is running on port 3000")
});
