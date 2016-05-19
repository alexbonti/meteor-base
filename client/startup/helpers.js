// example
Handlebars.registerHelper('state', function() {
    return 'alessio';
});

/**
 *  This is a global helper, meaning that it can be called from anywhere from any template, we use it in the layout to command the navbar toggle.
 *  When at any stage the Session variable 'showHeader' changes from true to false, this becomes triggers and the navbar is shown/hidden
 */
Handlebars.registerHelper('navBar', function() {
    return Meteor.user();
});


Handlebars.registerHelper('footBar', function() {
    return Session.get('showFooter');
});

Handlebars.registerHelper('lostConnection', function() {
    return Session.get('lostConnection');
   /* connected=Meteor.status().connected;
    if(connected){
        return false;

    }else{
        console.log('testing if the connection is really dead');
        setTimeout(
            function(){
                if(Meteor.status().connected==false){
                    console.log('is really dead');
                    return true;
                }

            },3000
        )
    }*/


});

