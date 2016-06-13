var button_start, count, traffic_interval, info_1, info_2, info_3,road_1, road_2, road_3;

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);

 count = 0;

info_1 = createElement('h7', 'S1');
info_1.position(590,550);

info_2 = createElement('h7', 'S2');
info_2.position(640,550);

info_3 = createElement('h7', 'S3');
info_3.position(690,550);

road_1 = createElement('h7', 'ROAD 1');
road_1.position(120,270);

road_2 = createElement('h7', 'ROAD 2');
road_2.position(320,250);

road_3 = createElement('h7', 'ROAD 3');
road_3.position(320,370);

line(100,300,200,300);
line(100,310,200,310);
line(100,320,200,320);

line(250,250,320,180);
line(260,250,330,180);
line(270,250,340,180);

line(250,370,320,440);
line(260,370,330,440);
line(270,370,340,440);


 ellipse(600,600,20,20);
 ellipse(650,600,20,20);
 ellipse(700,600,20,20);

 ellipse(600,650,20,20);
 ellipse(650,650,20,20);
 ellipse(700,650,20,20);
 
 ellipse(600,700,20,20);
 ellipse(650,700,20,20);
 ellipse(700,700,20,20);

 button_start = createButton('Start');
 button_start.position(650,300);
  
 button_start.mouseClicked(traffic_start);
  
 
}

function traffic_start()
{
 traffic_interval = setInterval(traffic_signals,10000);
 traffic_signals();
}

function traffic_signals()
{
if(count%3 == 0)
{

fill(0,200,0);
ellipse(600,650,20,20);
ellipse(700,650,20,20);

fill(0,0,200);
ellipse(600,700,20,20);

fill(200,0,0);
ellipse(650,600,20,20);                 
ellipse(700,600,20,20);

fill(0,0,0);
ellipse(600,600,20,20);
 
ellipse(650,650,20,20);
  
ellipse(650,700,20,20);

ellipse(700,700,20,20);  

count++;
}

else if(count%3 == 1)
{

fill(0,200,0);
ellipse(650,650,20,20);
ellipse(600,650,20,20);

fill(0,200,0);
ellipse(600,650,20,20);

fill(0,0,200);
ellipse(650,700,20,20);

fill(200,0,0);
 ellipse(600,600,20,20);
 ellipse(700,600,20,20);

fill(0,0,0);

ellipse(650,600,20,20); 
 
 ellipse(700,650,20,20);
 
 ellipse(600,700,20,20);
 
 ellipse(700,700,20,20); 

count++;
}

else if(count%3 == 2)
{

fill(0,0,200);
ellipse(700,700,20,20);

fill(0,200,0);
ellipse(650,650,20,20);

fill(200,0,0);

 ellipse(600,600,20,20);
 ellipse(650,600,20,20);
 ellipse(700,600,20,20);

fill(0,0,0);
 ellipse(600,650,20,20);
 
 ellipse(700,650,20,20);
 
 ellipse(600,700,20,20);
 ellipse(650,700,20,20);
 
count++;
}
}
