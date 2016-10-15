$(function(){
  $('#back-login').submit(
    function(event){
      
      event.preventDefault();
      
      var user,pass;
      
      if( !$("#user").val() ){
        alert("用户名不能为空!");
        return false; // 返回值为false，将阻止表单提交
        
      }else if( !$("#pass").val() ){
        alert("密码不能为空!");
        return false; // 返回值为false，将阻止表单提交
        
      }else{
        user = $("#user").val();
        pass = $("#pass").val();
        // alert(user + " " + pass);
        $("body").load(
          "../login",
          {'user':user,'password':pass}
          // ,
          // function(responseTxt,statusTxt,xhr){
            
          // }
        );
        
      }
      
    }
  );
});