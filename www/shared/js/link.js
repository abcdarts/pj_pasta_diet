/*
	外部リンク、ポップアップを別ウィンドウで開く為のスクリプト
	common.jsが必要
*/

var domain = document.domain;//自サイトのドメイン（外部リンク判定用）

var popClass = 'popLink';//ポップアップリンクのクラス名
var popWidth = 600;//ポップアップウィンドウの幅
var popHeight = 450;//ポップアップウィンドウの高さ

function initLinkWindow() {
	
	aTag = document.getElementsByTagName('a');
		
	for (i=0; i<aTag.length; i++) {
		
		//外部リンクを別ウィンドウで開く
		url = aTag[i].getAttribute('href');
		if ((url.indexOf(domain) == -1)&&(url.indexOf('http') == 0)) {
			aTag[i].onclick = function(){
				openNewWin(this);
				return false;
			}
		}
		
		//ポップアップを別ウィンドウ、サイズ指定で開く
		else if ((aTag[i].getAttribute('class')==popClass)||(aTag[i].getAttribute('className')==popClass)) {
			aTag[i].onclick = function(){
				openNewWin(this,popWidth,popHeight);
				return false;
			}
		}
	}
	
}

function openNewWin(a,w,h){ //リンクを新規ウィンドウで開く
	if(w>0||h>0){
		opt = "width=" + w + ",height=" + h + ",location=yes,menubar=yes,scrollbars=yes,resizable=yes";
	}else{
		opt = "toolbar=yes,location=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes";
	}
	window.open(a.getAttribute('href'),'',opt);
}

function closeWin(){ //firefoxで確実にウィンドウを閉じる
	var nvua = navigator.userAgent;
	if(nvua.indexOf('MSIE') >= 0){
		if(nvua.indexOf('MSIE 5.0') == -1) {
			top.opener = '';
		}
	}else if(nvua.indexOf('Gecko') >= 0){
		top.name = 'CLOSE_WINDOW';
		wid = window.open('','CLOSE_WINDOW');
	}
	top.close();
}

addLoadEvent(initLinkWindow);