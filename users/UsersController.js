const  express   = require("express");
const  routers  = express.Router();
const Users = require("./Users");
const Bcrypt = require('bcryptjs')

routers.get("/admin/users",( req,res) => {
    res.send("listagem de usuario");
});

routers.get("/admin/users/create",( req,res) => {
    res.render("admin/users/create");
});

routers.post("/user/create",(req,res) => {
    var email= req.body.email;
    var password = req.body.password;

    Users.findOne({ where: { username: email } }).then( user => {
        res.send({username});
        if(username == undefined){

            var salt = Bcrypt.genSaltSync(10);
            var hash = Bcrypt.hashSync(password,salt);
            
            Users.create({
                username: email,
                password: hash
            }).then(() => {
                res.redirect("/");
            }).catch((err) =>{
                res.redirect("/");
            } );
        
        }else{
            res.redirect("/admin/users/create");
        } 
    });
});    

module.exports = routers;