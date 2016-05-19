// { "path" : "client/views/__viewName__/__viewName__.js" }

Template.__viewName__.helpers({
    profile:function(){
        return Meteor.user().profile;
    }

});

Template.__viewName__.events({
    'click .logoutLI':function(){
        Meteor.logout(function(err){
            if(!err){

                Notifications.warn('Server', 'You have succesfully logged out');
            }
        });

    }


});

