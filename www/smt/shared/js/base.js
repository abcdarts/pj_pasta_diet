// �ǂݍ��݌�A�h���X�o�[��\��
function doScroll() { if (window.pageYOffset === 0) { window.scrollTo(0,1); } }
window.onload = function() { setTimeout(doScroll, 100); }

// UA���� Android�U�蕪��
function is_mobile () {
  var useragents = [
    'Android',        // 1.5+ Android
    'dream',          // Pre 1.5 Android
    'CUPCAKE'        // 1.5+ Android
    ];
  var pattern = new RegExp(useragents.join('|'), 'i');
  return pattern.test(navigator.userAgent);
}
if (is_mobile()) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/smt/shared/css/android.css';
  document.getElementsByTagName('head')[0].appendChild(link);
}


$(function() {
	$('#list_tab li').flatHeights();
	
	//menu
	$('body').append('<div id="smt_menu_block"></div>');
	var elm = $('#menu #menu_elm').html();
	$('#smt_menu_block').html(elm);
	$('#menu').toggle(function(){
		$(this).find('#menu_title').html('����');
	},function(){
		$(this).find('#menu_title').html('���j���[');
	}).click(function(){
		$('span.tcon.tcon-menu--xcross', this).toggleClass('tcon-transform');
		$('#smt_menu_block').slideToggle();
	});
	$('#smt_menu_block li.accordion > span').click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('on');
	});
	
	//member recipe thumnail
	var max_w = $('#top #new_recipe .left_block').width();
	$('#top #ranking .left_block,#top #new_recipe .left_block').height(max_w);
	
	
	//�X�}�z���X�������̓���
	var timer = false;
	var currentHeight;
	var currentWidth;
	$(window).resize(function(){
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		
		// redraw the chart here will make IE8 fire resize event again
		if (currentHeight == undefined || currentHeight != windowHeight || currentWidth == undefined || currentWidth != windowWidth) {
			if (timer !== false) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				max_w = $('#top #new_recipe .left_block').width();
				$('#top #ranking .left_block,#top #new_recipe .left_block').height(max_w);
			}, 200);
			currentHeight = windowHeight;
			currentWidth = windowWidth;
		}
	});
});
