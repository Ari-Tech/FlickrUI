// var feed = '';
// function jsonFlickrFeed(d) {
//     feed = d;
// }
//init Angular Code block
var app = angular.module('flickUIApp', []);
app.controller('flickAppController', function ($scope, $http) {
    $scope.pagetitle = "Flickr UI Application";
    $scope.displayType = "fa fa-th-large";
    $scope.Action = {
        toggleView: function (o) {
            if ($scope.displayType === "fa fa-th-large") {
                $scope.displayType = "fa fa-bars";
            } else {
                $scope.displayType = "fa fa-th-large";
            }
        }
    };
$http.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1")
    .then(function(response) {
        //console.log(response.data)
        $scope.flickrItems=response.data.items;
        $scope.count=response.data.items.length;
        $scope.rows=Math.ceil(response.data.items.length/3);
        $scope.cols=3;
        $scope.imageurl=response.data.items[0].media.m;
        $scope.text=response.data.items[0].title;
    });
})
.directive('photoTemplate', function() {
  return {
    templateUrl: 'photo-template.html'
  };
});


$(document).ready(function () {





});