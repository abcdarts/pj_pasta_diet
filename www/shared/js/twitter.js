$(function(){
	var tw_title = document.title.split("��");
	$('div.social_area ul li.twitter').customRetweet({
		title: tw_title[0] + ' �� ���{�p�X�^����',
		template: '<a class="tweets" href="{{retweetURL}}" target="_blank">' +
					'<img class="swap" src="/shared/images/social/social_button_twitter_off.gif" width="69" height="20" alt="�c�C�[�g����" />' +
					'</a>' +
					'<a href="{{allTweetsURL}}" class="twitter_count" target="_blank"><span>{{count}}</span></a>'
	});
});