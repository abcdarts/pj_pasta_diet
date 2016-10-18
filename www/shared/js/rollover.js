/*
	ロールオーバーを自動的に設定するスクリプト
	common.jsが必要
*/

/*
	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
*/

/*
	Modified by Maeda Daisuke @ Eclipse Corp.
	2007/02/21
*/

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var className = 'rollover';
	var postFix = '_on'
		
	var aImages = getElementsByClass(className,document);

	for (var i = 0; i < aImages.length; i++) {		
		var src = aImages[i].getAttribute('src');
		var ftype = src.substring(src.lastIndexOf('.'), src.length);
		var hsrc = src.replace(ftype, postFix + ftype);

		aImages[i].setAttribute('hsrc', hsrc);
		
		aPreLoad[i] = new Image();
		aPreLoad[i].src = hsrc;
		
		aImages[i].onmouseover = function() {
			sTempSrc = this.getAttribute('src');
			this.setAttribute('src', this.getAttribute('hsrc'));
		}	
		
		aImages[i].onmouseout = function() {
			if (!sTempSrc) sTempSrc = this.getAttribute('src').replace(postFix + ftype, ftype);
			this.setAttribute('src', sTempSrc);
		}
	}
}

addLoadEvent(initRollovers);