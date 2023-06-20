var x = 1;
function gan()
{   
           var a = document.getElementById('turn_imgs')
           a.src = './img/turn' + x + '.png';
           x = x + 1;
           if(x == 6)
           {
              x = 1;
           }
}
  setInterval(gan,2000);
 
function big() {
   var x1 = document.getElementById('text1');
   x1.style.transform = 'scale(1.15)';
}
function small() {
   var x1 = document.getElementById('text1');
   x1.style.transform = 'scale(1)';
}
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minute');
        var second = document.querySelector('.second');
        var inputTime =  + new Date("2022-12-27 09:00:00")
        countDown();
        setInterval(countDown,1000);
        function countDown() {
             var nowTime = +new Date();
             var times = (inputTime - nowTime)/1000;
             var h = parseInt(times/60/60%24);
             hour.innerHTML=  h < 10 ? "0" + h : h;
             var m = parseInt(times / 60 %60);
             minute.innerHTML = m < 10 ? "0" + m : m;
             var s = parseInt(times % 60);
             second.innerHTML = s < 10 ? "0" + s : s;
        }
 