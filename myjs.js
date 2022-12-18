m = 0;
var y;
cnt = 0; 
function forward()
{
    cnt++;
    if(cnt > 1)
    {
        alert("don't press a button twice")
    }
    else
    {
        document.getElementById('bike_img').style = 'transform: rotate(0deg);'//dom selecting bike image using id
    
        y = setInterval(run,10); //this sets a interval which calls a function again and again 100 mili secs
        function run()     //this function is being call again and again
        {
           if(m < 1270 )             // this is the max width of bike to reached
           {
               m+=5;         // incrementing m 
               var x = document.getElementById("bike_img");
               x.style.marginLeft = m + 'px';    //shifting image
           }
           else
           {
               clearInterval(y);      //if conditioned is satisfied than clear y 
               m=0;
           }
        }
    }
    

}
function backward()
{
    cnt++;
    if(cnt > 1)
    {
        alert("don't press a button twice")
    }
    else
    {
        document.getElementById('bike_img').style.cssText = 'transform: rotate(0deg);'
     y = setInterval(run,10); //this sets a interval which calls a function again and again 100 mili secs
     function run()     //this function is being call again and again
     {
        if(m == 1270)             // this is the max width of bike to reached
        {
            clearInterval(y);      //if conditioned is satisfied than clear y 
            m=0;
        }
        else 
        {
            m-=5;         // incrementing m 
            var x = document.getElementById("bike_img");
            x.style.marginLeft = m +     'px';    //shifting image
        }
     }
    }
    
}
function willy()
{
    cnt++;
    if(cnt > 1)
    {
        alert("don't press a button twice")
    }
    else
    {
        document.getElementById('bike_img').style.cssText = 'transform: rotate(-10deg);';
     y = setInterval(run,10); //this sets a interval which calls a function again and again 100 mili secs
     function run()     //this function is being call again and again
     {
        if(m == 1270)             // this is the max width of bike to reached
        {
            clearInterval(y);      //if conditioned is satisfied than clear y 
            m=0;
        }
        else 
        {
            m+=5;         // incrementing m 
            var x = document.getElementById("bike_img");
            x.style.marginLeft = m + 'px';    //shifting image
        }
     }
    }
    
}
function stop()
{
    cnt--;
    clearInterval(y);
}