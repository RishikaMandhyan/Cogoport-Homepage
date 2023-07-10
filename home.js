//functionality of the alerts bar diappearing when the cancel icon is clicled
const cancel_icon=document.getElementById("cancel-icon");
const alerts=document.getElementsByClassName("alerts");

cancel_icon.addEventListener('click', function(){

    for (var i = 0, len = alerts.length; i < len; i++) {
        alerts[i].remove();
     }
    }

      );


//functionality of changing colour of navbar to white
window.addEventListener("scroll", function()
{

  var first_element= document.getElementsByClassName("alerts");
  var position= first_element[0].getBoundingClientRect();
  if(position.top<0)
 
  {
    var navbar= document.getElementById("navbar");
    navbar.setAttribute("class", "navbar_white_version");
  }

  else
  {
    var navbar= document.getElementById("navbar");
    navbar.setAttribute("class", "navbar");
    
  }
  
  

});


//functionality of increasing numbers in numbers container

var d1=document.getElementById("number1");
var x=1;
i=setInterval(function()
{
 d1.innerText=""+(x*9)+"+";
 x++;

 if(x==21) clearInterval(i);

}, 0.001);


var d2=document.getElementById("number2");
var y=1.678;
j=setInterval(function(){
 d2.innerText=""+Math.ceil((y*999));
 y=y+1;

 if(y>10) {
  clearInterval(j);
  d2.innerText="10,000";

}

},100);


var d3=document.getElementById("number3");
var z=1.678;
k=setInterval(function(){
 d3.innerText=""+Math.ceil((z*999))+"+";
 z=z+1;

 if(z>30) {
  clearInterval(k);
  d3.innerText="30,000+";

}

},30);

var d4=document.getElementById("number4");
var a=1.678;
l=setInterval(function(){
 d4.innerText=""+Math.ceil((a*1999));
 a=a+3;

 if(a>350) {
  clearInterval(l);
  d4.innerText="700,000";

}

},0.00000000001);




//videos changing on window loading

var video_arr=["/images/v1.mp4", "/images/v2.mp4","/images/v3.mp4"];

var v= document.getElementById("video_link");
window.addEventListener("load", function()
{
  var index=Math.floor(Math.random()*2.5);
  if(index==3) index=0;
  v.setAttribute("src", video_arr[index]);
});



//functioinality of video playing when its clicked

var element1=document.getElementById("video_cover_image");
var element2=document.getElementsByTagName("iframe")[0];


element1.addEventListener("click", function()
{
  document.getElementsByTagName("iframe")[0].setAttribute("class", "youtube_video_visible");

});