/*滑过图片出现放大镜效果*/
$(function(){
  $("#jnBrandList li").each(function(){
    var $img = $(this).find("img");
    //console.log($img);
    var img_w = $img.width();
    var img_h = $img.height();
    console.log(img_w);
    var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
    $(spanHtml).appendTo(this);
  });
  $("#jnBrandList").find(".imageMask").hover(function(){
    $(this).addClass("imageOver");
  }, function(){
    $(this).removeClass("imageOver");
  });
});
