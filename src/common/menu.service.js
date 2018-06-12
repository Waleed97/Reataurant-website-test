// Placed in COmmon folder and module as even admin should access the menu items for updation

(function () {
"use strict";

angular.module('common')
.service(MenuService,'MenuService');

MenuService.$inject=['$http'];
function MenuService($http){

var service=this;

service.getCategories=function(){
  return  $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.log(error);
      });
};

}

})();
