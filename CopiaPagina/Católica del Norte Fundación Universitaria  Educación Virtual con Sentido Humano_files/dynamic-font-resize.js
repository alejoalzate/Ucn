 /*  Script para manejo de cambio de tama�o en letra para la barra accesible
 *  Empresa: Tecnoayudas Ltda
 *  Por: Javier Saldarriaga
 *  derechos reservados (c) 2012. Tecnoayudas Ltda
 *  Fecha creaci�n: Enero de 2011
 *  Funci�n: brinda la funcionalidad que permite cambiar el tama�o de la letra en la p�gina web
 *           Utiliza Cookie para almacenar el tama�o seleccionado y mantenerlo en la navegaci�n
 */

var incdec = 0;
var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement("style");
cssNode.type = 'text/css';
cssNode.id="resizingText";

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function loadCss(x){
	try{
		var cssStr = '\
		#s4-mainarea{font-size:' + (10+x) +'px;}\
		';
		if(cssNode.styleSheet){
			cssNode.styleSheet.cssText = cssStr; // for IE
		} else {
			var cssText = document.createTextNode(cssStr);
			cssNode.appendChild(cssText); // breaks ie
			cssNode.innerHTML = cssStr; // breaks saffari
		}
		if(!document.getElementById("resizingText"))headID.appendChild(cssNode);
	}catch(err){ 
		// some debugging code
	}
}

function increaseFontSize() {
	if(incdec < 12){
		incdec++;
		loadCss(incdec);
		createCookie('textsize',incdec,1); 
	}
}

function decreaseFontSize() {
	if(incdec > 3){
		incdec--;
		loadCss(incdec);
		createCookie('textsize',incdec,1); 
	}		
}


var x = readCookie('textsize')
if (x && x!=0) {
	x = parseInt(x);
	incdec = x;
	loadCss(x);
}

//eraseCookie('textsize');