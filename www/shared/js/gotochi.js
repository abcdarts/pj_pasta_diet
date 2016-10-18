$(function(){
	$('#gotochi_map #pref_list li').each(function(){
		$(this).hover(function(){
			$('.outer_dl > dt', this).css({'width':'91px', 'padding-left':'63px', 'left':'-63px'});
			$(this).css('z-index','150');
			$('.outer_dl > dd', this).animate({ height: 'show' }, 100);
		}, function(){
			$('.outer_dl > dt', this).css({'width':'30px', 'padding-left':'0px', 'left':'0'});
			$(this).css('z-index','1');
			$('.outer_dl > dd', this).hide();
		});
	});
	
	//fancybox 実行
    $("#pref_list li dd.outer_dd").each(function(){
		var h4_alt = $("h4 img", this).attr("alt");
		var page_num = $("a", this).length;
		$(".inner_dl dd", this).each(function(){
			var pre_name = $(this).parent().find('dt img').attr("alt");
			if(pre_name) {
				pre_name += '　';
			} else {
				pre_name = '';
			}
			var ing_name = $("img", this).attr("alt");
		   	$("a", this).fancybox({
				'width'				: 660,
				'height'			: 300,
		        'autoScale'			: false,
		        'autoDimensions'	: false,
				//'type'				: 'iframe',
		        'transitionIn'		: 'none',
		        'transitionOut'		: 'none',
		        'changeSpeed'		: 0,
		        'titlePosition'		: 'gotochi',
				'easingIn'			: 'none',
				'easingOut'			: 'none',
		        'overlayOpacity'	: 0.7,
		        'overlayColor'		: '#000',
		        'hideOnContentClick': false,
				'speedIn' 			: 0,
				'speedOut'			: 0,
				'changeSpeed'		: 0,
				'changeFade'		: 0,
		        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts, imgPreloader) {
		            var page_index = '<span>' + (currentIndex + 1) + '/' + page_num + '</span>';
		            if ( page_index == '<span>1/1</span>' ) page_index = '';
		            var title = '<div class="fb_title">' + h4_alt + '　' + pre_name + '「' + ing_name + '」' + page_index + '</div>';
		            return title;
		        }
			});
		});
    });
    
	//class 追加
	$('#gotochi #recipe_steps ol li:odd').addClass('even');
	$('#gotochi #recipe_steps ol li').each(function(){
		var index =$(this).index() + 1;
		if ( index < 10 ) index = '0' + index;
		$(this).addClass('step_' + index);
	});
	$("a.top").click(function(){
		this.target = "_top";
	});
	
	/*if(jQuery.browser.msie) {
		$('#popup_body a').click(function(e){
			var detail_url = $(this).attr('href');
			//location.href = detail_url;
			window.open(detail_url, '_top');
			return false;
		});
	}*/
	
	//default.js 代替
	$('#gotochi_map a img.swap').each(function(){
		$(this).hover(function(){
			$(this).attr('src', $(this).attr('src').replace(/^(.+)_off(\.[a-z]+)$/, '$1_on$2'));
		}, function(){
			$(this).attr('src', $(this).attr('src').replace(/^(.+)_on(\.[a-z]+)$/, '$1_off$2'));
		}).each(function(){
			$(this).click(function(){
				$(this).attr('src', $(this).attr('src').replace(/^(.+)_on(\.[a-z]+)$/, '$1_off$2'));
			});
			$('<img>').attr('src', $(this).attr('src').replace(/^(.+)_off(\.[a-z]+)$/, '$1_on$2'));
		});
	});
});


if (typeof IEPNGFIX == 'undefined') {
//--============================================================================

var IEPNGFIX = {
    blank:  'http://www.isella.com/aod2/images/blank.gif',
    filter: 'DXImageTransform.Microsoft.AlphaImageLoader',

    fixit: function (elem, src, method) {
        if (elem.filters[this.filter]) {
            var filter = elem.filters[this.filter];
            filter.enabled = true;
            filter.src = src;
            filter.sizingMethod = method;
        }
        else {
            elem.style.filter = 'progid:' + this.filter +
                '(src="' + src + '",sizingMethod="' + method + '")';
        }
    },

    fixwidth: function(elem) {
        if (elem.currentStyle.width == 'auto' &&
            elem.currentStyle.height == 'auto') {
            elem.style.width = elem.offsetWidth + 'px';
        }
    },

    fixchild: function(elem, recursive) {
        if (!/MSIE (5\.5|6\.|7\.)/.test(navigator.userAgent)) return;

        for (var i = 0, n = elem.childNodes.length; i < n; i++) {
            var childNode = elem.childNodes[i];
            if (childNode.style) {
                if (childNode.style.position) {
                    childNode.style.position = childNode.style.position;
                }
                else {
                    childNode.style.position = 'relative';
                }
            }
            if (recursive && childNode.hasChildNodes()) {
                this.fixchild(childNode, recursive);
            }
        }
    },

    fix: function(elem) {
        if (!/MSIE (5\.5|6\.|7\.)/.test(navigator.userAgent)) return;

        var bgImg =
            elem.currentStyle.backgroundImage || elem.style.backgroundImage;

        if (elem.tagName == 'IMG') {
            if ((/\.png$/i).test(elem.src)) {
                this.fixwidth(elem);
                this.fixit(elem, elem.src, 'scale');
                elem.src = this.blank;
                elem.runtimeStyle.behavior = "none";
            }
        }
        else if (bgImg && bgImg != 'none') {
            if (bgImg.match(/^url[("']+(.*\.png)[)"']+$/i)) {
                var s = RegExp.$1;
                this.fixwidth(elem);
                elem.style.backgroundImage = 'none';
                this.fixit(elem, s, 'scale'); // crop | image | scale
                this.fixchild(elem);
                elem.runtimeStyle.behavior = "none";
            }
        }
    }
};

//--============================================================================
} // end if (typeof IEPNGFIX == 'undefined')
