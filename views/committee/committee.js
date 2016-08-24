/**
 * Created by hxsd on 2016/8/18.
 */
angular.module("myapp").controller("committeeCtrl",function($scope,$http){
    var url = "json/aca.json";
    $http.get(url).success(function (data) {
        $scope.products = data;
    }).finally(function () {
        $scope.$broadcast("scroll.refreshComplete");
    });
    $scope.changeBg=function(a,b,c){
        $scope.cls =a;
        $scope.cls =b;
        $scope.cls =c;
    }
    $scope.getClass=function(cls){
       return cls;
    }
})



