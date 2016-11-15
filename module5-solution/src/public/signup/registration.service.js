(function () {
    'use strict';

    angular
        .module('public')
        .service('RegistrationService', RegistrationService);

    function RegistrationService() {
        var service = this;
        service.registeredUser = null;
        service.registerUser = function(user){
            service.registeredUser = user
        };

        service.getUser = function(){
            return service.registeredUser;
        }

    }
})();