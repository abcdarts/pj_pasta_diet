/*	
   FlashElementのコーディングスクリプト
	Eclipse
	2006/04/13
*/


function writeFlashObject(src,width,height,ver,id,bgcolor,quality,scaleMode,wmode){
	
	


	
	var ua = navigator.userAgent;
	
	
	var winIe = (ua.indexOf("Windows")!=-1)&&(ua.indexOf("MSIE")!=-1)&&(ua.indexOf("Opera")==-1);
	
	var str = '';
	
	
	
	if(src==null||src.length==0){
		//内部デバッグ用
		alert('ソースが入っていません');
		
	}
	if(ver==null||ver.length==0){
		ver = '5,0,0,0';
	}
	if(id==null||id.length==0){
		id="flaMovie";
	}
	if(width==null||width.length==0){
		width='500';
	}
	if(height==null||height.length==0){
		height='500';
	}
	if(bgcolor==null||bgcolor.length==0){
		bgcolor='#FFFFFF';
	}
	if(quality==null||quality.length==0){
		quality='high';
	}
	if(scaleMode==null||scaleMode.length==0){
		scaleMode='noscale';
	}
	if(wmode==null||wmode.length==0){
		wmode=null;
	}
	
	if(winIe){
		
		//Objectタグ
		str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" type="application/x-shockwave-flash" ';
		str += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + ver + '" ';
		str += 'id="' + id + '" ';
		str += 'width="' + width + '" ';
		str += 'height="' + height + '">';
		str += '<param name="movie" value="' + src + '" >';
		if(wmode!=null)str+='<param name="wmode" value="'+wmode+'">';
		str += '<param name="src" value="' + src + '" >';
		str += '<param name="bgcolor" value="' + bgcolor + '" >';
		str += '<param name="quality" value="' + quality + '" >';
		str += '<param name="scale" value="' + scaleMode + '" >';
		str += '<param name="allowScriptAccess" value="sameDomain" >';
		str += '<param name="menu" value="false" >';
		str += '</object>';
	}else{
		
		//EMBEDタグ
		str += '<embed src="' + src + '" ';
	    str += 'width="' + width + '" ';
	    str += 'height="' + height + '" ';
		str += 'id="' + id + '" ';
		str += 'name="' + id + '" ';
		str += 'menu="false" ';
		str += 'bgcolor="' + bgcolor + '" ';
		if(wmode!=null) str += 'wmode="' + wmode + '" ';
		str += 'align="middle" ';
		str += 'quality="' + quality + '" ';
		str += 'scale="' + scaleMode + '" ';
		str += 'allowScriptAccess="sameDomain" ';
	    str += 'type="application/x-shockwave-flash" ';
	    str += 'pluginspage="http://www.macromedia.com/go/getflashplayer">';
	    str += '</embed>';
	
	
		
	}
	
	
	
	document.write(str);
}