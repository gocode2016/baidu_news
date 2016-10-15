var express = require('express');
var router = express.Router();

var config = require('../config');
var mysql = require('mysql');
var curd = require('../CURD');

//选项卡切换
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var conn = mysql.createConnection(config);
  switch(req.query.type){
    case '1':
      curd.sel(conn, res, 1, showEkhibition);
      // res.send('This is tag 1' + JSON.stringify(config));
      // console.log('This is tag 1' + config);
      break;
    case '2':
      curd.sel(conn, res, 2, showEkhibition);
      // res.send('This is tag 2');
      // res.end();
      break;
    case '3':
      curd.sel(conn, res, 3, showEkhibition);
      // res.send('This is tag 3');
      // res.end();
      break;
  }
  conn.end();
  // res.end();
});

//数据库增删改查
router.get('/:ation', function(req, res){
  var conn = mysql.createConnection(config);
  switch(req.params.ation){
    case 'show':
      curd.sel(conn, res, 0, showRow);
      break;
    case 'delete':
      // console.log(req.query.id);
      curd.del(conn, res, req.query.id, function(res, result){
          // res.end("<script>location.reload(false);</script>");
        });
        curd.sel(conn, res, 0, showRow);
        // console.log(JSON.stringify(result));
      // curd.sel(conn, res, 1, showRow);
      // res.end();
      break;
    case 'insert':
      // console.log(req.query.title);
      curd.ins(conn, res, req.query.title,req.query.date, req.query.image, req.query.type, function(res, result){
          // res.end("<script>location.reload(false);</script>");
        });
        curd.sel(conn, res, 0, showRow);
      break;
    case 'updata':
      curd.upd(conn, res, req.query.id, req.query.title, req.query.date, req.query.image, req.query.type, function(res, result){
          // res.end("<script>location.reload(false);</script>");
        });
        curd.sel(conn, res, 0, showRow);
      break;
  }
  conn.end();
  // console.log('ation');
});

function showEkhibition(res, result){
  // Date.prototype.toDateString = String.toDateString;
  var html = "";
  // var i = 0;
  for(i in result){
    html += "<div class='content-item'>";
		html += "<img src=images/" + result[i].image + ">";
		html +=	"<div class='title'>";
		html +=		"<div class='title-text'>" + unescape(result[i].title) + "</div>";
		html +=		"<time>" + new Date((result[i].date + '').slice(0,16)).format("yyyy-MM-dd") + "</time>";
		html +=	"</div>";
		html += "</div>";
  }
  // return html;
  res.end(html);
  // console.log(result);
  // console.log(result[i].id);
  // res.end();
  // next();
}

function showRow(res, result){
  var html = "";
  for(i in result){
    html += "<tr class='t" + result[i].id +"'>";
            
    html += "<td>"+ result[i].id +"</td>";
    html += "<td>"+ unescape(result[i].title) +"</td>";
    html += "<td>"+ new Date((result[i].date + '').slice(0,16)).format("yyyy-MM-dd") +"</td>";
    html += "<td>"+ result[i].image +"</td>";
    html += "<td>"+ result[i].type +"</td>";
            
    html += "<td><button class='btn btn btn-success' data-action='modify' onclick=\"modifyRow('"+ result[i].id +"','"
    + result[i].title +"','"+ new Date((result[i].date + '').slice(0,16)).format("yyyy-MM-dd") 
    +"','"+ result[i].image +"','"+ result[i].type +"');\">修改</button></td>";
    html += '<td><button class="deleteBtn btn btn-danger" onclick="deleteRow('+ result[i].id +');" >删除</button></td>';
    html += "</tr>";
    
  }
  // console.log(result[i].id);
  res.end(html);
  // res.end();
}

Date.prototype.format = function(fmt) { //author: meizz     
    if (this == "Invalid Date") {  
        return "";  
    }  
    var o = {  
        "M+" : this.getMonth() + 1, //月份     
        "d+" : this.getDate(), //日     
        "H+" : this.getHours(), //小时     
        "m+" : this.getMinutes(), //分     
        "s+" : this.getSeconds(), //秒     
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度     
        "S" : this.getMilliseconds()  
    //毫秒     
    };  
    if (/(y+)/.test(fmt))  
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")  
                .substr(4 - RegExp.$1.length));  
    for ( var k in o)  
        if (new RegExp("(" + k + ")").test(fmt))  
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])  
                    : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}

module.exports = router;
