window.onload = function() {
	// $('#kongjian>img').css({'marginLeft':'+=0.05rem'})
	$('#kongjian').append('<span>')
	$('#kongjian').css({
		'marginTop':'-0.2rem',
		'width':'7.5rem',
		'marginLeft':'0',
		height:'0.7rem'
	})
	$('#kongjian>img').css({
		
		'width':'7rem',
	})
	$('#kongjian>span').css({
		'position': 'absolute',
		fontSize: '0.3rem',
		color: '#000',
		'top': '0',
		'left': 0,
		'fontFamily': 'pingfangMe',
		'fontWeight': 'bold',
		'marginLeft':'0.6rem',
		marginTop:'0.24rem'
	})
	run()
	setInterval(function(){
		run()
	},10000)
}
function run(){
	var mydate = new Date()
	
	var hours= mydate.getHours()
	var min = mydate.getMinutes()
	if(hours<10){
		hours='0'+hours
	}
	if(min<10){
		min='0'+min
	}
	
	$('#kongjian>span').text(`${hours}:${min}`)
}
window.onscroll=function(){
	
	if(document.documentElement.scrollTop>30){
		
		var n =document.documentElement.scrollTop/30-1
		if(n>0.8){n=0.8}
		
		$('#kongjian').css({'backgroundColor':`rgba(255,255,255,${n}`})
	}
	if(document.documentElement.scrollTop<30){
		$('#kongjian').css({'backgroundColor':'rgba(255,255,255,0)'})
	}
}
