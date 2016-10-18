function initGnavi() {
    var gnavi = $('#header > ul.nav > li');
    gnavi.each(function() {
        var gnavi_cls = $(this).attr('class').replace(/^(.+) .+$/, '$1');
        var gnavi_img = $(this).find('a > img');
        if ($('body').hasClass(gnavi_cls)) {
            gnavi_img.attr('src', gnavi_img.attr('src').replace(/^(.+)_off\.([a-z]+)$/, '$1.$2'));
        } else {
            gnavi_img.hover(
                function() {
                    $(this).attr('src', $(this).attr('src').replace(/^(.+)_off\.([a-z]+)$/, '$1_on.$2'));
                },
                function() {
                    $(this).attr('src', $(this).attr('src').replace(/^(.+)_on\.([a-z]+)$/, '$1_off.$2'));
                }
            );
        }
    });
}


function initRollovers() {
    if (!document.getElementById) return
    var aPreLoad = new Array();
    var sTempSrc;
    var aImages = document.getElementsByTagName('img');
    
    for (var i = 0; i < aImages.length; i++) {
        if (aImages[i].className == 'swap') {
            var src = aImages[i].getAttribute('src');
            var hsrc = src.replace('_off', '_on');
            aImages[i].setAttribute('hsrc', hsrc);
            
            aPreLoad[i] = new Image();
            aPreLoad[i].src = hsrc;
            
            aImages[i].onmouseover = function() {
                sTempSrc = this.getAttribute('src');
                this.setAttribute('src', this.getAttribute('hsrc'));
            }
            aImages[i].onmouseout = function() {
                if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on', '_off');
                this.setAttribute('src', sTempSrc);
            }
        }
    }
}
function initRollovers02() {
    if (!document.getElementById) return
    var aPreLoad02 = new Array();
    var sTempSrc02;
    var aImages02 = document.getElementsByTagName('input');
    
    for (var i = 0; i < aImages02.length; i++) {
        if (aImages02[i].className == 'swap') {
            var src = aImages02[i].getAttribute('src');
            var hsrc = src.replace('_off', '_on');
            aImages02[i].setAttribute('hsrc', hsrc);
            
            aPreLoad02[i] = new Image();
            aPreLoad02[i].src = hsrc;
            
            aImages02[i].onmouseover = function() {
                sTempSrc02 = this.getAttribute('src');
                this.setAttribute('src', this.getAttribute('hsrc'));
            }
            aImages02[i].onmouseout = function() {
                if (!sTempSrc02) sTempSrc02 = this.getAttribute('src').replace('_on', '_off');
                this.setAttribute('src', sTempSrc02);
            }
        }
    }
}
/*
 * IE PNG Fix v1.3
 *
 * Copyright (c) 2006 Takashi Aida http://www.isella.com/aod2/
 *
 */

// IE5.5+ PNG Alpha Fix v1.0RC4
// (c) 2004-2005 Angus Turnbull http://www.twinhelix.com

// This is licensed under the CC-GNU LGPL, version 2.1 or later.
// For details, see: http://creativecommons.org/licenses/LGPL/2.1/

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


function popupPasta(url) {
    window.open(url,'pasta','width=282,height=204,scrollbars=no');
}

function printWin(url) {
    window.open(url,'pasta','width=750,height=640,menubar=yes,scrollbars=yes');
}

function sbsPopup(url) {
    window.open(url,'sbs','width=760,height=640,scrollbars=yes');
}

function flashPopup(url) {
    window.open(url,'pasta_fa','width=750,height=540,scrollbars=no');
}

function popupPresent(url) {
    window.open(url,'Present','width=745,height=540,scrollbars=yes,location=yes');
}

function popupPreWindow(url) {    
    window.open(url,'Present','width=452,height=350,scrollbars=no');
}


/* Plugin - jquery.tile.js
------------------------------------------------------------------- */

/**
 * Flatten height same as the highest element for each row.
 *
 * Copyright (c) 2011 Hayato Takenaka
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * @author: Hayato Takenaka (http://urin.take-uma.net)
 * @version: 0.0.2
**/
;(function($) {
	$.fn.tile = function(columns) {
		var tiles, max, c, h, last = this.length - 1, s;
		if(!columns) columns = this.length;
		this.each(function() {
			s = this.style;
			if(s.removeProperty) s.removeProperty("height");
			if(s.removeAttribute) s.removeAttribute("height");
		});
		return this.each(function(i) {
			c = i % columns;
			if(c == 0) tiles = [];
			tiles[c] = $(this);
			h = tiles[c].height();
			if(c == 0 || h > max) max = h;
			if(i == last || c == columns - 1)
				$.each(tiles, function() { this.height(max); });
		});
	};
})(jQuery);

/* Plugin - END - jquery.tile.js
------------------------------------------------------------------- */













$(function(){
	//高さ調整
	$('#footer_link .column_block').tile();
	$('.campaign_body').tile();
	$('#submitted_recipe li').tile();
	$('#favorite_recipe li').tile();
	
	//Class名追加
	$('div.recipe_list').each(function(){
		$('li:first-child', this).addClass('first');
	});
	
	//トップページのみに適用
	if($('body#home').size()) {
		$(window).on('load', function(){
			//alert('yes');
			//新着投稿レシピ画像リサイズ IE6対策
			var max_w = 146;
			var max_h = 146;
			var elm = $('img#new_recipe_image');
			var img_w;
			var img_h;
			img_w = elm.width();
			img_h = elm.height();
			//alert(img_h);
			if ( img_w > max_w) {
				img_w = max_w;
				elm.attr('width', img_w);
			} else if ( (img_w < max_w) && (img_h > max_h) ) {
				img_h = max_h;
				elm.attr('height', img_h);
			}
			
			//高さ調整
			$('body#home .new_post').tile();
			$('body#home #ranking_block ul').tile();
			$('body#home #middle_contents > div').tile();
		});
		
		
	}
});

















/*
window.onload = function() {
    initRollovers();
    initRollovers02();
}
*/

/* initialize */
function init() {
    initGnavi();
    initRollovers();
    initRollovers02();
}

$(document).ready(init);