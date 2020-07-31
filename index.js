var len = document.querySelectorAll(".drum").length;
//console.log(len);
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()                       //Adding event listener to all buttons
    {
        var a = this.value;
        //alert(a);
        var audio = new Audio("sounds/" + a +".mp3");   // Play audio related to button value
        audio.play();
        
        var btn = document.querySelector("." + a);      //Adding effect to button on press ,selecting button using class
        btn.classList.add("btnAnimation");
        setTimeout(function(){
        btn.classList.remove("btnAnimation");
        },100)
    });
}
/*
function playSound()
{
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}*/