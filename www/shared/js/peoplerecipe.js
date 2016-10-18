function dispRecommendRecipe() {
  var imgSrcList = new Array();
  for (var i = 0; i < 2; i++) {
    var i_inc = i + 1;
    var imgTagObj = document.getElementById('recommend_recipe_img_' + i_inc);
    if (imgTagObj && imgTagObj.src) {
      imgSrcList.push(imgTagObj.src);
    }
  }
  var imgObjList = preLoadRecipeImages(imgSrcList);
  resizeMemberRecipeImg(imgObjList, 'recommend_recipe_img_', 58, 58);
}

function dispMemberRecipeList() {
  var imgSrcList = new Array();
  for (var i = 0; i < 5; i++) {
    var i_inc = i + 1;
    var imgTagObj = document.getElementById('people_recipe_img_' + i_inc);
    if (imgTagObj && imgTagObj.src) {
      imgSrcList.push(imgTagObj.src);
    }
  }
  var imgObjList = preLoadRecipeImages(imgSrcList);
  resizeMemberRecipeImg(imgObjList, 'people_recipe_img_', 70, 70);
}

function preLoadRecipeImages(imgSrcList) {
  var imgObjList = new Array();
  for (var i = 0; i < imgSrcList.length; i++) {
  	if (imgSrcList[i]) {
      var imgObj = new Image;
      imgObj.src = imgSrcList[i];
      imgObjList.push(imgObj);
    }
  }
  
  var preLoadStatus = function() {
    var cnt = 0;
    for (var i = 0; i < imgObjList.length; i++) {
      if (imgObjList[i].complete) {
        cnt++;
      }
    }
    if (cnt < imgObjList.length) {
      setTimeout(preLoadStatus, 100);
    }
  };
  preLoadStatus();
  
  return imgObjList;
}

function resizeMemberRecipeImg(imgObjList, imgIdPrefix, maxWidth, maxHeight) {
  for (var i = 0; i < imgObjList.length; i++) {
    var org_w = imgObjList[i].width;
    var org_h = imgObjList[i].height;
    var rsz_w = org_w;
    var rsz_h = org_h;
    if (maxWidth < org_w) {
      rsz_w = maxWidth;
      rsz_h = org_h * maxWidth / org_w;
    }
    if (maxHeight < rsz_h) {
      rsz_h = maxHeight;
      rsz_w = org_w * maxHeight / org_h;
    }
    
    var i_inc = i + 1;
    var imgTagObj = document.getElementById(imgIdPrefix + i_inc);
    if (imgTagObj) {
      imgTagObj.width = rsz_w;
      imgTagObj.height = rsz_h;
      imgTagObj.src = imgObjList[i].src;
    }
  }
}
