var fs = require("fs");
var util = require('util');

module.exports = (app) => {
  var userFileData = fs.readFileSync("./server/users.json");
  var users = JSON.parse(userFileData);

   app.post('/api/auth/login', (req,res)=>{
    
    users.map(u => console.log(u.Username));

    if (req.body.username && req.body.password){
      const filtered = users.filter(
        function(user){
          return (user.Username===req.body.username) 
          && (user.Password===req.body.password);
        });
      if (filtered.length>0)
        res.status(200).send(JSON.stringify({data:{msg:"LOGIN SUCCESSFUL"},meta:{token:"abcd1234",expires:"2020-01-01"}}));
      else
        res.status(401).send("ACCESS DENIED: Incorrect username or password.");
    }
    else
      res.status(401).send("ACCESS DENIED: Username or password was missing.");
   });
};