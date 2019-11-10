$(window).scroll(function(){
    var currentclass
    $('section').each(function(){
       if($(this).offset().top<$(window).scrollTop()){
          currentclass =$(this).attr('id')
       }
       
    })
    $('header').attr('class',currentclass)
})