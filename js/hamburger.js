$(function(){
    var $menu = $('#menu');
    var $hamburgerMenu = $('#hamburgerMenu');

    checkHamburger();

    function checkHamburger(){
        if ($("nav>ul>li.hamburger").css("visibility") == "visible" ){
            $menu.hide();
            $hamburgerMenu.show();
        }
        else{
            $menu.show();
            $hamburgerMenu.hide();
        }
    }

    $('#hamburger').on('click', function(event){
        $menu.slideToggle(400);

        event.preventDefault();
    });

    $( window ).resize(function() {
        checkHamburger();
    });
});