"use strict";


$(function(){
    $.getJSON( "popis_naselja_u_republici_hrvatskoj.json", function( mjesta ) {
        $.each( mjesta, function( kljuc, mjesto ) {
            if (mjesto.ID==="4266"){
                $.getJSON( "popis.php?ID=" + mjesto.ID, function( zapis ) {
                    $.ajax({
                        url: "ocjena.php", 
                        type: "POST",      
                        data: "mjesto=" + zapis.mjesto,     
                        cache: false,
                        success: function(ocjena){                          
                            log(ocjena);                 
                        }           
                    });  
                });
                return false;
            } 
        });
    });
  
});