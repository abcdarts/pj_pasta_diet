<?php
include( '../../webapp2/Common/InitConf.php' );
	$GLOBALS['CONTEXT'] = 'Smartphone';
	$GLOBALS['THEME'] = 'myrecipe';
	$GLOBALS['CLASS'] = 'MyRecipe';
  $GLOBALS['IS_WEBVIEW'] = true;
  if (!isset($_GET['cmd'])) {
    $_GET['cmd'] = 'InsertDispFormApp';
    //if (isset($_GET['PHPSESSID'])) {
    //  $_COOKIE['PHPSESSID'] = $_GET['PHPSESSID'];
    //}
  }
include( '../../webapp2/Common/Main.php' );
?>