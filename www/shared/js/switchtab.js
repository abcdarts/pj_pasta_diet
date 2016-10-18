// Switch Tab for Search

function goToSearch() {
  var keyword = document.getElementById('keyword').value;
  var keyword_encoded = encodeURIComponent(keyword);
  //var keyword_encoded = keyword;
  var url = '';
  if (document.getElementById('inBoth').checked) {
    url = '/recipe/keyword_search.php?u=1&page=1&keyword=' + keyword_encoded;
  } else if (document.getElementById('inPro').checked) {
    url = '/recipe/search.php?cmd=KeywordSearch&u=1&page=1&keyword=' + keyword_encoded;
  } else if (document.getElementById('inMember').checked) {
    url = '/recipe/member_recipe.php?cmd=SearchDone&u=1&page=1&search=keyword&keyword=' + keyword_encoded;
  }
  
  if (url != '') {
    location.href = url;
  }
  
}

function switchDispDiv(div_name) {
  if (div_name == 'people') {
    document.getElementById('people').style.display = 'block';
    document.getElementById('search_tab_people').style.display = 'block';
    document.getElementById('society').style.display = 'none';
    document.getElementById('search_tab_society').style.display = 'none';
  } else {
    document.getElementById('people').style.display = 'none';
    document.getElementById('search_tab_people').style.display = 'none';
    document.getElementById('society').style.display = 'block';
    document.getElementById('search_tab_society').style.display = 'block';
  }
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

window.onload = function() {
  //switchDispDiv('society');
	initRollovers();
}