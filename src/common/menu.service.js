(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http'];
function MenuService($http) {
  var service = this;

  service.getCategories = function () {
   return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function (response) {
      return response.data;
    });
  };

}



})();
