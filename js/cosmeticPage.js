$(document).ready(function() {
	
// 绑定回到顶部按钮的点击事件
$('#returnTop').click(function(){
	$('body').add('html').animate({scrollTop:'0'},"slow");
})


/*intro js*/
$('.product .galleryWrap').hover(function() {
	$(this).find('img').css({'transform':'scale(1.4)'});
	$(this).find('.captionWrap h3').animate({fontSize: '1.8rem'}, "30");
	$(this).find('.captionWrap a').animate({fontSize: '1.2rem'}, "30");
	$(this).children('.popDiv').fadeIn('fast');
	$(this).find('.captionIcon .leftIcon').animate({top:'0px'},"400");
	$(this).find('.captionIcon .rightIcon').animate({top:'0px'},"slow");
}, function() {
	$(this).find('img').css({'transform':'scale(1)'});
	$(this).find('.captionWrap h3').animate({fontSize: '2.8rem'}, "30");
	$(this).find('.captionWrap a').animate({fontSize: '2.2rem'}, "30");
	$(this).children('.popDiv').fadeOut('fast');
	$(this).find('.captionIcon .leftIcon').animate({top:'80px'},"400");
	$(this).find('.captionIcon .rightIcon').animate({top:'80px'},"slow");
});


/*news js*/
$('.newsBottomWrap .readMore a').hover(function() {
	$(this).css('background','#edb542');
	$(this).parents('.newsCon').prev('.newsImgBox').children('.popBox').fadeIn('fast');
},function(){
	$(this).css('background','#ddd');
	$(this).parents('.newsCon').prev('.newsImgBox').children('.popBox').fadeOut('fast');
});

$('.newsImgBox').hover(function(){
	$(this).next('.newsCon').find('.readMore a').css('background','#edb542');
	$(this).children('.popBox').fadeIn('fast');
},function(){
	$(this).next('.newsCon').find('.readMore a').css('background','#ddd');
	$(this).children('.popBox').fadeOut('fast');
});


/*intro js*/
$('.introConWrap span').hover(function(){
	$(this).css('color','#edb542');
	$(this).next('.introCon').children('h4').css('color','#edb542');
},function(){
	$(this).css('color','#333');	
	$(this).next('.introCon').children('h4').css('color','#333');
});

$('.introCon h4').hover(function(){
	$(this).css('color','#edb542');
	$(this).parent('.introCon').prev('span').css('color','#edb542');
},function(){
	$(this).css('color','#333');
	$(this).parent('.introCon').prev('span').css('color','#333');
})







});