(function () {
    'use strict';

    angular
        .module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['RegistrationService'];
    function RegistrationController(RegistrationService) {
        var regCtrl = this;

        regCtrl.submit = function () {

            RegistrationService.registerUser(regCtrl.registration);

        };
    }
}
)()