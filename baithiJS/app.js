var app= angular.module("myApp", []);
app.controller("myCtrl", function ($scope){
    console.log("My controller....");

    $scope.users =[
        {name: "Product One", email:"$22.5"},
        {name: "Product Two ", email:"$15.00"},
        {name: "Product Four", email:"$14.11"},
        {name: "Product Five", email:"$24.12"},
    ];

    $scope.addUser = function (){
        $scope.users.push($scope.newUser);
        $scope.newUser ={};
        $scope.message = "New User Added successfully";
    };

    $scope.selectUser = function (user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editUser = function (){
        $scope.message = "User Edited successfully";
    };
    $scope.deleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "User Deleted successfully";
    };
    $scope.clearMessage = function (){
        $scope.message = "";
    };



})