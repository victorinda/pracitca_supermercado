function getTotal() {
	let cant= "cant";
	let pre= "pre";
	let totali= [];
	let totalf= 0;
	for(var i=1; i<10; i++){
		var r= 0;
		var a= document.getElementById(cant+i).value;
		var b= document.getElementById(pre+i).value;
		r= parseFloat(a)*parseFloat(b);
		totali.push(r);
	}
	for(var i=0; i<totali.length; i++){
		totalf += totali[i];
	}
	alert("El total fue: "+totalf);
	document.getElementById("total").innerHTML= "El total fue: "+totalf;
}