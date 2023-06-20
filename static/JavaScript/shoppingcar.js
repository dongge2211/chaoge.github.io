window.addEventListener('load',function(){
    var p_img  = document.querySelector('.s_main_left_top');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigimg = document.querySelector('.big_img');
    p_img.addEventListener(
        'mouseover',function(){
            mask.style.display = 'block';
            big.style.display = 'block';   
        })
    p_img.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    p_img.addEventListener('mousemove',function(event){
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetLeft;
        y = y - 350;
        x = x - 130;
        if(x > 63)
        {
            x = 63;
        }
        if ( y > 180)
        {
            y = 180;
        }
        if(x < 1)
        {
            x=1;
        }
        if(y < 0)
        {
            y =0;
        }
     document.querySelector('.mask').style.top = y + 'px';
     document.querySelector('.mask').style.left = x + 'px'; 
     var maskmaxY = 450 - 260;    //遮挡最大大小
     var maskbigY = 780 - 680;   //大图最大大小
     var bigimgY = y * maskbigY / maskbigY;
     bigimg.style.top = - bigimgY + 'px';

     var maskmaxX = 380 - 260;    //遮挡最大大小
     var maskbigX = 660 - 540;   //大图最大大小
     var bigimgX = x * maskbigX / maskbigY;
     bigimg.style.left = -bigimgX + 'px';
    })
})