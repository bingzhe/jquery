/*修改皮肤样式*/
$(function(){
  $("#skin li").on("click", function(){
    $(this).addClass("selected")
        .siblings().removeClass("selected");
    $("#skinfile").attr("href", 'css/skin/'+this.id+'.css');
  });

})
