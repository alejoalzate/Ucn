/*jQuery.preloadImages = function(){
 for(var i = 0; i<arguments.length; i++){
 jQuery("<img>").attr("src", arguments[i]);
 }
 }

 $.preloadImages("/exportes/box-green.jpg","/exportes/box-green2.jpg", "/exportes/box-blue.jpg", "/exportes/box-blue2.jpg", "/exportes/menu-principal_01.png","/exportes/menu-principal_02.png","/exportes/menu-principal_03.png","/exportes/menu-principal_04.png","/exportes/sprite.png", "exportes/bg-menuprin.jpg");

 */



function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    '/exportes/box-green.jpg',
    '/exportes/box-green2.jpg',
    '/exportes/box-blue.jpg'
    '/exportes/box-blue2.jpg',
    '/exportes/menu-principal_01.png',
    '/exportes/menu-principal_02.png'
    '/exportes/menu-principal_03.png',
    '/exportes/menu-principal_04.png',
    '/exportes/sprite.png'
]);