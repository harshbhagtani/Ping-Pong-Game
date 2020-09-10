var b1=document.querySelector('#bart');
var b2=document.querySelector('#barb');

var lefti=b1.offsetLeft;
var leftr=lefti+b1.offsetWidth;

var high=0;
var curr=0;
var hse=document.querySelector("#hs p");
var cse=document.querySelector("#cs p");
var speed=0;

var ball=document.querySelector('#ball');

ball.style.top=(b2.offsetTop-30)+"px";
ball.style.left=b2.offsetLeft+"px";
var xs=1;
var ys=1;
var btop=ball.offsetTop;
var bleft=ball.offsetLeft;

function ballmove(){
if(btop==b1.offsetHeight&&bleft<=leftr&&bleft>=lefti){
	curr=curr+1;
	xs=-xs;
}
if(btop==b2.offsetTop-29&&bleft<=leftr&&bleft>=lefti){
	curr=curr+1;
	xs=-xs;
}
if(bleft<0||bleft>window.innerWidth-ball.offsetWidth){

	ys=-ys;
}

if(btop<0||btop>window.innerHeight-ball.offsetHeight){

	clearInterval(id);
	if(high<curr)high=curr;
hse.textContent=high;
cse.textContent=curr;
	curr=0;
	
	but.style.display="block";
	but1.style.display="block";
	but2.style.display="block";
	hs.style.display="block";
cs.style.display="block";
	ball.style.top=(b2.offsetTop-30)+"px";
	ball.style.left=b2.offsetLeft+"px";
	
      btop=ball.offsetTop;
 bleft=ball.offsetLeft;
	xs=1;
	ys=1;
	return;
}
ball.style.left=(bleft+ys)+"px";
ball.style.top=(btop-xs)+"px";

btop=btop-xs;
bleft=bleft+ys;


}
var id;
but.addEventListener('click',function(){
	
	speed=but.getAttribute('data-bs');
 id=setInterval(ballmove,speed);
but.style.display="none";
but1.style.display="none";
but2.style.display="none";

hs.style.display="none";
cs.style.display="none";
});
but1.addEventListener('click',function(){
	speed=but1.getAttribute('data-bs');
	console.log(speed);
 id=setInterval(ballmove,speed);
but.style.display="none";
but1.style.display="none";
but2.style.display="none";

hs.style.display="none";
cs.style.display="none";
});
but2.addEventListener('click',function(){
	speed=but2.getAttribute('data-bs');
 id=setInterval(ballmove,speed);
but.style.display="none";
but1.style.display="none";
but2.style.display="none";

hs.style.display="none";
cs.style.display="none";
});





function move(key){

	if(key==65){
		if(lefti<0)return;
b1.style.left=(lefti-13)+"px";
b2.style.left=(lefti-13)+"px";
lefti=lefti-13;
	}
	else if(key==68){
		if(lefti+13>window.innerWidth-b1.offsetWidth)return;
		b1.style.left=(lefti+13)+"px";
b2.style.left=(lefti+13)+"px";
lefti=lefti+13;
	}

leftr=lefti+b1.offsetWidth;
}








window.addEventListener('keydown',function(event){
move(event.keyCode);

});