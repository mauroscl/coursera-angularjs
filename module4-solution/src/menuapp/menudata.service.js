(function () {
    'use strict';

    angular
        .module('DataModule')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q','$http'];
    function MenuDataService($q, $http) {

        var service = this;
        service.getAllCategories = function () {

            var deferred = $q.defer();

            $http.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(err){
                deferred.reject(err);
            });

            return deferred.promise;

        }

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();

            $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName )
            .then(function(response){
                deferred.resolve(response.data);
            })
            .catch(function(err){
                deferred.reject(err);
            });

            return deferred.promise;
            
        };

    };
})();