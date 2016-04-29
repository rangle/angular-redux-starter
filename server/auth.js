var fs = require("fs");
var util = require('util');

module.exports = (app) => {
  console.log("am i loading?");

   app.post('/api/auth/login', (req,res)=>{
    console.log("am i here?");

    //console.log("The request: \n"+ JSON.stringify(req));
    //console.log(util.inspect(req, {showHidden: false, depth: 1}));

    console.log(req.method);
    console.log(req.params);
    console.log(req.body);
    //console.log(req.rawBody);

    // # alternative shortcut
    //console.log(util.inspect(req, false, null));


    // req.map(key=> console.log("Key:\n"+key+"Val:\n"+req[key]));
    
    console.log("\n *START* \n");
    var contents = fs.readFileSync("./server/users.json");
    console.log("Output Content : \n"+ contents);
    var jsonContent = JSON.parse(contents);

    console.log(util.inspect(jsonContent, {showHidden: false, depth: null}));

    console.log("Parsed json: \n"+ jsonContent);
    console.log("\n *EXIT* \n");

    jsonContent.map(u => console.log(u.Username));



    if (req.body.username && req.body.password){
      const filtered = jsonContent.filter(
        function(user){
          return (user.Username===req.body.username) 
          && (user.Password===req.body.password);
        });
      console.log("filtered:\n"+filtered);
      if (filtered.length>0)
        res.status(200).send(JSON.stringify({data:{msg:"LOGIN SUCCESSFUL"},meta:{token:"abcd1234",expires:"2020-01-01"}}));
      else
        res.status(401).send("You are not a real boy");
    }
    else
      res.status(401).send("WHY YUO NO SEND USERNAME?!");

    


   });
};