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

  service.getMenuItems=function(categoryShortName){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params:{
        category: categoryShortName
      }

      })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.menu_items);
        return response.data;
      });
  };
  
}



})();
