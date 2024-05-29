const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");
const orcamento = require("./database/Movimento");
const contas = require("./database/Contas");

const usersController =require("./users/UsersController");

const User = require("./users/Users");
//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Estou dizendo para o Express usar o EJS como View engine

app.set('view engine','ejs');

//session
app.use(session({
    secret:"5511015161691676786", cookie: {maxAge: 300000 }
}));
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rotas
app.use("/",usersController)


app.get("/session",(req,res) => {
    req.session.pti = "pti2402"
    res.send("Sessão gerada")
});

app.get("/leitura",(req,res) => {
    res.json( { pti: req.session.pti

    })
});

app.get("/",(req, res) => {
    res.render("admin/users/login");
})


app.listen(8080,()=>{console.log("App rodando!");})