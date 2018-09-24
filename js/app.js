var app = angular.module('miPaginaApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl:'templates/main.html'
	}).when('/info', {
        templateUrl:'templates/info.html'
	}).when('/contacto', {
        templateUrl:'templates/contacto.html'
	}).when('/clientes' ,{
		templateUrl:'templates/clientes.html'
	}).otherwise({redirectTo:'/'})


});