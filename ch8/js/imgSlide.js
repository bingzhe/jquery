/*品牌模块横向滚动*/
$(function(){
  $("#jnBrandTab li a").on("click", function(){
    $(this).parent().addClass("chos")
                  .siblings().removeClass("chos");
    var idx = $("#jnBrandTab li a").index(this);
    console.log(idx)
    showBrandList(idx);
  });
  //显示不同的模块
  function showBrandList(idx){
    var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth*4;
    $rollobj.stop(true,false).animate({left:-rollWidth*idx}, 1000);

  }
})
