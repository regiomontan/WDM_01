
 function mobile_menu_click() {
    var x = document.getElementById( "idmobmenu" );
        if (x.className === "mobmenu") {
            x.className += " responsive";
        } else {
        x.className = "mobmenu";
        }
 }