<?php
include( '../../webapp2/Common/InitConf.php' );
	$GLOBALS['CONTEXT'] = 'Smartphone';
	$GLOBALS['THEME'] = 'myrecipe';
	$GLOBALS['CLASS'] = 'MyRecipe';
  $GLOBALS['IS_API'] = true;
  $_POST['cmd'] = 'ApiUpload';
include( '../../webapp2/Common/Main.php' );
?>
