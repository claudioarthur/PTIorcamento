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

//criação de usuario
routers.post("/user/create",(req,res) => {
    var email= req.body.email;
    var password = req.body.password;
    
    Users.findOne({ where: { email: email } }).then( user => {
        var salt = Bcrypt.genSaltSync(10);
        var cript = Bcrypt.hashSync(password,salt);
            Users.create({
                email: email,
                password: cript
            }).then(() => {
                 res.render("movimento");
            }).catch((err) =>{
                res.redirect("/");
            } );
        //}else{ // Não encontrada
        //    console.log("acesso indevido");
        //    res.redirect("/");
        //}
         
    });
})

//autenticação de usuario
routers.get("/login",( req, res ) =>{
    res.render("admin/users/login");
})

routers.post("/autenticate",(req,res) => {
    var email= req.body.email;
    var password = req.body.password;
    
    Users.findOne({ where: { email: email } }).then( user => {
         if( user != undefined ){

            var correct = Bcrypt.compareSync(password,user.password);

            if( correct ){
                req.session.user = {
                   id: user.id,
                   email: user.email 
                   
                }
                res.render("movimento");
            }else{
                res.redirect("/")    
            }
        
        }else{
            res.redirect("/")
         }           
         
    });
    
    
});    

module.exports = routers;