var feed = '';
function jsonFlickrFeed(d) {
    feed = d;
}
//init Angular Code block
var app = angular.module('flickUIApp',[]);
app.controller('flickAppController', function ($scope) {
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
    
    $scope.flickrdata = feed;
    //     var url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json";

    // $http.jsonp(url)
    //     .success(function(data){
    //         alert(1)
    //     }).error(function () {
    //       alert('error')
    //     });

    var s = document.createElement("script");
    s.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
    document.body.appendChild(s);

    // $scope.flickrdata=feed;
    //     $http({
    //         method : "GET",
    //         url : "https://api.flickr.com/services/feeds/photos_public.gne?format=json"
    //     }).then(function success(response) {
    //         $scope.flickrdata = response.data;
    //         $scope.Action.parsedata(response.data);

    //         function myFunc(myObj) {
    //   document.getElementById("demo").innerHTML = myObj.name;
    // }

    //         //formatting jsonp to json 
    //         console.log(JSON.parse($scope.flickrdata.jsonFlickrFeed()))
    //     }, function myError(response) {
    //         $scope.flickrdata = response.statusText;
    //     });


});


$(document).ready(function () {





});