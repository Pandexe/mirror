// Date 

dd = new Array();
dd[0]=new Image(); dd[0].src="src/Date/dd0.gif";
dd[1]=new Image(); dd[1].src="src/Date/dd1.gif";
dd[2]=new Image(); dd[2].src="src/Date/dd2.gif";
dd[3]=new Image(); dd[3].src="src/Date/dd3.gif";
dd[4]=new Image(); dd[4].src="src/Date/dd4.gif";
dd[5]=new Image(); dd[5].src="src/Date/dd5.gif";
dd[6]=new Image(); dd[6].src="src/Date/dd6.gif";
dd[7]=new Image(); dd[7].src="src/Date/dd7.gif";
dd[8]=new Image(); dd[8].src="src/Date/dd8.gif";
dd[9]=new Image(); dd[9].src="src/Date/dd9.gif";

function dodate(){ 
	var data = new Date();
	var dy=data.getDate(),mt=data.getMonth()+1,yr=data.getYear();

	if(yr<1000) yr+=1900;

	document.dy1.src=getSrc(dy,10);
	document.dy2.src=getSrc(dy,1);
	document.mt1.src=getSrc(mt,10);
	document.mt2.src=getSrc(mt,1);
	document.yr1.src=getSrc(yr,1000);
	document.yr2.src=getSrc(yr,100);
	document.yr3.src=getSrc(yr,10);
	document.yr4.src=getSrc(yr,1);
}

function getSrc(digit,index){
	return dd[Math.floor(digit/index)%10].src;
}
