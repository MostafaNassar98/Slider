var imgs=Array.from(document.querySelectorAll('.container img'));
var innerimage=document.getElementById("innerimage");
var box=document.getElementById("box");
var closeBtn=document.getElementById("close");
var rightBtn=document.getElementById("right");
var leftBtn=document.getElementById("left");


var currentIndex;
for(var i=0; i<imgs.length; i++){
    imgs[i].addEventListener('click',function(e){
        box.classList.replace('d-none','d-flex');
        var clickedimage=e.target;
        currentIndex=imgs.indexOf(clickedimage);
        var sourceimage=clickedimage.getAttribute('src');
        innerimage.setAttribute('src',sourceimage);
        console.log(sourceimage);
    })
}

function closebox(){
    box.classList.replace('d-flex','d-none');
}
box.addEventListener('click',function(){
    closebox();
})
closeBtn.addEventListener('click',function(){
    closebox();
})
function prev(){
    currentIndex--;
    var lastimg=imgs[currentIndex];
    if(currentIndex < 0){
        currentIndex=imgs.length;
    }
    var sourceimage=lastimg.getAttribute('src');
    innerimage.setAttribute('src',sourceimage);
}
leftBtn.addEventListener('click',function(e){
    e.stopPropagation();
    prev();
})
function next(){
    currentIndex++;
    var nextimg=imgs[currentIndex];
    if(currentIndex == imgs.length){
        currentIndex=0;
    }
    var sourceimage=nextimg.getAttribute('src');
    innerimage.setAttribute('src',sourceimage);
}
rightBtn.addEventListener('click',function(e){
    e.stopPropagation();
    next();
})

document.addEventListener('keyup',function(e){
    if(e.key == 'ArrowRight'){
        next();
    }else if(e.key == 'ArrowLeft'){
        next();
    }else if(e.key == 'Escape'){
        closebox();
    }
})
