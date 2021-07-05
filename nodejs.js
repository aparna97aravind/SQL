const express = require("express");
const sql = require("mysql2");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

//Creating a connection to DB with the user as user@localhost.
const connection = sql.createConnection({
  host: "localhost",
  user: "user",
  password: "userdb#20",
  database: "ecommerce",
});

//Establishing connection.
connection.connect(function (error) {
  if (error) throw error;
  console.log("You are now connected to the Database-Ecommerce");
});
//let n = new Array;
// const getCustomerFn  =
app.get("/", (req, res) => {
  connection.query("SELECT * FROM Customer", (err, output) => {
    if (err) throw err;
    //console.log("THE DATA IS : ", output);
    //console.log("res", res);
    res.render('index',{ custname : output});
  });
});

app.listen(8080, (req, res) => console.log("Listening to the port 8080"));
