
//init Angular Code block
var app = angular.module('flickUIApp', []);
app.controller('flickAppController', function ($scope, $http, $compile, $timeout) {
    $scope.pagetitle = "Flickr UI Application";
    $scope.displayType = "fa fa-th-large";
    $scope.Action = {
        toggleView: function (o) {
            if ($scope.displayType === "fa fa-th-large") {
                $scope.displayType = "fa fa-bars";
            } else {
                $scope.displayType = "fa fa-th-large";
            }
            document.getElementById('photoSection').innerHTML = "";
            $scope.Action.refreshLayout();
        },
        refreshLayout: function () {
            $http.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1")
                .then(function (response) {
                    $scope.flickrItems = response.data.items;
                    $scope.count = response.data.items.length;
                    //$scope.text = response.data.items[0].title;
                    var iterator = 0;

                    if ($scope.displayType === 'fa fa-th-large') {
                        //grid View
                        var k = 0;
                        var innerHTML = "";
                        var rows = Math.ceil($scope.count / 3);
                        var cols = 3;
                        for (var i = 0; i < rows; i++) {
                            innerHTML += '<div class="row gridlayout"><div class="col-md-1"></div>';
                            for (var j = 0; j < cols; j++) {

                                if ($scope.flickrItems[k]) {
                                    $scope["data" + k] = $scope.flickrItems[k];
                                    innerHTML += "<gridphoto-template datainfo='" + "data" + k + "'></gridphoto-template>";
                                    k++;
                                }
                            }
                            innerHTML += "</div>";

                        }
                        var newdom = $compile(innerHTML)($scope);
                        angular.element(document.getElementById('photoSection')).append(newdom);


                    } else {
                        //list view
                        for (var i = 0; i < $scope.flickrItems.length; i++) {
                            $scope["data" + i] = $scope.flickrItems[i];
                            var innerHTML = "<photo-template info='" + "data" + i + "'></photo-template>";
                            var newdom = $compile(innerHTML)($scope);
                            angular.element(document.getElementById('photoSection')).append(newdom);

                        }
                    }

                    $scope.$apply();
                });
        }
    };
    // $scope.Action.refreshLayout();
    $timeout(function () {
        $scope.Action.refreshLayout();
    }, 200);

})
    .directive('photoTemplate', function () {
        return {
            restrict: 'AE',
            scope: {
                flickInfo: '=info'
            },
            templateUrl: 'photo-template.html'
        };
    }).directive('gridphotoTemplate', function () {
        return {
            restrict: 'AE',
            scope: {
                gridrowInfo: '=datainfo'
            },
            templateUrl: 'gridphoto-template.html'
        };
    });