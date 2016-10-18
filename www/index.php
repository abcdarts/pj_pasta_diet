<?php
	//-------------------------------
	// 簡易キャリア判別スクリプト
	//-------------------------------
	
	//HTTP_HOST
	$http_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : "";
	
	//UA
	$ua = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
	
	//リダイレクト先URL設定
	$URLList = array(
		'docomo'	=> "http://$http_host/m/",
		'au'		=> "http://$http_host/m/",
		'softbank'	=> "http://$http_host/m/",
		'pc'		=> "http://$http_host/index.html",
    'smartphone' => "http://$http_host/smt/",
	);
	
	//キャリア判定
	// http://www.ezinfo.jp/tips/divide/
	$uaType = '';
	if (strstr($ua, "DoCoMo")) {
		$uaType = 'I';
	} else if (strstr($ua, "Vodafone")) {
		$uaType = 'S';
	} else if (strstr($ua, "SoftBank")) {
		$uaType = 'S';
	} else if (strstr($ua, "MOT-")) {
		$uaType = 'S';
	} else if (strstr($ua, "J-PHONE")) {
		$uaType = 'S';
	} else if (strstr($ua, "KDDI")) {
		$uaType = 'A';
	} else if (strstr($ua, "UP.Browser")) {
		$uaType = 'A';
	} else if (strstr($ua, "WILLCOM")) {
		$uaType = 'I';
	} else {
		$uaType = '';
	}
  
  //スマートフォン判定
  $isSmartPhone = false;
  if (stristr($ua, 'iphone')) {
    $isSmartPhone = true;
  } else if (stristr($ua, 'ipad')) {
    
  } else if (stristr($ua, 'android')) {
    if (stristr($ua, 'mobile')) {
      $isSmartPhone = true;
    }
  } else if (stristr($ua, 'blackberry')) {
    $isSmartPhone = true;
  } else if (stristr($ua, 'windows phone')) {
    $isSmartPhone = true;
  } else if (stristr($ua, 'windows ce')) {
    $isSmartPhone = true;
  } else if (stristr($ua, 'iemobile')) {
    $isSmartPhone = true;
  } else if (stristr($ua, 'mobile safari')) {
    $isSmartPhone = true;
  }
	
  //リダイレクト先URL決定
	$redirectURL = "";
  if ($isSmartPhone) {
    //スマホ (外部から / へアクセスしてきたときだけ振り分ける）
    $http_referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
    if (!stristr($http_referer, $http_host)) {
      $redirectURL = $URLList['smartphone'];
    } else {
      $redirectURL = $URLList['pc'];
    }
	} else if ($uaType == 'I') {
		//DoCoMo
		$redirectURL = $URLList['docomo'];
	} else if ($uaType == 'A') {
		//AU
		$redirectURL = $URLList['au'];
	} else if ($uaType == 'S') {
		//SoftBank
		$redirectURL = $URLList['softbank'];
	} else {
		//その他
		$redirectURL = $URLList['pc'];
	}
	
	//echo "Location: $redirectURL\n";
	header("Location: $redirectURL");
	exit();
?>