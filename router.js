const express = require("express");
var app = express();
const myrouter=express.Router();
app.use(express.json())
const axios = require('axios');
myrouter.get('/users/:login', async(req, res) => {
        try{
            const resp = await axios.get(`https://api.github.com/users/${req.params.login}`);
            var data1 = resp.data;
            res.send(data1)
        } catch(err){
          res.status(404)
          res.send({"message":"name not found"});
          return ;
        }
})

module.exports=myrouter