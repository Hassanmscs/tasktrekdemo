const express = require("express");
const app = express();
const { pool } = require("./dbConfig");

const PORT = process.env.PORT || 4000;

// Parses details from a form

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/users/register",(req, res) => {
    res.render("register.ejs");
  });

  app.get("/users/login",(req, res) => {
    res.render("login.ejs");
  });
app.get("/users/dashboard",(req, res) => {
  res.render("dashboard.ejs",{ user:'Hassan' });
});


app.post("/users/register",(req, res) => {
    let { name, email, password, password2 } = req.body;

    // console.log({
    //   name,
    //   email,
    //   password,
    //   password2
    // });
    console.log(name, email, password,password2);



    // let errors = [];

    // if (!name || !email || !password || !password2) {
    //     errors.push({ message: "Please enter all fields" });
    //   }
    
    //   if (password.length < 6) {
    //     errors.push({ message: "Password must be a least 6 characters long" });
    //   }
    
    //   if (password !== password2) {
    //     errors.push({ message: "Passwords do not match" });
    //   }
    
    //   if (errors.length > 0) {
    //     res.render("register", { errors });
    //   } 
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
