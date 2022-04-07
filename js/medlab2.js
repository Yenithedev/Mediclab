
$(document).ready(function(){
   $("#sub_1").hide();
   $("#sub_2").hide();
   $("#sub_3").hide();
   $("#sub_4").hide();
   $("#sub1").click(function(){
   $("#sub_2").hide();
   $("#sub_3").hide();
   $("#sub_4").hide();
   $("#sub_1").toggle();
   })
   $("#sub2").click(function(){
   $("#sub_1").hide();
   $("#sub_3").hide();
   $("#sub_4").hide();
   $("#sub_2").toggle();
   })
   $("#sub3").click(function(){
   $("#sub_2").hide();
   $("#sub_1").hide();
   $("#sub_4").hide();
   $("#sub_3").toggle();
   })
   $("#sub4").click(function(){
   $("#sub_2").hide();
   $("#sub_3").hide();
   $("#sub_1").hide();
   $("#sub_4").toggle();
   })
})
$(document).ready(function(){
   $(".serv1").mouseenter(function(){
      $(".serv_1").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_11").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_12").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_img1").css({"background-color":"#fff"});
      $(".serv1").css({"color":"#fff","background-color":"#3333ff"});
   })
      $(".serv1").mouseleave(function(){
      $(".serv_1").css({"color":"#3333ff","background-color":"#fff"});
      $(".serv_11").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv_12").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv1").css({"color":"#737373","background-color":"#fff"});
   })
})
$(document).ready(function(){
   $(".serv2").mouseenter(function(){
      $(".serv_2").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_21").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_22").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_img2").css({"background-color":"#fff"});
      $(".serv2").css({"color":"#fff","background-color":"#3333ff"});
   })
      $(".serv2").mouseleave(function(){
      $(".serv_2").css({"color":"#3333ff","background-color":"#fff"});
      $(".serv_21").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv_22").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv2").css({"color":"#737373","background-color":"#fff"});
   })
})
$(document).ready(function(){
   $(".serv3").mouseenter(function(){
      $(".serv_3").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_31").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv_32").css({"color":"#fff","background-color":"#3333ff"});
      $(".serv3").css({"color":"#fff","background-color":"#3333ff"});
   })
      $(".serv3").mouseleave(function(){
      $(".serv_3").css({"color":"#3333ff","background-color":"#fff"});
      $(".serv_31").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv_32").css({"color":"rgba(58, 58, 58, 0.5)","background-color":"#fff"});
      $(".serv3").css({"color":"#737373","background-color":"#fff"});
   })
})







