(function () {
    'use strict';

    angular
        .module('public')
        .service('RegistrationService', RegistrationService);

    function RegistrationService() {
        var service = this;
        service.registerUser = function(user){
            service.registeredUser = user
        }

    }
})();