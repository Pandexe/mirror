// Clock

dg = new Array();
dg[0]=new Image();dg[0].src="src/Clock/dg0.gif";
dg[1]=new Image();dg[1].src="src/Clock/dg1.gif";
dg[2]=new Image();dg[2].src="src/Clock/dg2.gif";
dg[3]=new Image();dg[3].src="src/Clock/dg3.gif";
dg[4]=new Image();dg[4].src="src/Clock/dg4.gif";
dg[5]=new Image();dg[5].src="src/Clock/dg5.gif";
dg[6]=new Image();dg[6].src="src/Clock/dg6.gif";
dg[7]=new Image();dg[7].src="src/Clock/dg7.gif";
dg[8]=new Image();dg[8].src="src/Clock/dg8.gif";
dg[9]=new Image();dg[9].src="src/Clock/dg9.gif";



function dotime(){ 
	var clock=new Date();
	var hr=clock.getHours(),mn=clock.getMinutes(),se=clock.getSeconds();

	document.hr1.src = getSrcDg(hr,10);
	document.hr2.src = getSrcDg(hr,1);
	document.mn1.src = getSrcDg(mn,10);
	document.mn2.src = getSrcDg(mn,1);
	//document.se1.src = getSrcDg(se,10);
	//document.se2.src = getSrcDg(se,1);
}


function getSrcDg(digit,index){
	return dg[(Math.floor(digit/index)%10)].src;
}


