
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

//__dirname : It will resolve to your project folder.
router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html')); 
}); 

router.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/form.html'));
  });

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

//add the router 
app.use('/', router);
app.listen(3007);
console.log('Your Node Server is listening on port 3007'); 
/*
app.listen(app.get('port'),  err => {
    if (err) {
        return console.error(err);
    }
    return console.log('Your Node Server is listening on '+app.get('port')); 
});
*/