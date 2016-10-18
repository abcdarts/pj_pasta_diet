$(function(){
	var tw_title = document.title.split("│");
	$('div.social_area ul li.twitter').customRetweet({
		title: tw_title[0] + ' │ 日本パスタ協会',
		template: '<a class="tweets" href="{{retweetURL}}" target="_blank">' +
					'<img class="swap" src="/shared/images/social/social_button_twitter_off.gif" width="69" height="20" alt="ツイートする" />' +
					'</a>' +
					'<a href="{{allTweetsURL}}" class="twitter_count" target="_blank"><span>{{count}}</span></a>'
	});
});