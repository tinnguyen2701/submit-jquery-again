    var color; // save color current
    color = '#fff';
    var test = false;
    var testLaptop =false;
    var isClickOut = true;
    var lastClickItem;
    $('.settings').hide();
    $('.home').mousemove(function(){
        $('.settings').show();
        $(this).css('border','1px solid');
        $('.brandPhone').hide();
    });

    $('.settings').click(function(){
        $('.selectColor').toggle();
        $('.phone').css('background-color','');
        $('.table').css('background-color','');
        $('.laptop').css('background-color','');
        $('.size-sony-vio').hide();
        $('.brandLaptop').hide();
    });
    $('.selectColor').find('li').click(function(){
        //delete class selected
       $('.selectColor').find('.selected').removeClass('selected');
        //add class selected for element selected
       $(this).addClass('selected');
       color = $(this).css('background-color');
        $(this).parent().next().children('div').css('background-color',color);
        $('.menu').children('.home').css('background-color',color);
    });
    $('.section').mousemove(function(){
       $('.settings').hide();
        $('.selectColor').hide();
    });
    $('.phone').click(function(){
        $('.brandPhone').toggle();
        $(this).css('background-color',color);
        $('.itemTable').hide();
        $('.table').css('background-color','');
        $('.laptop').css('background-color','');
        $('.brandLaptop').hide();
        $('.size-sony-vio').hide();
    });
    $('.brandPhone').find('li').click(function(){
        $(this).css('background-color',color);
        if(test ===true){
            lastClickItem.css('background-color','');    
            lastClickItem = $(this);
        }
        else{
            test = true;    
            lastClickItem = $(this);
        }
    });
    $('.brandPhone').find('.apple').click(function(){
       $('.itemApple').toggle();
    });
    $('.itemApple').mousemove(function(){
       $('.brandPhone').hide(); 
    });
    $('.menu').find('.table').click(function(){
        $('.itemTable').toggle();
        $('.itemApple').hide();
        $('.brandPhone').hide();
        $('.brandLaptop').hide();
        $('.size-sony-vio').hide();
        $(this).css('background-color',color);
        $('.phone').css('background-color','');
        $('.laptop').css('background-color','');
        
    });
    $('.menu').find('.laptop').click(function(){
        $('.brandLaptop').toggle();
        $(this).css('background-color',color);
        $('.phone').css('background-color','');
        $('.table').css('background-color','');
        $('.brandPhone').hide();
        $('.itemTable').hide();
        $('.itemApple').hide();
        $('.size-sony-vio').hide();
    });
    $('.brandLaptop').find('li').click(function(){
        $(this).css('background-color',color);
        if(testLaptop ===true){
            lastClickItem.css('background-color','');    
            lastClickItem = $(this);
        }
        else{
            testLaptop = true;    
            lastClickItem = $(this);
        }
        $('.size-sony-vio').hide();
    });
    $('.sony-vio').click(function(){
        $('.size-sony-vio').toggle();
    });
    $('.size-sony-vio').find('li').mousemove(function(){
       $(this).css('background-color',color); 
    });
    $('.size-sony-vio').find('li').mouseleave(function(){
        $(this).css('background-color',''); 
    });
    $('.brandPhone').mouseleave(function(){
       $(this).hide(); 
    });