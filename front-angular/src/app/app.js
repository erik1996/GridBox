import angular from 'angular';
import ngResource from 'angular-resource';
import gridster from 'angular-gridster';
import '@angular/router/angular1/angular_1_router';
import 'angular-gridster/dist/angular-gridster.min.css';
import itemsGrid from '../itemsGrid/itemsGrid';
import itemForm from '../itemForm/itemForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

class AppController {
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'ngComponentRouter',
  ngResource,
  gridster.name,
  itemsGrid,
  itemForm
])
.factory('ItemDataService', ['$resource', function($resource) {
  return $resource('http://localhost\:3000/items/:id',  { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'app')
.component('app', {
  template: require('./app.html'),
  controller: AppController,
  $routeConfig: [
    {path: '/items', name: 'ItemsGrid', component: 'itemsGrid', useAsDefault: true},
    {path: '/items/edit/:id', name: 'ItemFormEdit', component: 'itemForm'},
    {path: '/items/add', name: 'ItemFormAdd', component: 'itemForm'},
  ]
});

export default MODULE_NAME;
