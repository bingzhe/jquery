//超链接文本提示
$(function(){
  var x = 10;
  var y = 20;
  $("a.tooltip").on("mouseover", function(e){
    this.myTitle = this.title;
    this.title = "";
    var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
    $("body").append(tooltip);
    $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"}).show("fast");
  }).on("mouseout", function(){
    this.title = this.myTitle;
    $("#tooltip").remove();
  }).on("mousemove", function(e){

    $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"});
  })
})
