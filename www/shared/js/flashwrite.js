/*====================================================================
 * Flash�p EMBED��OBJECT�^�O�������o���֐�2          useFree
 *--------------------------------------------------------------------
 * http://allabout.co.jp/computer/javascript/closeup/CU20031226/
 */

function writeFlashHTML2( arg )
{
  
  /**
   * �������瑮���𒊏o����
   */
   
  var parm = []
  
  //���ׂĂ̈��������Ԃ�
  for( i = 0 ; i < arguments.length ; i++ )
  {
    //�������Ƒ����l������킷�������z��parm�փZ�b�g����(���p�󔒂͏���)
    parm[i] = arguments[i].split(' ').join('').split('=')
    
    //�L���ȑ�����������Α����l�ŕϐ���( �����Ȗ��O�͖��� )
    switch (parm[i][0])
    {
      case '_swf'     : var _swf     = parm[i][1] ; break ; // �t���b�V����URL
      case '_quality' : var _quality = parm[i][1] ; break ; // �掿
      case '_loop'    : var _loop    = parm[i][1] ; break ; // �J��Ԃ�
      case '_bgcolor' : var _bgcolor = parm[i][1] ; break ; // �w�i�F
      case '_wmode'   : var _wmode   = parm[i][1] ; break ; // �w�i����(WinIE�̂�)
      case '_play'    : var _play    = parm[i][1] ; break ; // �����Đ�
      case '_menu'    : var _menu    = parm[i][1] ; break ; // �E�N���b�N���j���[
      case '_scale'   : var _scale   = parm[i][1] ; break ; // ��������%�̎��̏c���䓙
      case '_salign'  : var _salign  = parm[i][1] ; break ; // �\���̈���\���ʒu
      case '_height'  : var _height  = parm[i][1] ; break ; // ���[�r�[�̍���
      case '_width'   : var _width   = parm[i][1] ; break ; // ���[�r�[�̕�
      case '_hspace'  : var _hspace  = parm[i][1] ; break ; // �܂��̗]��(��������)
      case '_vspace'  : var _vspace  = parm[i][1] ; break ; // �܂��̗]��(��������)
      case '_align'   : var _align   = parm[i][1] ; break ; // �\���ʒu
      case '_class'   : var _class   = parm[i][1] ; break ; // �N���X
      case '_id'      : var _id      = parm[i][1] ; break ; // ID��
      case '_name'    : var _name    = parm[i][1] ; break ; // ���[�r�[��
      case '_style'   : var _style   = parm[i][1] ; break ; // �X�^�C��
      case '_declare' : var _declare = parm[i][1] ; break ; // �ǂݍ��܂�邾���Ŏ��s���Ȃ�
      default        :;
    }
  }
  

  // �^�O�p�����񐶐�
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

  //�����o������
  document.write(htm)
  
}