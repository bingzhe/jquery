$(function(){
  var index = 0;
  var $imgrolls = $("#jnImageroll div a");
  $imgrolls.css("opacity", "0.7");
  var len = $imgrolls.length;
  var adTimer = null;

  $imgrolls.on("mouseover", function(){
    index = $imgrolls.index(this);
    showImg(index);
  }).eq(0).mouseover();
//滑入停止动画，滑出开始动画
  $("#jnImageroll").hover(function(){
    if (adTimer) {
      clearInterval(adTimer);
    }
  }, function(){
    adTimer = setInterval(function(){
      showImg(index);
      index++;
      if (index==len) {
        index = 0;
      }
    }, 5000);
  });
});


  //显示不同的照片
  function showImg(index){
    var $rolllist = $("#jnImageroll").find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href", "newhref")
                    .find("img").eq(index).stop(true,true).fadeIn()
                    .siblings().fadeOut();

    $rolllist.removeClass("chos").css("opacity", "0.7")
            .eq(index).addClass("chos").css("opacity", "1");
  }
