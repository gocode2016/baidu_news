var express = require('express');
var router = express.Router();

var config = require('../config');
var mysql = require('mysql');
var curd = require('../CURD');

router.post('/', function(req, res, next){
  var conn = mysql.createConnection(config);
  
  // res.send(req.body.user + " " + req.body.password);
  // res.end();
  if(!req.body.user){
    res.end("<script type='text/javascript'>alert('用户名不能为空!');</script>");
  }else if(!req.body.password){
    res.end("<script type='text/javascript'>alert('密码不能为空!');</script>");
  }else{
    // console.log('in.....');
    curd.checkPass(conn, res, req.body.user, req.body.password, function(res,rs){
      if(1 == rs.length){
        // var url = "../html/admin.html";
				// res.end("<script type='text/javascript'>"
					// + "window.location.href='" + url + "';"
					// + "</script>");
          // res.end('yes');
          res.render('admin-v');
          
      }else {
        res.render('login-v');
        // res.end("<script type='text/javascript'>"
					// + "history.back();"
					// + "alert('用户名 或 密码 有误');"
					// + "</script>");
      }
      // res.end(JSON.stringify(rs));
      // console.log(req.body.user + " " + req.body.password + " " +rs);
    });
  }
  
  
  // conn.end();
});


module.exports = router;