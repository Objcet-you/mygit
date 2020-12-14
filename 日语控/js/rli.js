// console.log($('.r'))

var mydate = new Date()

var date = mydate.getDay()
var day =mydate.getDate()
console.log(date)
console.log(day)

$('.r').each(function(index,ele){
	var day_text= day-date
	$(this).text(day_text)
	date--
})
$('#zhou>div').each(function(index,ele){
	$('#zhou>div').removeClass('rli_xuanzhong')
	var temp_date = mydate.getDay()
	$(this).removeClass('rli_day')
	if(index==temp_date){
		$(this).addClass('rli_day')
		console.log('a')
		$(this).addClass('rli_xuanzhong')
	}
	
	$(this).click(function(){
		
		$('#zhou>div').removeClass('rli_xuanzhong')
		$(this).addClass('rli_xuanzhong')
		
		
	})
	
	
	
})