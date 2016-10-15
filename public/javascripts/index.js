$('#content').load('data?type=1');

$('.navBtn').click(function (){
//	console.log($(this).data('type'));
	$('#content').load('data?type=' + $(this).data('type'));
});
