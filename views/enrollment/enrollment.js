/**
 * Created by hxsd on 2016/8/16.
 */
angular.module("myapp").controller("enrollmentCtrl",function($scope,$http){
    var url = "json/enrollment.json";
    $scope.genres = {};
    $http.get(url).success(function(data){
        $scope.genres = data;
    }).finally(function(){
        $scope.$broadcast("scroll.refreshComplete");
    });
});


