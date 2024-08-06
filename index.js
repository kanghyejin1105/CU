$(document).ready(function(){
  let i = 0;
  let count = $(".bgimg>li").length;

  $(".next").click(function(){
    if(i == count-1){
      i = 0;
    }else{
      i++;
    }
      show()
  });

  $(".prev").click(function(){
    if( i == 0){
      i = count-1;
    }else{
      i--;
    }
      show()
  });

  $(".indicator>li").click(function(){
    i = $(this).index();
      show()
  });

  $(".bgimg").mouseenter(function(){
    clearInterval(autoSlide);  
    });
    $(".bgimg").mouseleave(function(){
      autoSlide = setInterval(function(){
        if( i == 0){
          i = count-1;
        }else{
          i--;
        }
          show()
      },2000);
    });



  let autoSlide = setInterval(function(){
    if(i == count-1){
      i = 0;
    }else{
      i++;
    }
      show()
  },2000);

  function show(){
    $(".indicator>li").removeClass("on");
    $(".indicator>li").eq(i).addClass("on");
    $(".bgimg>li").stop().fadeOut();
    $(".bgimg>li").eq(i).stop().fadeIn();
  }
});