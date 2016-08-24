/**
 * Created by hxsd on 2016/8/18.
 */
angular.module('myapp').controller('programCtrl', function ($scope, $ionicPopup) {
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '金融学博士',
            template: '培养德才兼备，具有坚实专业基<br>础理论和系统专业知识，能独立从事<br>科学研究，具有创新能力的高级金融<br>人才。'
        });
    };
});