/*
	�O�������N�A�|�b�v�A�b�v��ʃE�B���h�E�ŊJ���ׂ̃X�N���v�g
	common.js���K�v
*/

var domain = document.domain;//���T�C�g�̃h���C���i�O�������N����p�j

var popClass = 'popLink';//�|�b�v�A�b�v�����N�̃N���X��
var popWidth = 600;//�|�b�v�A�b�v�E�B���h�E�̕�
var popHeight = 450;//�|�b�v�A�b�v�E�B���h�E�̍���

function initLinkWindow() {
	
	aTag = document.getElementsByTagName('a');
		
	for (i=0; i<aTag.length; i++) {
		
		//�O�������N��ʃE�B���h�E�ŊJ��
		url = aTag[i].getAttribute('href');
		if ((url.indexOf(domain) == -1)&&(url.indexOf('http') == 0)) {
			aTag[i].onclick = function(){
				openNewWin(this);
				return false;
			}
		}
		
		//�|�b�v�A�b�v��ʃE�B���h�E�A�T�C�Y�w��ŊJ��
		else if ((aTag[i].getAttribute('class')==popClass)||(aTag[i].getAttribute('className')==popClass)) {
			aTag[i].onclick = function(){
				openNewWin(this,popWidth,popHeight);
				return false;
			}
		}
	}
	
}

function openNewWin(a,w,h){ //�����N��V�K�E�B���h�E�ŊJ��
	if(w>0||h>0){
		opt = "width=" + w + ",height=" + h + ",location=yes,menubar=yes,scrollbars=yes,resizable=yes";
	}else{
		opt = "toolbar=yes,location=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes";
	}
	window.open(a.getAttribute('href'),'',opt);
}

function closeWin(){ //firefox�Ŋm���ɃE�B���h�E�����
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