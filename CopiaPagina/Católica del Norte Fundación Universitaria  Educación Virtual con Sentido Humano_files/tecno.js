 /*  Script para manejo de cambio de Hoja de estilo en manejo de contraste para la barra accesible
 *  Empresa: Tecnoayudas Ltda
 *  Por: Javier Saldarriaga
 *  derechos reservados (c) 2012. Tecnoayudas Ltda
 *  Fecha creación: Enero de 2011
 *  Función: brinda la funcionalidad que permite cambiar el estilo y cambiar el contraste de fondo y letras
 *           Utiliza Cookie para almacenar el tamaño seleccionado y mantenerlo en la navegación
 */
 
function contrasteAlto2()
{
	createCookie("contrast2", $('link[title=AltoContraste2]')[0].disabled, 365);
	$('link[title=AltoContraste2]')[0].disabled = !$('link[title=AltoContraste2]')[0].disabled;
}
function contrasteAlto1()
{
	createCookie("contrast", $('link[title=AltoContraste1]')[0].disabled , 365);
	$('link[title=AltoContraste1]')[0].disabled = !$('link[title=AltoContraste1]')[0].disabled;
} 
 
 
 
var myrules = {
  '.js_css_contrast2' : function(el){
    el.onclick = function(){
      createCookie("contrast2", $('link[title=AltoContraste2]')[0].disabled, 365);
      $('link[title=AltoContraste2]')[0].disabled = !$('link[title=AltoContraste2]')[0].disabled;
//       window.location.reload();
    }
  },
  '.js_css_contrast' : function(el){
    el.onclick = function(){
      createCookie("contrast", $('link[title=AltoContraste1]')[0].disabled, 365);
      $('link[title=AltoContraste1]')[0].disabled = !$('link[title=AltoContraste1]')[0].disabled;
    }
  }
};

//Behaviour.register(myrules);


function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel") && a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled)
      return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
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

Behaviour.addLoadEvent(function() {
//   setTall();
//  var cssOptions = $('stylesheet_selection').options;
//  for (var i = 0; i < cssOptions.length; i++)
//    if (cssOptions[i].value == title)
//      cssOptions[i].selected = true;
});


var cookie = readCookie("contrast2");
var contrast2 = cookie ? cookie : 'false';
// $$('.classcontrast2').disabled = (contrast2 == 'false') ? 'disabled' : '';

cookie = readCookie("contrast");
var contrast = cookie ? cookie : 'false';
// $$('.classcontrast').disabled = (contrast == 'false') ? 'disabled' : '';


