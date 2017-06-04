$(function(){

    var isEventReady = true; //Bloqueur d'évènement.
    var activ = 0; //L'id de la page visible sur le moment.




    function createArray(){
        //Crée le tableau des pages avec DOM et déclencheurs attachés.
        var array = [];

        $('section').each(function(i){
            array[i] = {
                name : $(this).attr('id'),
                dom : $(this),
                button : $('#'+$(this).attr('id')+'Link')
            };
        });
        array.unshift({
            name : $('header').attr('id'),
            dom : $('header'),
            button : $('#'+$('header').attr('id')+'Link')
        });
        return array
    }


    function changePage(newId, oldId) {
        console.log(newId);
        page[oldId].dom.removeClass('fadeInLeft fadeInRight bounce');

        if (newId < oldId) {
            page[newId].dom.addClass('fadeInLeft');
        } else if (newId > oldId) {
            page[newId].dom.addClass('fadeInRight');
        } else {
            page[newId].dom.addClass('bounce');
        }

        page[oldId].dom.hide();
        page[newId].dom.show();
    }




    var page = createArray();

    for(i=0; i<page.length; i++){
        //Pour chaque page à afficher

        page[i].button.on('click', i, function(event){
            changePage(event.data, activ);
            activ = event.data;
        });
    }

    $('#preLink').on('click', function(){
        if(page[activ-1]){
            changePage((activ-1), activ);
            activ--;
        }
    });

    $('#nextLink').on('click', function(){
        if(page[activ+1]) {
            changePage((activ+1), activ);
            activ++;
        }
    });


});