(function () {
    'use strict';

    angular
        .module('public')
        .controller('RegistrationController', RegistrationController);

    //RegistrationController.$inject = ['dependency1'];
    function RegistrationController(/*dependency1*/) {
        var $ctrl = this;

        $ctrl.submit = function () {


        };
    }
}
)()