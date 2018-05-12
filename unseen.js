$(document).ready(function() {



    $("#cbtitle").mouseenter(function() {
        $("#cbtitle").html("Shoulder Bag $2086.79");
    });

    $("#cbtitle").mouseleave(function() {
        $("#cbtitle").html("Shoulder Bag &euro; 1750");
    });

    $('#circle_bag').hover(function() {
        $(this).attr('src', 'images/circle_bag_02.gif');
    }, function() {
        $(this).attr('src', 'images/circle_bag_01.gif');
    });

    $("#ctitle").mouseenter(function() {
        $("#ctitle").html("Wrist Cuff $250.23");
    });

    $("#ctitle").mouseleave(function() {
        $("#ctitle").html("Wrist Cuff &euro; 210");
    });


    $('#cuff').hover(function() {
        $(this).attr('src', 'images/cuff_color_small.gif');
    }, function() {
        $(this).attr('src', 'images/cuff_black.gif');
    });


    $("#cptitle").mouseenter(function() {
        $("#cptitle").html("Coin Purse $357.72");
    });

    $("#cptitle").mouseleave(function() {
        $("#cptitle").html("Coin Purse &euro; 300");
    });

    $('#coinpurse').hover(function() {
        $(this).attr('src', 'images/coin_purse_color.gif');
    }, function() {
        $(this).attr('src', 'images/coin_purse_black.gif');
    });

    $("#cardholdertitle").mouseenter(function() {
        $("#cardholdertitle").html("Card Holder $ 208.52");
    });

    $("#cardholdertitle").mouseleave(function() {
        $("#cardholdertitle").html("Card Holder &euro; 175");
    });

    $('#cardholder').hover(function() {
        $(this).attr('src', 'images/card_holder_color_small.gif');
    }, function() {
        $(this).attr('src', 'images/card_holder_black.gif');
    });



    $("#firetitle").mouseenter(function() {
        $("#firetitle").html("Lighter with Leather Case $ 208.52");
    });

    $("#firetitle").mouseleave(function() {
        $("#firetitle").html("Lighter with Leather Case &euro; 175");
    });

    $('#fire').hover(function() {
        $(this).attr('src', 'images/lighter_color.png');
    }, function() {
        $(this).attr('src', 'images/lighter.png');
    });



    $("#healingtitle").mouseenter(function() {
        $("#healingtitle").html("Healing Necklace $ 77.45");
    });

    $("#healingtitle").mouseleave(function() {
        $("#healingtitle").html("Healing Necklace &euro; 65");
    });

    $('#healing').hover(function() {
        $(this).attr('src', 'images/healing_necklace_close_up.png');
    }, function() {
        $(this).attr('src', 'images/healing.png');
    });

    var rellax = new Rellax('.rellax');

});