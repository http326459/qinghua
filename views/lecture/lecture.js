/**
 * Created by hxsd on 2016/8/17.
 */

angular.module("myapp").controller("lectureCtrl",function($scope,$http) {
    var url = "json/lecture.json";
    $http.get(url).success(function (data) {
        $scope.lecture = data;
    }).finally(function () {
        $scope.$broadcast("scroll.refreshComplete");
    });
    $scope.data={
        showDelete:false,
        showReorder:false
    };
    $scope.loadMore=function(){
        $http.get(url).success(function(data){
            Array.prototype.push.apply($scope.lecture,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    };
});