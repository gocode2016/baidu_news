
// SQL insert
function doInsert(conn, res, title, date, image, type, handler) {
  // html_encode(title);
  conn.query("INSERT INTO new_data (title, date, image, type) VALUES ('"
      + title + "', '"
      + date + "', '"
      + image + "', '"
      + type + "')", 
      function(err, rs, fields){handler(res, rs); }
  );
  
  // console.log('Hello a!');
}

// SQL updata
function doUpdata(conn, res, id, title, date, image, type, handler) {
  if(/^\d*$/.test(id+"")){
    // html_encode(title);
    conn.query("UPDATE new_data SET "
          + "title = '" + title 
          + "',date = '" + date 
          + "',image = '"+ image
          + "',type = '" + type 
          + "' WHERE id = '" + id + "'", 
        function(err, rs, fields){handler(res, rs); }
    );
  }
  
  // console.log('Hello b!');
}

// ---SQL select---
function doSelect(conn, res, type, handler){
  var t = "";
  
  var toName = function (element) {
    switch(element){
      case 1:
        return "'推荐'";
      case 2:
        return "'百家'";
      case 3:
        return "'本地'";
    }
  }
  
  if(type) t = " WHERE type =" + toName(type);
  
  conn.query('SELECT * FROM new_data ' + t, function(err, rs, fields){
    handler(res, rs);
    // console.log(JSON.stringify(rs));
    
  });
  
  // console.log('Hello c!' + t);
}

// ---SQL delete---
function doDelete(conn, res, id, handler){
  if(/^\d*$/.test(id+'')){
    
    conn.query('DELETE FROM new_data WHERE id="' + id + '"', function(err, irs, fields){
        handler(res, irs);
    });
    
  }
  
}

function checkPassword(conn, res, name, pass, handler){
  conn.query('SELECT * FROM user WHERE name="' + name 
    + '" and password="' + pass + '"', function(err, rs, fields){
      handler(res, rs);
      
    });
}


exports.ins = doInsert;
exports.upd = doUpdata;
exports.sel = doSelect;
exports.del = doDelete;
exports.checkPass = checkPassword;