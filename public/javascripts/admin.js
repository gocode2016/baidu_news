$('#conTbody').load('../data/show');

$(function() {
    showShow();
    window.onresize = function() {
        showShow();
    }
});

var showShow = function() {
    if (document.body.clientWidth < 992) {
        $('.collapse').collapse('hide');
    } else {
        $('.collapse').collapse('show');
    }
}

function deleteRow(row){
	$('#conTbody').load('../data/delete?id=' + row);	
}

var t = null;

var c = null;

function modifyRow(tid,ttitle,tdate,timage,ttype){
//	$(this).parent();
//	$('.t'+ row + ' .form-control').removeAttr("disabled");
	
	
	if(t){
//		console.log(t,c);
		$('.t'+ t).replaceWith(c);
		
	}
	
	t = tid;
	c = '<tr class=t'+ tid +'>'+ $('.t'+ tid).html() +'</tr>';
	
	
	//	console.log($('.t'+ tid).html());
	
	var nid = "<td>"+ tid +"</td>";
	
    var ntitle = '<td><input id="updata-title" value="'+ ttitle + '"type="text" class="insert-title form-control" placeholder="Input title" required=""/></td>';
	var ndate = '<td><input id="updata-date" value="'+ tdate + '"type="date" class="insert-date form-control" required=""/></td>';
	var nimage = '<td><select id="updata-image" class="form-control insert-image" required=""><option>1.JPEG</option><option>2.JPG</option><option>3.JPEG</option><option>4.JPEG</option><option>5.JPEG</option><option>6.JPEG</option></select></td>';
	var ntype = '<td><select id="updata-type" class="form-control insert-image" required=""><option>推荐</option><option>百家</option><option>本地</option></select></td>';
	
	var nbutton1 = '<td><button onclick="ok('+ tid +')" class="btn btn-primary">确定</button></td>';
	var nbutton2 = '<td><button onclick="cancel()" class="btn">取消</button></td>';
	
	$('.t'+ tid).replaceWith('<tr class=t'+ tid +'>'+ nid + ntitle + ndate + nimage + ntype + nbutton1 + nbutton2 + '</tr>');
	
	console.log(tid,ttitle,tdate,timage,ttype);
	
}

function ok(id){
	switch(''){
		case $('#updata-title').val() :
		case $('#updata-date').val() :
		case $('#updata-image').val() :
		case $('#updata-type').val() :
			alert('数据不能为空');
			break;
		default:
//			console.log("" + id + $('#updata-title').val() + $('#updata-date').val()+$('#updata-image').val()+$('#updata-type').val());
			$('#conTbody').load('../data/updata?'
			+ 'id=' + id
			+ '&title=' + r($('#updata-title').val())
			+ '&date=' + $('#updata-date').val() 
			+ '&image=' + $('#updata-image').val()
			+ '&type=' + $('#updata-type').val());
	}
}

function cancel(){
	$('.t'+ t).replaceWith(c);
	t = null;
	c = null;
}

$('#insertBtn').click(function(){
	switch(''){
		case $('#insert-title').val() :
		case $('#insert-date').val() :
		case $('#insert-image').val() :
		case $('#insert-type').val() :
			alert('数据不能为空');
			break;
		default:
			$('#conTbody').load('../data/insert?' 
			+ 'title=' + r($('#insert-title').val())
			+ '&date=' + $('#insert-date').val() 
			+ '&image=' + $('#insert-image').val()
			+ '&type=' + $('#insert-type').val());
	}
});
/* 
$('#testBtn').click(function(){
//	console.log('oooooooooook');
		$('#insert-title').val('abbdfasd');
//		);
//	console.log(
		$('#insert-date').val('2016-09-08');
//		);
//	console.log(
		$('#insert-image').val('6.JPEG');
//		);
//	console.log(
		$('#insert-type').val('本地');
//		);
}); */

function r(str){
  var s = "";   
  if (str.length == 0) return "";   
  s = str.replace(/&/g, "&gt;");   
  s = s.replace(/</g, "&lt;");   
  s = s.replace(/>/g, "&gt;");   
  s = s.replace(/ /g, "&nbsp;");   
  s = s.replace(/\'/g, "&#39;");   
  s = s.replace(/\"/g, "&quot;");   
  s = s.replace(/\n/g, "<br>");   
  return escape(s); 
}


