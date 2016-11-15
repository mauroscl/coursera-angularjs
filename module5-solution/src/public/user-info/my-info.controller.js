(function () {
    'use strict';

    angular
        .module('public')
        .controller('MyInfoController', MyInfoController);

    //MyInfoController.$inject = ['RegistrationService', 'MenuService'];
    MyInfoController.$inject = ['RegistrationService', 'favoriteDish'];
    function MyInfoController(RegistrationService, /*MenuService*/favoriteDish) {
        var ctrl = this;
        //ctrl.favoriteDish = {short_name: 'Nome Curto'};
        ctrl.favoriteDish = favoriteDish;
        ctrl.registration = RegistrationService.getUser();
        // if (ctrl.registration) {
        //     MenuService.getMenuItem(ctrl.registration.favorite_dish)
        //         .then(function (response) {
        //             console.log(response.data);
        //             ctrl.favoriteDish = response.data;
        //         })

        // }


    }
})();