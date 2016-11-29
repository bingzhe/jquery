/*搜索框效果*/
$(function(){
  $("#inputSearch").on("focus",function(){
    $(this).addClass("focus");
    if ($(this).val() == this.defaultValue) {
      $(this).val("");
    }
  }).on("blur",function(){
    $(this).removeClass("focus");
    if ($(this).val() == ""){
      $(this).val(this.defaultValue);
    }
  }).on("keyup",function(e){
    if (e.which == 13) {
      alert("回车提交表单");
    }
  })
})
