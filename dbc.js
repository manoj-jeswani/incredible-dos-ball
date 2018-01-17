$(function(){
	var kd=0;
	
	function won(){
	$("#frame").html("");
	$("#frame").html("Congratulations!! You Have Won..<br>Your Score is "+score);
	/*$("#frame").css("margin-top","-3px");
	*/	
		$("#frame").css("font-size","21px");
	
		$("#pause").click();
							
		ctx.clearRect(0,0,canvas.width,canvas.height);
			
		drawBricks();
		drawBall();
		drawPaddle();
		drawScore();
		drawLives();
		
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
		$("#start").fadeOut();
		$("#pause").fadeOut();
		$("#quit").html("Play Again");
				
							
										
	}
	function missed()
	{

		$("#frame").html("");

		$("#frame").html("You Missed it.. Lives left : "+lives);
		$("#frame").css("font-size","25px");
		$("#pause").click();
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
		$("#start").fadeOut();
		$("#quit").fadeOut();

								
									
	
	}
	function gameover(){

/*						document.location.reload();
*/							/*$("#myCanvas").fadeIn();
							*/
							$("#pause").click();
							
							ctx.clearRect(0,0,canvas.width,canvas.height);
								
							drawBricks();
							drawBall();
							drawPaddle();
							drawScore();
							drawLives();
							$("#frame").html("<b> GAME OVER !!!! </b>");
							$("#frame").css("font-size","35px");
					
							$("#frame").fadeIn();
							$("#overlay").fadeIn();
							$("#start").fadeOut();
							$("#pause").fadeOut();
							$("#quit").html("Play Again");
							
							
							
							/*
							alert("Game Over");
						              alert("Hit ENTER to start a new game..");
							*/
						}
	
				var canvas = document.getElementById("myCanvas");
				var ctx = canvas.getContext("2d");

				var dx=2;
				var dy=-2;
				var ballColor="yellow";
				var paddleHeight = 10;
				var paddleWidth = 75;
				var paddleX = (canvas.width-paddleWidth)/2;

			//by the above line starting x coordinate of paddle is set such that now always paddle will be formed in the mid of canvas whatever may be the width of canvas or width of paddle

				var ballRadius=10;
			
				var x=canvas.width/2;
				var y=canvas.height-paddleHeight-ballRadius-10;
				var a=x;
				var b=y;
				var c=x;
				var d=y;
				var e=x;
				var f=y;

				var leftPressed=false;
				var rightPressed=false;
				var brickRowCount=5;

				var brickColumnCount=9;
				var brickWidth=75;
				var brickHeight=20;
				var brickPadding=10;
				var brickOffsetTop=30;
				var brickOffsetLeft=30;
				var bricks=[];
				var score=0;
				var lives=3;
				var r1=Math.floor(Math.random()*10)%brickRowCount;
				var c1=Math.floor(Math.random()*10)%brickColumnCount;
				var r2=Math.floor(Math.random()*10)%brickRowCount;
				var c2=Math.floor(Math.random()*10)%brickColumnCount;
				var r3=Math.floor(Math.random()*10)%brickRowCount;
				var c3=Math.floor(Math.random()*10)%brickColumnCount;
				var r4=Math.floor(Math.random()*10)%brickRowCount;
				var c4=Math.floor(Math.random()*10)%brickColumnCount;
				var r5=Math.floor(Math.random()*10)%brickRowCount;
				var c5=Math.floor(Math.random()*10)%brickColumnCount;
				var r6=Math.floor(Math.random()*10)%brickRowCount;
				var c6=Math.floor(Math.random()*10)%brickColumnCount;
				//var r7=Math.floor(Math.random()*10)%brickRowCount;
				var r7=brickRowCount-1;
				var c7=Math.floor(Math.random()*10)%brickColumnCount;




/*
				document.addEventListener("mousemove",mouseMoveHandler,false);
				
				function mouseMoveHandler(e)
				{
					 var relativeX=e.clientX - canvas.offsetLeft;
					if(relativeX-paddleWidth/2>=0 && relativeX+paddleWidth/2<=canvas.width)
					{
						paddleX=relativeX-paddleWidth/2;
					}
				}*/

				
				document.addEventListener("keydown",keyDownHandler,false);

				//above listener listens when a key is pressed and calls the keyDownHandler fxn 

				document.addEventListener("keyup",keyUpHandler,false);

				//above listener listens when a key is just unpressed and calls the keyUpHandler fxn 

				/*document.addEventListener("mousemove",mouseMoveHandler,false);

				*/

				function keyDownHandler(e)
				{
					if(e.keyCode==39)
					{
						rightPressed=true;
					}
					else if(e.keyCode==37)
					{
						leftPressed=true;
					}
				}

				//just try to comment this block

				function keyUpHandler(e)
				{
					if(e.keyCode==39)
					{
						rightPressed=false;
					}
					else if(e.keyCode==37)
					{
						leftPressed=false;
					}
				}

	


				//partially understood

				for(c=0;c<brickColumnCount;c++)
				{
					bricks[c]=[];
					for(r=0;r<brickRowCount;r++)
					{
						bricks[c][r]={x:0,y:0,status:1};
					}
				}



				//here relativeX is acting as center of the paddle

				function collisionDetection()
				{
					for(c=0;c<brickColumnCount;c++)
					{
						for(r=0;r<brickRowCount;r++)
						{
							var b=bricks[c][r];	
							if(b.status==1)
							{	
								if(x+ballRadius>=b.x && x-ballRadius<=b.x+brickWidth && y+ballRadius>=b.y && y-ballRadius<=b.y+brickHeight)	
								{
									if(c==c1&&r==r1)
									ballRadius=50;
									if(c==c2&&r==r2)
									ballRadius=5;
									if(c==c3&&r==r3)
									ballColor="black";
									if(c==c4&&r==r4)
									{
										paddleWidth=150;
				 						paddleX = (canvas.width-paddleWidth)/2;
									}

									if(c==c5&&r==r5)
									{
										paddleWidth=30;
				 						paddleX = (canvas.width-paddleWidth)/2;
									}
									if(c==c6&&r==r6)
									paddleHeight=30;
									if(c==c7&&r==r7)
									canvas.height=canvas.height-100;	
									dy=-dy;
									b.status=0;
									score++;
									if(score==brickRowCount*brickColumnCount)
									{
									/*	alert("Congratulations! You Have Won\n Your Score is "+score);
										document.location.reload();												
									*/
										
											won();										

									}
					
								}			
							}

						}
					}
				}

				function drawScore()
				{

				ctx.font="16px Arial";
				ctx.fillStyle="black";
				ctx.fillText("Score : "+score,8,20);

				}
				function drawLives()
				{
					ctx.font="16px Arial";
					ctx.fillStyle="black";
					ctx.fillText("Lives : " +lives,canvas.width-65,20);
				}

				function drawBall()
				{
					ctx.beginPath();
					ctx.arc(x,y,ballRadius,0,2*Math.PI,false);
					ctx.fillStyle=ballColor;
					ctx.fill();
					ctx.strokeStyle="red";
					ctx.stroke();	
					ctx.closePath();
				}


				function drawPaddle() 
				{
				    ctx.beginPath();
				    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
				    ctx.fillStyle = "orange";
				    ctx.fill();
				    ctx.closePath();
				}
				function drawBricks()
				{
				  for(c=0;c<brickColumnCount;c++)
				    {
					for(r=0;r<brickRowCount;r++)
					{         if(bricks[c][r].status==1)
					          {	
					var brickX=(c*(brickWidth+brickPadding))+brickOffsetLeft;
						var brickY=(r*(brickHeight+brickPadding))+brickOffsetTop;
						bricks[c][r].x=brickX;
						bricks[c][r].y=brickY;
						ctx.beginPath();
						ctx.rect(brickX,brickY,brickWidth,brickHeight);
						if(c==c1&&r==r1)
						{
							ctx.fillStyle="violet";
						}
						else if(c==c2&&r==r2)
						{
							ctx.fillStyle="blue";
						}
						else if(c==c3&&r==r3)
						{
							ctx.fillStyle="green";
						}
				                          else if(c==c4&&r==r4)
						{
							ctx.fillStyle="yellow";
						}
				                         else  if(c==c5&&r==r5)
						{
							ctx.fillStyle="orange";
						}
				                        else if(c==c6&&r==r6)
						{
							ctx.fillStyle="red";
						}
				                        else if(c==c7&&r==r7)
						{
							ctx.fillStyle="pink";
						}
				                        	
					          	else
						ctx.fillStyle="black";
						
						ctx.fill();	
						ctx.closePath();	
					           }
					}
				    }

				}


				function draw()
				{
					ctx.clearRect(0,0,canvas.width,canvas.height);
					//the above cmd clears the content of given rectangle :: here its the canvas 

					drawBricks();
					drawBall();
					drawPaddle();
					drawScore();
					drawLives();
					collisionDetection();
					if(x+ballRadius+dx>canvas.width || x-ballRadius+dx<0)
					{
						dx=-dx;
					}

					 if(y-ballRadius+dy<0)
					{
						dy=-dy;
					}
					 if(y+ballRadius>=canvas.height-paddleHeight  &&  x+ballRadius>=paddleX && x-ballRadius<=(paddleX+paddleWidth))
					{
						dy=-2;
					}	


					 else if(y+ballRadius>=canvas.height)
					{
						lives--;
						if(lives>0)		
						{
							/*alert("You Missed it..\n"+lives+" lives left!!");
							*/
							missed();
						}
						if(lives==0)
						{
							
								gameover();
							
						}
						else
						{
							x=canvas.width/2;
							y=canvas.height/2;
							dx=2;
							dy=-2;
							paddleX=(canvas.width-paddleWidth)/2;
						}

					}

					x=x+dx;
					y=y+dy;
					if(rightPressed==true && (paddleX+paddleWidth)<canvas.width)
					{
						paddleX=paddleX+7;
					}			
					else if(leftPressed==true && (paddleX)>0)
					{
						paddleX=paddleX-7;
					}
						if(kd==1)
							return;
						

							requestAnimationFrame(draw);
						
				}


				//setInterval(draw,10);



	
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
var start_clicked=0;
	$("#start").click(function(){
		$("#myCanvas").fadeIn();
					start_clicked=1;	
						draw();
	});

	var pause_state=0;
	$("#pause").click(function(){
		if(pause_state==0)
			{
				kd=1;
				$(this).html("");
				$(this).html("Resume");
				pause_state=1;

			}
		else if(pause_state==1)
			{
				$("#frame").fadeOut();
				$("#overlay").fadeOut();
				$("#start").fadeIn();
				$("#quit").fadeIn();


				kd=0;
				$(this).html("");
				$(this).html("Pause");
				pause_state=0;
					
				leftPressed=false;
				rightPressed=false;
				if(start_clicked==1)
					draw();

			}
			
			
	});


	$("#quit").click(function(){
		
		document.location.reload();


	});


var lft = document.getElementById("lfmv");
      
    lft.addEventListener("touchstart", lst, false);
    lft.addEventListener("touchend", len, false);	

function lst(){
	leftPressed=true;
}    
    
function len(){
	leftPressed=false;
}    
    
var rit = document.getElementById("rtmv");
      
    rit.addEventListener("touchstart", rst, false);
    rit.addEventListener("touchend", ren, false);	

function rst(){
	rightPressed=true;
}    
    
function ren(){
	rightPressed=false;
}    
    
 	
	
$("#lfmv").mousedown(function(){
			leftPressed=true;
});
	

$("#lfmv").mouseup(function(){
	leftPressed=false;
});


$("#rtmv").mousedown(function(){
		rightPressed=true;

});


$("#rtmv").mouseup(function(){
	rightPressed=false;
});



	
});


