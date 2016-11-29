$(function(){


  
  //显示不同的照片
  function showImg(index){
    var $rolllist = $("jnImageroll").find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href", "newhref")
                    .find("img").eq(index).stop(true,true).fadeIn()
                    .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity", "0.7")
            .eq(index).addClass("chos").css("opacity", "1");
  }
});
