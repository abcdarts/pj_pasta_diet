/*====================================================================
 * Flash用 EMBEDとOBJECTタグを書き出す関数2          useFree
 *--------------------------------------------------------------------
 * http://allabout.co.jp/computer/javascript/closeup/CU20031226/
 */

function writeFlashHTML2( arg )
{
  
  /**
   * 引数から属性を抽出する
   */
   
  var parm = []
  
  //すべての引数を順番に
  for( i = 0 ; i < arguments.length ; i++ )
  {
    //属性名と属性値をあらわす文字列を配列parmへセットする(半角空白は除去)
    parm[i] = arguments[i].split(' ').join('').split('=')
    
    //有効な属性名があれば属性値で変数化( 無効な名前は無視 )
    switch (parm[i][0])
    {
      case '_swf'     : var _swf     = parm[i][1] ; break ; // フラッシュのURL
      case '_quality' : var _quality = parm[i][1] ; break ; // 画質
      case '_loop'    : var _loop    = parm[i][1] ; break ; // 繰り返し
      case '_bgcolor' : var _bgcolor = parm[i][1] ; break ; // 背景色
      case '_wmode'   : var _wmode   = parm[i][1] ; break ; // 背景透明(WinIEのみ)
      case '_play'    : var _play    = parm[i][1] ; break ; // 自動再生
      case '_menu'    : var _menu    = parm[i][1] ; break ; // 右クリックメニュー
      case '_scale'   : var _scale   = parm[i][1] ; break ; // 幅高さが%の時の縦横比等
      case '_salign'  : var _salign  = parm[i][1] ; break ; // 表示領域内表示位置
      case '_height'  : var _height  = parm[i][1] ; break ; // ムービーの高さ
      case '_width'   : var _width   = parm[i][1] ; break ; // ムービーの幅
      case '_hspace'  : var _hspace  = parm[i][1] ; break ; // まわりの余白(水平方向)
      case '_vspace'  : var _vspace  = parm[i][1] ; break ; // まわりの余白(垂直方向)
      case '_align'   : var _align   = parm[i][1] ; break ; // 表示位置
      case '_class'   : var _class   = parm[i][1] ; break ; // クラス
      case '_id'      : var _id      = parm[i][1] ; break ; // ID名
      case '_name'    : var _name    = parm[i][1] ; break ; // ムービー名
      case '_style'   : var _style   = parm[i][1] ; break ; // スタイル
      case '_declare' : var _declare = parm[i][1] ; break ; // 読み込まれるだけで実行しない
      default        :;
    }
  }
  

  // タグ用文字列生成
  var htm = ""
  
  htm+="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'"
  htm+="        codebase='http://download.macromedia.com/pub/shockwave/"
                    htm+="cabs/flash/swflash.cab'"
  if(!!_width)   htm+="        width    = '" + _width   + "'"
  if(!!_height)  htm+="        height   = '" + _height  + "'"
  if(!!_hspace)  htm+="        hspace   = '" + _hspace  + "'"
  if(!!_vspace)  htm+="        vspace   = '" + _vspace  + "'"
  if(!!_align)   htm+="        align    = '" + _align   + "'"
  if(!!_class)   htm+="        class    = '" + _class   + "'"
  if(!!_id)      htm+="        id       = '" + _id      + "'"
  if(!!_name)    htm+="        name     = '" + _name    + "'"
  if(!!_style)   htm+="        style    = '" + _style   + "'"
  if(!!_declare) htm+="                    " + _declare  
  htm+=">"
  if(!!_swf)     htm+="<param  name     = 'movie'   value ='" + _swf     + "'>"
  if(!!_quality) htm+="<param  name     = 'quality' value ='" + _quality + "'>"
  if(!!_loop)    htm+="<param  name     = 'loop'    value ='" + _loop    + "'>"
  if(!!_bgcolor) htm+="<param  name     = 'bgcolor' value ='" + _bgcolor + "'>"
  if(!!_play)    htm+="<param  name     = 'play'    value ='" + _play    + "'>"
  if(!!_menu)    htm+="<param  name     = 'menu'    value ='" + _menu    + "'>"
  if(!!_scale)   htm+="<param  name     = 'scale'   value ='" + _scale   + "'>"
  if(!!_salign)  htm+="<param  name     = 'salign'  value ='" + _salign  + "'>"
  if(!!_wmode)   htm+="<param  name     = 'wmode'   value ='" + _wmode   + "'>"
  htm+=""
  htm+="<embed                          "
  htm+="        pluginspage='http://www.macromedia.com/go/getflashplayer'"
  if(!!_width)   htm+="        width    = '" + _width   + "'"
  if(!!_height)  htm+="        height   = '" + _height  + "'"
  if(!!_hspace)  htm+="        hspace   = '" + _hspace  + "'"
  if(!!_vspace)  htm+="        vspace   = '" + _vspace  + "'"
  if(!!_align)   htm+="        align    = '" + _align   + "'"
  if(!!_class)   htm+="        class    = '" + _class   + "'"
  if(!!_id)      htm+="        id       = '" + _id      + "'"
  if(!!_name)    htm+="        name     = '" + _name    + "'"
  if(!!_style)   htm+="        style    = '" + _style   + "'"
  htm+="        type     = 'application/x-shockwave-flash' "
  if(!!_declare) htm+="                    " + _declare  
  if(!!_swf)     htm+="        src      = '" + _swf     + "'"
  if(!!_quality) htm+="        quality  = '" + _quality + "'"
  if(!!_loop)    htm+="        loop     = '" + _loop    + "'"
  if(!!_bgcolor) htm+="        bgcolor  = '" + _bgcolor + "'"
  if(!!_play)    htm+="        play     = '" + _play    + "'"
  if(!!_menu)    htm+="        menu     = '" + _menu    + "'"
  if(!!_scale)   htm+="        scale    = '" + _scale   + "'"
  if(!!_salign)  htm+="        salign   = '" + _salign  + "'"
  htm+="></embed>"
  htm+="</object>"

  //書き出し処理
  document.write(htm)
  
}